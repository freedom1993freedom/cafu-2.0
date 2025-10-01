import { InteractiveHero } from "./components/interactive-hero/InteractiveHero";
import { SomosCafuSection } from "./components/SomosCafuSection";
import { ProductLinesSummary } from "./components/ProductLinesSummary";
import { LogisticsSection } from "./components/LogisticsSection";
import { NovedadesSection } from "./components/NovedadesSection";
import { ContactSection } from "./components/ContactSection";
import { AnimatedSection } from "./components/AnimatedSection"; // Importamos el componente de animación

export default function HomePage() {
  return (
    <div>
      <InteractiveHero />
      <AnimatedSection>
        <SomosCafuSection />
      </AnimatedSection>
      <AnimatedSection>
        <ProductLinesSummary />
      </AnimatedSection>
      <AnimatedSection>
        <NovedadesSection />
      </AnimatedSection>
      <AnimatedSection>
        <LogisticsSection />
      </AnimatedSection>
      <AnimatedSection>
        <ContactSection />
      </AnimatedSection>
    </div>
  );
}
