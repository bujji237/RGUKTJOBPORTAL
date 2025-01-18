import React, { useState } from "react";
import "./Signup.css";
import image1 from "../../asserts/rgukt2.jpeg";
import { useNavigate , Link } from "react-router-dom";


function Signup (){
    const [fullName, setFullName] = useState(""); 
    const [idNumber, setIdNumber] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [phone, setPhone] = useState(""); 
    const [password, setPassword] = useState("");
    const [gender , setGender] = useState("");
    const [role, setRole] = useState("");
    const navigate = useNavigate();

    const onfullnameBlured = (event) => {
        const userName = event.target.value;
        const fullNameRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)+$/;
        const errorMsgele = document.getElementById("full-name-error-msg");
        if(!fullNameRegex.test(userName)){
            errorMsgele.style.display = "block";
        }
        else{
            errorMsgele.style.display = "none";
            setFullName(event.target.value);
        }
    }


    const onIdNumberBlured = (event) => {
        const idNumber = event.target.value;
        const idRegex = /^[nN]\d{6}$/;
        const errorMsgele = document.getElementById("id-number-error-msg");
        if(!idRegex.test(idNumber)){
            errorMsgele.style.display = "block";
        }
        else{
            errorMsgele.style.display = "none";
            setIdNumber(event.target.value);
        }
    }


    const onEmailBlured = (event) => {
        const userEmail = event.target.value;
        const idNumber = document.getElementById("id-field").value;
        const emailRegex = new RegExp(`^${idNumber}@rguktn\\.ac\\.in$`);
        const errorMsgele = document.getElementById("email-error-msg");
        if(!emailRegex.test(userEmail)){
            errorMsgele.style.display = "block";
        }
        else{
            errorMsgele.style.display = "none";
            setEmail(event.target.value);
        }
    }


    const onPhonenumberBlured = (event) => {
        const userPhoneNumber = event.target.value;
        const phoneRegex = /^[789]\d{9}$/;
        const errorMsgele = document.getElementById("phone-error-msg");
        if(!phoneRegex.test(userPhoneNumber)){
            errorMsgele.style.display = "block";
        }
        else{
            errorMsgele.style.display = "none";
            setPhone(event.target.value);
        }
    }
    


    const onPasswordBlur = (event) => {
        const password = event.target.value;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
        const errorMsgEle = document.getElementById("password-error-msg");
        if (!passwordRegex.test(password)) {
            errorMsgEle.style.display = "block";
        } else {
            errorMsgEle.style.display = "none";
            setPassword(event.target.value);
        }
    }

    const onConfirmPasswordBlur = (event) => {
        const password = document.getElementById("password-field").value;
        const confirmPassword = event.target.value;
        const errorMsgEle = document.getElementById("confirm-password-error-msg");
        if (password !== confirmPassword) {
            errorMsgEle.style.display = "block";
        } else {
            errorMsgEle.style.display = "none";
        }
    }

    const onGenderChange = (event) => {
        setGender(event.target.value);
    }

    const onRoleChange = (event) => {
        setRole(event.target.value);
    }


    const onSignupFormSubmit = async (event) => {
        event.preventDefault();
        const userFullName = fullName;
        const userId = idNumber;
        const userEmail = email;
        const userNumber  = phone;
        const userPassword = password
        const userGender = gender;
        const userRole = role;


        const userData = {
            fullName : userFullName,
            idNumber : userId,
            email : userEmail,
            phone : userNumber,
            password : userPassword,
            gender : userGender,
            role : userRole
        }


        try{
            const options = {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(userData)
            }
            const response = await fetch("http://localhost:3000/signup" , options)
            const data = await response.json();
            console.log(data);
            if(response.status === 201){
                console.log("user created succfullly");
                navigate("/student");
            }
            else{
                console.log("erro while creating the student");
            }
        }
        catch(error){
            console.log(`error while submitting the form ${error}`);
        }
    }



    return (
        <div className="Signupform-container">
            <img className="signup-image-container" alt="signup-image" src={image1} />
            <form onSubmit={(event) => onSignupFormSubmit(event)} className="signup-container">
                <h1 className="signup-heading">Signup</h1>
                <div className="input-field-container">
                    <label className="label-field" htmlFor="name-field">Full Name: </label>
                    <input onBlur = {(event) => onfullnameBlured(event)} type="text" className="input-field" id="name-field" required/>
                    <p id = "full-name-error-msg" className="full-name-error-msg">incorrect full name</p>
                </div><br/>
                <div className="input-field-container">
                    <label className="label-field" htmlFor="id-field">Id Number: </label>
                    <input onBlur = {(event) => onIdNumberBlured(event)} type="text" className="input-field" id="id-field" required/>
                    <p id = "id-number-error-msg" className="id-number-error-msg">incorrect Id number</p>
                </div><br/>
                <div className="input-field-container">
                    <label className="label-field" htmlFor="mail-field">College Mail Id: </label>
                    <input onBlur = {(event) => onEmailBlured(event)} type="email" className="input-field" id="mail-field" required/>
                    <p id = "email-error-msg" className="email-error-msg">incorrect email id</p>
                </div><br/>
                <div className="input-field-container">
                    <label className="label-field" htmlFor="number-field">Phone Number: </label>
                    <input onBlur={(event) => onPhonenumberBlured(event)} type="text" className="input-field" id="number-field" required/>
                    <p id = "phone-error-msg" className="phone-error-msg">incorrect phone number</p>
                </div><br/>
                <div className="input-field-container">
                    <label className="label-field" htmlFor="password-field">Password: </label>
                    <input onBlur = {(event) => onPasswordBlur(event)} type="password" className="input-field" id="password-field" placeholder="(8+ characters, 1 uppercase, 1 number)" required/>
                    <p id = "password-error-msg" className="password-error-msg">password is not strong</p>
                </div><br/>
                <div className="input-field-container">
                    <label className="label-field" htmlFor="confirm-password-field">Confirm Password: </label>
                    <input onBlur = {(event) => onConfirmPasswordBlur(event)} type="password" className="input-field" id="confirm-password-field" required/>
                    <p id = "confirm-password-error-msg" className="confirm-email-error-msg">Password does not match</p>
                </div><br/>
                <div className="input-field-container">
                    <label className="label-field">Gender: </label>
                    <div className="radio-buttons-container">
                        <label htmlFor="male" className="radio-button-label">Male</label>
                        <input onChange={onGenderChange} type="radio" id = "male" className="input-field-radio-button" name = "gender" value = "male"/>
                        <label htmlFor="female" className="radio-button-label">Female </label>
                        <input onChange={onGenderChange} type="radio" id = "female" className="input-field-radio-button" name = "gender" value = "female"/>
                    </div>
                </div><br/>
                <div className="input-field-container">
                    <label className="label-field">Role: </label>
                    <div className="radio-buttons-container">
                        <label htmlFor="student" className="radio-button-label">student</label>
                        <input onChange={onRoleChange} type="radio" id = "student" className="input-field-radio-button" name = "role" value = "student"/>
                        <label htmlFor="female" className="radio-button-label">admin </label>
                        <input onChange={onRoleChange} type="radio" id = "admin" className="input-field-radio-button" name = "role" value = "admin"/>
                    </div>
                </div><br/>
                <button type = "submit" className="signup-btn">Signup</button>
                <p className="alreadyhave-accout-text">Alrady have an accout? Login <Link to = "/Login" >here</Link></p>
            </form>
        </div>
    )
}

export default Signup;