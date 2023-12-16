/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs')
const path = require('path');
const filePath = path.join(__dirname,'todoFile.txt')
let todos = []
const app = express();
app.use(bodyParser.json());

function generateRandomId() {
  const randomId = Math.floor(Math.random() * 9000000000) + 1000000000;
  return randomId.toString();
}


fs.readFile(filePath,'utf8',(err,fileContent)=>{
  if (err)return 
  todos = JSON.parse(`[${fileContent}]`);
})

app.get('/todos',(req,res)=>{
  fs.readFile(filePath,'utf8',(err,fileContent)=>{
    if (err){
      res.send('couldnt fetched')
      return
    }
    const todos = JSON.parse(`[${fileContent}]`);
    console.log(todos)
    res.send("feteched all")
  })
  
})

app.post('/todos',(req,res)=>{
  const task = {};
  const id  = generateRandomId()
  const {title,description} = req.body
  task["id"] = id
  task["title"] = title
  task["description"]= description
  let comma = ''
  if (todos.length>0)comma=','
  todos.push(task)
  ans  =  comma +JSON.stringify(task);
  fs.appendFile(filePath,ans,(error)=>{
    if (error) {
      console.log('error while appending',error)
      return 
    }
    console.log('done appending new tasks')
    return 
  })
  res.send("<h1>NEW TASK HAS BEEN ADDED")

})


app.listen(3000,()=>{
  console.log('listenening')
})


module.exports = app;


  
// module.exports = app;