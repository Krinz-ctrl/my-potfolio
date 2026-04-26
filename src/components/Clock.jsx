import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      let h = now.getHours();
      let m = now.getMinutes();
      let s = now.getSeconds();

      if (m < 10) m = "0" + m;
      if (s < 10) s = "0" + s;

      setTime(`${h}:${m}:${s}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div className="clock">{time}</div>;
}

export default Clock;
