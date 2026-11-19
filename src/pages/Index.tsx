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
import WorkshopSection from "@/components/WorkshopSection";
import BeansSection from "@/components/BeansSection";
import { SITE_URL, cafeSchema } from "@/lib/site";
import { usePick } from "@/i18n";

const T = {
  es: {
    title: "Re-Start Coffee | Café de especialidad y brunch en Vilanova i la Geltrú",
    description:
      "Café de especialidad, brunch y repostería sin gluten junto a la Plaza del Ayuntamiento de Vilanova i la Geltrú. Taller barista y café en grano. Terraza dog-friendly.",
    imageAlt: "Interior de Re-Start Coffee con el neón Good Vibes Only",
  },
  ca: {
    title: "Re-Start Coffee | Cafè d'especialitat i brunch a Vilanova i la Geltrú",
    description:
      "Cafè d'especialitat, brunch i rebosteria sense gluten al costat de la plaça de l'Ajuntament de Vilanova i la Geltrú. Taller barista i cafè en gra. Terrassa dog-friendly.",
    imageAlt: "Interior de Re-Start Coffee amb el neó Good Vibes Only",
  },
  en: {
    title: "Re-Start Coffee | Specialty coffee & brunch in Vilanova i la Geltrú",
    description:
      "Specialty coffee, brunch and gluten-free baking next to the Town Hall square in Vilanova i la Geltrú. Barista workshops and coffee beans to take home. Dog-friendly terrace.",
    imageAlt: "Inside Re-Start Coffee with the Good Vibes Only neon sign",
  },
  fr: {
    title: "Re-Start Coffee | Café de spécialité et brunch à Vilanova i la Geltrú",
    description:
      "Café de spécialité, brunch et pâtisserie sans gluten à côté de la place de la Mairie de Vilanova i la Geltrú. Ateliers barista et café en grains à emporter. Terrasse dog-friendly.",
    imageAlt: "Intérieur de Re-Start Coffee avec le néon Good Vibes Only",
  },
};

const Index = () => {
  const t = usePick()(T);
  return (
  <div className="min-h-screen overflow-x-clip">
    <SEO
      title={t.title}
      description={t.description}
      image="/og/inicio-v2.jpg"
      imageAlt={t.imageAlt}
      preloadImage={heroImg}
      jsonLd={[{ ...cafeSchema, "@id": `${SITE_URL}/#cafe` }]}
    />
    <Navbar />
    <main>
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <FeaturesBand />
      <WorkshopSection />
      <BeansSection />
      <StorySection />
      <GallerySection />
      <ReviewsSection />
      <VisitSection />
    </main>
    <Footer />
  </div>
  );
};

export default Index;
