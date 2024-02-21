import { useEffect, useState } from "react";
import styles from "./Clock.module.scss";
function timeDifference(startDate, endDate) {
  let difference = Math.abs(endDate - startDate);

  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}
export default function Clock() {
  const [time, setTime] = useState(() => new Date(2024, 2, 31));

  const { days, hours, minutes, seconds } = timeDifference(time, new Date());
  useEffect(
    function () {
      const id = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);

      return () => clearInterval(id);
    },
    [time]
  );
  return (
    <div className={`${styles.clockWrapper}`}>
      <div className={`${styles.clockData}  d-flex align-items-center gap-3 `}>
        <div>
          <h1>{days} </h1>
          <h5>Days</h5>
        </div>
        <span>:</span>
        <div>
          <h1>{hours} </h1>
          <h5>Hours</h5>
        </div>
        <span>:</span>
        <div>
          <h1>{minutes} </h1>
          <h5>Minutes</h5>
        </div>
        <span>:</span>
        <div>
          <h1>{seconds} </h1>
          <h5>Seconds</h5>
        </div>
      </div>
    </div>
  );
}
