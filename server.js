const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 7008;
const host = process.env.BASE_URL || "http://localhost:7008";

 const Task = require("./routes/Task");
const mongoose = require("mongoose");
mongoose.connect(" mongodb://127.0.0.1:27017/dbmeans",{useNewUrlParser:true},
err=>{
    if(err)throw err.message;
    console.log("Connected Successfully from Server.js file");
},
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.use('/',express.static(path.join(__dirname,"public")));

 app.use("/api/task",Task);

app.listen(port,()=>console.log(`Listening at${host}`));