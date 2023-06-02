import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import React from "react";
import useLogin from "../apiHooks/user/useLogin";

const Login = () => {
 const loginUser = useLogin();
 const [number, setnumber] = useState("");
 const [password, setPassword] = useState("");
 const handleSubmit = (e) => {
  e.preventDefault();

  if (number.trim() === "" || password.trim() === "") {
   toast.error("Please enter your Number and password");
   return;
  }
  loginUser({ phoneNumber: number, password });
  // setPassword("");
 };
 return (
  <>
   <div className="">
    <form onSubmit={handleSubmit}>
     <Input
      className=""
      type="text"
      color="teal"
      label="Phone"
      value={number}
      onChange={(e) => setnumber(e.target.value)}
     />
     <div className="mt-5"></div>
     <Input
      className=""
      type="password"
      color="teal"
      label="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
     />
     <div className="mt-5"></div>
     <Button type="submit" className="bg-[#16A085]">
      Sign In
     </Button>
    </form>
   </div>
  </>
 );
};

export default Login;
