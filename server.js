require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3500
require('express-async-errors')
const cors = require('cors')
const connectDB = require('./config/Db.conn')
const cookieparser = require('cookie-parser')
const mongoose = require('mongoose')
const { logger, logEvents } = require('./Middleware/LogEvents')
//import from local files
const CorsOption = require('./config/CorsOption')
//custom middleware
app.use(logger)
//Built in middlewares
app.use(cors(CorsOption))

//database connection
connectDB(process.env.DATABASE_CREDENTIALS)
//third party middlewares
app.use(cookieparser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'Public')))

//ROUTES
app.use('/', require('./routes/root'))
app.use('/auth', require('./routes/Auth'))
app.use('/users', require('./routes/User'))
app.use('/register', require('./routes/StudentRoute'))
app.use('/Fees', require('./routes/Fees'))

app.all('*', (req, res) => {
  res.status(404)
  if (req.accepts('html')) {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
  } else if (req.accepts('txt')) {
    res.status(404).send('404 not found')
  } else if (req.accepts('json')) {
    res.status(404).send('404 not found')
  } else {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
  }
})

mongoose.connection.once('open', () => {
  try {
    console.log('connected to the db')
  } catch (err) {
    console.log(err)
  }
})

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
mongoose.connection.on('error', (err) => {
  // logEvents(
  //   `${err.code}\t${err.no}\t${err.syscall}${err.hostname}`,
  //   'errlog.log'
  // )
  console.log(err)
})
