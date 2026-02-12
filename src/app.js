import express from express
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public")) // this static will create a public folder , can used by the public
app.use(cookieParser())

export {app}

// we mostly use middleware thrgh app.use()
// app.use() mostly used for configuration and middleware

// MIDDLEWARE :
// Ek url aaya usko handle krke chhod diye , lkn aab tumko yeh check krna hai 
// ki tum usse handle krne ke capable hai ya nhi , by some internal checks

// This have (err , req , res ,next)