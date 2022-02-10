const userAddress = require('../../classes/user-address')
const users = require('../../classes/users')

const ExtractParams = require('../../lib/extract-params')

const router = require('express').Router()

router.get('/', (req, res) => {
    const params = ExtractParams.extractNumberParams(req.originalUrl)

    res.status(200).send(userAddress.findAll(params))
})

router.get('/:id_address', (req, res) => {
    const params = ExtractParams.extractNumberParams(req.originalUrl)
    
    res.status(200).send(userAddress.findOne(params, req.params.id_address))
})

router.post('/', (req, res) => {
    const params = ExtractParams.extractNumberParams(req.originalUrl)
    userAddress.push(req.body, params)
    res.status(202).send(req.body)
})

module.exports = router