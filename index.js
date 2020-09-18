require('dotenv').config()
const express = require('express')
const cors = require('cors')
const hashtagRoutes = require('./routes/hashtag')
const app = express()

app.use(cors());
app.use(express.json())

app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}`))

app.use('/api/hashtags', hashtagRoutes)
