const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use('/books',router);

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/bookStore")
.then(()=>console.log("Database Connected Successfully"))
.then(()=>{app.listen(5000)})
.catch((err)=>{
    console.log("Error in connecting database "+err);
})