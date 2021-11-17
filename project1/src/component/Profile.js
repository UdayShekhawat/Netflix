import React, { useState } from 'react'
import '../App.css'

const Profile = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');

    const [firstNameErr, setFirstNameErr] = useState();
    const [lastNameErr, setLastNameErr] = useState();
    const [genderErr, setGenderErr] = useState();
    const [emailErr, setEmailErr] = useState();
    const [phoneErr, setPhoneErr] = useState();
    const [countryErr, setCountryErr] = useState();
    const [stateErr, setStateErr] = useState();
    const [cityErr, setCityErr] = useState();

    const onSubmit = (e) => {

        const isValid = FormValidation();

        if (isValid) {
            alert("Registration successful");


        } else {
            e.preventDefault();
        }
        // setFirstName('');
        // setLastName('');
        // setEmail('');
        // setPhone('');
       

    }

    const FormValidation = () => {
        let firstNameErr = '';
        let lastNameErr = '';
        let emailErr = '';
        let phoneErr = '';
        let countryErr = '';
        let stateErr = '';
        let cityErr = '';
        const emailTest = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;

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

        if(country.trim() ===''){
            countryErr = "country is required";
            isValid =false;
        }else if(country.trim().length > 15)
        {
            countryErr = 'Give proper country name';
            isValid = false;
        }
        if(state.trim() ===''){
            stateErr = "state is required";
            isValid =false;
        }else if(state.trim().length > 15)
        {
            state = 'Give proper state name';
            isValid = false;
        }
        if(city.trim() ===''){
            cityErr = "city is required";
            isValid =false;
        }else if(city.trim().length > 15)
        {
            cityErr = 'Give proper city name';
            isValid = false;
        }


        setFirstNameErr(firstNameErr);
        setLastNameErr(lastNameErr);
        setGenderErr(genderErr);
        setEmailErr(emailErr);
        setPhoneErr(phoneErr);
        setCountryErr(countryErr);
        setStateErr(stateErr);
        setCityErr(cityErr);


        return isValid;

    }


    return (
        <div>
            <form action="#" onSubmit={onSubmit} className="form_content profile_form" method="get">
                <div className="form_title">
                    <p> Profile</p>
                </div>
                <div className="input_group">
                    <div className="form-group profile_inputs">
                        <i class="fas fa-user"></i>
                        <input
                            type="text"
                            name="fname"
                            id="fname"
                            value={firstName}
                            placeholder="FirstName"
                            autoComplete="off"
                            onChange={(e) => setFirstName(e.target.value)} />
                        <span className="error">{firstNameErr}</span>
                    </div>
                    <div className="form-group profile_inputs">
                        <i class="fas fa-user"></i>
                        <input
                            type="text"
                            name="lname"
                            id="lname"
                            value={lastName}
                            placeholder="LastName"
                            autoComplete="off"
                            onChange={(e) => setLastName(e.target.value)} />
                        <span className="error">{lastNameErr}</span>
                    </div>
                    <div className="form-group profile_inputs">
                        <i class="fas fa-user"></i>
                        <input
                            type="text"
                            name="gender"
                            id="gender"
                            value={gender}
                            placeholder="Gender"
                            autoComplete="off"
                            onChange={(e) => setGender(e.target.value)} />
                        <span className="error">{genderErr}</span>
                    </div>
                    <div className="form-group profile_inputs">
                        <i class="fas fa-envelope"></i>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email"
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)} />
                        <span className="error">{emailErr}</span>
                    </div>
                    {/* <div className="form-group"> */}
                    {/* <input type="text" name="email" id="email" placeholder="Email" autoComplete="off" /> */}
                    {/* <i class="fas fa-venus-mars"></i>
                        <label htmlFor="gender">Gender</label>
                        <label htmlFor=""><input type="radio" name="gender" id="gender" /> Male</label>
                        <label htmlFor=""><input type="radio" name="gender" id="gender" /> Female</label>
                    </div> */}
                    <div className="form-group profile_inputs">
                        <i class="fas fa-phone-alt"></i>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            value={phone}
                            placeholder="Phone Number"
                            autoComplete="off"
                            onChange={(e) => setPhone(e.target.value)} />
                        <span className="error">{phoneErr}</span>
                    </div>

                    <div className="form-group profile_inputs">
                        <i class="fas fa-city"></i>
                        <input
                            type="text"
                            name="country"
                            id="country"
                            value={country}
                            placeholder="Country"
                            autoComplete="off"
                            onChange={(e) => setCountry(e.target.value)} />
                        <span className="error">{countryErr}</span>
                    </div>
                    <div className="form-group profile_inputs">
                        <i class="fas fa-city"></i>
                        <input
                            type="text"
                            name="state"
                            id="state"
                            value={state}
                            placeholder="State"
                            autoComplete="off"
                            onChange={(e) => setState(e.target.value)} />

                        <span className="error">{stateErr}</span>
                    </div>
                    <div className="form-group profile_inputs">
                        <i class="fas fa-city"></i>
                        <input
                            type="text"
                            name="city"
                            id="city"
                            value={city}
                            placeholder="City"
                            autoComplete="off"
                            onChange={(e) => setCity(e.target.value)} />
                        <span className="error">{cityErr}</span>
                    </div>
                </div>

                <div className="form-group btn-box ">
                    <input type="submit" className="btn profile-btn" value="Sign Up" />
                </div>

            </form>
        </div>
    )
}

export default Profile
