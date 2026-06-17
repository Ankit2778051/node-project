const express= require('express');
const app=express();
const moongose=require('mongoose')
require('dotenv').config();

const dbConnection=moongose.connect('mongodb://localhost:27017/node_crud');
dbConnection.then((d)=>{
    console.log('Connec to Db');
    const Student=moongose.model('student',{email:String});
    const students1=new Student({email:"AnkitRai222@gmail.com"})
    students1.save();
}).catch((err)=>{
    console.log('error',err)
})
app.get('/',(req,res)=>{
  res.send("Hi")
})
let port=3000;
app.listen(port,()=>{
    console.log(`Server is Running On Port ${port}`);
})