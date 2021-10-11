// const mongodb = require("mongodb")
// const MongoClient = mongodb.MongoClient
// const ObjectId = mongodb.ObjectId
const {MongoClient, ObjectId} = require("mongodb")
// let x = new ObjectId("6163f640dc9ac7c7ecc34135")
dbUrl = "mongodb://127.0.0.1:27017"
dbName = "g11Test"
MongoClient.connect(dbUrl, {}, (error, client)=>{
    if(error) return console.log('db error');
    const myDb = client.db(dbName)
    // myDb.collection('user').insertOne({name:"marwa"})
    // .then(()=> console.log("inserted"))
    // .catch(e=>console.log(e))
    // myDb.collection('user').insertMany([{name:"marwa"}, {name:"omar", age:7}])
    // .then(()=> console.log("inserted"))
    // .catch(e=>console.log(e))
    // myDb.collection('user').find({name:"marwa"}).toArray((err, data)=>{
    //     if(err) return console.log(err)
    //     console.log(data)
    // })
    myDb.collection('user').findOne(
        {_id:new ObjectId("6163f640dc9ac7c7ecc34135")},
        (err, data)=>{
            if(err) return console.log(err)
            console.log(data)
        }
        
        )
})
