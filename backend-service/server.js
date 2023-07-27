const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const News = require('./news')
const Publications = require('./publications')

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect("mongodb://localhost:27017/mms", {
    useNewUrlParser: "true",
})

app.get('/', (req, res) => {
    return res.send('backend')
})

app.post('/admin/news', async (req, res) => {

    const { title, text } = req.body

    if (!title || !text) {
        return res.json({status: 'error'})
    }

    await News.create({ title, text, created_at: new Date().getTime() })

    return res.json({stauts: 'ok'})

})

app.post('/admin/publications', async (req, res) => {

    const { title, type, firstText, secondText, thirdText } = req.body

    if (!title || !type) {
        return res.json({status: 'error'})
    }

    await Publications.create({ title, type, firstText, secondText, thirdText, created_at: new Date().getTime() })

    return res.json({status: 'ok'})

})

app.get('/news', async (req, res) => {

    const news = await News.find().lean()

    return res.json({status: 'ok', news})
})

app.get('/publications', async (req, res) => {

    const publications = await News.find().lean()

    return res.json({status: 'ok', publications})
})

app.post('/login', (req, res) => {
    const { username, password } = req.body

    if (!username || typeof username !== 'string' || !password || typeof password !== 'string') {
        return res.json({status: 'error'})
    }
    if (username == 'admin' && password == 'password') {
        return res.json({status: 'ok',})
    }

    return res.json({status: 'error'})

})

app.listen(5000, () => console.log('started on 5k'))