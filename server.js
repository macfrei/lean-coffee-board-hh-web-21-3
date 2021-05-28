const express = require('express')

const app = express()
const port = 4000

app.use('/', express.json())
app.use('/api/users', require('./routes/users'))
app.use(require('./routes/error'))

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
