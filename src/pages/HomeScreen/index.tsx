import React from "react";
import { Footer } from "../../components/footer";
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
    <div className="bg-hero h-screen">
      <div className="w-full">
        <h1 className="text-[#e3e3e3] text-4xl font-bold mt-8 ml-7 drop-shadow-md">
          Ahh... <br />
          Você não vai <br />
          perder o melhor <br />
          evento do distrito <br />
          né?
        </h1>
      </div>
      <div className="w-full flex justify-center flex-col items-center h-full">
        <button className="bg-[#1d1d1d] items-center justify-center w-[80%] mb-3 text-lg rounded-3xl h-[50px] text-[#e3e3e3] drop-shadow-2xl" onClick={goToLogin}>
          Viva essa experiência
        </button>
        <h5 className="text-center text-[#e3e3e3] text-md font-bold mb-5 drop-shadow-md">
          Me inscrever
        </h5>
        <Footer/>
      </div>
      
    </div>
  );
};
