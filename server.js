const express = require('express')
const mongoose = require('mongoose')

mongoose
  .connect('mongodb://localhost:27017/lean-coffee-board', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB (lean-coffee-board)'))
  .catch(console.error)

const app = express()
const port = 4000

app.use('/', express.json())
app.use('/api/users', require('./routes/users'))
app.use('/api/cards', require('./routes/cards'))
app.use(require('./routes/error'))

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
