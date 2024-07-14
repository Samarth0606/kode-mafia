// create

let getClient = require('./utils');

async function createTableUsers(){
    let createUserTable = 'CREATE TABLE users (id SERIAL PRIMARY KEY , email VARCHAR(255) UNIQUE NOT NULL , password VARCHAR(255) NOT NULL);'
    let client = await getClient();
    await client.query(createUserTable);
    console.log("table user-1 created")
}
createTableUsers()

async function createTableTodos(){
    let createTodoTable = `CREATE TABLE todos (
        id SERIAL PRIMARY KEY, 
        title VARCHAR(50) NOT NULL , 
        description TEXT NOT NULL , 
        user_id INTEGER REFERENCES users(id) ,
        done BOOLEAN DEFAULT FALSE );`

    let client = await getClient();
    await client.query(createTodoTable);
    console.log("table todo-1 created")
}
// createTableTodos()





