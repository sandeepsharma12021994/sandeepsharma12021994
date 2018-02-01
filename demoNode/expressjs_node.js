const express =require('express')
const app=express()
const body=require("body-parser")
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

app.use(body.json())
app.use(body.urlencoded({extended : true}))

app.use(express.static(__dirname+"/views"))

app.post('/lime',(req,res)=>(res.send(
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  const dbo = db.db("mydb");
  const myobj = { firstname:req.body.firstname,lastname:req.body.lastname};
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
})) 
))
app.get("/",function(req,res){res.end();}).listen(3000,()=>console.log('Server starts with port no 3000'))