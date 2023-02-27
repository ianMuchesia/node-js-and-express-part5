require('dotenv').config()
require('express-async-errors')
const express = require('express')

const connectDB = require('./db/connect')

const authenticationUser = require('./middleware/authentication')

const app = express()

const port = process.env.PORT || 3000


const authRoute = require('./routes/auth')
const jobRoute = require('./routes/jobs')
//error handler
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')


app.use(express.json())

//extra packages

//routes
app.use('/api/v1/jobs', authenticationUser,jobRoute)
app.use('/api/v1/auth',authRoute)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);



const start = async()=>{
    try {
        connectDB(process.env.MONGO_URI)
        console.log('yess')
        app.listen(port, ()=>{
            console.log(`server is listening at port ${port}`)
        })
    } catch (error) {
        console.log(error)
        
    }
}

start()