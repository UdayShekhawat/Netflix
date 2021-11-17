import React, { useState } from 'react'
// import './Login.css'
// import { useHistory } from "react-router-dom";   

export default function Login() {
    //   let history=useHistory()
    let [email, setEmail] = useState(' ')
    let [password, setPassword] = useState(' ')
    let [passwordError, setPasswordError] = useState(' ')
    let [emailError, setPmailError] = useState(' ')
    let [invalid, setinvalid] = useState(' ')



    function handleChange(event) {
        const isCheckbox = event.target.type === "checkbox";
        if (event.target.type == 'email') (
            setEmail(event.target.value)

        )
        if (event.target.type == 'password') (
            setPassword(event.target.value)
        )

    };


    function validate() {
        let emailError = "";
        let passwordError = "";
        let emailchecker = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/
        let passwordchecker = /(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.{8,})/


        if (password.length === 0) {
            passwordError = "password cannot be blank";
        }

        if (email.length === 0) {
            emailError = "Email cannot be blank"

        }

        if (!emailchecker.test(email)) {
            emailError = 'Email not valid'
        }

        if (!passwordchecker.test(password)) {
            passwordError = 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)'
        }


        if (passwordError || emailError) {
            setPasswordError(passwordError);
            setPmailError(emailError);
            return false;
        }

        return true;
    };

    function handleSubmit(event) {
        event.preventDefault();
        const isValid = validate();
        if (isValid) {
            setPasswordError(' ')
            setEmail(' ')
            console.log(email, password)
            let user = {
                "email": "uday@gmail.com",
                "password": "Uday@123.."
            }

            if (user.email == email && user.password == password) {
                alert(`Login SuccessFully ${user.email}`)
                //   history.push('/')

            }

            else {

                alert(`Invalid email ${email} and Invalid ${password}`)
                setinvalid("Crendential not matched")


            }

            if (document.getElementById("1").checked) {
                let uday_json = {
                    email: email,
                    password: password
                }

                let encode = new TextEncoder()
                let data = encode.encode(uday_json)
                localStorage.setItem("user_info", data)

            }

            else {
                localStorage.clear()
            }

        }
    }

    return (
        <div>

            <div class="login-page">
                <div class="login-form">
                    <h1 style={{ fontSize: 12, color: "red", textAlign: "center" }}> {invalid} </h1>
                    <form onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <div class="form-box">
                            <i class="fas fa-user"></i>
                            <input type="email" name="email" placeholder="Email"
                                value={email}
                                onChange={handleChange}
                            />

                            <div style={{ fontSize: 12, color: "red" }}>
                                {emailError}
                            </div>
                        </div>
                        <div class="form-box">
                            <i class="fas fa-key"></i>
                            <input type="password" name="password" placeholder="password" value={password} onChange={handleChange} />
                            <div style={{ fontSize: 12, color: "red" }}>
                                {passwordError}
                            </div>



                        </div>


                        <div class="form-box">
                            <label class="remember">
                                <input type="checkbox" id="1" name="remember" /> Remember me
                            </label>
                            {/* <a href="#" class="forgot-pwd">Forgot Password?</a> */}
                            <div class="form-box">
                                <button type="submit" class="submit-btn">Log in</button>
                            </div>
                        </div>

                    </form>
                </div>

                {/* <div class="social-login">
        <h3>Login</h3>  */}


                {/* <div class="new-register">
                    <p>Don’t have an account? <a href="#">Register Now!</a></p>
                </div> */}
            </div>
        </div>

    )
}


