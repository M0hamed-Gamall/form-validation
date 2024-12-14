import {body} from 'express-validator'

export const validate = [
    body("name").notEmpty().withMessage("Name is required")
        .custom(value => {
            if (!/^[a-zA-Z\s@#\$%\^&\*\(\)-_+=!]*$/.test(value)) {
            throw new Error("Name can't contain numbers or special characters");
            }
            return true; // if i forget return it returns a error with default value "Invalid value"
        }),

    body("email").isEmail().withMessage("Email must be valid and @gmail.com"),

    body("password").custom(value=>{
        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,64}$/.test(value))
        throw new Error("Password must be between 8 and 64 characters, contain at least one number, one uppercase character and one lowercase character")
        return true;
    }),

    body("confirmed-password")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Password confirmation does not match password");
      }
      return true;
    }),

    body("birth-day").isDate().withMessage("Must be a date")
]