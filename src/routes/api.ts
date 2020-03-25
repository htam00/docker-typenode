import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.send("Welcome Api do Docker-node")
})

router.get('/force', (req, res) => {
    res.send('')
})

export default router