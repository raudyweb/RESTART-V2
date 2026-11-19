/**
 * Textos legales en los 4 idiomas. Estructura estándar para una web informativa de un negocio en España
 * (LSSI-CE, RGPD/LOPDGDD). Los datos del titular vienen de src/config/legal.ts: aquí se escriben como
 * {name}, {taxId}, {address}, {registry}, {email}, {phone}.
 *
 * TODO: que el cliente (o su gestoría) revise los textos antes de publicar la web con su dominio.
 */
export type LegalDoc = "legal" | "privacy" | "cookies";
type Section = { h: string; p: string[] };
type Doc = { title: string; intro: string; sections: Section[] };

export const UPDATED_LABEL = {
  es: "Última actualización",
  ca: "Darrera actualització",
  en: "Last updated",
  fr: "Dernière mise à jour",
};

export const PENDING = { es: "[pendiente]", ca: "[pendent]", en: "[pending]", fr: "[à compléter]" };

export const LEGAL: Record<LegalDoc, Record<"es" | "ca" | "en" | "fr", Doc>> = {
  legal: {
    es: {
      title: "Aviso legal",
      intro:
        "En cumplimiento de la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), se informa de los datos del titular de esta web.",
      sections: [
        {
          h: "1. Titular",
          p: [
            "Titular: {name}",
            "NIF/CIF: {taxId}",
            "Domicilio: {address}",
            "Datos registrales: {registry}",
            "Email: {email} · Teléfono: {phone}",
          ],
        },
        {
          h: "2. Objeto",
          p: [
            "Esta web informa sobre Re-Start Coffee, su obrador Macu Bakery y sus puntos de venta en el Camping Vilanova Park: carta, horarios, ubicación y servicios. No se venden productos a través de esta web.",
          ],
        },
        {
          h: "3. Condiciones de uso",
          p: [
            "El acceso a la web es gratuito y supone aceptar este aviso legal. La persona usuaria se compromete a hacer un uso adecuado de los contenidos y a no emplearlos para actividades ilícitas.",
          ],
        },
        {
          h: "4. Propiedad intelectual",
          p: [
            "Los textos, fotografías, logotipos y diseño de esta web pertenecen a su titular o se usan con autorización. No se permite su reproducción, distribución o transformación sin permiso por escrito.",
          ],
        },
        {
          h: "5. Responsabilidad y enlaces",
          p: [
            "El titular procura que la información (precios, horarios, carta) esté actualizada, pero puede cambiar sin previo aviso. La web enlaza a servicios de terceros (Google Maps, Instagram, la tienda de Macu Bakery) cuyo contenido no controla.",
          ],
        },
        {
          h: "6. Legislación aplicable",
          p: [
            "Este aviso legal se rige por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales que correspondan según la ley.",
          ],
        },
      ],
    },
    ca: {
      title: "Avís legal",
      intro:
        "En compliment de la Llei 34/2002, de serveis de la societat de la informació i de comerç electrònic (LSSI-CE), s'informa de les dades del titular d'aquest web.",
      sections: [
        {
          h: "1. Titular",
          p: [
            "Titular: {name}",
            "NIF/CIF: {taxId}",
            "Domicili: {address}",
            "Dades registrals: {registry}",
            "Correu: {email} · Telèfon: {phone}",
          ],
        },
        {
          h: "2. Objecte",
          p: [
            "Aquest web informa sobre Re-Start Coffee, el seu obrador Macu Bakery i els seus punts de venda al Càmping Vilanova Park: carta, horaris, ubicació i serveis. No es venen productes a través d'aquest web.",
          ],
        },
        {
          h: "3. Condicions d'ús",
          p: [
            "L'accés al web és gratuït i implica acceptar aquest avís legal. La persona usuària es compromet a fer un ús adequat dels continguts i a no utilitzar-los per a activitats il·lícites.",
          ],
        },
        {
          h: "4. Propietat intel·lectual",
          p: [
            "Els textos, fotografies, logotips i disseny d'aquest web pertanyen al seu titular o s'utilitzen amb autorització. No se'n permet la reproducció, distribució o transformació sense permís per escrit.",
          ],
        },
        {
          h: "5. Responsabilitat i enllaços",
          p: [
            "El titular procura que la informació (preus, horaris, carta) estigui actualitzada, però pot canviar sense avís previ. El web enllaça a serveis de tercers (Google Maps, Instagram, la botiga de Macu Bakery) el contingut dels quals no controla.",
          ],
        },
        {
          h: "6. Legislació aplicable",
          p: [
            "Aquest avís legal es regeix per la legislació espanyola. Per a qualsevol controvèrsia, les parts se sotmeten als jutjats i tribunals que corresponguin segons la llei.",
          ],
        },
      ],
    },
    en: {
      title: "Legal notice",
      intro:
        "In accordance with Spanish Law 34/2002 on information society services and e-commerce (LSSI-CE), the details of the owner of this website are provided below.",
      sections: [
        {
          h: "1. Owner",
          p: [
            "Owner: {name}",
            "Tax ID (NIF/CIF): {taxId}",
            "Address: {address}",
            "Registry details: {registry}",
            "Email: {email} · Phone: {phone}",
          ],
        },
        {
          h: "2. Purpose",
          p: [
            "This website provides information about Re-Start Coffee, its bakery Macu Bakery and its outlets at Camping Vilanova Park: menu, opening hours, location and services. No products are sold through this website.",
          ],
        },
        {
          h: "3. Terms of use",
          p: [
            "Access to the website is free and implies acceptance of this legal notice. Users agree to make appropriate use of the content and not to use it for unlawful purposes.",
          ],
        },
        {
          h: "4. Intellectual property",
          p: [
            "The texts, photographs, logos and design of this website belong to its owner or are used with permission. They may not be reproduced, distributed or modified without written consent.",
          ],
        },
        {
          h: "5. Liability and links",
          p: [
            "The owner strives to keep information (prices, opening hours, menu) up to date, but it may change without notice. The website links to third-party services (Google Maps, Instagram, the Macu Bakery shop) whose content it does not control.",
          ],
        },
        {
          h: "6. Applicable law",
          p: [
            "This legal notice is governed by Spanish law. Any dispute shall be submitted to the courts that have jurisdiction under the law.",
          ],
        },
      ],
    },
    fr: {
      title: "Mentions légales",
      intro:
        "Conformément à la loi espagnole 34/2002 sur les services de la société de l'information et le commerce électronique (LSSI-CE), voici les informations sur le titulaire de ce site.",
      sections: [
        {
          h: "1. Titulaire",
          p: [
            "Titulaire : {name}",
            "NIF/CIF : {taxId}",
            "Adresse : {address}",
            "Données d'immatriculation : {registry}",
            "E-mail : {email} · Téléphone : {phone}",
          ],
        },
        {
          h: "2. Objet",
          p: [
            "Ce site présente Re-Start Coffee, sa boulangerie Macu Bakery et ses points de vente au Camping Vilanova Park : carte, horaires, accès et services. Aucun produit n'est vendu sur ce site.",
          ],
        },
        {
          h: "3. Conditions d'utilisation",
          p: [
            "L'accès au site est gratuit et implique l'acceptation des présentes mentions légales. L'utilisateur s'engage à faire un usage approprié des contenus et à ne pas les utiliser à des fins illicites.",
          ],
        },
        {
          h: "4. Propriété intellectuelle",
          p: [
            "Les textes, photographies, logos et la conception de ce site appartiennent à son titulaire ou sont utilisés avec autorisation. Toute reproduction, diffusion ou modification sans accord écrit est interdite.",
          ],
        },
        {
          h: "5. Responsabilité et liens",
          p: [
            "Le titulaire veille à ce que les informations (prix, horaires, carte) soient à jour, mais elles peuvent changer sans préavis. Le site renvoie vers des services tiers (Google Maps, Instagram, la boutique de Macu Bakery) dont il ne contrôle pas le contenu.",
          ],
        },
        {
          h: "6. Droit applicable",
          p: [
            "Les présentes mentions légales sont régies par le droit espagnol. Tout litige sera soumis aux juridictions compétentes selon la loi.",
          ],
        },
      ],
    },
  },

  privacy: {
    es: {
      title: "Política de privacidad",
      intro:
        "Esta política explica qué datos personales se tratan en esta web y con qué fin, de acuerdo con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).",
      sections: [
        { h: "1. Responsable", p: ["{name} · NIF/CIF {taxId} · {address} · {email}"] },
        {
          h: "2. Qué datos tratamos",
          p: [
            "Esta web no tiene formularios ni pide datos personales. Solo tratamos los datos que nos facilites si nos escribes por email, nos llamas o nos contactas por Instagram (nombre, teléfono, email y el contenido de tu mensaje), por ejemplo para reservar un taller barista.",
            "El proveedor de alojamiento de la web registra, por seguridad, datos técnicos de las visitas (como la dirección IP) durante un tiempo limitado.",
          ],
        },
        {
          h: "3. Finalidad y base legal",
          p: [
            "Usamos tus datos para responder a tus consultas y gestionar reservas o encargos. La base legal es tu consentimiento al contactarnos y, en su caso, la gestión de la relación que nos pidas.",
          ],
        },
        {
          h: "4. Conservación",
          p: [
            "Conservamos los datos el tiempo necesario para atender tu solicitud y, después, durante los plazos que exija la ley.",
          ],
        },
        {
          h: "5. Destinatarios",
          p: [
            "No cedemos tus datos a terceros salvo obligación legal. Algunos proveedores tratan datos por cuenta nuestra (alojamiento web, correo). Si decides cargar el mapa, Google tratará datos según su propia política de privacidad.",
          ],
        },
        {
          h: "6. Tus derechos",
          p: [
            "Puedes pedir el acceso, la rectificación, la supresión, la oposición, la limitación del tratamiento y la portabilidad de tus datos escribiendo a {email}. Si crees que no hemos tratado bien tus datos, puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).",
          ],
        },
      ],
    },
    ca: {
      title: "Política de privacitat",
      intro:
        "Aquesta política explica quines dades personals es tracten en aquest web i amb quina finalitat, d'acord amb el Reglament (UE) 2016/679 (RGPD) i la Llei orgànica 3/2018 (LOPDGDD).",
      sections: [
        { h: "1. Responsable", p: ["{name} · NIF/CIF {taxId} · {address} · {email}"] },
        {
          h: "2. Quines dades tractem",
          p: [
            "Aquest web no té formularis ni demana dades personals. Només tractem les dades que ens facilitis si ens escrius per correu, ens truques o ens contactes per Instagram (nom, telèfon, correu i el contingut del missatge), per exemple per reservar un taller barista.",
            "El proveïdor d'allotjament del web registra, per seguretat, dades tècniques de les visites (com l'adreça IP) durant un temps limitat.",
          ],
        },
        {
          h: "3. Finalitat i base legal",
          p: [
            "Fem servir les teves dades per respondre les teves consultes i gestionar reserves o encàrrecs. La base legal és el teu consentiment en contactar-nos i, si escau, la gestió de la relació que ens demanis.",
          ],
        },
        {
          h: "4. Conservació",
          p: [
            "Conservem les dades el temps necessari per atendre la teva sol·licitud i, després, durant els terminis que exigeixi la llei.",
          ],
        },
        {
          h: "5. Destinataris",
          p: [
            "No cedim les teves dades a tercers llevat d'obligació legal. Alguns proveïdors tracten dades per compte nostre (allotjament web, correu). Si decideixes carregar el mapa, Google tractarà dades segons la seva pròpia política de privacitat.",
          ],
        },
        {
          h: "6. Els teus drets",
          p: [
            "Pots demanar l'accés, la rectificació, la supressió, l'oposició, la limitació del tractament i la portabilitat de les teves dades escrivint a {email}. Si creus que no hem tractat bé les teves dades, pots reclamar davant l'Agència Espanyola de Protecció de Dades (www.aepd.es).",
          ],
        },
      ],
    },
    en: {
      title: "Privacy policy",
      intro:
        "This policy explains which personal data are processed on this website and why, in accordance with Regulation (EU) 2016/679 (GDPR) and Spanish Organic Law 3/2018 (LOPDGDD).",
      sections: [
        { h: "1. Data controller", p: ["{name} · Tax ID {taxId} · {address} · {email}"] },
        {
          h: "2. Data we process",
          p: [
            "This website has no forms and does not ask for personal data. We only process the data you give us if you email us, call us or contact us on Instagram (name, phone, email and the content of your message), for example to book a barista workshop.",
            "For security, the website hosting provider logs technical data about visits (such as IP address) for a limited time.",
          ],
        },
        {
          h: "3. Purpose and legal basis",
          p: [
            "We use your data to answer your enquiries and manage bookings or orders. The legal basis is your consent when contacting us and, where applicable, managing the relationship you request.",
          ],
        },
        {
          h: "4. Retention",
          p: ["We keep data for as long as needed to handle your request and then for the periods required by law."],
        },
        {
          h: "5. Recipients",
          p: [
            "We do not share your data with third parties unless legally required. Some providers process data on our behalf (web hosting, email). If you choose to load the map, Google will process data under its own privacy policy.",
          ],
        },
        {
          h: "6. Your rights",
          p: [
            "You can request access, rectification, erasure, objection, restriction of processing and portability of your data by writing to {email}. If you believe your data have not been handled properly, you can complain to the Spanish Data Protection Agency (www.aepd.es).",
          ],
        },
      ],
    },
    fr: {
      title: "Politique de confidentialité",
      intro:
        "Cette politique explique quelles données personnelles sont traitées sur ce site et dans quel but, conformément au Règlement (UE) 2016/679 (RGPD) et à la loi organique espagnole 3/2018 (LOPDGDD).",
      sections: [
        { h: "1. Responsable du traitement", p: ["{name} · NIF/CIF {taxId} · {address} · {email}"] },
        {
          h: "2. Données traitées",
          p: [
            "Ce site n'a pas de formulaire et ne demande aucune donnée personnelle. Nous traitons uniquement les données que vous nous communiquez si vous nous écrivez, nous appelez ou nous contactez sur Instagram (nom, téléphone, e-mail et contenu du message), par exemple pour réserver un atelier barista.",
            "Pour des raisons de sécurité, l'hébergeur du site enregistre des données techniques sur les visites (comme l'adresse IP) pendant une durée limitée.",
          ],
        },
        {
          h: "3. Finalité et base légale",
          p: [
            "Nous utilisons vos données pour répondre à vos demandes et gérer les réservations ou commandes. La base légale est votre consentement lorsque vous nous contactez et, le cas échéant, la gestion de la relation que vous demandez.",
          ],
        },
        {
          h: "4. Conservation",
          p: [
            "Nous conservons les données le temps nécessaire pour traiter votre demande, puis pendant les durées imposées par la loi.",
          ],
        },
        {
          h: "5. Destinataires",
          p: [
            "Nous ne communiquons pas vos données à des tiers, sauf obligation légale. Certains prestataires traitent des données pour notre compte (hébergement, messagerie). Si vous choisissez d'afficher la carte, Google traitera des données selon sa propre politique de confidentialité.",
          ],
        },
        {
          h: "6. Vos droits",
          p: [
            "Vous pouvez demander l'accès, la rectification, l'effacement, l'opposition, la limitation du traitement et la portabilité de vos données en écrivant à {email}. Si vous estimez que vos données n'ont pas été traitées correctement, vous pouvez saisir l'Agence espagnole de protection des données (www.aepd.es).",
          ],
        },
      ],
    },
  },

  cookies: {
    es: {
      title: "Política de cookies",
      intro: "Aquí te explicamos qué cookies se usan en esta web.",
      sections: [
        {
          h: "1. Cookies de esta web",
          p: [
            "Esta web no instala cookies propias, ni de análisis ni de publicidad. Las fuentes y las imágenes se sirven desde nuestro propio alojamiento.",
          ],
        },
        {
          h: "2. Cookies de terceros",
          p: [
            "Los mapas de Google Maps no se cargan hasta que pulsas «Ver mapa». Si lo haces, Google puede instalar sus propias cookies, según su política: policies.google.com/technologies/cookies.",
            "Los enlaces a Instagram, Google o la tienda de Macu Bakery te llevan a webs externas con sus propias políticas.",
          ],
        },
        {
          h: "3. Cómo gestionarlas",
          p: [
            "Puedes ver y borrar las cookies desde la configuración de tu navegador (Chrome, Safari, Firefox o Edge).",
          ],
        },
        {
          h: "4. Cambios",
          p: ["Si en el futuro añadimos herramientas que usen cookies, actualizaremos esta política y pediremos tu consentimiento antes de usarlas."],
        },
      ],
    },
    ca: {
      title: "Política de galetes",
      intro: "Aquí t'expliquem quines galetes (cookies) es fan servir en aquest web.",
      sections: [
        {
          h: "1. Galetes d'aquest web",
          p: [
            "Aquest web no instal·la galetes pròpies, ni d'anàlisi ni de publicitat. Les fonts i les imatges se serveixen des del nostre propi allotjament.",
          ],
        },
        {
          h: "2. Galetes de tercers",
          p: [
            "Els mapes de Google Maps no es carreguen fins que prems «Veure el mapa». Si ho fas, Google pot instal·lar les seves pròpies galetes, segons la seva política: policies.google.com/technologies/cookies.",
            "Els enllaços a Instagram, Google o la botiga de Macu Bakery et porten a webs externs amb les seves pròpies polítiques.",
          ],
        },
        {
          h: "3. Com gestionar-les",
          p: ["Pots veure i esborrar les galetes des de la configuració del teu navegador (Chrome, Safari, Firefox o Edge)."],
        },
        {
          h: "4. Canvis",
          p: ["Si en el futur afegim eines que facin servir galetes, actualitzarem aquesta política i et demanarem el consentiment abans de fer-les servir."],
        },
      ],
    },
    en: {
      title: "Cookie policy",
      intro: "This page explains which cookies are used on this website.",
      sections: [
        {
          h: "1. Our cookies",
          p: [
            "This website does not set its own cookies, nor any analytics or advertising cookies. Fonts and images are served from our own hosting.",
          ],
        },
        {
          h: "2. Third-party cookies",
          p: [
            "Google Maps maps are not loaded until you press “Show map”. If you do, Google may set its own cookies under its policy: policies.google.com/technologies/cookies.",
            "Links to Instagram, Google or the Macu Bakery shop take you to external websites with their own policies.",
          ],
        },
        {
          h: "3. Managing cookies",
          p: ["You can view and delete cookies in your browser settings (Chrome, Safari, Firefox or Edge)."],
        },
        {
          h: "4. Changes",
          p: ["If we add tools that use cookies in the future, we will update this policy and ask for your consent before using them."],
        },
      ],
    },
    fr: {
      title: "Politique de cookies",
      intro: "Voici les cookies utilisés sur ce site.",
      sections: [
        {
          h: "1. Cookies de ce site",
          p: [
            "Ce site n'installe aucun cookie propre, ni de mesure d'audience ni publicitaire. Les polices et les images sont servies depuis notre propre hébergement.",
          ],
        },
        {
          h: "2. Cookies tiers",
          p: [
            "Les cartes Google Maps ne se chargent que lorsque vous cliquez sur « Afficher la carte ». Dans ce cas, Google peut installer ses propres cookies selon sa politique : policies.google.com/technologies/cookies.",
            "Les liens vers Instagram, Google ou la boutique de Macu Bakery mènent à des sites externes ayant leurs propres politiques.",
          ],
        },
        {
          h: "3. Gérer les cookies",
          p: ["Vous pouvez consulter et supprimer les cookies dans les paramètres de votre navigateur (Chrome, Safari, Firefox ou Edge)."],
        },
        {
          h: "4. Modifications",
          p: ["Si nous ajoutons à l'avenir des outils utilisant des cookies, nous mettrons à jour cette politique et demanderons votre consentement avant de les utiliser."],
        },
      ],
    },
  },
};
