const express =require('express')

const routes = express.Router();

routes.get('/loginpage',(req,res)=>{
    res.send(`<body><h2>enter your name<h2>
    <form onSubmit="localStorage.setItem('username',document.getElementById('username').value)"
    action="/loginpage" method="POST"><input type="text" id="username" name="title"><button type="submit">login</button>
    </form></body>`) 
})
routes.post('/loginpage',(req,res)=>{
   console.log(req.body)
    res.redirect('/')
})
module.exports =routes