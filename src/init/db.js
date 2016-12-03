import rethinkdbdash from 'rethinkdbdash'
import config from '../../config'

const r = rethinkdbdash(config.rethinkdb)

const initDB = () => {
    r.tableList().contains('user').run().then((tableExists) => {
        if (!tableExists) {
            r.tableCreate('user')
            .run()
            .then((result) => {initUser()})
        } else {
            initUser()
        }
    })
}

const initUser = () => {
    r.table('user')
    .insert(r.http('https://api.github.com/users'))
    .run()
    .then(console.log)
}

export default initDB
