const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors=require("cors")

app.use(express.json());
app.use(cors())

mongoose.connect("mongodb://localhost:27017/myfirstdb", (err) => {
  if (!err) {
    console.log("db connected");
  } else {
    console.log("db error");
  }
});

const newSchema = mongoose.Schema({
  name: String,
  age: Number,
});

const newModel = new mongoose.model("mycollect", newSchema);

const getData = async () => {
  const data = await newModel.find({});
  return data;
};

app.get("/", async (req, res) => {
  let sonuc = await getData();
  res.send(sonuc);
});


app.post("/setdata",async (req,res)=>{

    await newModel.insertMany([{
         name : "leooo",
         age: 35
    }])
})




app.listen(3000, () => {
  console.log("server is running");
});
