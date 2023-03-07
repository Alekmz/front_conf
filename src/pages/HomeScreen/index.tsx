import React from "react";
import { useNavigate } from "react-router-dom";
import { AnimationPage } from "../../animation/AnimationPage";

export const HomeScreen = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  const goToRegister = () => {
    navigate("/register");
  };
  return (
    <AnimationPage>
      <div className="bg-hero h-screen justify-around flex flex-col">
        <div className="w-full">
          <h1 className="text-[#e3e3e3] text-4xl font-bold ml-8 pt-5 drop-shadow-md">
            Ahh... <br />
            Você não vai <br />
            perder o melhor <br />
            evento do distrito <br />
            né?
          </h1>
        </div>
        <div className="w-full flex justify-center flex-col pb-14 items-center">
          <button
            className="bg-[#1d1d1d] items-center justify-center w-[80%] mb-3 text-lg rounded-3xl h-[50px] text-[#e3e3e3] drop-shadow-2xl"
            onClick={goToLogin}
          >
            Entrar
          </button>
          <h5 className="text-center text-[#e3e3e3] text-md font-bold mb-5 drop-shadow-md" onClick={goToRegister}>
            Me inscrever
          </h5>
          <span className="text-center text-[#e3e3e3] text-xs font-light	opacity-70 ">
            developed by
          </span>
          <span className="text-center text-[#e3e3e3] text-xs font-bold italic opacity-70 ">
            LEO Clube Omega Fraiburgo
          </span>
        </div>
      </div>
    </AnimationPage>
  );
};
