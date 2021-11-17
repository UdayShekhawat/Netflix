import React, { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const SignUp = () => {
    // const [FirstName,LastName,Email,Phone,Password,CPassword]
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');

    const [firstNameErr, setFirstNameErr] = useState();
    const [lastNameErr, setLastNameErr] = useState();
    const [emailErr, setEmailErr] = useState();
    const [phoneErr, setPhoneErr] = useState();
    const [passwordErr, setPasswordErr] = useState();
    const [cPasswordErr, setCPasswordErr] = useState();

    const onSubmit = (e) => {
       
        const isValid = FormValidation();

        if(isValid){
            alert("Registration successful");


        }else{
            e.preventDefault();
        }
        // setFirstName('');
        // setLastName('');
        setEmail('');
        // setPhone('');
        setPassword('');
        setCPassword('');

    }

    const FormValidation = () => {
        let firstNameErr = '';
        let lastNameErr = '';
        let emailErr = '';
        let phoneErr = '';
        let passwordErr = '';
        let cPasswordErr = '';
        const emailTest = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
        const passwordTest = /(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.{8,})/;
        let isValid = true;


        if (firstName.trim() === '') {
            firstNameErr = 'firstName is required';
            isValid = false;
        } else if (firstName.trim().length < 4) {
            firstNameErr = 'firstName is too short';
            isValid = false;
        } else if (firstName.trim().length > 10) {
            firstNameErr = 'firstName is too Long';
            isValid = false;
        }

        if (lastName.trim() === '') {
            lastNameErr = 'lastName is required';
            isValid = false;
        } else if (lastName.trim().length < 2) {
            lastNameErr = 'lastName is too short';
            isValid = false;
        } else if (lastName.trim().length > 10) {
            lastNameErr = 'lastName is too Long';
            isValid = false;
        }

        if (email.trim() === '') {
            emailErr = 'Email is required';
            isValid = false;
        } else if (email.trim().length < 10) {
            emailErr = 'Email is too short';
            isValid = false;
        } else if (!emailTest.test(email)) {
            emailErr = 'InValid Email';
            isValid = false;
        }

        if (phone.trim() === '') {
            phoneErr = 'phone is required';
            isValid = false;
        } else if (phone.trim().length != 10) {
            phoneErr = 'invalid number, phone must be of 10 digits ';
            isValid = false;
        }

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

        if (password !== cPassword){
            cPasswordErr = 'confirm password is invalid'
            isValid = false;
        }

        setFirstNameErr(firstNameErr);
        setLastNameErr(lastNameErr);
        setEmailErr(emailErr);
        setPhoneErr(phoneErr);
        setPasswordErr(passwordErr);
        setCPasswordErr(cPasswordErr);

        return isValid;

    }

    return (
        <div>
            <form action="/signin" onSubmit={onSubmit} className="form_content signUp-form" method="get">

                <div className="form_title">
                    <p> Sign Up</p>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="fname"
                        id="fname"
                        value={firstName}
                        placeholder="FirstName"
                        // autoComplete="off"
                        onChange={(e) => setFirstName(e.target.value)} />
                    <span className="error">{firstNameErr}</span>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="lname"
                        id="lname"
                        value={lastName}
                        placeholder="LastName"
                        // autoComplete="off"
                        onChange={(e) => setLastName(e.target.value)} />
                    <span className="error">{lastNameErr}</span>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={email}
                        placeholder="Email"
                        // autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)} />
                    <span className="error">{emailErr}</span>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="phone"
                        value={phone}
                        placeholder="Phone Number"
                        // autoComplete="off"
                        onChange={(e) => setPhone(e.target.value)} />
                    <span className="error">{phoneErr}</span>
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        // autoComplete="off"
                        onChange={(e) => setPassword(e.target.value)} />
                    <span className="error">{passwordErr}</span>
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        name="cpassword"
                        value={cPassword}
                        placeholder="Confirm Password"
                        // autoComplete="off"
                        onChange={(e) => setCPassword(e.target.value)} />
                    <span className="error">{cPasswordErr}</span>
                </div>
                <div className="form-group btn-box ">
                    <input type="submit" className="btn" value="Sign Up" />
                </div>
                <div className="form-bottom">
                    <pre>Already have an Account? <Link className="link" to="/signin"> Login</Link></pre>
                </div>




            </form>
        </div>
    )
}

export default SignUp
