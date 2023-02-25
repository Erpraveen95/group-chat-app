const express = require('express');

const parser=require('body-parser');
const fs=require("fs");

const chat=express();
 chat.use(parser.urlencoded());
 
chat.get('/login',(req,res,next)=>{
    //es.send('<h1>enter your name</h1>');
    res.send(`<body><h2>enter your name</h2>
    <form onsubmit="localStorage.setItem('username',document.getElementById('username')
    .value)"action="/login" method="POST"> <input id="username" type="text" name="title"> 
    <button type="submit">SEND</button></form></body>`);
});
chat.post('/login',(req,res)=>{
    //console.log(req.body);
    res.redirect('/');
});
chat.get('/',(req,res,next)=>{
    fs.readFile('fsss.txt',(err,data)=>{
     if(err)
     {
        console.log(err)
        data=' no chat exist'
     }
     res.send(`${data}
     <form  action="/" method="POST" onsubmit="document.getElementById('username')
     .value=localStorage.getItem('username')"> 
     
     <input id="username" type="hidden" name="username"> 
     <input id="message" type="text" name="message" placeholder="message">
     
     <button type="submit">SEND</button></form>`);
    })
  
    
});
chat.post('/',(req,res)=>{
    //console.log(req.body.username);
  //console.log(req.body.message);
  
  fs.writeFile("fsss.txt",`${req.body.username}:${req.body.message}`,{flag:'a'},(err)=>
    err ? console.log(err):res.redirect("/")
  );
});


chat.listen(3000);