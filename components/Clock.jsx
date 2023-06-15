import React, { useState, useEffect } from "react";
import { Clock as ClockIcon } from "phosphor-react";

const Clock = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      };
      setTime(now.toLocaleString("en-US", options));

      const dateOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      setDate(now.toLocaleDateString("en-US", dateOptions));
    };

    const timer = setInterval(updateDateTime, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="text-white flex gap-2 items-center">
      <ClockIcon className="h-8 w-8" />
      <div className="flex flex-col">
        <span className="text-4xl">{time}</span>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default Clock;
