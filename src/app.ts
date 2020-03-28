import * as dotenv from 'dotenv'
import * as path from 'path'
import * as express from 'express'
import { Application } from 'express' 
import * as mongoose from 'mongoose'
import * as bodyParser from 'body-parser'

// Configure
import { setMongoConfig } from './config/db'

// Routes
import IndexRouter from './routes/index'
import ApiRouter from './routes/api'

const app: Application = express()

dotenv.config()
setMongoConfig(mongoose)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', IndexRouter)
app.use('/api', ApiRouter)

export default app 