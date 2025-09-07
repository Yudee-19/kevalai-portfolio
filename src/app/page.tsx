import AboutUsSection from "@/components/AboutUsSection";
import ChallengesSection from "@/components/ChallengesSection";
import Container from "@/components/Container";
import HeroSection from "@/components/HeroSection";
import OurSolutionsSection from "@/components/OurSolutionsSection";
import { SponsorsMarquee } from "@/components/SponsorsMarquee";
import Image from "next/image";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <SponsorsMarquee />
            <Container>
                <AboutUsSection />
                <OurSolutionsSection />
                <ChallengesSection />
            </Container>
        </main>
    );
}
