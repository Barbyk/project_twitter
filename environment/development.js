const path = require('path');

module.exports = {
    dbUrl: process.env.DATABASE,
    cert: path.join(__dirname, '../ssl/local.crt'),
    key: path.join(__dirname, '../ssl/local.key')
}