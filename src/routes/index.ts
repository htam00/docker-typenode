import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.render('home')
})

router.get('/blog', (req, res) => {
    res.render('blog')
})

export default router