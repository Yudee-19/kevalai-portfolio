import React from "react";
import Marquee from "react-fast-marquee";

export const SponsorsMarquee = () => (
    <Marquee autoFill gradient={true} gradientColor="white" gradientWidth={300}>
        <h1 className=" my-10 mx-10 text-2xl text-neutral-500 font-semibold">
            Carat Logic
        </h1>
        <h1 className=" my-10 mx-10 text-2xl text-neutral-500 font-semibold">
            Donai Gems
        </h1>
        <h1 className=" my-10 mx-10 text-2xl text-neutral-500 font-semibold">
            Millennium Star
        </h1>
    </Marquee>
);
