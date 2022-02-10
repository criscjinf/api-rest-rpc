const users_route = require('./partials/users_route')
const address_route = require('./partials/address_route')
const cities_route = require('./partials/cities_route')
const rpc_route = require('./partials/rpc_routes')
const routes = require('express').Router()

const { next } = require('sucrase/dist/parser/tokenizer')

routes.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


routes.use('/users', users_route)
routes.use('/users/:id_user/address', address_route)
routes.use('/cities', cities_route)
routes.use('/rpc', users_route)

module.exports = routes