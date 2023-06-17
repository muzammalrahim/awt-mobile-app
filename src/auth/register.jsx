import {
 Button,
 CardBody,
 CardFooter,
 Checkbox,
 Input,
 Option,
 Select,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import useRegister from "../apiHooks/user/useRegister";
import LogoSvg from "./LogoSvg";
const Register = () => {
 const signin = true;
 const registerUser = useRegister();
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [phoneNumber, setphoneNumber] = useState("");
 const [registrationNumber, setregistrationNumber] = useState("");
 const [houseNo, sethouseNo] = useState("");
 const [streetNo, setstreetNo] = useState("");
 const [block, setblock] = useState("");
 const [password, setPassword] = useState("");
 const [confirmPassword, setConfirmPassword] = useState("");
 const handleSubmit = (e) => {
  e.preventDefault();
  // Getting Category Id
  // const { _id } = data?.find((o) => o.name === category);
  registerUser(
   {
    name,
    email,
    password,
    confirmPassword,
    phoneNumber,
    registrationNumber,
    houseNo,
    streetNo,
    block,
    role: "Resident",
   },
   signin
  );
  // Reset the form fields
  setPassword("");
  setConfirmPassword("");
 };
 return (
  <div className="container mx-auto px-4">
   <div className="flex justify-center mt-5">
    {/* <img src="img/awt_logo.jpg" alt="Logo" className="h-[100px]" /> */}
    <LogoSvg />
   </div>
   {/* <div className="mt-10 flex justify-center p-5 py-10 ">
        <img
          className="object-sm-cover w-full object-center"
          src="/img/register.svg"
          alt=""
        />
      </div> */}
   <div>
    <form onSubmit={handleSubmit}>
     <CardBody className="flex flex-col gap-4">
      <Input
       label="Name"
       size="lg"
       value={name}
       color="teal"
       onChange={(e) => setName(e.target.value)}
      />
      <Input
       required={false}
       type="email"
       label="Email"
       size="lg"
       value={email}
       color="teal"
       onChange={(e) => setEmail(e.target.value)}
      />
      <Input
       required
       type="text"
       label="Phone Number"
       size="lg"
       value={phoneNumber}
       color="teal"
       onChange={(e) => setphoneNumber(e.target.value)}
      />
      <Input
       required
       type="text"
       label="Registration Number"
       size="lg"
       value={registrationNumber}
       color="teal"
       onChange={(e) => setregistrationNumber(e.target.value)}
      />
      <Input
       required
       type="text"
       label="House Number"
       size="lg"
       value={houseNo}
       color="teal"
       onChange={(e) => sethouseNo(e.target.value)}
      />
      <Input
       required
       type="text"
       label="Street Number"
       size="lg"
       value={streetNo}
       onChange={(e) => setstreetNo(e.target.value)}
      />
      <Select
       label="Select Block"
       placeholder="Select Block"
       onChange={(e) => setblock(e)}
       color="teal"
      >
       <Option value="Block A">Block A</Option>
       <Option value="Block B">Block B</Option>
       <Option value="Block C">Block C</Option>
       <Option value="Block D">Block D</Option>
       <Option value="Block E">Block E</Option>
       <Option value="Block F">Block F</Option>
       <Option value="Block G">Block G</Option>
       <Option value="Block H">Block H</Option>
      </Select>

      <Input
       type="password"
       label="Password"
       size="lg"
       value={password}
       onChange={(e) => setPassword(e.target.value)}
       color="teal"
      />
      <Input
       type="password"
       label="Confirm Password"
       size="lg"
       value={confirmPassword}
       onChange={(e) => setConfirmPassword(e.target.value)}
       color="teal"
      />

      <div className="-ml-2.5">
       <Checkbox label="I agree the Terms and Conditions" color="teal" />
      </div>
     </CardBody>

     <CardFooter className="pt-0">
      <Button variant="gradient" fullWidth type="submit" color="teal">
       Register
      </Button>
     </CardFooter>
    </form>
   </div>
  </div>
 );
};

export default Register;
