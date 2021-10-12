const mongodb = require('mongodb')

// Inalize conncection 
// CRUD Operations
const mongoClient = mongodb.MongoClient;

// Connection url

const connectionUrl = 'mongodb://127.0.0.1:27017'

const dbName = 'task-manger'

// useNewUrlParser --> better connection
mongoClient.connect(connectionUrl,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log('Error has occurred')
    }
    console.log('Success')

    const db = client.db(dbName)

    ////////////////////////////////////////////////////////////////////////////////
    // Insert one --> insert one document

    // db.collection('users').insertOne({
    //     name:'ADAM',
    //     age:28
    // })

    // db.collection('tasks').insertOne({
    //     description:'Task1',
    //     completed:false
    // })

    ///////////////////////////////////////////////////////////////////////////

    // insertMany --> Insert many documents

    // db.collection('users').insertMany([
    //     {name:'Zain',age:20},
    //     {name:'Salma',age:20},
    //     {name:'Osama',age:20}
    // ],(error,result)=>{
    //     if(error){
    //         return console.log('Error has occurred')
    //     }
    //     console.log(result.insertedCount)
    // })

    ///////////////////////////////////////////////////////////////////////////////

    // new day

    const ObjectID = mongodb.ObjectId

    const _id = new ObjectID()
     console.log(_id)

    db.collection('users').insertOne({
        _id:_id,
        name:'Omar',
        age:30

    })

    ///////////////////////////////////////////////////////////////////////////////////

    // get data
    // find one --> one document that matches filter
    // db.collection('users').findOne({age:20},(error,user)=>{
    //     if(error){
    //         return console.log('Error has occurred')
    //     }
    //     console.log(user)
    // })

    // findone --> id
    // db.collection('users').findOne({_id:new ObjectID("6163e5fa5da0dd8212908b66")},(error,user)=>{
    //     if(error){
    //         return console.log('Error has occureed')
    //     }
    //     console.log(user)
    // })

    ////////////////////////////////////////////////////////////////////////////////

    // db.collection('users').find({age:20}).count((error,users)=>{
    //     if(error){
    //         return console.log(error)
    //     }
    //     console.log(users)
    // })

    // db.collection('users').find({age:20}).limit(2).toArray((error,users)=>{
    //     if(error){
    //         return console.log(error)
    //     }
    //     console.log(users)
    // })

    ////////////////////////////////////////////////////////////////////////////////

    // Update

    // db.collection('users').updateOne({_id:new ObjectID('6163e5fa5da0dd8212908b64')},{
    //     $set:{name:'Omar',age:70},
    //     // $inc:{age:5}
    // }).then((result)=>{
    //     console.log(result)
    //     // modifiedCount --> no. of documents that has been updated
    //     console.log(result.modifiedCount)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    ///////////////////////////////////////////////////////////////////////////////

    // Delete

    db.collection('users').deleteOne({_id:new ObjectID('6163e5fa5da0dd8212908b64')}).
    then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })

    db.collection('users').deleteMany({}).
    then((result)=>{
        console.log(result.deletedCount)
    }).catch((error)=>{
        console.log(error)
    })

})