import { Link } from "react-router-dom";
import { useState } from "react";
import FormInput from "../components/formInput";
import { TbReportMedical } from "react-icons/tb";
export default function TestDetails() {
  const [tdvalues, setTDValues] = useState({
    patientid:"",
    appointmentid: "",
   
    
    
  });

  const tdinputs = [
    {
      id: 1,
      inpuConClass: "fromInput field-con",
      name: "patientid",
      placeholder: "Patient ID",
      type: "text",
      errorMessage: "Patient ID should 6-15 characters & should have at least one letter and number. special character(!@#$%) are not allowed",
      label: "Patient ID",
      pattern: `^(?=.*[a-z])[a-z0-9]{6,15}$`,
      required: true,
    },
   
    {
      id: 2,
      inpuConClass: "fromInput field-con",
      name: "appointmentid",
      placeholder: "Appointment ID",
      type: "text",
      errorMessage: "Patient ID should 6-15 characters & should have at least one letter and number. special character(!@#$%) are not allowed",
      label: "Appointment ID",
      pattern: `^(?=.*[a-z])[a-z0-9]{6,15}$`,
      required: true,
    },
    

  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    setTDValues({ ...tdvalues, [e.target.name]: e.target.value });
  };
  console.log(tdvalues);
  return (
    <main className="reg-from-center">
    
    <div  className="page-name-con">
    <div className="page-name-spaceholder"></div>
      <span className="page-log-span" ><TbReportMedical/></span>
      <h1 className="page-name-h1">Test Details</h1>
      </div>
    
    <section className="form-main-continer">
    <div className="form-name-logo-con">
    <div className="form-icon-con"><TbReportMedical/></div>
    <div className="form-name-con"><span>Test Results Page</span></div>
       </div>
     
       <form className="reg-from-con" onSubmit={handleSubmit}>
          {tdinputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={tdvalues[input.name]}
              onChange={onChange}
            />
          ))}

          <button>Search</button>
        </form>
      <p>
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