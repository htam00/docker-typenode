import * as dotenv from 'dotenv'
import * as path from 'path'
import * as express from 'express'
import * as mongoose from 'mongoose'
import { urlencoded, json } from 'body-parser'
import IndexRouter from './routes/index'
import ApiRouter from './routes/api'

dotenv.config()

class App {
    public express: any
    public uri: string

    constructor() {
        this.express = express()
        this.uri = process.env.MONGO_URI
        this.mountRouter()

        this._setConfigMiddleware()
        this._setMongoConfig()
    }

    private _setMongoConfig(): void {

        mongoose.connect(this.uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

    }

    private _setConfigMiddleware(): void {
        this.express.set( "views", path.join( __dirname, "views" ) )
        this.express.set( "view engine", "ejs" )
        this.express.use( urlencoded({ extended: true }) )
        this.express.use( json() )
    }

    private mountRouter(): void {
        this.express.use('/', IndexRouter)
        this.express.use('/api', ApiRouter)
    }

}

export default new App().express
