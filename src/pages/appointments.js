import { Link } from "react-router-dom";
import { FaWpforms } from "react-icons/fa6";
import SelectDrop from "../components/selectDrop";
import FormInput from "../components/formInput";

import { useState } from "react";
export default function Appointments() {
  const [values, setValues] = useState({
    patientid: "",
    email: "",
    phonenumber: "",
    doctorname: "",
    testcatagory: "",
  });
  const apinputs = [
    {
      id: 1,
      inpuConClass: "fromInput field-con",
      name: "patientid",
      placeholder: "Patient ID",
      type: "text",
      errorMessage:
        "Patient ID should 6-15 characters & should have at least one letter and number. special characters can't be used !",
      label: "Patient ID",
      pattern: `^(?=.*[a-z])[a-z0-9]{6,15}$`,
      required: true,
    },
    {
      id: 3,
      inpuConClass: "fromInput field-con",
      name: "doctorname",
      placeholder: "Doctor Name",
      type: "text",
      errorMessage: "Please enter your name",
      label: "Doctor Name",
      required: true,
    },
    {
      id: 2,
      inpuConClass: "fromInput field-con",
      name: "email",
      placeholder: "Email",
      type: "email",
      errorMessage: "Email address is not valid !",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      inpuConClass: "fromInput field-con",
      name: "phonenumber",
      placeholder: "07* *******",
      type: "tel",
      pattern: "[0-9]{10}$",
      maxLength: "10",
      errorMessage: "Phone number is incorrect !",
      label: "Phone Number",
      required: true,
    },
  ];
  const selectapinputs = [
    {
      id: 55,
      inpuConClass: "fromInput field-con",
      name: "testcatagory",
      placeholder: "testcatagory",
      type: "",
      pattern: "[0-9]{10}$",
      maxLength: "10",
      optionName1: "Blood Count",
      optionName2: "Urinalysis",
      optionName3: "Glucose",
      optionName4: "ESR",
      value1: "Blood Count",
      value2: "Urinalysis",
      value3: "Glucose",
      value4: "ESR",
      errorMessage: "Please select test catagory",
      label: "Phone Number",
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
      <div className="page-name-con">
        <div className="page-name-spaceholder"></div>
        <span className="page-log-span">
          <FaWpforms />
        </span>
        <h1 className="page-name-h1">Request Appointment</h1>
      </div>

      <section className="form-main-continer">
        <div className="form-name-logo-con">
          <div className="form-icon-con">
            <FaWpforms />
          </div>
          <div className="form-name-con">
            <span>Request Appointment</span>
          </div>
        </div>

        <form className="reg-from-con" onSubmit={handleSubmit}>
          {apinputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          {selectapinputs.map((input) => (
            <SelectDrop
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}

          <button>Submit</button>
        </form>
       
        
      </section>
    </main>
  );
}
