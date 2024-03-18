// import { useRef } from "react";
import { MdOutlineAppRegistration } from "react-icons/md";

import { Link } from "react-router-dom";
import FormInput from "../components/formInput";
import { useState } from "react";

export default function Registration() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phonenumber: "",
    confirmpassword: "",
    gender: "",
    
  });

  const inputs = [
    {
      id: 10,
      inpuConClass: "fromInput field-con",
      name: "firstname",
      placeholder: "First Name",
      type: "text",
      errorMessage: "Please enter your first name",
      label: "First Name",
      required: true,
    },
    {
      id: 1,
      inpuConClass: "fromInput field-con",
      name: "lastname",
      placeholder: "Last Name",
      type: "text",
      errorMessage: "Please enter your last name",
      label: "Last Name",
      required: true,
    },
    {
      id: 2,
      inpuConClass: "fromInput field-con",
      name: "email",
      placeholder: "Email",
      type: "email",
      errorMessage: "Please enter a valid email address",
      label: "Email",
      required: true,
    },
    {
      id: 3,
    inpuConClass: "fromInput field-con",
      name: "phonenumber",
      placeholder: "07* *******",
      type: "tel",
      pattern: "[0-9]{10}$",
      maxLength: "10",
      errorMessage: "Please enter a valid phone number",
      label: "Phone Number",
      required: true,
    },
    {
      id: "male",
      inpuConClass: "gender-con",
      genderinuptcl: "genderinput",
      name: "gender",
      placeholder: "Gender",
      type: "radio",
      value: "male",
      label: "Male",
      required: true,
    },
    {
      id: "female",
      inpuConClass: "gender-con ",
      genderinuptcl: "genderinput",
      name: "gender",
      placeholder: "Gender",
      type: "radio",
      value: "female",
      errorMessage: "Please select your gender",
      label: "Female",
      required: true,
      
    },
    {
      id: 4,
      inpuConClass: "fromInput field-con",
      name: "birthday",
      placeholder: "Birthday",
      type: "date",
      errorMessage: "Please enter your bright date",
      label: "Birthday",
      required: true,
    },

    {
      id: 7,
      inpuConClass: "fromInput field-con",
      name: "password",
      placeholder: "Password",
      type: "password",
      errorMessage: "Password should be 8-20 characters and include 1 letter, 1 number and 1 special character",
      pattern: `^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,19}$`,
      label: "Password",
      required: true,
    },
    {
      id: 8,
      inpuConClass: "fromInput field-con",
      name: "confirmpassword",
      placeholder: "Confirm Password",
      type: "password",
      errorMessage: "Password don't match",
      pattern: values.password,
      label: "Confirm Password",
      required: true,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  return (
    <main className="reg-from-center">
      <div  className="page-name-con">
        <div className="page-name-spaceholder"></div>
      <span className="page-log-span" ><MdOutlineAppRegistration/></span>
      <h1 className="page-name-h1">Registration</h1>
      </div>
      
      <section className="form-main-continer">
       <div className="form-name-logo-con">
    <div className="form-icon-con"><MdOutlineAppRegistration/></div>
    <div className="form-name-con"><span>Registration Page</span></div>
       </div>

       
        <form className="reg-from-con" onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}

          <button>Sign Up</button>
        </form>
        <p className="alredy-have-a-p">
          Already registered !
          <br />
        </p>
        <span className="sign-in-span">
          {/*put router link here*/}
          <Link className="sign-in-link" to="/adminlogin">
            Sign In
          </Link>
        </span>
      </section>
    </main>
  );
}
