import AboutUsSection from "@/components/home/AboutUsSection";
import ChallengesSection from "@/components/home/ChallengesSection";
import Container from "@/components/ui/Container";
import HeroSection from "@/components/home/HeroSection";
import OurSolutionsSection from "@/components/home/OurSolutionsSection";
import { SponsorsMarquee } from "@/components/home/SponsorsMarquee";

export default function Home() {
    return (
        <main className="min-h-screen">
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
