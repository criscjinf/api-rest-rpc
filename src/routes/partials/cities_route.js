const citiesSeeds = require('../../seeds/cities-seeds')
const router = require('express').Router()


router.get('/', (req, res) => {
    res.status(200).send(citiesSeeds)
})

router.get('/:id_city', (req, res) => {
    res.status(200).send(citiesSeeds.find((city) => city.id_city === parseInt(req.params.id_city)))
})

router.post('/', (req, res) => {
    const city = req.body
    city.id_city = citiesSeeds.reduce((id_city, cityData) => id_city = !id_city || cityData.id_city > id_city ? cityData.id_city : id_city) +1
    city.uri = `http://localhost:6000/cities/${city.id_city}`
    citiesSeeds.push(city)

    res.status(202).send(city)
})

module.exports = router