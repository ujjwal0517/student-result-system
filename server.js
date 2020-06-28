const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const DATABASE_URI = "mongodb://localhost/studentdb";
mongoose.connect(DATABASE_URI, {useNewUrlParser:true,
useUnifiedTopology: true,
});
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const db = mongoose.connection;
db.once("open", ()=>console.log("database connected"));

const students = require('./routers/students');
app.use("/", students);




app.listen(PORT, ()=>console.log("app running @" + PORT));