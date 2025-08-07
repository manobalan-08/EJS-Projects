import express from "express";
import bodyParser from "body-parser";


const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended:true}));


let activities=[];

app.get("/", (req, res) => {
  res.render("index.ejs", {
    headingContent: "<h1>Your Journey Here:</h1>",
    activities: activities
  });
});

app.post("/submit", (req, res) => {
  const newActivity = req.body["Blog-content"];
  if (newActivity.trim() !== "") {
    activities.push(newActivity);
  }
  res.redirect("/");
});

app.listen(port,() =>{
  console.log(`Server is running on ${port}`);
});