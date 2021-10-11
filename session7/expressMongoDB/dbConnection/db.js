const {MongoClient} = require("mongodb")
const dbConnection = (cb) =>{
    MongoClient.connect(process.env.DBURL, {}, (error, client)=>{
        if(error) return cb("error in db", false)
        const db = client.db(process.env.DBNAME)
        cb(false, db)
    })
}

module.exports = dbConnection