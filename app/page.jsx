import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import CategoryGrid from "@/components/home/CategoryGrid";
import ProvidersSection from "@/components/home/ProvidersSection";
import JobsSection from "@/components/home/JobsSection";
import EmergencyTeaser from "@/components/home/EmergencyTeaser";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoryGrid />
      <HowItWorks />
      <ProvidersSection />
      <JobsSection />
      <EmergencyTeaser />
    </>
  );
}
