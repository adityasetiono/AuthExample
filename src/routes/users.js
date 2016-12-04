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

router.get('/:id', (req, res, next) => {
    r.table('user')
    .get(+req.params.id)
    .run()
    .then((result) => res.json(result))
})

router.post('/', (req, res, next) => {
    r.table('user')
    .insert(req.body)
    .run()
    .then((result) => res.json(result))
})

router.put('/:id', (req, res, next) => {
    r.table('user')
    .get(+req.params.id)
    .update(req.body, {returnChanges: true})
    .run()
    .then((result) => res.json(result))
})

router.delete('/:id', (req, res, next) => {
    r.table('user')
    .get(+req.params.id)
    .delete()
    .run()
    .then((result) => res.json(result))
})

export default router
