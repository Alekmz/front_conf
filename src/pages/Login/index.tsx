import React, { useState } from "react";
import { Footer } from "../../components/footer";
import { Navigate, useNavigate } from "react-router-dom";
import { AnimationPage } from "../../animation/AnimationPage";
import Logo from "../../assets/LOGO.png";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { CircleNotch } from "@phosphor-icons/react";

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const login = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    await axios
      .post("http://localhost:3000/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(jwt_decode(res.data.token));
        navigate("/main");
      })
      .catch((e) => {
        setIsLoading(false);
        setIsError(true);
        console.log(e);
      });
    // navigate("/main");
  };

  const goToRegister = () => {
    navigate("/register");
  };
  return (
    <AnimationPage>
      <div className="flex w-full justify-center text-center items-center flex-col my-4">
        <img src={Logo} alt="Logotipo conf ld8" width={300} height={300} />
        <div className="space-y-8 w-full max-w-xl">
          <form
            onSubmit={login}
            className="space-y-8 mt-8 flex flex-col items-center"
          >
            <input
              type="email"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              placeholder="Email"
              className="bg-[#1d1d1d] w-[65%] border-b border-white focus:border-b focus:border-[#ff0ecf] outline-none text-gray-400"
            />
            <input
              type="password"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
              placeholder="Senha"
              className="bg-[#1d1d1d] w-[65%] border-b border-white focus:border-b focus:border-[#ff0ecf] outline-none text-gray-400"
            />
            {isError ? (
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
            )}

            <button className="text-center text-[#e3e3e3] text-sm font-bold mb-5 drop-shadow-md">
              Esqueci minha senha
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </AnimationPage>
  );
};
