import HeroSection from "@/components/about/HeroSection";
import IndustryChallenge from "@/components/about/IndustryChallenge";
import SubHeroSection from "@/components/about/SubHeroSection";
import Container from "@/components/ui/Container";
import React from "react";
import { ScrollAnimationWrapper } from "@/components/animations/ScrollAnimationWrapper";

const Page = () => {
    return (
        <div className="min-h-screen">
            <ScrollAnimationWrapper>
                <HeroSection />
            </ScrollAnimationWrapper>
            <Container>
                <ScrollAnimationWrapper>
                    <SubHeroSection />
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper>
                    <IndustryChallenge />
                </ScrollAnimationWrapper>
            </Container>
        </div>
    );
};

export default Page;
