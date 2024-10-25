import * as YUP from 'yup';

export const Validation = YUP.object({
    namec: YUP
        .string()
        .typeError("Enter correct Name ")
        .matches(/^[a-zA-Z\s]+$/, "Enter a valid name")
        .min(3,"Enter real Name")
        .required("Enter Name"),

    email: YUP
        .string()
        .typeError("Enter Correct Email")
        .email("Enter a valid email")
        .required("Enter Email"),

    password: YUP
        .string()
        .typeError("Enter Correct Password")
        .required("Enter Password")
        .matches(/^(?=.*[0-9])[a-zA-Z@#$0-9]+$/, "Enter a valid password")
        .min(4, "Enter a minimum four-character password.")
        .max(6, "Enter a maximum six-character password."),

    mobile: YUP
        .string()
        .typeError("Enter Correct mobile Number")
        .length(10, "Enter a valid mobile number")
        .required("Enter Mobile Number"),

    address: YUP
        .string()
        .typeError("Enter Correct Address ")
        .required("Enter Address"),

    pin:YUP
        .string()
        .typeError("Enter pin in only 6 digit number")
        .max(6,"Enter 6 digit correct pin code")
        .min(6,"Enter correct pin code")
        .required("Enter pin code is necessary")
});
