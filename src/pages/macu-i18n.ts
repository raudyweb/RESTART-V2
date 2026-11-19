import { Cake, HandHeart as HeartHand, Users, WheatOff } from "lucide-react";
import panImg from "@/assets/v2/macu/pan-larga-fermentacion.webp";
import cookiesImg from "@/assets/v2/macu/cookies-bandeja.webp";
import tartaImg from "@/assets/v2/macu/tarta-envase.webp";
import barrasImg from "@/assets/v2/macu/barras.webp";

/** Textos de la página de Macu Bakery en los tres idiomas. */
export const T = {
  es: {
    seoTitle: "Macu Bakery | Obrador 100% sin gluten en Vilanova i la Geltrú",
    seoDesc:
      "Pan de larga fermentación, cookies estilo New York, tartas y bollería artesanal 100% sin gluten en Vilanova i la Geltrú. Tienda online con envío y pasteles por encargo.",
    ogAlt: "Barras de pan sin gluten en el horno de Macu Bakery",
    ldDesc: "Obrador artesanal 100% sin gluten: pan de larga fermentación, cookies estilo New York, tartas y bollería.",
    cuisine: ["Panadería sin gluten", "Repostería sin gluten"],
    home: "Inicio",
    heroAlt: "Barras de pan sin gluten dorándose en el horno de Macu",
    eyebrow: "El obrador de Re-Start",
    subtitle: ["Pan y repostería artesanal", "100% sin gluten"],
    shop: "Tienda online",
    visit: "Visita el obrador",
    logoAlt: "Logo de Macu Gluten Free Bakery",
    quote: "“Tus dulces favoritos, ahora sin gluten”",
    intro1:
      "Macu es el obrador propio de Re-Start y el corazón de nuestra repostería. Un espacio dedicado en exclusiva a elaborar pan y dulces sin gluten, donde cada receta está pensada para demostrar que prescindir del gluten no significa renunciar al sabor.",
    intro2:
      "Todo lo que se sirve en Re-Start Brunch & Coffee sale de aquí: frescura, trazabilidad y control total de la calidad, del obrador a la mesa.",
    ovenTitle: "Lo que sale del horno",
    products: [
      {
        title: "Pan de larga fermentación",
        text: "Hogazas y panes horneados cada día, con fermentaciones lentas para que tengan miga, corteza y sabor de verdad.",
        alt: "Hogaza de pan sin gluten recién horneada en el escaparate",
      },
      {
        title: "Cookies estilo New York",
        text: "Gruesas, tiernas por dentro y cargadas: chocolate, pistacho, limón y amapola, caramelo salado…",
        alt: "Bandeja de cookies sin gluten antes de hornear",
      },
      {
        title: "Tartas y bizcochos",
        text: "Tartas, bizcochos, muffins y otras especialidades dulces, también por encargo para celebraciones.",
        alt: "Tarta individual sin gluten en su envase de Macu",
      },
      {
        title: "Barras y bollería",
        text: "Barras, panets y bollería del día. Lo mismo que sirve Re-Start en su barra sale de este obrador.",
        alt: "Barras de pan sin gluten recién horneadas",
      },
    ],
    workAlts: [
      "Amasando masa sin gluten con la amasadora",
      "Formando barras de pan a mano",
      "Sacando una bandeja de barras del horno",
    ],
    workTitle: ["Donde nace toda", "nuestra repostería"],
    work1:
      "Macu no es una línea especial dentro de un obrador convencional. Es un espacio dedicado en exclusiva a la elaboración sin gluten, donde cada proceso está pensado para la seguridad de las personas celíacas.",
    work2:
      "Cookies, panets, tartas, pancakes, muffins… Todo elaborado a mano, con ingredientes seleccionados y con el cuidado que merece quien tiene que vigilar lo que come.",
    workHand: ["Sin gluten puede ser", "igual de bueno. O mejor"],
    whyTitle: "Por qué Macu es diferente",
    values: [
      {
        title: "100% sin gluten",
        text: "No es una línea especial dentro de un obrador convencional: aquí no entra el gluten. Así se evita la contaminación cruzada y las personas celíacas pueden comer tranquilas.",
      },
      {
        title: "Hecho a mano",
        text: "Cada pieza se elabora de forma artesanal, con ingredientes seleccionados y recetas pensadas para que el sabor y la textura no tengan nada que envidiar.",
      },
      {
        title: "El obrador de Re-Start",
        text: "Toda la repostería de Re-Start Brunch & Coffee sale de Macu. Frescura y control de la calidad desde el horno hasta la mesa.",
      },
      {
        title: "Para todo el mundo",
        text: "Celíacos o no, la idea es la misma: que nadie tenga que renunciar a un buen pan o a un dulce, y que se pueda compartir mesa sin preocupaciones.",
      },
    ],
    homeTitle: "Llévate Macu a casa",
    homeText:
      "Las cookies y las MACU BOX se pueden pedir desde la tienda online, con envío a toda la península. Y si tienes una celebración, el obrador prepara tartas y bandejas por encargo.",
    order: "Hacer un encargo",
    bagsAlt: "Bolsitas de galletas sin gluten con la etiqueta de Macu",
    visitTitle: "Ven al obrador",
    visitIntro:
      "La tienda está a un par de calles de Re-Start. Pásate a por pan del día, cookies o a recoger tu encargo.",
    facadeAlt: "Fachada de Macu Gluten Free Bakery con su rótulo verde",
    hours: [
      { days: "Lunes y martes", hours: "Cerrado", closed: true },
      { days: "Miércoles a viernes", hours: "9:30 – 13:30" },
      { days: "Sábado", hours: "10:00 – 13:00" },
      { days: "Domingo", hours: "Cerrado", closed: true },
    ],
    hoursNote: "Horario publicado en macuglutenfree.com. Puede variar en festivos.",
    mapTitle: "Mapa de Macu Gluten Free Bakery",
  },
  ca: {
    seoTitle: "Macu Bakery | Obrador 100% sense gluten a Vilanova i la Geltrú",
    seoDesc:
      "Pa de llarga fermentació, cookies estil New York, pastissos i brioixeria artesana 100% sense gluten a Vilanova i la Geltrú. Botiga en línia amb enviament i pastissos per encàrrec.",
    ogAlt: "Barres de pa sense gluten al forn de Macu Bakery",
    ldDesc: "Obrador artesà 100% sense gluten: pa de llarga fermentació, cookies estil New York, pastissos i brioixeria.",
    cuisine: ["Fleca sense gluten", "Rebosteria sense gluten"],
    home: "Inici",
    heroAlt: "Barres de pa sense gluten daurant-se al forn de Macu",
    eyebrow: "L'obrador de Re-Start",
    subtitle: ["Pa i rebosteria artesana", "100% sense gluten"],
    shop: "Botiga en línia",
    visit: "Visita l'obrador",
    logoAlt: "Logo de Macu Gluten Free Bakery",
    quote: "“Els teus dolços preferits, ara sense gluten”",
    intro1:
      "Macu és l'obrador propi de Re-Start i el cor de la nostra rebosteria. Un espai dedicat exclusivament a elaborar pa i dolços sense gluten, on cada recepta està pensada per demostrar que prescindir del gluten no vol dir renunciar al sabor.",
    intro2:
      "Tot el que se serveix a Re-Start Brunch & Coffee surt d'aquí: frescor, traçabilitat i control total de la qualitat, de l'obrador a la taula.",
    ovenTitle: "El que surt del forn",
    products: [
      {
        title: "Pa de llarga fermentació",
        text: "Pans de pagès i pans fets cada dia, amb fermentacions lentes perquè tinguin molla, crosta i sabor de veritat.",
        alt: "Pa de pagès sense gluten acabat de fer a l'aparador",
      },
      {
        title: "Cookies estil New York",
        text: "Gruixudes, tendres per dins i ben carregades: xocolata, festuc, llimona i rosella, caramel salat…",
        alt: "Safata de cookies sense gluten abans d'enfornar",
      },
      {
        title: "Pastissos i pa de pessic",
        text: "Pastissos, pa de pessic, muffins i altres especialitats dolces, també per encàrrec per a celebracions.",
        alt: "Pastís individual sense gluten al seu envàs de Macu",
      },
      {
        title: "Barres i brioixeria",
        text: "Barres, panets i brioixeria del dia. El mateix que serveix Re-Start a la barra surt d'aquest obrador.",
        alt: "Barres de pa sense gluten acabades de fer",
      },
    ],
    workAlts: [
      "Pastant massa sense gluten amb la pastadora",
      "Formant barres de pa a mà",
      "Traient una safata de barres del forn",
    ],
    workTitle: ["On neix tota", "la nostra rebosteria"],
    work1:
      "Macu no és una línia especial dins d'un obrador convencional. És un espai dedicat exclusivament a l'elaboració sense gluten, on cada procés està pensat per a la seguretat de les persones celíaques.",
    work2:
      "Cookies, panets, pastissos, pancakes, muffins… Tot elaborat a mà, amb ingredients seleccionats i amb la cura que mereix qui ha de vigilar el que menja.",
    workHand: ["Sense gluten pot ser", "igual de bo. O millor"],
    whyTitle: "Per què Macu és diferent",
    values: [
      {
        title: "100% sense gluten",
        text: "No és una línia especial dins d'un obrador convencional: aquí no hi entra el gluten. Així s'evita la contaminació creuada i les persones celíaques poden menjar tranquil·les.",
      },
      {
        title: "Fet a mà",
        text: "Cada peça s'elabora de manera artesana, amb ingredients seleccionats i receptes pensades perquè el sabor i la textura no tinguin res a envejar.",
      },
      {
        title: "L'obrador de Re-Start",
        text: "Tota la rebosteria de Re-Start Brunch & Coffee surt de Macu. Frescor i control de la qualitat des del forn fins a la taula.",
      },
      {
        title: "Per a tothom",
        text: "Celíacs o no, la idea és la mateixa: que ningú hagi de renunciar a un bon pa o a un dolç, i que es pugui compartir taula sense preocupacions.",
      },
    ],
    homeTitle: "Endú-te Macu a casa",
    homeText:
      "Les cookies i les MACU BOX es poden demanar des de la botiga en línia, amb enviament a tota la península. I si tens una celebració, l'obrador prepara pastissos i safates per encàrrec.",
    order: "Fer un encàrrec",
    bagsAlt: "Bossetes de galetes sense gluten amb l'etiqueta de Macu",
    visitTitle: "Vine a l'obrador",
    visitIntro:
      "La botiga és a un parell de carrers de Re-Start. Passa a buscar pa del dia, cookies o a recollir el teu encàrrec.",
    facadeAlt: "Façana de Macu Gluten Free Bakery amb el seu rètol verd",
    hours: [
      { days: "Dilluns i dimarts", hours: "Tancat", closed: true },
      { days: "Dimecres a divendres", hours: "9:30 – 13:30" },
      { days: "Dissabte", hours: "10:00 – 13:00" },
      { days: "Diumenge", hours: "Tancat", closed: true },
    ],
    hoursNote: "Horari publicat a macuglutenfree.com. Pot variar els festius.",
    mapTitle: "Mapa de Macu Gluten Free Bakery",
  },
  en: {
    seoTitle: "Macu Bakery | 100% gluten-free bakery in Vilanova i la Geltrú",
    seoDesc:
      "Slow-fermented bread, New York style cookies, cakes and pastries, all 100% gluten-free, in Vilanova i la Geltrú. Online shop with delivery and cakes to order.",
    ogAlt: "Gluten-free baguettes in the Macu Bakery oven",
    ldDesc: "100% gluten-free artisan bakery: slow-fermented bread, New York style cookies, cakes and pastries.",
    cuisine: ["Gluten-free bakery", "Gluten-free pastries"],
    home: "Home",
    heroAlt: "Gluten-free baguettes browning in the Macu oven",
    eyebrow: "Re-Start's own bakery",
    subtitle: ["Artisan bread and pastries", "100% gluten-free"],
    shop: "Online shop",
    visit: "Visit the bakery",
    logoAlt: "Macu Gluten Free Bakery logo",
    quote: "“Your favourite treats, now gluten-free”",
    intro1:
      "Macu is Re-Start's own bakery and the heart of everything sweet we serve. A space devoted entirely to gluten-free bread and pastries, where every recipe sets out to prove that going without gluten doesn't mean going without flavour.",
    intro2:
      "Everything served at Re-Start Brunch & Coffee comes from here: freshness, traceability and full quality control, from the oven to your table.",
    ovenTitle: "Fresh from the oven",
    products: [
      {
        title: "Slow-fermented bread",
        text: "Loaves baked every day with slow fermentation, for real crumb, crust and flavour.",
        alt: "Freshly baked gluten-free loaf in the shop window",
      },
      {
        title: "New York style cookies",
        text: "Thick, soft in the middle and loaded: chocolate, pistachio, lemon and poppy seed, salted caramel…",
        alt: "Tray of gluten-free cookies before baking",
      },
      {
        title: "Cakes & sponges",
        text: "Cakes, sponges, muffins and other sweet treats, also made to order for celebrations.",
        alt: "Individual gluten-free cake in its Macu packaging",
      },
      {
        title: "Bread & pastries",
        text: "Baguettes, rolls and pastries of the day. What Re-Start serves at the counter comes from this bakery.",
        alt: "Freshly baked gluten-free baguettes",
      },
    ],
    workAlts: [
      "Mixing gluten-free dough in the mixer",
      "Shaping baguettes by hand",
      "Taking a tray of baguettes out of the oven",
    ],
    workTitle: ["Where all our", "baking begins"],
    work1:
      "Macu isn't a special line inside a regular bakery. It's a space devoted entirely to gluten-free baking, where every step is designed with coeliacs' safety in mind.",
    work2:
      "Cookies, rolls, cakes, pancakes, muffins… All handmade, with carefully chosen ingredients and the care that anyone who has to watch what they eat deserves.",
    workHand: ["Gluten-free can be", "just as good. Or better"],
    whyTitle: "What makes Macu different",
    values: [
      {
        title: "100% gluten-free",
        text: "Not a special line inside a regular bakery: gluten never comes in. That rules out cross-contamination, so coeliacs can eat with peace of mind.",
      },
      {
        title: "Handmade",
        text: "Every piece is made by hand, with selected ingredients and recipes designed so taste and texture are second to none.",
      },
      {
        title: "Re-Start's bakery",
        text: "All of Re-Start Brunch & Coffee's baking comes from Macu. Freshness and quality control from the oven to the table.",
      },
      {
        title: "For everyone",
        text: "Coeliac or not, the idea is the same: nobody should have to give up good bread or a treat, and everyone can share a table without worry.",
      },
    ],
    homeTitle: "Take Macu home",
    homeText:
      "Cookies and MACU BOXES can be ordered from the online shop, with delivery across mainland Spain. And if you're celebrating, the bakery makes cakes and platters to order.",
    order: "Place an order",
    bagsAlt: "Bags of gluten-free cookies with the Macu label",
    visitTitle: "Visit the bakery",
    visitIntro:
      "The shop is a couple of streets from Re-Start. Drop by for today's bread, cookies or to collect your order.",
    facadeAlt: "Front of Macu Gluten Free Bakery with its green sign",
    hours: [
      { days: "Monday & Tuesday", hours: "Closed", closed: true },
      { days: "Wednesday to Friday", hours: "9:30 – 13:30" },
      { days: "Saturday", hours: "10:00 – 13:00" },
      { days: "Sunday", hours: "Closed", closed: true },
    ],
    hoursNote: "Hours as published on macuglutenfree.com. May vary on public holidays.",
    mapTitle: "Map of Macu Gluten Free Bakery",
  },
  fr: {
    seoTitle: "Macu Bakery | Boulangerie 100 % sans gluten à Vilanova i la Geltrú",
    seoDesc:
      "Pain au levain longue fermentation, cookies façon New York, gâteaux et viennoiseries artisanales 100 % sans gluten à Vilanova i la Geltrú. Boutique en ligne avec livraison et gâteaux sur commande.",
    ogAlt: "Baguettes sans gluten dans le four de Macu Bakery",
    ldDesc: "Boulangerie artisanale 100 % sans gluten : pain longue fermentation, cookies façon New York, gâteaux et viennoiseries.",
    cuisine: ["Boulangerie sans gluten", "Pâtisserie sans gluten"],
    home: "Accueil",
    heroAlt: "Baguettes sans gluten en train de dorer dans le four de Macu",
    eyebrow: "La boulangerie de Re-Start",
    subtitle: ["Pain et pâtisserie artisanale", "100 % sans gluten"],
    shop: "Boutique en ligne",
    visit: "Visiter la boulangerie",
    logoAlt: "Logo de Macu Gluten Free Bakery",
    quote: "« Vos douceurs préférées, désormais sans gluten »",
    intro1:
      "Macu est la boulangerie de Re-Start et le cœur de notre pâtisserie. Un lieu entièrement dédié au pain et aux douceurs sans gluten, où chaque recette veut prouver que se passer de gluten ne veut pas dire se passer de saveur.",
    intro2:
      "Tout ce qui est servi chez Re-Start Brunch & Coffee vient d'ici : fraîcheur, traçabilité et contrôle total de la qualité, du fournil à la table.",
    ovenTitle: "Tout juste sorti du four",
    products: [
      {
        title: "Pain longue fermentation",
        text: "Miches et pains cuits chaque jour, avec des fermentations lentes pour une vraie mie, une vraie croûte et du goût.",
        alt: "Miche de pain sans gluten tout juste sortie du four en vitrine",
      },
      {
        title: "Cookies façon New York",
        text: "Épais, fondants à l'intérieur et généreux : chocolat, pistache, citron-pavot, caramel salé…",
        alt: "Plaque de cookies sans gluten avant cuisson",
      },
      {
        title: "Gâteaux et cakes",
        text: "Gâteaux, cakes, muffins et autres douceurs, aussi sur commande pour vos fêtes.",
        alt: "Gâteau individuel sans gluten dans son emballage Macu",
      },
      {
        title: "Baguettes et viennoiseries",
        text: "Baguettes, petits pains et viennoiseries du jour. Ce que Re-Start sert au comptoir sort de cette boulangerie.",
        alt: "Baguettes sans gluten tout juste sorties du four",
      },
    ],
    workAlts: [
      "Pétrissage d'une pâte sans gluten au pétrin",
      "Façonnage des baguettes à la main",
      "Sortie du four d'une plaque de baguettes",
    ],
    workTitle: ["Là où naît toute", "notre pâtisserie"],
    work1:
      "Macu n'est pas une gamme spéciale au sein d'une boulangerie classique. C'est un lieu entièrement dédié au sans gluten, où chaque étape est pensée pour la sécurité des personnes cœliaques.",
    work2:
      "Cookies, petits pains, gâteaux, pancakes, muffins… Tout est fait à la main, avec des ingrédients choisis et le soin que mérite celui qui doit surveiller ce qu'il mange.",
    workHand: ["Sans gluten, ça peut être", "aussi bon. Voire meilleur"],
    whyTitle: "Ce qui rend Macu différente",
    values: [
      {
        title: "100 % sans gluten",
        text: "Pas une gamme spéciale dans une boulangerie classique : ici, le gluten n'entre pas. Pas de contamination croisée, les personnes cœliaques peuvent manger tranquilles.",
      },
      {
        title: "Fait main",
        text: "Chaque pièce est fabriquée artisanalement, avec des ingrédients choisis et des recettes pensées pour que le goût et la texture n'aient rien à envier.",
      },
      {
        title: "La boulangerie de Re-Start",
        text: "Toute la pâtisserie de Re-Start Brunch & Coffee vient de Macu. Fraîcheur et contrôle de la qualité du four jusqu'à la table.",
      },
      {
        title: "Pour tout le monde",
        text: "Cœliaque ou non, l'idée est la même : que personne n'ait à renoncer à un bon pain ou à une douceur, et que tout le monde puisse partager la même table.",
      },
    ],
    homeTitle: "Emportez Macu chez vous",
    homeText:
      "Les cookies et les MACU BOX se commandent sur la boutique en ligne, avec livraison dans toute l'Espagne péninsulaire. Et pour vos fêtes, la boulangerie prépare gâteaux et plateaux sur commande.",
    order: "Passer commande",
    bagsAlt: "Sachets de biscuits sans gluten avec l'étiquette Macu",
    visitTitle: "Venez à la boulangerie",
    visitIntro:
      "La boutique est à deux rues de Re-Start. Passez chercher le pain du jour, des cookies ou votre commande.",
    facadeAlt: "Façade de Macu Gluten Free Bakery avec son enseigne verte",
    hours: [
      { days: "Lundi et mardi", hours: "Fermé", closed: true },
      { days: "Du mercredi au vendredi", hours: "9h30 – 13h30" },
      { days: "Samedi", hours: "10h00 – 13h00" },
      { days: "Dimanche", hours: "Fermé", closed: true },
    ],
    hoursNote: "Horaires publiés sur macuglutenfree.com. Ils peuvent varier les jours fériés.",
    mapTitle: "Plan de Macu Gluten Free Bakery",
  },
};

export const PRODUCTS = [
  { img: panImg, seed: 501 },
  { img: cookiesImg, seed: 503 },
  { img: tartaImg, seed: 509 },
  { img: barrasImg, seed: 521 },
];

export const VALUE_ICONS = [WheatOff, HeartHand, Cake, Users];
