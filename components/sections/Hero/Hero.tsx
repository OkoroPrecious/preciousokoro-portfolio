import Container from "@/components/layout/Container";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          <HeroContent />

          <HeroImage />
        </div>
      </Container>
    </section>
  );
}