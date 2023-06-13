import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AnimationPage } from "../../animation/AnimationPage";
import Logo from "../../assets/LOGO.png";
import { Footer } from "../../components/footer";

export const Register = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const login = () => {
    navigate("/main");
  };

  return (
    <AnimationPage>
      <div className="flex w-full justify-center text-center items-center flex-col my-4">
        <div className="space-y-8 w-full max-w-xl">
          <form
            onSubmit={login}
            className="space-y-8 mt-8 flex flex-col items-center"
          >
            <input
              type="email"
              required
              value={""}
              onChange={(e: any) => {}}
              placeholder="Email"
              className="bg-[#1d1d1d] w-[65%] border-b border-white focus:border-b focus:border-[#ff0ecf] outline-none text-gray-400"
            />
            {/* {isError ? (
              <span className="text-red-400">
                Verifique sua senha e/ou email!
              </span>
            ) : (
              ""
            )}
            {isLoading ? (
              <CircleNotch className="animate-spin" size={52} color="#ff0ecf" />
            ) : (
              <input
                className="cursor-pointer bg-[#ff0ecf] items-center justify-center w-[80%] mb-3 text-lg rounded-3xl h-[50px] text-[#e3e3e3] drop-shadow-2xl"
                type="submit"
                value="Avançar"
              />
            )} */}
            <input
              className="cursor-pointer bg-[#ff0ecf] items-center justify-center w-[80%] mb-3 text-lg rounded-3xl h-[50px] text-[#e3e3e3] drop-shadow-2xl"
              type="submit"
              value="Enviar"
            />
          </form>
        </div>
        <Footer />
      </div>
    </AnimationPage>
  );
};
