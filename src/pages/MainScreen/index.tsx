import React, { useEffect, useState } from "react";

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
  }, 1000);

  return (
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
  );
};
