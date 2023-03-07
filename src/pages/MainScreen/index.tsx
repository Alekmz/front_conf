import React, { useEffect, useState } from "react";
import { AnimationPage } from "../../animation/AnimationPage";
import LoadingGIF from "../../assets/loading.gif";
import { motion } from "framer-motion";

export const MainScreen = () => {
  const [timeToConf, setTimeToConf] = useState<string>("");
  const countDownDate = new Date("Jun 17, 2023 8:00:00").getTime();

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
    setTimeToConf(days + "d " + hours + "h " + minutes + "m ");

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
      <div>
        <h5 className="text-center text-[#e3e3e3] text-sm font-medium mb-5 drop-shadow-md">
          Olá, Fulano!
        </h5>
        <h5 className="text-center text-[#e3e3e3] text-sm font-bold mb-5 drop-shadow-md">
          {timeToConf}
        </h5>
        <h5 className="text-center text-[#e3e3e3] text-sm font-bold mb-5 drop-shadow-md">
          Para o evento
        </h5>
      </div>
    </motion.div>
  );
};
