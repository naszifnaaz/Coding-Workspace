const multer  = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  });

  function fileFilter (req, file, cb) {

    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted
  
    // To reject this file pass `false`, like so:
    if(mimetype != 'image/jpeg' || mimetype != 'image/png')
        cb(null, false)
    else
        cb(null, true)
  }

const options = {
    storage : storage,
    fileFilter : fileFilter
}

const upload = multer(options);

module.exports = upload;
