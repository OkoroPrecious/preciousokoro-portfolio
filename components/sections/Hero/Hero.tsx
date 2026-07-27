import Container from "@/components/layout/Container";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import SlideUp from "@/components/animations/SlideUp";

export default function Hero() {
  return (
    <section id="home" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <SlideUp delay={0.2}>
            <HeroContent />
          </SlideUp>

          <SlideUp delay={0.4}>
            <HeroImage />
          </SlideUp>
        </div>
      </Container>
    </section>
  );
}
