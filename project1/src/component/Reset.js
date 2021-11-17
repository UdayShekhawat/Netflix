import React, { useState } from 'react'
import '../App.css'

const Reset = () => {

    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');

    const [passwordErr, setPasswordErr] = useState();
    const [cpasswordErr, setCpasswordErr] = useState();

    const onSubmit = (e) =>{
        const isValid = formValidation();
        if(isValid){
            console.log("password changed");
        }else{
            e.preventDefault();
        }
    }
    const formValidation =() =>{
        let passwordErr ='';
        let cpasswordErr ='';
        const passwordTest = /(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.{8,})/;
        let isValid = true;

        // password validaition
        if (password === '') {
            passwordErr = 'Password is required';
            isValid = false;
        }
        else if (password.length < 8) {
            passwordErr = "Password must contain atleast 8 digits";
            isValid = false;
        } else if (!passwordTest.test(password)) {
            passwordErr = 'InValid Password';
            isValid = false;
        }
// confirm password validaition
        if (password !== cpassword){
            cpasswordErr = 'confirm password is invalid'
            isValid = false;
        }

        setPasswordErr(passwordErr);
        setCpasswordErr(cpasswordErr);
        return isValid;

    }
    return (
        <>
            <form action="/signin" className="form_content reset_form" onSubmit={onSubmit} method="get">

                <div className="form_title">
                    <p> Reset Password</p>
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        placeholder="Confirm Password"
                        autoComplete="off"
                        onChange={(e) => setPassword(e.target.value)} />
                    <span className="error">{passwordErr}</span>
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={cpassword}
                        placeholder="Password"
                        autoComplete="off"
                        onChange={(e) => setCpassword(e.target.value)} />
                    <span className="error">{cpasswordErr}</span>
                </div>
                <div className="form-group btn-box ">
                    <input type="submit" className="btn" value="Sign In" />
                </div>



            </form>
        </>
    )
}

export default Reset
