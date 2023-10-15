const multer = require("multer");
const path = require("path");

function upload(option){

    if(option == "user"){
        const storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, path.join(__dirname, "../public/images/user-avatar"))
            },
            filename: (req, file, cb) => {
                const newFileName = file.originalname;
                cb(null, newFileName)
            }
        });
        
        return upload = multer({ storage });
    }
    if(option == "product"){
        const storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, path.join(__dirname, "../public/images/product-img"))
            },
            filename: (req, file, cb) => {
                const newFileName = file.originalname;
                cb(null, newFileName)
            }
        });
        
        return upload = multer({ storage });
    }
}
module.exports = upload