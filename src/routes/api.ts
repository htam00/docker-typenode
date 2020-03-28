import { Router, Request, Response } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.send("Welcome Api do Docker-node")
})

router.get('/force', (req, res) => {
    res.send('')
})

router.get('/message', (req, res) => {
    res.json({ message: 'Hello World'})
})

export default router