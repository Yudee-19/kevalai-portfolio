import React from "react";
import Marquee from "react-fast-marquee";

export const SponsorsMarquee = () => (
    <Marquee autoFill gradient={true} gradientColor="white" gradientWidth={300}>
        <h1 className=" my-10 mx-10 text-2xl text-neutral-500 font-semibold">
            Sponsors
        </h1>
    </Marquee>
);
