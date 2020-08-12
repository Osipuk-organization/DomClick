const multer = require('multer')
const { v4 } = require('uuid')

const ALLOWED_MIME_TYPES = require('./constants');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        switch (file.fieldname) {
            case 'documents':
                cb(null, 'uploads/documents')
                break;
            case 'foto':
                cb(null, 'uploads/foto')
                break;
            case 'video':
                cb(null, 'uploads/video')
                break;
            default:
                cb(null, 'uploads/')
        }
    },
    filename: (req, file, cb) => {
        let filename = ''
        switch (file.fieldname) {
            case 'documents':
                filename = file.originalname
                break;
            default:
                const ext = ALLOWED_MIME_TYPES[file.mimetype]
                filename = `${v4()}.${ext}`
        }
        cb(null, filename)
    },
    onError : function(err, next) {
        console.log('error', err);
        next(err);
    }
})


module.exports = storage;

