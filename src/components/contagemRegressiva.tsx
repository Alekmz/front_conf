import React, {useState, createRef} from "react";
import LoadingGIF from "../assets/loading.gif";



export const ContagemRegressiva = () => {
  const [timeToConf, setTimeToConf] = useState<string>("");
  const [daysTime, setDaysTime] = useState(0);
  const [timeTemp, setTimeTemp] = useState<string>("");
  const countDownDate = new Date("Jun 17, 2023 8:00:00").getTime();
  // const [isNavOpen, setIsNavOpen] = useState(true); //iniciando o menu móvel


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
    setTimeTemp((((((days * 100) / 167) * 230) / 100) + 210) + "");
    
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(xtime);
    }

  });

  if (!timeToConf) {
    return (
      <div className="flex flex-col items-center">
        <img src={LoadingGIF} alt="" width={113} height={256} />
      </div>
    );
  }
    return (
        <div>
              <div className="pl-6 md:pl-12 pt-6 pb-4">
                <h3 className="text-[#1d1d1d] text-xl font-bold italic">Contagem</h3>
              </div>
              <div id="countdown">
                <div id="circle">
                  <div id="dots"></div>
                  <div id="dots-two"></div>
                  <div id="dots-three"></div>
                  <svg>
                    <circle r="70" cx="70" cy="70"></circle>
                    <circle r="70" cx="70" cy="70" id="dd" style={{strokeDashoffset: timeTemp}}></circle>
                  </svg>
                  <div id="days" className="italic">{daysTime}</div>
                  <div id="days-text" className="italic"><p>Dias para<br></br> o evento</p></div>
                </div>
              </div>
            </div>
    )
}