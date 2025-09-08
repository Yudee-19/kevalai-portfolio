import React from "react";
import { Description, Title } from "@/components/ui/Title";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Section } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
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
                                text="Trade Smarter."
                                className="text-4xl font-bold tracking-tighter text-blue-950 md:text-5xl lg:text-6xl"
                            />
                            <ColourfulText
                                text="Diamond Stronger."
                                className="text-4xl font-bold tracking-tighter text-blue-950 md:text-5xl lg:text-6xl"
                            />
                            <Description className="">
                                Transforming Challenges into Opportunities for
                                Independent
                                <br />
                                Diamond Merchants
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
