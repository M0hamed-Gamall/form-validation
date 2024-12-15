import { Router,Request,Response,NextFunction, response } from "express";
import { validate } from "../controllers/user/user_validation";
import {validationResult} from 'express-validator'

const router = Router();

router.get('/' , (req:Request,res:Response,next:NextFunction)=>{
    res.status(200).render('home' , {errors:[]})
})

router.post('/', validate,(req:Request,res:Response,next:NextFunction)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        req.flash('errors', errors.array().map((error) => error.msg)); // because this parameter must be string | string[]
        res.redirect('/message');
    }else{
       res.send("SUCCESSFUL")
    }
})

router.get('/message' , (req:Request,res:Response,next:NextFunction)=>{
    res.render('home' , {errors : req.flash('errors')});
})

export default router;