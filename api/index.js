import express from 'express'
import mongoose from 'mongoose'
mongoose.connect("mongodb+srv://anuanil:lovecoding@cluster0.4j8yin6.mongodb.net/redux-web-app?retryWrites=true&w=majority")

const app = express();

app.listen(3000, () => {
    console.log('Server listening on port 3000...')
})