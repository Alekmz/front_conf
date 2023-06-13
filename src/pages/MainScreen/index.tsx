import React, { useEffect, useState } from "react";
import FlorMaca from "../../assets/flor-da-maca.jpg";
import Alojamento from "../../assets/alojamento.jpg";
import HotelRenar from "../../assets/hotel-renar.jpg";
import CasteloHotel from "../../assets/castelo.jpg";
import HotelFraiburgo from "../../assets/hotel-fraiburgo.jpg";
import Lago from "../../assets/lago.png";
import Parque from "../../assets/parque-rene.jpg";
import CasaCultura from "../../assets/casa-cultura.jpg";
import Self from "../../assets/self.png";
import { motion } from "framer-motion";
import { Nav } from "../../components/nav";
import { ContagemRegressiva } from "../../components/contagemRegressiva";
import { Footer } from "../../components/footer";
import CentroEventos from "../../assets/centro-eventos.jpg"

export const MainScreen = () => {
  const animations = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 100 },
    exit: { opacity: 0, x: 0 },
  };
  return (
    <motion.div
      initial={{ y: -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 300, opacity: 0 }}
    >
      <div className="h-screen overflow-y-auto font-montserrat">
        {/*Head*/}
        <div className="flex lg:w-[900px] m-auto justify-between items-center">
          <div className="text-left pt-4 pb-4 ml-5">
            <h5 className=" text-white text-sm font-medium drop-shadow-md">
              Olá, bem-vindo(a)!
              <br></br>
              XXIV Conferência LEO LD-8
            </h5>
            {/* <a href="#" className="max-lg:hidden text-right text-[#e3e3e3] text-sm font-medium drop-shadow-md hover:text-[#91c7f3] underline">Meu Perfil</a> */}
          </div>
          <Nav /> {/* Componente nav */}
        </div>
        {/*Main */}
        <main className="bg-[#ffffff] flex justify-center rounded-t-2xl ">
          <div className="md:w-[768px] h-full overflow-y-auto">
            <ContagemRegressiva /> {/* Temporizador contagem regressiva*/}
            {/* Cards Locais do evento*/}
            <div className="px-2 ">
              <div className="md:flex md:justify-center py-2">
                <h3 className="font-montserrat text-[#1d1d1d] text-lg font-bold italic">
                  Locais do Evento
                </h3>
              </div>
              <div className="flex md:justify-center gap-6 py-3 px-3 overflow-x-auto overflow-y-hidden">
                <a href="https://www.google.com/maps/dir//CENTRO,+Fraiburgo+-+SC,+89580-000/@-27.0287839,-50.9223836,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94e13bd1f113dac1:0x750985b14079ea00!2m2!1d-50.9193012!2d-27.0261132">
                  <div className="bg-[#ffffff] rounded-lg w-[210px] h-[195px] shadow-[0px_10px_20px_rgba(0,0,0,0.19),0px_6px_6px_rgba(0,0,0,0.23)]">
                    <div className="w-[210px] h-[110px]">
                      <img src={FlorMaca} className="rounded-t-lg w-full h-full object-cover" alt="Foto da fachada do flor da maça" />
                    </div>
                    <div className=" text-[#1d1d1d] px-4 py-2">
                      <h3 className="font-bold">Conferência - Flor da Maça</h3>
                      <h3 className="flex items-center text-sm space-x-1">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="#028cff" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"></path>
                        </svg>
                        Sábado e domingo</h3>
                    </div>
                  </div>
                </a>
                <a href="https://www.google.com/maps/dir//Self+Club+-+Rua+Castelo+Branco+-+CENTRO,+Fraiburgo+-+SC/@-27.0278716,-50.9228293,16.75z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94e13bd1b7a576e3:0x76fa7b692e99f492!2m2!1d-50.9197256!2d-27.0279586?hl=pt-BR">
                  <div className="bg-[#ffffff] rounded-lg w-[210px] h-[195px] shadow-[0px_10px_20px_rgba(0,0,0,0.19),0px_6px_6px_rgba(0,0,0,0.23)]">
                    <div className="w-[210px] h-[110px]">
                      <img src={Self} className="rounded-t-lg w-full h-full object-cover" />
                    </div>
                    <div className=" text-[#1d1d1d] px-4 py-2">
                      <h3 className="font-bold">Festa - Self Club</h3>
                      <h3 className="flex pt-2 items-center text-sm">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="#028cff" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
                        </svg>
                        Sábado</h3>
                    </div>
                  </div>
                </a>
                <a href="https://www.google.com/maps/dir//Eeb+Goncalves+Dias+-+Rua+Padre+Bi%C3%A1gio+Simonetti+-+CENTRO,+Fraiburgo+-+SC/@-27.0243487,-50.9247684,17.75z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94e13bd36179e79d:0x7c823a0f25fd61df!2m2!1d-50.9231958!2d-27.0234359?hl=pt-BR">
                  <div className="bg-[#ffffff] rounded-lg w-[210px] h-[195px] shadow-[0px_10px_20px_rgba(0,0,0,0.19),0px_6px_6px_rgba(0,0,0,0.23)]">
                    <div className="w-[210px] h-[110px]">
                      <img src={Alojamento} className="rounded-t-lg w-full h-full object-cover" />
                    </div>
                    <div className=" text-[#1d1d1d] px-4 py-2">
                      <h3 className="font-bold">Alojamento - Gonçalves Dias</h3>
                      <h3 className="flex items-center text-sm space-x-1">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="#028cff" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                        </svg>
                        Sábado e domingo</h3>
                    </div>
                  </div>
                </a>
                <a href="https://www.google.com/maps/dir/-27.009258,-50.9314992/centro+de+eventos/@-27.0275506,-50.9296756,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94e13bd53ca0e969:0x3e3b20f36747c604!2m2!1d-50.9270382!2d-27.0240938?entry=ttu">
                  <div className="bg-[#ffffff] rounded-lg w-[210px] h-[195px] shadow-[0px_10px_20px_rgba(0,0,0,0.19),0px_6px_6px_rgba(0,0,0,0.23)]">
                    <div className="w-[210px] h-[110px]">
                      <img src={CentroEventos} className="rounded-t-lg w-full h-full object-cover" />
                    </div>
                    <div className=" text-[#1d1d1d] px-4 py-2">
                      <h3 className="font-bold">Alojamento - Centro de Eventos</h3>
                      <h3 className="flex items-center text-sm space-x-1">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="#028cff" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                        </svg>
                        Sábado e domingo</h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            {/* Cards Hotéis*/}
            <div className="px-2">
              <div className="md:flex md:justify-center pt-4 pb-2">
                <h3 className="font-montserrat text-[#1d1d1d] text-lg font-bold italic">
                  Hotéis
                </h3>
              </div>
              <div className="flex md:justify-center gap-6 py-3 px-3 overflow-x-auto overflow-y-hidden">
                <a href="https://www.google.com/maps/dir//hotel+renar/@-27.0414905,-50.9512001,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94e13bd43546b007:0xacf5bcb3b42d1c85!2m2!1d-50.9279008!2d-27.0268224">
                  <div className="bg-[#ffffff] rounded-lg w-[210px] h-[170px] shadow-[0px_10px_20px_rgba(0,0,0,0.19),0px_6px_6px_rgba(0,0,0,0.23)]">
                    <div className="w-[210px] h-[110px]">
                      <img src={HotelRenar} className="rounded-t-lg w-full h-full object-cover" alt="Foto do Hotel Renar" />
                    </div>
                    <div className="flex flex-col justify-center text-[#1d1d1d] px-4 py-2">
                      <h3 className="font-bold">Hotel Renar</h3>
                      <div className="flex">
                        <svg className="w-6 h-6" fill="#e8c115" stroke="#e8c115" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                        </svg>
                        <svg className="w-6 h-6" fill="#e8c115" stroke="#e8c115" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                        </svg>
                        <svg className="w-6 h-6" fill="#e8c115" stroke="#e8c115" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                        </svg>
                        <svg className="w-6 h-6" fill="#e8c115" stroke="#e8c115" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                        </svg>
                        <svg className="w-6 h-6" fill="#e8c115" stroke="#e8c115" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="https://www.google.com/maps/dir//Hotel+Fraiburgo+-+Av.+Videira,+1185+-+CENTRO,+Fraiburgo+-+SC,+89580-000/@-27.0186424,-51.0058111,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94e1398433a5beb3:0x7c1e7bef0d1d563e!2m2!1d-50.9357671!2d-27.0185706?hl=pt-BR">
                  <div className="bg-[#ffffff] rounded-lg w-[210px] h-[170px] shadow-[0px_10px_20px_rgba(0,0,0,0.19),0px_6px_6px_rgba(0,0,0,0.23)]">
                    <div className="w-[210px] h-[110px]">
                      <img src={HotelFraiburgo} className="rounded-t-lg w-full h-full object-cover" alt="Foto do Hotel Fraioburgo" />
                    </div>
                    <div className="flex flex-col justify-center text-[#1d1d1d] px-4 py-2">
                      <h3 className="font-bold">Hotel Fraiburgo</h3>
                      <div className="flex">
                        <svg className="w-6 h-6" fill="#e8c115" stroke="#e8c115" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                        </svg>
                        <svg className="w-6 h-6" fill="#e8c115" stroke="#e8c115" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                        </svg>
                        <svg className="w-6 h-6" fill="#e8c115" stroke="#e8c115" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                        </svg>
                        <svg className="w-6 h-6" fill="#e8c115" stroke="#e8c115" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                        </svg>
                        <svg className="w-6 h-6" fill="#e8c115" stroke="#e8c115" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="https://www.google.com/maps/dir//Castelo+Boutique+Hotel+-+Av.+Paran%C3%A1,+247+-+Jardim+DAS+HORT%C3%8ANCIAS,+Fraiburgo+-+SC,+89580-000/@-27.0251305,-50.9975724,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94e13bd5127913bf:0xb739a9682b727705!2m2!1d-50.9275321!2d-27.0251478?hl=pt-BR">
                  <div className="bg-[#ffffff] rounded-lg w-[210px] h-[170px] shadow-[0px_10px_20px_rgba(0,0,0,0.19),0px_6px_6px_rgba(0,0,0,0.23)]">
                    <div className="w-[210px] h-[110px]">
                      <img src={CasteloHotel} className="rounded-t-lg w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col justify-center text-[#1d1d1d] px-4 py-2">
                      <h3 className="font-bold">Castelo Hotel</h3>
                      <div className="flex">
                        <svg className="w-6 h-6" fill="#e8c115" stroke="#e8c115" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                        </svg>
                        <svg className="w-6 h-6" fill="#e8c115" stroke="#e8c115" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                        </svg>
                        <svg className="w-6 h-6" fill="#e8c115" stroke="#e8c115" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                        </svg>
                        <svg className="w-6 h-6" fill="#e8c115" stroke="#e8c115" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                        </svg>
                        <svg className="w-6 h-6" fill="#e8c115" stroke="#e8c115" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            {/* Pontos turisticos*/}
            <div className="px-2 mb-6">
              <div className="md:flex md:justify-center pt-4 pb-2">
                <h3 className="font-montserrat text-[#1d1d1d] text-lg font-bold italic">
                  Pontos Turísticos
                </h3>
              </div>
              <div className="flex md:justify-center gap-6 py-3 px-3 overflow-x-auto overflow-y-hidden">
                <a href="https://www.google.com/maps/dir//lago+das+arauc%C3%A1rias/@-27.0414905,-50.9512001,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94e13bd689dde8b9:0x9ca97fd0735b5741!2m2!1d-50.9262969!2d-27.0287141">
                  <div className="bg-[#ffffff] rounded-lg w-[210px] h-[170px] shadow-[0px_10px_20px_rgba(0,0,0,0.19),0px_6px_6px_rgba(0,0,0,0.23)]">
                    <div className="w-[210px] h-[110px]">
                      <img src={Lago} className="rounded-t-lg w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col pt-4 text-[#1d1d1d] px-4 py-2">
                      <h3 className="font-bold">Lago das Araucárias</h3>
                      <div className="flex">
                      </div>
                    </div>
                  </div>
                </a>
                <a href="https://www.google.com/maps/dir//parque+rene+frey/@-27.038378,-50.9488747,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94e13a2b73895071:0x95bd89e162cdddab!2m2!1d-50.9242517!2d-27.0198825">
                  <div className="bg-[#ffffff] rounded-lg w-[210px] h-[170px] shadow-[0px_10px_20px_rgba(0,0,0,0.19),0px_6px_6px_rgba(0,0,0,0.23)]">
                    <div className="w-[210px] h-[110px]">
                      <img src={Parque} className="rounded-t-lg w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col justify-center text-[#1d1d1d] px-4 py-2">
                      <h3 className="font-bold">Parque Ecológico René Frey</h3>
                      <div className="flex">
                      </div>
                    </div>
                  </div>
                </a>
                <a href="https://www.google.com/maps/dir//parque+lydia+frey/@-27.0402471,-50.9492843,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94e13bd41cf372cf:0x8a5ea2838a761ff0!2m2!1d-50.9245042!2d-27.0270532">
                  <div className="bg-[#ffffff] rounded-lg w-[210px] h-[170px] shadow-[0px_10px_20px_rgba(0,0,0,0.19),0px_6px_6px_rgba(0,0,0,0.23)]">
                    <div className="w-[210px] h-[110px]">
                      <img src={CasaCultura} className="rounded-t-lg w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col justify-center text-[#1d1d1d] px-4 py-2">
                      <h3 className="font-bold">Casa da Cultura Lydia Frey</h3>
                      <div className="flex">
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </motion.div>
  );
};
