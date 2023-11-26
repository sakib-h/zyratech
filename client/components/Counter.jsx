"use client";
import CountUp from "react-countup";

const Counter = ({ end }) => {
    return (
        <CountUp
            start={0}
            end={end}
            delay={0.5}
            duration={2}
            useEasing={true}
            enableScrollSpy={true}
        />
    );
};

export default Counter;
