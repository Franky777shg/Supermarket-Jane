// NOTE import module express beserta method Router nya
// NOTE method router dari express, berguna untuk membuat router.
const router = require('express').Router()

// NOTE import product controller yg dibutuhkan
const { carouselController } = require('../controllers')

// NOTE create router nya
// NOTE pakai post bisa semua, mau diganti get, post, put, patch, delete bisa
router.get('/getCarousel', carouselController.getCarousel1)

// NOTE export router
module.exports = router