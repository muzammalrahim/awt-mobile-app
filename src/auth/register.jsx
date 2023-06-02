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
   <div className="mt-10 flex justify-center p-5 py-10 ">
    <img className="object-sm-cover w-full object-center" src="/img/register.svg" alt="" />
   </div>
   <div>
    <form onSubmit={handleSubmit}>
     <CardBody className="flex flex-col gap-4">
      <Input label="Name" size="lg" value={name} onChange={(e) => setName(e.target.value)} />
      <Input
       required={false}
       type="email"
       label="Email"
       size="lg"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
      />
      <Input
       required
       type="text"
       label="Phone Number"
       size="lg"
       value={phoneNumber}
       onChange={(e) => setphoneNumber(e.target.value)}
      />
      <Input
       required
       type="text"
       label="Registration Number"
       size="lg"
       value={registrationNumber}
       onChange={(e) => setregistrationNumber(e.target.value)}
      />
      <Input
       required
       type="text"
       label="House Number"
       size="lg"
       value={houseNo}
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
      <Select label="Select Block" placeholder="Select Block" onChange={(e) => setblock(e)}>
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
      />
      <Input
       type="password"
       label="Confirm Password"
       size="lg"
       value={confirmPassword}
       onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <div className="-ml-2.5">
       <Checkbox label="I agree the Terms and Conditions" />
      </div>
     </CardBody>

     <CardFooter className="pt-0">
      <Button variant="gradient" fullWidth type="submit">
       Register
      </Button>
     </CardFooter>
    </form>
   </div>
  </div>
 );
};

export default Register;
