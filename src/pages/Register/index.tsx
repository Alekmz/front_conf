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
      <div className="flex w-full justify-center text-center items-center flex-col">
        <h1 className="text-[#e3e3e3] text-4xl font-bold pt-5 drop-shadow-md">
          Cadastro
        </h1>
        <div className="space-y-8 mt-10 mb-2">
          <input
            type="text"
            placeholder="Nome"
            className="bg-[#1d1d1d] w-[65%] border-b border-white focus:border-b focus:border-[#ff0ecf] outline-none text-gray-400"
          />
          <input
            type="password"
            placeholder="Senha"
            className="bg-[#1d1d1d] w-[65%] border-b border-white focus:border-b focus:border-[#ff0ecf] outline-none text-gray-400"
          />
          <input
            type="password"
            placeholder="Repita a sua senha"
            className="bg-[#1d1d1d] w-[65%] border-b border-white focus:border-b focus:border-[#ff0ecf] outline-none text-gray-400"
          />
          <input
            type="E-mail"
            placeholder="Email"
            className="bg-[#1d1d1d] w-[65%] border-b border-white focus:border-b focus:border-[#ff0ecf] outline-none text-gray-400"
          />
          <input
            type="text"
            placeholder="Observação"
            className="bg-[#1d1d1d] w-[65%] border-b border-white focus:border-b focus:border-[#ff0ecf] outline-none text-gray-400"
          />
          <button
            className="bg-[#ff0ecf] items-center justify-center w-[80%] mb-3 text-lg rounded-3xl h-[50px] text-[#e3e3e3] drop-shadow-2xl"
            onClick={login}
          >
            Cadastrar
          </button>
          <button
            className="items-center justify-center w-[30%] mb-3 text-lg text-[#e3e3e3]"
            onClick={goToLogin}
          >
            Voltar
          </button>
        </div>
        <Footer />
      </div>
    </AnimationPage>
  );
};
