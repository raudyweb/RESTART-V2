import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import FeaturesBand from "@/components/FeaturesBand";
import StorySection from "@/components/StorySection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import VisitSection from "@/components/VisitSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import heroImg from "@/assets/v2/hero-good-vibes.webp";
import { SITE_URL, cafeSchema } from "@/lib/site";

const Index = () => (
  <div className="min-h-screen overflow-x-clip">
    <SEO
      path="/"
      title="Re-Start Coffee | Café de especialidad y brunch en Vilanova i la Geltrú"
      description="Café de especialidad, brunch y repostería sin gluten junto a la Plaza del Ayuntamiento de Vilanova i la Geltrú. Terraza dog-friendly. Good coffee, good food, good vibes."
      image="/og/inicio-v2.jpg"
      imageAlt="Interior de Re-Start Coffee con el neón Good Vibes Only"
      preloadImage={heroImg}
      jsonLd={[{ ...cafeSchema, "@id": `${SITE_URL}/#cafe` }]}
    />
    <Navbar />
    <main>
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <FeaturesBand />
      <StorySection />
      <GallerySection />
      <ReviewsSection />
      <VisitSection />
    </main>
    <Footer />
  </div>
);

export default Index;
