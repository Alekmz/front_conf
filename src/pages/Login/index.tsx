import React from "react";
import { Footer } from "../../components/footer";
import { Navigate, useNavigate } from "react-router-dom";
import { AnimationPage } from "../../animation/AnimationPage";
import Logo from "../../assets/LOGO.png";

export const Login = () => {
  const navigate = useNavigate();
  const login = () => {
    navigate("/main");
  };

  const goToRegister = () => {
    navigate("/register");
  };
  return (
    <AnimationPage>
      <div className="flex w-full justify-center text-center items-center flex-col my-4">
        <img src={Logo} alt="Logotipo conf ld8" width={300} height={300} />
        <div className="space-y-8 mt-10">
          <input
            type="email"
            placeholder="Email"
            className="bg-[#1d1d1d] w-[65%] border-b border-white focus:border-b focus:border-[#ff0ecf] outline-none text-gray-400"
          />
          <input
            type="password"
            placeholder="Senha"
            className="bg-[#1d1d1d] w-[65%] border-b border-white focus:border-b focus:border-[#ff0ecf] outline-none text-gray-400"
          />
          <button
            className="bg-[#ff0ecf] items-center justify-center w-[80%] mb-3 text-lg rounded-3xl h-[50px] text-[#e3e3e3] drop-shadow-2xl"
            onClick={login}
          >
            Avançar
          </button>
          <div className="grid grid-cols-2">
            <button className="text-center text-[#e3e3e3] text-sm font-bold mb-5 drop-shadow-md">
              Esqueci minha senha
            </button>
            <button
              className="justify-center text-center text-[#e3e3e3] text-sm font-bold mb-5 drop-shadow-md"
              onClick={goToRegister}
            >
              Não tenho registro
            </button>
          </div>
        </div>
        <Footer/>
      </div>
    </AnimationPage>
  );
};
