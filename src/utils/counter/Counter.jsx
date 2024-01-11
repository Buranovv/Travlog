import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = ({ number }) => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      {counterOn && (
        <CountUp
          duration={2}
          className="counter"
          start={`${number / 2}`}
          end={number}
        />
      )}
    </ScrollTrigger>
  );
};

export default Counter;
