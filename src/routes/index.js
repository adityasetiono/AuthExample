import express from 'express'
let router = express.Router()

router.get('/', (req, res, next) => {
    res.json({message:'This is index page'})
})

export default router
