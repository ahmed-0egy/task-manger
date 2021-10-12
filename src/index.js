const express = require('express')
const userRouter = require('./routers/user')
const app = express()
const port = 3000

// Parse automatic 
app.use(express.json())
// connection
require('./db/mongoose')

// 
app.use(userRouter)


// app.get('/',(req,res)=>{
//     res.send('Tessst')
// })
app.listen(port,()=>{console.log('Server is running')})