import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbReportMedical } from "react-icons/tb";
import { MdLocalHospital } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { BsPeople } from "react-icons/bs";
import { HiOutlineClipboardList, HiOutlinePencilAlt } from "react-icons/hi";

export const SideNav = () => {
  const [isNavOpen, setNavOpen] = useState(false);
 
  return (
    <nav className="nav">
      <div
        className={`menu-toggle ${
          isNavOpen ? "menu-toggle-active" : "menu-toggle"
        }`}
        onClick={() => setNavOpen(!isNavOpen)}
      >
        <div className="menu-btn-bgr"></div>
      </div>
      <div
        className={`nav-dg-layout ${isNavOpen ? "nav-bg-active" : "nav-bg"}`}
      >
        {/* -------log - dashbord - name----------- */}
        <div className="logo-con">
          <div className="icon-con">
            <Link className="all-a-icons" to="/adminlogin">
              < MdLocalHospital className="site-log" />
            </Link>
            <h1
              className={`${
                isNavOpen ? "site-name-h1-active" : "site-name-h1"
              }`}
            >
              Vish
            </h1>
          </div>
          <h1
            className={`${isNavOpen ? "site-name-h1-active" : "site-name-h1"}`}
          >
            Lab <br /> 
          </h1>
        </div>
        {/* ------------nav itmes------------------- */}
        <div className="nav-list">
          <div>
            <NavLink className="nav-item-con" to="/appointments">
              <Link className="all-a-icons" to="/appointments">
                <HiOutlineClipboardList className="nav-item-icon" />
              </Link>
              <Link
                className={`${
                  isNavOpen ? "nav-item-con-a-active" : "nav-item-con-a"
                }`}
                to="/appointments"
              >
                Request Appointment
              </Link>
            </NavLink>
          </div>

          <div>
            <NavLink className="nav-item-con" to="/registration">
              <Link className="all-a-icons" to="/registration">
                <HiOutlinePencilAlt className="nav-item-icon" />
              </Link>
              <Link
                className={`${
                  isNavOpen ? "nav-item-con-a-active" : "nav-item-con-a"
                }`}
                to="/registration"
              >
                Registration Page
              </Link>
            </NavLink>
          </div>
          <div>
            <NavLink className="nav-item-con" to="/testdetails">
              <Link className="all-a-icons" to="/testdetails">
                <TbReportMedical className="nav-item-icon" />
              </Link>
              <Link
                className={`${
                  isNavOpen ? "nav-item-con-a-active" : "nav-item-con-a"
                }`}
                to="/testdetails"
              >
                Test results Page
              </Link>
            </NavLink>
          </div>
          <div>
            <NavLink className="nav-item-con" to="/payment">
              <Link className="all-a-icons" to="/payment">
                <RiSecurePaymentLine className="nav-item-icon" />
              </Link>
              <Link
                className={`${
                  isNavOpen ? "nav-item-con-a-active" : "nav-item-con-a"
                }`}
                to="/payment"
              >
                Payments Page
              </Link>
            </NavLink>
          </div>
          <div>
            <NavLink className="nav-item-con" to="/patients">
              <Link className="all-a-icons" to="/patients">
                <BsPeople className="nav-item-icon" />
              </Link>
              <Link
                className={`${
                  isNavOpen ? "nav-item-con-a-active" : "nav-item-con-a"
                }`}
                to="/patients"
              >
                Patients Details
              </Link>
            </NavLink>
          </div>
        </div>
        {/* ------------nav itmes--end----------------- */}
        <div className={`logout-con ${isNavOpen ? "logout-con-active" : ""}`}>
          <span className="admin-span">Welcome to Vish Labs </span>
          <Link
            className={`${isNavOpen ? "logout-active" : "logout"}`}
            to="/patientlogin"
          >
            <Link
              className={`${
                isNavOpen ? "nav-item-con-a-active" : "nav-item-con-a"
              }`}
              to="/patientlogin"
            >
              Log Out
            </Link>
            <Link className="all-a-icons" to="/patientlogin">
              <TbLogout className="nav-item-icon" />
            </Link>
          </Link>
        </div>

        {/* ------------------------------- */}
      </div>
    </nav>
  );
};
export default SideNav;
