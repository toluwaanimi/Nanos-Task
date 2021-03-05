require('dotenv')
const app = require('express')()
const morgan = require('morgan')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const routes = require('./src/nanos/routes/index')
app.use(morgan('dev'))
app.use(helmet())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/', routes)

const PORT = process.env.PORT || 3000


app.listen(PORT, () => console.log('Server running on PORT ', PORT))

