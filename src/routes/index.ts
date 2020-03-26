import { Router, Request, Response } from 'express'
import { Article } from '../models/Article'
import { MongooseDocument } from 'mongoose'

const router = Router()

router.get('/', (req, res) => {
    res.render('home')
})

router.get('/blog', (req: Request, res: Response) => {
    Article.find({}, (err: Error, articles: MongooseDocument) => {
        if(err)
            // tslint:disable-next-line:no-console
            console.log(err)
        // tslint:disable-next-line:no-console
        console.log(articles)
    })
    res.render('blog')
})

router.post('/blog', (req: Request, res: Response, next) => {
    const title = req.body.title
    const description = req.body.description
    const article = new Article({
        title,
        description
    })

    // tslint:disable-next-line:no-shadowed-variable
    article.save((err: Error, article: MongooseDocument) => {
        // tslint:disable-next-line:no-console
        !err ? console.log(article) : console.log(err)
    })
})

export default router