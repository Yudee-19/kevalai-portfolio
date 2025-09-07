import React from "react";
import { Description, Title } from "@/components/ui/Title";
import Avatar from "@/components/ui/Avatar";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Card from "../ui/Card";
import Link from "next/link";
import { ColourfulText } from "../animations/ColourfulText";

const HeroSection = () => {
    return (
        <section className="bg-secondary py-10 ">
            <Container>
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="flex flex-col items-start gap-5">
                        <div>
                            <ColourfulText
                                text="Who We are."
                                className="text-4xl font-bold tracking-tighter text-blue-950 md:text-5xl lg:text-6xl"
                            />

                            <Description className=" max-w-lg">
                                At KevalAI, we combine deep industry expertise
                                with advanced technology to transform the
                                diamond and jewelry trade. Our mission is to
                                empower businesses with intelligent, scalable
                                solutions that help them thrive in today&s
                                digital marketplace.
                            </Description>
                        </div>

                        <div>
                            <Link href="/services" passHref>
                                <Button>
                                    Explore Solutions <ArrowUpRight />
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <Image
                            src="/images/aboutus/herosection.png"
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
