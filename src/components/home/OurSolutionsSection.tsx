import React from "react";
import Card from "@/components/ui/Card";
import { Description, Title } from "@/components/ui/Title";
import {
    ChartNoAxesColumn,
    Link,
    Shield,
    Users,
    Zap,
    Settings,
    ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
    {
        title: "Trading Platform",
        description:
            "List, search, and trade diamonds with real-time analytics and full transparency.",
        icon: <ChartNoAxesColumn />,
    },
    {
        title: "Supplier Integrations",
        description:
            "Direct access to live inventories from trusted suppliers for seamless transactions.",
        icon: <Link />,
    },
    {
        title: "AI Pricing & Imaging",
        description:
            "Smart pricing insights powered by data and advanced visual analysis.",
        icon: <Zap />,
    },
    {
        title: "Intelligence Systems",
        description:
            "Custom dashboards with predictive analytics and supply chain insights.",
        icon: <Settings />,
    },
    {
        title: "Secure Transactions",
        description:
            "Blockchain-backed payments and contracts to ensure trust, authenticity, and fraud prevention.",
        icon: <Shield />,
    },
    {
        title: "Client Management Tools",
        description:
            "Built-in CRM solutions to manage leads, customer interactions, and sales pipelines effortlessly.",
        icon: <Users />,
    },
];

const OurSolutionsSection = () => {
    return (
        <div className=" flex flex-col items-center md:items-start justify-center gap-10">
            <Title className="font-normal lg:text-5xl mt-40 ">
                Our Solutions
            </Title>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {solutions.map((solution, index) => (
                    <Card key={index} className="">
                        <div className="mb-4 bg-[#E9ECF0] inline-flex items-center justify-center rounded-lg  p-3 text-primary">
                            {solution.icon}
                        </div>
                        <Title className=" text-black font-light lg:text-xl my-3">
                            {solution.title}
                        </Title>
                        <Description className="text-neutral-500">
                            {solution.description}
                        </Description>
                    </Card>
                ))}
            </div>
            <Button className="text-lg">
                View All Solutions <ArrowUpRight />
            </Button>
        </div>
    );
};

export default OurSolutionsSection;
