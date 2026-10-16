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

const Index = () => (
  <div className="min-h-screen overflow-x-clip">
    <SEO
      title="Re-Start Coffee | Café de especialidad, brunch y bakery sin gluten en Vilanova i la Geltrú"
      description="Good coffee, good food, good vibes. Café de especialidad, brunch y repostería artesanal sin gluten en el centro de Vilanova i la Geltrú. Terraza dog-friendly."
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
