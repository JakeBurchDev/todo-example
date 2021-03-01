const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const mySQLCredentials = require('./mysql-credentials');
const { database, username, password } = mySQLCredentials;
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize(database, username, password, {
    host: 'localhost',
    dialect: 'mysql'
});

class ToDo extends Model {}
ToDo.init({
    id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    text: DataTypes.STRING
}, { sequelize, modelName: 'todo' });

app.use(bodyParser.json());
app.use(cors());

// create todo
app.route('/api/todo').post((req, res) => {
    var newToDo = new ToDo({ text: req.body.text });
    newToDo.save().then(() => res.send({ success: 'true' }));
});

// get all todos
app.route('/api/todo').get((req, res) => {
    ToDo.findAll().then(toDos => res.send(toDos));
});

// get todo with id
app.route('/api/todo/:id').get((req, res) => {
    ToDo.findByPk(req.params.id).then(toDo => res.send(toDo));
});

// update todo with id
app.route('/api/todo').put((req, res) => {
    const { id, text } = req.body; 
    const selectedToDo = ToDo.findByPk(id);
    selectedToDo.text = text;
    ToDo.update(selectedToDo, { where: { id } }).then(() => res.send({ success: 'true' }));
});

// delete todo with id
app.route('/api/todo/:id').delete((req, res) => {
     ToDo.destroy({ where: { id: req.params.id } }).then(() => res.send({ success: 'true' }));
});

sequelize.sync().then(() => {
    app.listen(8080, () => console.log('server running at http://localhost:8080'));
});