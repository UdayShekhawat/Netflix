import React,{useState} from 'react'
import '../App.css'

const Forgot = () => {

    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState('');

    const onSubmit = (e) => {
        
        const isValid = FormValidation();
        if (isValid) {
            let get = localStorage.getItem('set');
            let encryptedDataInArray = get.split(",");
            let encryptedData = encryptedDataInArray.map(x => parseInt(x));

            let uint8Array = new Uint8Array(encryptedData);
            const decoder = new TextDecoder();
            const decodedValue = decoder.decode(uint8Array);
            console.log("Data---", decodedValue);
         
        }else{
            e.preventDefault();
        }

    }
    const FormValidation = () =>{
        let emailErr = '';
        const emailTest = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
        let isValid = true;

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

        setEmailErr(emailErr);
        return isValid;
    }

    return (
        <div>
            <form action="/reset" className="form_content forgot_form" onSubmit={onSubmit} method="get">

                <div className="form_title">
                    <p>Forgot Password</p>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={email}
                        placeholder="Email"
                        //  autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)} />
                    <span className="error">{emailErr}</span>
                </div>

                <div className="form-group btn-box ">
                    <input type="submit" className="btn" value="Send Email" />
                </div>



            </form>
        </div>
    )
}

export default Forgot
