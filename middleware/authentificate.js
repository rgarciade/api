const Constants = require('../constants');
const ensureAuth = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status('403').send({ 'status': 'ko', message: 'The request does not have the authentication header' })
    }
    if (req.headers.authorization == Constants.token.key) {
        next();
    } else {
        return res.status('403').send({ 'status': 'ko', message: 'The request does not have correct authentication header' })
    }
}
module.exports = { ensureAuth }