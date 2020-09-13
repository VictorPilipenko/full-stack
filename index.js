const express = require('express')
const hashtagRoutes = require('./routes/hashtag');
const port = 5000

const app = express()
app.use(express.json())

app.listen(port, () => {
  console.log(`app is listening on ${port}`)
})

app.use('/api/hashtags', hashtagRoutes);