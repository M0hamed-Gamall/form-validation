import { Router,Request,Response,NextFunction, response } from "express";
import { validate } from "../controllers/user/user_validation";
import {validationResult} from 'express-validator'

const router = Router();

router.get('/' , (req:Request,res:Response,next:NextFunction)=>{
    res.status(200).render('home')
})

router.post('/', validate,(req:Request,res:Response,next:NextFunction)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        res.render('home' , {errors : errors.array()});
    }else{
       res.send("SUCCESSFUL")
    }
})

export default router;