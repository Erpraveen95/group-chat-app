
const express = require('express')
const fs = require('fs')

const routes = express.Router()

routes.get('/',(req,res)=>{
   fs.readFile('username.txt',(err,data)=>{
      if(err){
         console.log(err)
         data='No Chat History'
      }
      res.send(`${data}<form onSubmit="document.getElementById('username').value = localStorage.getItem('username')"
       action="/" method="POST"><input id="username" type="hidden" name="username"><input type="text" id="message" name="message"> 
       <br><button type="submit">send</button></form>`)  
   })
})
routes.post('/',(req,res)=>{
    console.log(req.body.username)
    console.log(req.body.message)
    fs.writeFile("username.txt",`${req.body.username} : ${req.body.message}`,{flag: 'a'},(err) =>{
       err ? console.log(err) : res.redirect('/')
    })
})
module.exports =routes
