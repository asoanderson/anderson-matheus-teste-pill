const request = require('request')
const { chunk } = require('../utils')

exports.getMatches = (req, res) => {
    const options = {
        'method': 'GET',
        'url': `${process.env.API_URL}/competitions/2013/matches`,
        'headers': {
            'X-Auth-Token': process.env.TOKEN
        }
    }
    request(options, function (error, response) {
        if (error) throw new Error(error)
        const body = JSON.parse(response.body)
        const matches  = body.matches
        const matchdays = chunk(matches, 10)
        res.json(matchdays[4])
    })
}