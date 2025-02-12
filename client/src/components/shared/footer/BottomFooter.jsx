import React from "react";
import Containar from "../../../layouts/Containar";
import logo from "../../../assets/logos/logoblack.png";
import { Link } from "react-router-dom";

const BottomFooter = () => {
  return (
    <footer className="font-inter py-5 bg-black px-10">
      <Containar>
        <div className="flex justify-center items-center">
          <p className="text-sm text-gray-400">
            ©2024 Pacific Bath, All rights reserved. Developed by
            <span className="text-white mx-2">
              <Link target="_blanck" to={"https://www.okobiz.com/"}>
                okobiz
              </Link>
            </span>
          </p>
        </div>
      </Containar>
    </footer>
  );
};

export default BottomFooter;
