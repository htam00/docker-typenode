import { Router, Request, Response } from 'express'
import * as ArticlesController from '../contollers/ArticlesController'
import * as AuthenticationController from '../contollers/AuthenticationController'
const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.render('home')
})

router.get("/blog", ArticlesController.allArticle)

router.post("/blog", ArticlesController.addArticle)

router.get('/login', AuthenticationController.login)

router.get('/register', AuthenticationController.register)

export default router 