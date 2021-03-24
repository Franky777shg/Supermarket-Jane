// NOTE import module express beserta method Router nya
// NOTE method router dari express, berguna untuk membuat router.
const router= require('express').Router()

// // NOTE krn pake express validator, dia middleware jd harus di import juga dissini
// const { body, validationResult }= require('express-validator')

// NOTE import controller yg dibutuhkan
const {profileController}= require('../controllers')

// NOTE import helper multer
const { upload }= require('../helpers/multer')
// NOTE si action upload nya kan function jd harus diubah dulu
const uploader= upload()

// //NOTE import helpers
// const { verifyToken }= require('../helpers/jwt')

router.patch('/edit/:id', profileController.editProfile)
router.post('/upload/:id', uploader, profileController.uploadFile)

module.exports= router