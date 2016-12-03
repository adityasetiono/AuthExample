import express from 'express'
import config from '../../config'
import rethinkdbdash from 'rethinkdbdash'
const r = rethinkdbdash(config.rethinkdb)
let router = express.Router()

/* GET users listing. */
router.get('/', (req, res, next) => {
    r.table('user')
        .run()
        .then((result) => res.json(result))
})

export default router
