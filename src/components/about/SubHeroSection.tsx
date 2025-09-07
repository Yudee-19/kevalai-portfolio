import Image from "next/image";
import React from "react";
import Card from "../ui/Card";
import { Description, Title } from "../ui/Title";
import Container from "../ui/Container";

const SubHeroSection = () => {
    return (
        <section>
            <Container>
                <div className="flex flex-col md:flex-row items-center justify-around gap-10 mt-10 bg-white">
                    <Image
                        src="/images/aboutus/hero2.png"
                        alt="Hero Image"
                        width={500}
                        height={450}
                        className="rounded-lg "
                    />
                    <div className=" flex flex-col items-center justify-center gap-2 ">
                        <Card className="p-5 shadow-none w-full ">
                            <div className=" flex justify-start items-center ">
                                <p className=" text-xl text-primary font-semibold text-left">
                                    Tools:
                                </p>
                                <p className="text-gray-500 font-light text-left ml-2 text-sm">
                                    B2B e-commerce, inventory, and AI/ML
                                    insights.
                                </p>
                            </div>
                        </Card>
                        <Card className="p-5 shadow-none ">
                            <div className=" flex justify-start items-center w-full">
                                <p className=" text-xl text-primary font-semibold text-left">
                                    Vision:
                                </p>
                                <p className="text-gray-500 font-light text-left ml-2 text-sm">
                                    Bridging the tech gap in the diamond
                                    industry.
                                </p>
                            </div>
                        </Card>
                        <Card className="p-5 shadow-none ">
                            <div className=" flex justify-ustify-start items-center w-full ">
                                <p className=" text-xl text-primary font-semibold text-left">
                                    Impact:
                                </p>
                                <p className="text-gray-500 font-light text-left ml-2 text-sm">
                                    Enabling businesses to grow in a digital
                                    era.
                                </p>
                            </div>
                        </Card>
                        <Card className="p-5 shadow-none ">
                            <div className=" flex justify-ustify-start items-center w-full">
                                <p className=" text-xl text-primary font-semibold text-left">
                                    Expertise:
                                </p>
                                <p className="text-gray-500 font-light text-left ml-2 text-sm">
                                    Smart digital solutions for diamonds &
                                    jewelry.
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default SubHeroSection;
