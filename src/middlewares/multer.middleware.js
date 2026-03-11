import multer from "multer";

// upload ki saari info hume middleware se aa rahi hai
// inorder to upload even single or multiple values we require the middleware 

// Use the diskStorage to solve the storage system

// File ko handle krne ke liye multer hai

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/temp')
    },
    filename: function(req, file, cb){
        console.log(file)
        cb(null, file.originalname)
    }
})

export const upload = multer({storage})

// Yahan se mujhe filename mil jayega aur usse mereko local file mein cheezen store ho jayenge