const path = require('path')
const rootPath = __dirname

const env = process.env.NODE_ENV

const dbhost = process.env.DB_HOST || 'localhost'

let databaseUrl = `mongodb://${dbhost}/shop`
let port = 8000

if (env === 'test') {
    databaseUrl = 'mongodb://localhost/notes_test'
    port = 8010
}


module.exports = {
    rootPath,
    port,
    uploadPath: path.join(rootPath, 'public/uploads'),
    db: {
        url: databaseUrl,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        },
    },
    facebook: {
        appId: process.env.FACEBOOK_APP_ID,
        appSecret: process.env.FACEBOOK_SECRET_KEY
    },

};