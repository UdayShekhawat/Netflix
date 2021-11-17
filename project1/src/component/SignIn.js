import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailErr, setEmailErr] = useState();
    const [passwordErr, setPasswordErr] = useState();

    const onSubmit = (e) => {
        
        const validateEmail = "uday@biz4group.com";
        let validatePassword = "Uday12345"
        const isValid = FormValidation();
        // let checkb = document.getElementById('cbox');

        setEmail("");
        setPassword("");
        
        if (isValid) {
            if (validateEmail !== email && validatePassword !== password) {
                alert("invalid Credintials")
            }
            else {

                alert("Login successfull...");
                console.log(`email: ${email} `);
                console.log(`password: ${password} `);
            }

        }else{
            e.preventDefault();
        }
        if (!document.getElementById('cbox').checked) {
            console.log('email and password are not stored in localStorage.');
            localStorage.clear();
        } else {
            console.log('email and password are  stored in localStorage.');
            let uday = {
                email: email,
                password: password
            }

            const encoder = new TextEncoder();
            const encodedValue = encoder.encode(uday);
            localStorage.setItem('set', encodedValue);

        }

    }
    const FormValidation = () => {
        let emailErr = '';
        let passwordErr = '';
        let isValid = true;
        const emailTest = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
        const passwordTest = /(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.{8,})/;

        if (email.trim() === '') {
            emailErr = 'Email is required';
            isValid = false;
        } else if (email.trim().length < 10) {
            emailErr = 'Email is too short';
            isValid = false;
        }else if(!emailTest.test(email)){
            emailErr = 'InValid Email';
            isValid = false;
        }

        if (password === '') {
            passwordErr = 'Password is required';
            isValid = false;
        }
        else if (password.length < 8) {
            passwordErr = "Password must contain atleast 8 digits";
            isValid = false;
        }else if(!passwordTest.test(password)){
            passwordErr = 'InValid Password';
            isValid = false;
        }

        setPasswordErr(passwordErr);
        setEmailErr(emailErr);
        return isValid;

    }

    return (
        <>
            <form action="/profile" className="form_content signIn_form" method="get" onSubmit={onSubmit}>

                <div className="form_title">
                    <p> Sign In</p>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="email"
                        value={email}
                        placeholder="Email"
                        // autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="error">{emailErr}</span>
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        // autoComplete="off"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="error">{passwordErr}</span>
                </div>
                <div className="form-group btn-box ">
                    <input type="submit" className="btn" value="Sign In" />
                </div>
                <div className="form-bottom">

                    <label htmlFor="checkbox">
                        <input
                            type="checkbox"
                            name="checkbox"
                            id="cbox"
                        /> Remember Me </label>
                    <Link className="link" to="/forgot"> <p>forgot password</p></Link>
                </div>


            </form>
        </>
    )
}

export default SignIn
