import ArticleModel from '../models/Article'
import { Request, Response, NextFunction } from 'express'

export const allArticle = (req: Request, res: Response) => {
    const articles = ArticleModel.find({}, (err: any, articles: any) => {
        if(err) {
            console.log( err )
        } else {
            res.json( articles )
        }
    })
}

export const addArticle = (req: Request, res: Response, next: NextFunction) => {
    const setTitleBody = req.body.title
    const setDescriptionBody = req.body.description
    const article = new ArticleModel({
        title: setTitleBody,
        description: setDescriptionBody
    })
    article.save((err: any, article: any) => {
        if(err) {
            console.log(err)
        } else {
            console.log(article)
        }
    })
    res.end()
}

export const updateArticle = (req: Request, res: Response) => {
    
}

