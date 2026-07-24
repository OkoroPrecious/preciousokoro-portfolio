import Container from "@/components/layout/Container";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <HeroContent />

          <HeroImage />
        </div>
      </Container>
    </section>
  );
}