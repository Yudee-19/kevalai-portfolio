import AboutUsSection from "@/components/home/AboutUsSection";
import ChallengesSection from "@/components/home/ChallengesSection";
import Container from "@/components/ui/Container";
import HeroSection from "@/components/home/HeroSection";
import OurSolutionsSection from "@/components/home/OurSolutionsSection";
import { SponsorsMarquee } from "@/components/home/SponsorsMarquee";
import { ScrollAnimationWrapper } from "@/components/animations/ScrollAnimationWrapper";

export default function Home() {
    return (
        <main className="min-h-screen overflow-x-hidden">
            <ScrollAnimationWrapper>
                <HeroSection />
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
                <SponsorsMarquee />
            </ScrollAnimationWrapper>
            <Container>
                <ScrollAnimationWrapper>
                    <AboutUsSection />
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper>
                    <OurSolutionsSection />
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper>
                    <ChallengesSection />
                </ScrollAnimationWrapper>
            </Container>
        </main>
    );
}
