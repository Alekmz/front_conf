import React, { useState } from "react";
import { Footer } from "../../components/footer";
import { Navigate, useNavigate } from "react-router-dom";
import { AnimationPage } from "../../animation/AnimationPage";
import Logo from "../../assets/LOGO.png";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { CircleNotch } from "@phosphor-icons/react";

export const Login = () => {
  const navigate = useNavigate();

  const goToResetPassword = () => {
    navigate("/reset-password");
  };

  const goMain = () => {
    navigate("/main");
  };

  return (
    <AnimationPage>
      <div className="flex w-full justify-center text-center items-center flex-col my-4">
        <img src={Logo} alt="Logotipo conf ld8" width={300} height={300} />
        <div className="space-y-8 w-full max-w-xl">
                <input
                className="cursor-pointer bg-[#ff0ecf] items-center justify-center w-[80%] mb-3 text-lg rounded-3xl h-[50px] text-[#e3e3e3] drop-shadow-2xl"
                type="submit"
                value="Avançar"
                onClick={goMain}></input>
        </div>
        <Footer />
      </div>
    </AnimationPage>
  );
};
