import express from "express";
import bodyParser from "body-parser";

const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended:true}));


app.get("/",(req,res) =>{
   res.render("index.ejs",{
      city: null,
    temp: null,
    humid: null
   });
});

app.post("/submit",(req,res) =>{
   const city = req.body["city"];
  const temp = req.body["temp"];
  const humid = req.body["humid"];

   res.render("index.ejs",{
    city:city,
    temp:temp,
    humid:humid
   })
});




app.listen(port,() =>{
   console.log(`Server is running on ${port}`);
});