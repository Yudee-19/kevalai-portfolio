import React from "react";
import { Description, Title } from "@/components/ui/Title";
import Card from "@/components/ui/Card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const challenges = [
    {
        title: "Low Digital Visibility",
        description:
            "Over 60% of B2B buyers prefer digital engagement, yet many merchants lack visibility.",
        solutions: [
            "Seamless digital storefronts with minimal setup",
            "Automated workflows that replace manual processes",
            "Competitive edge through tech-enabled operations",
        ],
        image: "/images/challengesSection/challenge1.png",
    },
    {
        title: "Market Concentration",
        description:
            "With Antwerp controlling 84% of the global rough diamond trade, independents face volatility.",
        solutions: [
            "Real-time analytics to predict market shifts",
            "Strategic pricing tools to stay competitive",
            "Diversified supplier access to reduce reliance",
        ],
        image: "/images/challengesSection/challenge2.png",
    },
];

const ChallengesSection = () => {
    return (
        <div className="my-20">
            <Title className="font-normal lg:text-5xl">
                Key Challenges We Solve
            </Title>

            <div className="flex flex-col gap-10 my-10">
                {challenges.map((challenge, index) => (
                    <div
                        key={index}
                        className={`w-full flex flex-col ${
                            index % 2 === 0
                                ? "md:flex-row"
                                : "md:flex-row-reverse"
                        } justify-between items-center gap-10`}
                    >
                        <Card className="max-w-none h-full lg:h-100 w-full pt-20 md:w-1/2  shadow-none">
                            <Title className="lg:text-3xl font-medium text-blue-950 mb-5">
                                {challenge.title}
                            </Title>
                            <Description className="text-lg text-neutral-500 font-light leading-snug mb-4">
                                {challenge.description}
                            </Description>
                            <ul className="list-disc flex flex-col gap-2 text-neutral-500 text-lg font-light">
                                {challenge.solutions.map(
                                    (solution, solutionIndex) => (
                                        <li
                                            key={solutionIndex}
                                            className="leading-normal"
                                        >
                                            {solution}
                                        </li>
                                    )
                                )}
                            </ul>
                        </Card>

                        <div className="w-full md:w-1/2 flex justify-center">
                            <Image
                                src={challenge.image}
                                alt={`${challenge.title} illustration`}
                                width={600}
                                height={460}
                                className="rounded-3xl"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-10">
                <Link href="/services" passHref>
                    <Button className="bg-blue-950 text-white text-lg px-4 py-1.5 rounded-lg shadow-lg">
                        View All Solutions <ArrowUpRight className="w-5 h-5" />
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ChallengesSection;
