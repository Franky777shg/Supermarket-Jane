// NOTE import helpers disini
const { generateQuery, asyncQuery } = require('../helpers/queryHelp')

// NOTE import connection (import database nya dulu) untuk sambung ke SQL
const db = require('../database')

module.exports = {
    getAllProd: (req, res) => {
        // NOTE define query SQL
        const queryProd = `select * from products`

        db.query(queryProd, (err, result) => {
            if (err) return res.status(500).send(err)

            // NOTE ini kalau berhasil
            res.status(200).send(result)
        })
    },
    getProdDetail : (req, res) => {
        // NOTE define query 
        const id= +req.params.id

        const queryDetail = `select * from products 
                             where id_products=${db.escape(id)} `

        db.query(queryDetail, (err, result) => {
            if(err) return res.status(500).send(err)

            // NOTE ini kalau berhasil
            res.status(200).send(result)
        })
    }
}