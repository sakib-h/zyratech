"use client";
import CountUp from "react-countup";

const Counter = ({ end }) => {
    return (
        <CountUp
            start={0}
            end={end}
            delay={1}
            duration={3}
            useEasing={true}
            enableScrollSpy={true}
        />
    );
};

export default Counter;
