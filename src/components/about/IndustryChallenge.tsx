import React from "react";
import { Description, Title } from "@/components/ui/Title";
import Card from "@/components/ui/Card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const challenges = [
    {
        title: "Antwerp's Market Dominance",
        description:
            "Antwerp's control of 84% of the global rough diamond trade creates significant market concentration, making independent merchants vulnerable to price fluctuations and supply chain disruptions.",
        details:
            "Our technology provides real-time market intelligence, diversified supplier connections, and strategic pricing tools to help merchants navigate this concentrated market landscape and maintain competitiveness.",
        image: "/images/aboutus/industrychallenge1.png",
    },
    {
        title: "Limited Digital Presence",
        description:
            "According to McKinsey's 2022 research, 60% of B2B buyers now prefer digital engagement, yet many diamond merchants continue to rely on traditional practices and outdated manual processes. This digital gap is further compounded by:",
        solutions: [
            "Growing consumer expectations for seamless online experiences",
            "Inefficiencies and errors in manual inventory management",
            "Emerging competition from technology-first companies",
        ],
        details:
            "KevalAI bridges this gap with intuitive digital platforms that require minimal technical expertise to adopt.",
        image: "/images/aboutus/industrychallenge2.png",
    },
];

const IndustryChallenge = () => {
    return (
        <div className="my-20">
            <Title className="font-normal lg:text-5xl text-blue-950">
                Industry Challenges We Address
            </Title>

            <div className="flex flex-col gap-16 my-10">
                {challenges.map((challenge, index) => (
                    <div
                        key={index}
                        className={`w-full flex flex-col ${
                            index % 2 === 0
                                ? "md:flex-row"
                                : "md:flex-row-reverse"
                        } justify-between items-start gap-10`}
                    >
                        <Card className="max-w-none h-full lg:h-[460px] w-full md:w-1/2 p-8 shadow-none hover:shadow-2xl transition-all ease-in duration-500 ">
                            <Title className="text-2xl lg:text-3xl font-medium text-blue-950 mb-5">
                                {challenge.title}
                            </Title>
                            <Description className="text-base lg:text-lg text-gray-700 font-normal leading-relaxed mb-6">
                                {challenge.description}
                            </Description>

                            {challenge.solutions && (
                                <ul className="list-disc list-inside flex flex-col gap-2 text-gray-700 text-base font-normal mb-6 ml-4">
                                    {challenge.solutions.map(
                                        (solution, solutionIndex) => (
                                            <li
                                                key={solutionIndex}
                                                className="leading-relaxed"
                                            >
                                                {solution}
                                            </li>
                                        )
                                    )}
                                </ul>
                            )}

                            <Description className="text-base lg:text-lg text-gray-700 font-normal leading-relaxed">
                                {challenge.details}
                            </Description>
                        </Card>

                        <div className="w-full md:w-1/2 flex justify-center shadow-none hover:shadow-2xl transition-all ease-in duration-500 rounded-2xl">
                            <Image
                                src={challenge.image}
                                alt={`${challenge.title} illustration`}
                                width={600}
                                height={400}
                                className="rounded-2xl object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-12">
                <Link href="/get-started" passHref>
                    <Button className="bg-blue-950 hover:bg-blue-900 text-white text-base px-6 py-3 rounded-lg shadow-lg transition-colors">
                        Get Started <ArrowUpRight className="w-4 h-4 ml-2" />
                    </Button>
                </Link>
            </div>

            <div className="flex flex-col md:flex-row gap-10 mt-20 items-center">
                <div className="w-full md:w-1/2 flex flex-col gap-4 ">
                    <Title className="font-normal lg:text-5xl text-blue-950">
                        Our Leadership
                    </Title>
                    <Description>
                        Meet the team behind KevalAI&apos;s mission to transform
                        the diamond industry
                    </Description>
                    <Card className="mt-3 w-full max-w-none">
                        <h1 className="text-2xl font-bold text-primary">
                            Aklank Jain
                        </h1>
                        <Description className="text-sm text-gray-700 font-normal leading-tight mt-2">
                            At the heart of KevalAI’s mission to transform the
                            diamond industry is its Founder and CEO, Aklank
                            Jain. Combining deep expertise in both technology
                            and the diamond trade, Aklank leads with a vision to
                            bridge the gap between tradition and innovation. His
                            focus is on creating intelligent, scalable solutions
                            that empower independent merchants and drive the
                            industry forward in today’s digital era.
                        </Description>
                    </Card>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <Image
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt={`Our Leadership illustration`}
                        width={600}
                        height={400}
                        className="rounded-2xl object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default IndustryChallenge;
