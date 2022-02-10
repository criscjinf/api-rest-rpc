const usersSeeds = [
    {
        id_user: 1,
        name: 'Cristiano Lemos',
        address: [{
            id_address: 1,
            street: 'Rua Nestor Villas Boas',
            number: '131',
            city: {
                id_city: 1853,
                name: 'Igrejinha',
                uri: `http://localhost:6000/cities/1853`
            }
        }]
    },
    {
        id_user: 2,
        name: 'Luan Dickel',
        address: [{
            id_address: 1,
            street: 'Rua To de boa',
            number: '321',
            city:  {
                id_city: 4256,
                name: 'Novo Hamburgo',
                uri: `http://localhost:6000/cities/4256`
            }
        }]
    },
    {
        id_user: 3,
        name: 'Matheus Luz',
        address: [{
            id_address: 1,
            street: 'Rua Parara',
            number: '123',
            city: {
                id_city: 6524,
                name: 'São Leopoldo',
                uri: `http://localhost:6000/cities/6524`
            }
        }]
    }
]

module.exports = usersSeeds