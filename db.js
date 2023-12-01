const {MongoClient} =require('mongodb')
const url="mongodb://127.0.0.1/27017";
const mongoServer=new MongoClient(url);
const conn=async ()=>{
    try{
        await mongoServer.connect()
    }catch(e){
        console.log(e)
    }
}
const dbCreation=mongoServer.db("Handsone")
module.exports={conn,dbCreation}