import express from 'express'
import dotenv from 'dotenv'
import router from './routers';
import path from 'path';

dotenv.config();
const app = express();

app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.set("view engine" , "ejs")
app.use(express.static(path.join(__dirname , 'assets')))

app.use(router)

app.listen(process.env.PORT || 5000 , ()=>{
    console.log("server runnig on port" , process.env.PORT || 5000)
})
