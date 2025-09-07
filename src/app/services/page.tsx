import React from "react";
import { Description, Title } from "@/components/ui/Title";
import Card from "@/components/ui/Card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Users, Wrench, TrendingUp } from "lucide-react";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { ScrollAnimationWrapper } from "@/components/animations/ScrollAnimationWrapper";

const services = [
    {
        title: "End-to-End Diamond Trading Platform",
        description:
            "A comprehensive online marketplace designed specifically for diamond merchants, providing a streamlined environment for buying, selling, and trading diamonds with ease, clarity, and trust.",
        solutions: [
            "Real-time inventory tracking and management",
            "Automated pricing and valuation using advanced algorithms",
            "Integrated customer relationship management",
            "Seamless transaction processing and documentation",
        ],
        details:
            "Our platform provides diamond dealers to track income and expenses, create certificates of authenticity, and automate repetitive tasks, making more data-driven trading decisions.",
        image: "https://images.unsplash.com/photo-1639754390580-2e7437267698?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Real-Time Supplier Integrations",
        description:
            "Establish a stronghold that guarantees a seamless connection and FTP capabilities with diverse locations and various API platforms.",
        solutions: [
            "Direct supplier API connections",
            "Real-time inventory synchronization",
            "Automated pricing updates",
            "Multi-platform integration support",
        ],
        details:
            "This feature ensures that merchants always have the latest stock availability from trusted sources like Antwerp and other major trading hubs. By reducing manual updates and errors, it streamlines operations and boosts efficiency in the diamond supply chain.",
        image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Smart Pricing & Visual AI Tools",
        description:
            "Advanced tools and algorithms designed to buy competitive pricing and quality assurance.",
        solutions: [
            "AI-powered pricing recommendations",
            "Visual quality assessment tools",
            "Market trend analysis",
            "Competitive pricing intelligence",
        ],
        details:
            "Using Rapaport Data Report and Certified international accurate and real-time pricing. By reducing manual AI tools deliver advanced insights for optimal price precision, supporting businesses build customer trust and transparency in transactions.",
        image: "https://images.unsplash.com/photo-1739805591936-39f03383c9a9?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Dashboards & Intelligence Systems",
        description:
            "Comprehensive dashboards provide businesses with deep insights and analytics for informed decision-making.",
        solutions: [
            "Real-time business analytics",
            "Custom KPI tracking",
            "Performance monitoring",
            "Data visualization tools",
        ],
        details:
            "With built-in predictive analytics, anomaly detection, and trend analysis, businesses can identify opportunities and risks early. Supply chain intelligence tools further enhance efficiency, enabling better informed control and smarter decisions across all business operations.",
        image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "RapNet Integration",
        description:
            "Directly integrate with RapNet to access one of the world's largest diamond trading networks.",
        solutions: [
            "Direct RapNet marketplace access",
            "Real-time diamond listings",
            "Automated inventory updates",
            "Seamless trading capabilities",
        ],
        details:
            "This integration provides updated listings, global pricing information and extended market reach instantly. This helps businesses increase their visibility, strengthen competitive positioning, and make informed trading strategies based on real market data.",
        image: "https://www.scommerce-mage.com/blog/wp-content/uploads/2022/01/d2.png",
    },
    {
        title: "Supplier Integration Flexibility",
        description:
            "Support for multiple supplier connections allows businesses to work seamlessly with different vendors.",
        solutions: [
            "Multi-vendor support",
            "Flexible API integrations",
            "Custom supplier onboarding",
            "Unified inventory management",
        ],
        details:
            "Our platform offers great flexibility for connecting diverse systems including supplier information, simplified inventory management, and effective data processing across platforms.",
        image: "https://images.unsplash.com/photo-1682561477064-44fb2dfd82bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "User-Friendly Digital Storefront",
        description:
            "Modern e-commerce capabilities offering beautiful and intuitive online store functionality.",
        solutions: [
            "Responsive web design",
            "Mobile-optimized interface",
            "Secure payment processing",
            "Customer account management",
        ],
        details:
            "Features responsively scaled, engaging user tools, and intuitive navigation options ensure a premium digital shopping experience. Designed for cross-industry analysis, it strengthens online presence and enhances customer engagement.",
        image: "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Cloud-Based Scalability",
        description:
            "Enterprise-level cloud infrastructure ensures reliability and business growth.",
        solutions: [
            "Scalable cloud architecture",
            "99.9% uptime guarantee",
            "Global data centers",
            "Automatic backup systems",
        ],
        details:
            "Easy setup and deployment to enterprise-level hosting capabilities designed for high-performance computing, multi-platform workflows, self-hosted processes, and flexible resource allocation. This supports businesses remain agile and efficient in fast-paced market conditions.",
        image: "https://images.unsplash.com/photo-1667372283496-893f0b1e7c16?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "AI-Powered Chatbot",
        description:
            "Intelligent customer service and support through our AI-powered sales guidance.",
        solutions: [
            "24/7 customer support",
            "Intelligent query handling",
            "Product recommendations",
            "Multi-language support",
        ],
        details:
            "Our chatbot enhances customer experience, recommends products, handles queries efficiently, and can facilitate seamless guided human interaction. Through AI assistance, it service, it enhances customer satisfaction and improves operational efficiency.",
        image: "https://images.unsplash.com/photo-1659018966834-99be9746b49e?q=80&w=2098&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

const workProcess = [
    {
        title: "Consultation",
        description:
            "We analyze your current operations and identify specific challenges and opportunities for digital transformation.",
        icon: <Users className="w-6 h-6" />,
    },
    {
        title: "Implementation",
        description:
            "Our team configures and deploys tailored solutions with minimal disruption to your ongoing business.",
        icon: <Wrench className="w-6 h-6" />,
    },
    {
        title: "Growth",
        description:
            "Ongoing support and optimization to ensure your digital tools scale with your business needs.",
        icon: <TrendingUp className="w-6 h-6" />,
    },
];

const ServicesPage = () => {
    return (
        <main className="min-h-screen">
            <Container>
                <div className="my-20">
                    <div className="text-left mb-16">
                        <Title className="font-normal lg:text-6xl text-blue-950 mb-4">
                            Our Digital Solutions
                        </Title>
                        <Description className="text-xl text-left text-gray-600 max-w-full mx-auto">
                            Discover how KevalAI&apos;s innovative technology
                            solutions are transforming
                            <br />
                            the diamond industry and empowering merchants
                            worldwide.
                        </Description>
                    </div>

                    <div className="flex flex-col gap-16 my-10">
                        {services.map((service, index) => (
                            <ScrollAnimationWrapper key={index}>
                                <div
                                    className={`w-full flex flex-col ${
                                        index % 2 === 0
                                            ? "md:flex-row"
                                            : "md:flex-row-reverse"
                                    } justify-between items-start gap-10`}
                                >
                                    <Card className="max-w-none h-full w-full md:w-1/2 p-8 shadow-none">
                                        <Title className="text-2xl lg:text-3xl font-medium text-blue-950 mb-5">
                                            {service.title}
                                        </Title>
                                        <Description className="text-base lg:text-lg text-gray-700 font-normal leading-relaxed mb-6">
                                            {service.description}
                                        </Description>

                                        {service.solutions && (
                                            <ul className="list-disc list-inside flex flex-col gap-2 text-gray-700 text-base font-normal mb-6 ml-4">
                                                {service.solutions.map(
                                                    (
                                                        solution,
                                                        solutionIndex
                                                    ) => (
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
                                            {service.details}
                                        </Description>
                                    </Card>

                                    <div className="w-full md:w-1/2 flex justify-center">
                                        <Image
                                            src={service.image}
                                            alt={`${service.title} illustration`}
                                            width={600}
                                            height={400}
                                            className="rounded-2xl object-cover"
                                        />
                                    </div>
                                </div>
                            </ScrollAnimationWrapper>
                        ))}
                    </div>

                    <div className="flex justify-center mt-12">
                        <Link href="/services" passHref>
                            <Button className="bg-blue-950 text-white text-base px-6 py-3 rounded-lg shadow-lg transition-colors">
                                Get Started{" "}
                                <ArrowUpRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                    </div>

                    {/* How Our Solutions Work Section */}
                    <div className="flex flex-col items-center md:items-start justify-center gap-10 mt-20">
                        <Title className="font-normal lg:text-5xl text-blue-950 text-center md:text-left">
                            How Our Solutions Work
                        </Title>
                        <Description className="text-lg text-gray-600 max-w-2xl text-center md:text-left">
                            Seamlessly integrating with your existing business
                            operations
                        </Description>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 w-full">
                            {workProcess.map((process, index) => (
                                <Card key={index} className="">
                                    <div className="mb-4 bg-[#E9ECF0] inline-flex items-start justify-center rounded-lg p-3 text-primary">
                                        {process.icon}
                                    </div>
                                    <Title className="text-black font-semibold text-xl md:text-xl lg:text-xl my-3">
                                        {process.title}
                                    </Title>
                                    <Description className="text-neutral-500 leading-relaxed">
                                        {process.description}
                                    </Description>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    );
};

export default ServicesPage;
