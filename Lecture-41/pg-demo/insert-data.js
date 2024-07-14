// create

let getClient = require('./utils');

async function insertUserData(){
    let client = await getClient();
    let userQuery = `INSERT INTO users (email , password) VALUES ($1,$2) RETURNING id;`
    let userValue = ['samy@gmail.com' , '123'];
    let response =  await client.query(userQuery ,userValue);
    console.log(response.rows[0] , '1')
    // console.log(response.rows[0].id , '1')

    let todoQuery = 'INSERT INTO todos (title , description , user_id,done) VALUES ($1,$2,$3,$4);'
    let todoValue = ['gym','life heavy' , response.rows[0].id , false]
    await client.query(todoQuery , todoValue);
    console.log('todo created');
}
insertUserData()







