import express from "express"

 const app = express();

 const posts = [{
      id: 5,
      author: "Aashutosh KC",
      text: "my first text",
      likes: 0,
      comments: []
    }]

 app.get("/posts",(req,res)=>{
    res.json(posts);
 })
 
 app.listen("3000",()=>{
    console.log("Runs at port 3000")
 }
 )