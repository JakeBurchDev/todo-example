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

app.use(bodyParser.json());
app.use(cors());

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

// create todo
app.route('/api/todo').post((req, res) => {});

// get all todos
app.route('/api/todo').get((req, res) => {});

// get todo with id
app.route('/api/todo/:id').get((req, res) => {});

// update todo with id
app.route('/api/todo/:id').put((req, res) => {});

// delete todo with id
app.route('/api/todo/:id').delete((req, res) => {});

sequelize.sync().then(() => {
    app.listen(8080, () => console.log('server running at http://localhost:8080'));
});