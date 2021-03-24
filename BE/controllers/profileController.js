const { asyncQuery, generateQuery }= require('../helpers/queryHelp')

module.exports = {
    editProfile: async(req, res) => {
        const id= parseInt(req.params.id)
        const {gender, kota, umur} = req.body
        // console.log(req.body)

        const editQuery= `update profile set${generateQuery(req.body)} where id_users=${id}`

        // console.log('editquery', editQuery)

        try {
            const result= await asyncQuery(editQuery)

            res.status(200).send(result)
        }
        catch(err) {
            console.log(err)
            res.status(400).send(err)
        }
        // res.status(200).send('test edit profile')
    },

    uploadFile: async(req, res) => {
        const id= parseInt(req.params.id)

        // console.log('req file', req.file)

        if(!req.file) return res.status(400).send('NO IMAGE')

        try{
            const updatePic= `update profile set profilepic = 'images/${req.file.filename}'
                            where id_users= ${id}`

            const result= asyncQuery(updatePic)

            res.status(200).send(result)
        }
        catch(err) {
            console.log(err)
            res.status(400).send(err)
        }
    }
}