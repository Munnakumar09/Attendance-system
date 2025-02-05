import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import express from 'express'
const app = (express())
const port = process.env.PORT || 3000
import connectToDb from './db/db.js'
connectToDb()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get('/', (req, res) =>{
    res.send('hello world')
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})