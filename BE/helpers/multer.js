// NOTE import multer
const multer= require('multer')

// NOTE import path
const path= require('path')

module.exports= {
    upload: () => {
        // NOTE disini kita set up multer
        var storage = multer.diskStorage({
            destination: path.join(path.resolve('public'), 'images'),

            filename: (req, file, cb) => {
              cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
              // NOTE bayangan rename file IMG-123456.jpg
            }
          })
          return multer ({ storage: storage }).single('IMG')
    }
}