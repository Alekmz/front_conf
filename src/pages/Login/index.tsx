import React from "react";
import { Footer } from "../../components/footer";
import { Navigate, useNavigate } from "react-router-dom";
import Logo from "../../assets/LOGO.png";

export const Login = () => {
  const navigate = useNavigate();
  const login = () => {
    navigate("/main");
  };
  return (
    <div className="flex w-full justify-center text-center items-center flex-col">
      <img src={Logo} alt="Logotipo conf ld8" width={300} height={300} />
      <div className="space-y-10 mt-10">
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
          Entrar
        </button>
        <div>
          <h5 className="text-center text-[#e3e3e3] text-sm font-bold mb-5 drop-shadow-md">
            Esqueci minha senha
          </h5>
          <h5 className="text-center text-[#e3e3e3] text-sm font-bold mb-5 drop-shadow-md">
            Não tenho registro
          </h5>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
