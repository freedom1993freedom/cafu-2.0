import { InteractiveHero } from "./components/interactive-hero/InteractiveHero";
import { SomosCafuSection } from "./components/SomosCafuSection";
import { ProductLinesSummary } from "./components/ProductLinesSummary";
import { LogisticsSection } from "./components/LogisticsSection"; // Esta importación ahora funcionará
import { ContactSection } from "./components/ContactSection";

export default function HomePage() {
  return (
    <div>
      <InteractiveHero />
      <SomosCafuSection />
      <ProductLinesSummary />
      <LogisticsSection />
      <ContactSection />
    </div>
  );
}

