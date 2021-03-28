// NOTE import routernya disini

const userRouter = require('./userRouter')
const profileRouter = require('./profileRouter')
const prodRouter = require('./prodRouter')
const carouselRouter = require('./carouselRouter')
// const detailRouter = require('./detailRouter')

module.exports = {
    userRouter,
    profileRouter,
    prodRouter,
    carouselRouter
    // detailRouter
}