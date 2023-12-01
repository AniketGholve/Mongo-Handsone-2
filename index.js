const express = require('express');
const { conn, dbCreation } = require('./db');

const app = express();
app.use(express.json())
const userCollection = dbCreation.collection("employee");
app.get("/q1", async (req, res) => {
    const data=await userCollection.find().toArray()
    console.log(data)
    return res.send(data)
})
app.get("/q2",async (req,res)=>{
    const data=await userCollection.find({"salary":{$gt:'30000'}}).toArray()
    console.log(data)
    return res.send(data)
})

app.get("/q3",async (req,res)=>{
    const data=await userCollection.find({"overallExp":{$gt:'2'},"yearGrad":{$gt:'2015'}}).toArray()
    console.log(data)
    return res.send(data)
})

app.get("/q4",async (req,res)=>{
    const data=await userCollection.updateMany({"salary":{$gt:"20000"}},{$set:{"salary":"44000"}})
    console.log(data)
    return res.send(data)
})
app.get("/q5",async (req,res)=>{
    const data=await userCollection.deleteMany({"lastCompany":"Y"})
    console.log(data)
    return res.send(data)
})

app.listen(3000, async () => {
    try {
        await conn();
        console.log("server started")
    } catch (e) {
        console.log(e)
    }
})