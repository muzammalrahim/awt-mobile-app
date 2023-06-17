import { Button } from "@material-tailwind/react";
import { React, useState } from "react";
import { Route, useNavigate } from "react-router-dom";
import Login from "./login";
import SVG from "./SVG";
import LogoSvg from "./LogoSvg";
const Welcome = () => {
 const navigate = useNavigate();
 const [showLogin, setShowLogin] = useState(false);
 const handleRegisterClick = () => {
  navigate("/register");
 };
 const handleLoginClick = () => {
  setShowLogin(true);
 };
 return (
  <>
   <div className="container mx-auto px-4">
    <div className="flex justify-center mt-5">
     {/* <img src="img/new_logo.png" alt="Logo" className="h-[100px]" /> */}
     <LogoSvg />
    </div>
    <div className="mt-10 flex justify-center p-5 py-0 ">
     {/* <img className="object-sm-cover w-full object-center" src="/img/login-mob.svg" alt="" /> */}
     <SVG />
    </div>
    <div className="size flex justify-center py-2 text-[20px] font-medium">
     <span>Welcome To Complaint Portal</span>
    </div>
    <div className="size flex justify-center text-[14px] font-normal ">
     <span>Register you complains in a single click</span>
    </div>
    <div className="mt-10">
     {!showLogin && (
      <>
       <Button className="mb-5 h-[45px] w-full bg-[#16A085]" onClick={handleRegisterClick}>
        Register
       </Button>
       <Button
        variant="outlined"
        color="green"
        className="h-[45px] w-full text-[#16A085]"
        onClick={handleLoginClick}
       >
        Sign In
       </Button>
      </>
     )}
     {showLogin && <Login />}
    </div>
   </div>
  </>
 );
};

export default Welcome;
