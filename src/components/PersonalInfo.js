import { useState } from "react";

import "./PersonalInfo.css";

const validateName = (somename) => {
  let regexName = /^[A-Za-z\s]{1,40}$/;
  if (somename.trim() === "") {
    return "Name is required";

    //console.log(newErrors.name);
  } else if (!regexName.test(somename)) {
    return "Invalid name";
  }
  return "";
};
const validateEmail = (someEmail) => {
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (someEmail.trim() === "") {
    return "Email is required";
  } else if (!emailPattern.test(someEmail)) {
    return "Invalid email";
  }
  return "";
};
const validateMobile = (someMobno) => {
  let regexMobno = /^\d{10}$/;
  if (someMobno.trim() === "") {
    return "Mobile no is required";
  } else if (!regexMobno.test(someMobno)) {
    return "Invalid Mobile no";
  }
  return "";
};

export default function PageOne(props) {
  const [errorName, setErrorName] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorMobile, setErrorMobile] = useState(null);

  const validateInfo = () => {
    if(props.info.name === ""){
      setErrorName("Name is required");
    }
    if(props.info.email === ""){
      setErrorEmail("Email is required");

    }
    if(props.info.mobno === ""){
      setErrorMobile("Mobile no is required");
    }

    if (errorName == "" || errorMobile == "" || errorEmail == "") {
      return true;
    }

  
    return false;
  };

  const onChangeName = (event) => {
    props.setInfo({...props.info,name:event.target.value});
    setErrorName(validateName(event.target.value));
    event.target.style.borderColor = errorName ? "red" : "initial";
  };

  const onChangeEmail = (event) => {
    setErrorEmail(validateEmail(event.target.value));
    props.setInfo({...props.info,email:event.target.value});
    event.target.style.borderColor = errorEmail ? "red" : "initial";
  };

  const onChangeMobile = (event) => {
    props.setInfo({...props.info,mobile:event.target.value});
    setErrorMobile(validateMobile(event.target.value));
    event.target.style.borderColor = errorMobile ? 'red' : 'initial';
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    
    if (validateInfo()) {
      props.onClickNextBtn();
    }else if(errorName === null || errorEmail === null || errorMobile === null){
      props.onClickNextBtn();
    }

    // if (props.info.name == null || props.info.mobile == null || props.info.email == "") {
    //   return false;
    // }
  };

  return (
    <div className="page-r-container">
      <div className="page-r-container-header">
        <h1>Personal Info</h1>
        <p>Please provide your name, email address and phone number.</p>
      </div>
      <div className="body">
        <form>
          <div className="form-group">
            <label htmlFor="user-name">Name</label>
            {errorName && <small className="errorMessage">{errorName}</small>}
            <input
              type="text"
              id="user-name"
              className={errorName ? "form-control invalid" : "form-control"}
              placeholder="e.g Stephen King"
              onChange={onChangeName}
              value = {props.info.name}
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            {errorEmail && <small className="errorMessage">{errorEmail}</small>}
            <input
              type="email"
              className={errorEmail ? "form-control invalid" : "form-control"}
              id="exampleInputEmail1"
              placeholder="Enter email"
              onChange={onChangeEmail}
              value = {props.info.email}
            />
            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
          </div>

          <div className="form-group">
            <label htmlFor="user-phone">Phone Number</label>
            {errorMobile && (
              <small className="errorMessage">{errorMobile}</small>
            )}
            <input
              type="tel"
              id="user-phone"
              className={errorMobile ? "form-control invalid":"form-control"}
              placeholder="e.g +1 234 567 890"
              onChange={onChangeMobile}
              value = {props.info.mobile}
            ></input>
          </div>
        </form>
      </div>

      <div className="footer">
        <p className="go-back-link"></p>
        <button className="btn" onClick={onSubmitForm}>
          Next Step
        </button>
      </div>
    </div>
  );
}
