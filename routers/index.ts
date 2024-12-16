import { Router, Request, Response, NextFunction } from "express";
import { validate } from "../controllers/user/user_validation";
import { validationResult } from "express-validator";

const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).render("home");
});

router.post("/", validate, (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        req.flash("errors", errors.array().map((error) => error.msg));
    }else {
        req.flash("success" , "SUCCESSFUL");
    }
    res.redirect("/");
});

export default router;
