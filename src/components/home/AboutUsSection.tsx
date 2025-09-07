import React from "react";
import { Description, Title } from "@/components/ui/Title";

const AboutUsSection = () => {
    return (
        <div className="flex my-10 lg:my-30 flex-col lg:flex-row justify-between items-center gap-10 ">
            <Title className="font-normal lg:text-5xl">About Us</Title>
            <Description className="max-w-2xl text-center lg:text-left">
                At KevalAI, we enable diamond merchants to compete and grow in a
                fast-changing market.Through intelligent, scalable digital
                tools, we simplify trade, reduce risks, and unlock new
                opportunities for sustainable success.
            </Description>
        </div>
    );
};

export default AboutUsSection;
