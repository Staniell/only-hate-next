import { Hero } from "@/components/Hero";
import { VisualDemo } from "@/components/VisualDemo";
import { FeatureSection } from "@/components/FeatureSection";
import { PlatformSection } from "@/components/PlatformSection";
import { SupportSection } from "@/components/SupportSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Hero />
      <VisualDemo />
      <FeatureSection />
      <PlatformSection />
      <SupportSection />
      <Footer />
    </main>
  );
}
