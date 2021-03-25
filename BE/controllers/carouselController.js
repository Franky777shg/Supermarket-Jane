// NOTE import helpers disini
const { generateQuery, asyncQuery } = require('../helpers/queryHelp')

// NOTE import connection (import database nya dulu) untuk sambung ke SQL
const db = require('../database')

module.exports = {
    getCarousel1: (req, res) => {
        // NOTE define query SQL
        const queryCarousel = `select * from slider`

        db.query(queryCarousel, (err, result) => {
            if (err) return res.status(500).send(err)

            // NOTE ini kalau berhasil
            res.status(200).send(result)
        })
    }
}