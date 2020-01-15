const path = require('path');

module.exports = {
    dbUrl: process.env.DATABASE,
    cert: path.join(__dirname, ''),
    key: path.join(__dirname, '')
}