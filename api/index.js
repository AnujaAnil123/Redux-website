import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoute.js'
import authRoutes from './routes/authRoute.js'
import adminRoutes from './routes/adminRoute.js'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import path from 'path'
dotenv.config()
mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connected to MongoDB')
})
.catch((err)=>{
    console.log(err)
})

const __dirname = path.resolve()

const app = express();
app.use(logger("dev"))
app.use(express.static(path.join(__dirname,'/reduxapp/dist')))

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname, 'reduxApp','dist','index.html'))
})

app.use(express.json())

app.use(cookieParser())

app.listen(3000, () => {
    console.log('Server listening on port 3000')

})

app.use('/api/user',userRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/admin',adminRoutes)


app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error'
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    })
})