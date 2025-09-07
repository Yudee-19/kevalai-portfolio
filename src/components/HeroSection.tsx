import React from "react";
import { Description, Title } from "./ui/Title";
import Avatar from "./ui/Avatar";
import { Button } from "./ui/button";
import { ArrowUpRight, Section } from "lucide-react";
import Image from "next/image";
import Container from "./Container";

const HeroSection = () => {
    return (
        <section className="bg-secondary py-10 ">
            <Container>
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="flex flex-col items-start gap-5">
                        <div>
                            <Title className="lg:text-6xl">
                                Trade Smarter.
                            </Title>
                            <Title className="lg:text-6xl">
                                Diamond Stronger.
                            </Title>
                            <Description className="">
                                Transforming Challenges into Opportunities for
                                Independent
                                <br />
                                Diamond Merchants
                            </Description>
                        </div>
                        <div className="">
                            <Avatar />
                        </div>
                        <div>
                            <Button>
                                Explore Solutions <ArrowUpRight />
                            </Button>
                        </div>
                    </div>
                    <div>
                        <Image
                            src="/images/heroSection/HeroSection-img.png"
                            alt="Hero Image"
                            width={400}
                            height={400}
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default HeroSection;
