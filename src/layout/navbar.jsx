import { Button } from "@material-tailwind/react";
import React from "react";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import useLogout from "../apiHooks/user/useLogout";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const logout = useLogout();
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex items-center justify-between ">
        <img src="img/awt_logo.png" alt="Logo" className="w-12 h-12" />
        <Button
          className="focus:outline-none bg-[#16A085]"
          onClick={() => logout()}
        >
          {/* <FontAwesomeIcon icon={faBars} size="lg" /> */}

          <ArrowRightOnRectangleIcon className="h-5 " />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
