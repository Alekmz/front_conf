import React, { useEffect, useState } from "react";
import { AnimationPage } from "../../animation/AnimationPage";
import LoadingGIF from "../../assets/loading.gif";
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

export const MainScreen = () => {
  const [timeToConf, setTimeToConf] = useState<string>("");
  const [daysTime, setDaysTime] = useState(0);
  const [hoursTime, setHoursTime] = useState(0);
  const [secondsTime, setSecondsTime] = useState(0);
  const [timeTemp, setTimeTemp] = useState<string>("");
  const countDownDate = new Date("Jun 17, 2023 8:00:00").getTime();

  let dd = document.getElementById('dd');

  const xtime = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    // Display the result in the element with id="demo"
    setTimeToConf(days + "d " + hours + "hr " + minutes + "min ");
    setDaysTime(days);
    setHoursTime(hours);
    setSecondsTime(minutes);
    setTimeTemp((((((days * 100) / 167) * 230) / 100) + 210) + "")

    dd!.style.strokeDashoffset = timeTemp;

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(xtime);
    }

  }, 2000);

  if (!timeToConf) {
    return (
      <div className="flex flex-col items-center">
        <img src={LoadingGIF} alt="" width={113} height={256} />
      </div>
    );
  }
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
        <div className="pt-5">
          <h5 className="text-center text-[#e3e3e3] text-sm font-medium mb-5 drop-shadow-md">
            Olá, Fulano!
            <br></br>
            XXIV Conferência LEO LD-8
          </h5>
        </div>
        <div className="bg-[#ffffff] rounded-t-2xl h-full overflow-y-auto">
          {/* Temporizador contagem regressiva*/}
          <div>
            <div className="pl-6 pt-6 pb-4">
              <h3 className="text-[#1d1d1d] text-xl font-bold italic">Contagem</h3>
            </div>
            <div id="countdown">
              <div id="circle">
                <div id="dots"></div>
                <div id="dots-two"></div>
                <div id="dots-three"></div>
                <svg>
                  <circle r="70" cx="70" cy="70"></circle>
                  <circle r="70" cx="70" cy="70" id="dd"></circle>
                </svg>
                <div id="days" className="italic">{daysTime}</div>
                <div id="days-text" className="italic"><p>Dias para<br></br> o evento</p></div>
              </div>
            </div>
          </div>
          {/* Cards Locais do evento*/}
          <div className="px-2">
            <div className="py-2">
              <h3 className="font-montserrat text-[#1d1d1d] text-lg font-bold italic">
                Locais do Evento
              </h3>
            </div>
            <div className="flex gap-6 py-3 px-3 overflow-x-auto overflow-y-hidden">
              <div className="bg-[#ffffff] rounded-lg w-[210px] h-[170px] shadow-[0px_10px_20px_rgba(0,0,0,0.19),0px_6px_6px_rgba(0,0,0,0.23)]">
                <div className="w-[210px] h-[110px]">
                  <img src={FlorMaca} className="rounded-t-lg w-full h-full object-cover" />
                </div>
                <div className=" text-[#1d1d1d] px-4 py-2">
                  <h3 className="font-bold">Conferência</h3>
                  <h3 className="flex items-center text-sm space-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="#028cff" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"></path>
                    </svg>
                    Sábado e domingo</h3>
                </div>
              </div>
              <div className="bg-[#ffffff] rounded-lg w-[210px] h-[170px] shadow-[0px_10px_20px_rgba(0,0,0,0.19),0px_6px_6px_rgba(0,0,0,0.23)]">
                <div className="w-[210px] h-[110px]">
                  <img src={Self} className="rounded-t-lg w-full h-full object-cover" />
                </div>
                <div className=" text-[#1d1d1d] px-4 py-2">
                  <h3 className="font-bold">Festa</h3>
                  <h3 className="flex items-center text-sm space-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="#028cff" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
                    </svg>
                    Sábado</h3>
                </div>
              </div>
              <div className="bg-[#ffffff] rounded-lg w-[210px] h-[170px] shadow-[0px_10px_20px_rgba(0,0,0,0.19),0px_6px_6px_rgba(0,0,0,0.23)]">
                <div className="w-[210px] h-[110px]">
                  <img src={Alojamento} className="rounded-t-lg w-full h-full object-cover" />
                </div>
                <div className=" text-[#1d1d1d] px-4 py-2">
                  <h3 className="font-bold">Alojamento</h3>
                  <h3 className="flex items-center text-sm space-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="#028cff" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                    </svg>
                    Sábado e domingo</h3>
                </div>
              </div>
            </div>
          </div>
          {/* Cards Hotéis*/}
          <div className="px-2">
            <div className="pt-4 pb-2">
              <h3 className="font-montserrat text-[#1d1d1d] text-lg font-bold italic">
                Hotéis
              </h3>
            </div>
            <div className="flex gap-6 py-3 px-3 overflow-x-auto overflow-y-hidden">
              <div className="bg-[#ffffff] rounded-lg w-[210px] h-[170px] shadow-[0px_10px_20px_rgba(0,0,0,0.19),0px_6px_6px_rgba(0,0,0,0.23)]">
                <div className="w-[210px] h-[110px]">
                  <img src={HotelRenar} className="rounded-t-lg w-full h-full object-cover" />
                </div>
                <div className="flex flex-col justify-center text-[#1d1d1d] px-4 py-2">
                  <h3 className="font-bold">Hotel Renar</h3>
                  <div className="flex">
                    <svg className="w-6 h-6" fill="#e8c115" stroke="#e8c115" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                    </svg>
                    <svg className="w-6 h-6" fill="#e8c115" stroke="#e8c115" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                    </svg>
                    <svg className="w-6 h-6" fill="#e8c115" stroke="#e8c115" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                    </svg>
                    <svg className="w-6 h-6" fill="#e8c115" stroke="#e8c115" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                    </svg>
                    <svg className="w-6 h-6" fill="#e8c115" stroke="#e8c115" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-[#ffffff] rounded-lg w-[210px] h-[170px] shadow-[0px_10px_20px_rgba(0,0,0,0.19),0px_6px_6px_rgba(0,0,0,0.23)]">
                <div className="w-[210px] h-[110px]">
                  <img src={HotelFraiburgo} className="rounded-t-lg w-full h-full object-cover" />
                </div>
                <div className="flex flex-col justify-center text-[#1d1d1d] px-4 py-2">
                  <h3 className="font-bold">Hotel Fraiburgo</h3>
                  <div className="flex">
                    <svg className="w-6 h-6" fill="#e8c115" stroke="#e8c115" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                    </svg>
                    <svg className="w-6 h-6" fill="#e8c115" stroke="#e8c115" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                    </svg>
                    <svg className="w-6 h-6" fill="#e8c115" stroke="#e8c115" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                    </svg>
                    <svg className="w-6 h-6" fill="#e8c115" stroke="#e8c115" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-[#ffffff] rounded-lg w-[210px] h-[170px] shadow-[0px_10px_20px_rgba(0,0,0,0.19),0px_6px_6px_rgba(0,0,0,0.23)]">
                <div className="w-[210px] h-[110px]">
                  <img src={CasteloHotel} className="rounded-t-lg w-full h-full object-cover" />
                </div>
                <div className="flex flex-col justify-center text-[#1d1d1d] px-4 py-2">
                  <h3 className="font-bold">Castelo Hotel</h3>
                  <div className="flex">
                    <svg className="w-6 h-6" fill="#e8c115" stroke="#e8c115" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                    </svg>
                    <svg className="w-6 h-6" fill="#e8c115" stroke="#e8c115" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                    </svg>
                    <svg className="w-6 h-6" fill="#e8c115" stroke="#e8c115" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                    </svg>
                    <svg className="w-6 h-6" fill="#e8c115" stroke="#e8c115" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                    </svg>
                    <svg className="w-6 h-6" fill="#e8c115" stroke="#e8c115" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Pontos turisticos*/}
          <div className="px-2 mb-4">
            <div className="pt-4 pb-2">
              <h3 className="font-montserrat text-[#1d1d1d] text-lg font-bold italic">
                Pontos Turísticos
              </h3>
            </div>
            <div className="flex gap-6 py-3 px-3 overflow-x-auto overflow-y-hidden">
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
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};
