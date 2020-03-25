import * as path from 'path'
import * as express from 'express'
import IndexRouter from './routes/index'
import ApiRouter from './routes/api'

class App {
    public express: any

    constructor() {
        this.express = express()
        this.mountRouter()
        this.mountMiddleware()
    }

    private mountMiddleware(): void {
        this.express.set( "views", path.join( __dirname, "views" ) )
        this.express.set( "view engine", "ejs" )
    }

    private mountRouter(): void {
        this.express.use('/', IndexRouter)
        this.express.use('/api', ApiRouter)
    }

}

export default new App().express
