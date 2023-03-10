require('dotenv').config()
const express = require("express");
const app = express();
const port =process.env.PORT|| 8080;
const mongoose = require('mongoose');
const mongourl=process.env.DATABASE
//decalre routers 
const participantRouter=require("./router/participantRouter");
const partyRouter=require("./router/partyRouter");
///////////////database connection////////////
mongoose.connect(mongourl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log(" Database connected"));

/////////////////////////view engine and body parsers//////
app.set('view engine', 'ejs');
app.set('views','./views')
app.use(express.static('public'))

app.get("/", function (req,res) {
    res.render("index");
  });
app.get("/team",function (req,res)
{
  res.render('team')
})
app.get("/contact",function(req,res)
{
  res.render('contact')
})
// here we use our routers 
app.use("/",participantRouter)  ;
app.use("/",partyRouter);
 
//////////////////////////////////////
app.listen(port, () => {
    console.log(`Event app listening at http://localhost:${port}`);
  });