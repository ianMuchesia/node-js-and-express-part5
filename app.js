require('dotenv').config()
require('express-async-errors')

//extra security packages
const helmet = require('helmet')
const xss = require('xss-clean')
const cors = require('cors')
const rateLimit = require('express-rate-limit')



const express = require('express')

const connectDB = require('./db/connect')

const authenticateUser = require('./middleware/authentication')

const app = express()

const port = process.env.PORT || 3000


const authRoute = require('./routes/auth')
const jobRoute = require('./routes/jobs')
//error handler
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.set('trust proxy', 1)
app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
}))

app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(xss())



//extra packages

//routes
app.use('/api/v1/jobs', authenticateUser,jobRoute)
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