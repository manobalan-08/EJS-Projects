import express from "express";
import bodyParser from "body-parser";


const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended:true}));

let animals=["Lion","Horse","Tiger","Jaguar"];

app.get("/",(req,res) =>{
    res.render("index.ejs",{
      favouriteAnimals:animals,
      headingContent:"<h1>EJS-Favourite Animals</h1>"
    });
});


app.listen(port ,() =>{
    console.log(`Server is running in ${port}`);
})