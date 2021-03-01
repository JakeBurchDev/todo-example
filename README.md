# todo-example
 ToDo app created to provide code sample.
 
## Overview
This app is build with MySQL, Express, Angular, and Node. It allows a user to enter ToDo items, mark them as complete, and delete them.

## Setup
Complete the following to run the application:
1. Create a new MySQL database with the name 'todo'
2. Run npm install from the root directory
3. Create a file in the root directory called 'mysql-credentials.js' and add the following:
```
module.exports = {
    database: 'todo',
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
};
```
4. Run node server.js
5. Open a separate terminal, navigate to the todo folder and run npm install, then ng serve
6. Wait for the app to build, then enjoy!
