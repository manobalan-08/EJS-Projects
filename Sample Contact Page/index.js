import express from "express";
import bodyParser from "body-parser";

const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res) =>{
   res.render("index.ejs",{
     username:null,
     useremail:null,
     passkey:null
   })

});


app.post("/submit",(req,res) =>{
   const username=req.body["username"];
   const useremail=req.body["useremail"];
   const passkey=req.body["passkey"];

   res.render("datas.ejs",{
    username:username,
    useremail:useremail,
    passkey:passkey
   })


})


app.listen(port,() =>{
    console.log(`Server is running in ${port}`);
})