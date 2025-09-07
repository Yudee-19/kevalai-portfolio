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
            "The platform also delivers real-time analytics to track market trends, buyer preferences, and inventory performance, helping businesses make data-driven trading decisions.",
        image: "https://images.unsplash.com/photo-1639754390580-2e7437267698?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Real-Time Supplier Integrations",
        description:
            "Seamlessly integrate with global suppliers through secure API and FTP connections for live inventory updates.This feature ensures that merchants always have the latest stock availability from trusted sources like Antwerp and other international partners. ",

        details:
            "By reducing manual updates and errors, it streamlines operations and builds efficiency in the diamond supply chain.",
        image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Smart Pricing & Visual AI Tools",
        description:
            "Harness the power of artificial intelligence to stay competitive in pricing and quality assurance.Using Rapaport market data, AI algorithms recommend accurate and dynamic pricing. ",
        solutions: [
            "AI-powered pricing recommendations",
            "Visual quality assessment tools",
            "Market trend analysis",
            "Competitive pricing intelligence",
        ],
        details:
            "In addition, visual AI tools analyze diamond images for grading, authenticity, and overall quality—helping businesses build customer trust and transparency in transactions.",
        image: "https://images.unsplash.com/photo-1739805591936-39f03383c9a9?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Dashboards & Intelligence Systems",
        description:
            "Customizable dashboards provide businesses with deep insights into their operations.With built-in predictive analytics, anomaly detection, and trend analysis, companies can identify opportunities and risks early.",
        solutions: [
            "Real-time business analytics",
            "Custom KPI tracking",
            "Performance monitoring",
            "Data visualization tools",
        ],
        details:
            "Supply chain intelligence tools further enhance efficiency, ensuring better inventory control and smarter decision-making.",
        image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "RapNet Integration",
        description:
            "Directly sync with RapNet to access one of the world’s largest diamond trading networks.The integration provides updated listings, global pricing benchmarks, and expert market recommendations.",
        solutions: [
            "Direct RapNet marketplace access",
            "Real-time diamond listings",
            "Automated inventory updates",
            "Seamless trading capabilities",
        ],
        details:
            "This helps businesses increase their visibility, strengthen competitive positioning, and make informed trading choices.",
        image: "https://www.scommerce-mage.com/blog/wp-content/uploads/2022/01/d2.png",
    },
    {
        title: "Supplier Integration Flexibility",
        description:
            "Support for multiple supplier connections allows businesses to work seamlessly with different vendors. ",
        solutions: [
            "Multi-vendor support",
            "Flexible API integrations",
            "Custom supplier onboarding",
            "Unified inventory management",
        ],
        details:
            "Whether through APIs, FTP, or structured data mapping, the system standardizes supplier information, simplifies inventory management, and ensures data consistency across platforms.",
        image: "https://images.unsplash.com/photo-1682561477064-44fb2dfd82bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "User-Friendly Digital Storefront",
        description:
            "Merchants can create branded, customer-facing websites to showcase their diamond collections.Featuring high-quality visuals, integrated chat tools, and smooth navigation, these storefronts provide a premium digital shopping experience. ",
        solutions: [
            "Responsive web design",
            "Mobile-optimized interface",
            "Secure payment processing",
            "Customer account management",
        ],
        details:
            "Designed for both retail and wholesale, it strengthens online presence and boosts customer engagement.",
        image: "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Cloud-Based Scalability",
        description:
            "A secure, cloud-native platform that grows alongside your business.From small-scale merchants to enterprise-level trading operations, the system adapts effortlessly with scalable workflows, automated processes, and flexible resource allocation. ",
        solutions: [
            "Scalable cloud architecture",
            "99.9% uptime guarantee",
            "Global data centers",
            "Automatic backup systems",
        ],
        details:
            "This ensures businesses remain agile and efficient in a fast-changing market.",
        image: "https://images.unsplash.com/photo-1667372283496-893f0b1e7c16?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "AI-Powered Chatbot",
        description:
            "A 24/7 virtual assistant designed for customer support and sales guidance.The chatbot answers queries instantly, recommends products, assists with transactions, and streamlines operations—all without human intervention. ",
        solutions: [
            "24/7 customer support",
            "Intelligent query handling",
            "Product recommendations",
            "Multi-language support",
        ],
        details:
            "By offering round-the-clock service, it enhances customer satisfaction and improves operational efficiency.",
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
                                    <Card className="max-w-none h-full lg:h-[400px] w-full md:w-1/2 p-8 shadow-none">
                                        <Title className="text-2xl lg:text-3xl font-medium text-blue-950 mb-5">
                                            {service.title}
                                        </Title>
                                        <Description className="text-base lg:text-lg text-gray-700 font-normal leading-relaxed mb-6">
                                            {service.description}
                                        </Description>

                                        <Description className="text-base lg:text-lg text-gray-700 font-normal leading-relaxed">
                                            {service.details}
                                        </Description>
                                    </Card>

                                    <div className="w-full md:w-1/2 flex justify-center">
                                        <Image
                                            src={service.image}
                                            alt={`${service.title} illustration`}
                                            width={600}
                                            height="0"
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
