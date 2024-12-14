import express from 'express'
import dotenv from 'dotenv'

dotenv.config();
const app = express();

app.use(express.urlencoded({extended : true}))
app.set("view engine" , "ejs")

app.get('/' , (req,res,next)=>{
    res.send("started")
})

app.listen(process.env.PORT || 5000 , ()=>{
    console.log("server runnig on port" , process.env.PORT || 5000)
})
