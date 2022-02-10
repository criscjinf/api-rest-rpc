const users = require('../../classes/users')
const router = require('express').Router()


router.get('/listUsers', (req, res) => {
    res.status(200).send(users.findAll())
})

router.get('/getUser/:id_user', (req, res) => {
    res.status(200).send(users.find(parseInt(req.params.id_user)))
})

router.post('/upsertUser', (req, res) => {
    users.push(req.body)

    res.status(202).send(req.body)
})

module.exports = router