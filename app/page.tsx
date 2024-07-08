import HeroSection from "@/app/ui/HeroSection/hero-section";
import GridSection from "@/app/ui/GridSection/grid-section";
import TestimonialsSection from "@/app/ui/TestimonialsSection/testimonials-section";
import GallerySection from "@/app/ui/GallerySection/gallery-section";
import FooterSection from "@/app/ui/FooterSection/footer-section";

export default function Home() {
  return (
    <div className="min-h-screen text-lg">
      <HeroSection />
      <GridSection />
      <TestimonialsSection />
      <GallerySection />
      <FooterSection />
    </div>
  );
}
