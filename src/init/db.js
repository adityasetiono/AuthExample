import rethinkdbdash from 'rethinkdbdash'
import config from '../../config'

const r = rethinkdbdash(config.rethinkdb)

const initDB = async () => {
    const tableExists = await r.tableList().contains('user').run().then()
    if (!tableExists) {
        await r.tableCreate('user').run().then()
    }
    await initUser()
}

const initUser = async () => {
    const count = await r.table('user').count().run().then()
    if (count < 30) {
        await r.table('user')
        .insert(await r.http('https://api.github.com/users').run().then())
        .run()
        .then()
    }
}

export default initDB
