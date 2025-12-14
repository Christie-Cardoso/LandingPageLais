// SEO & Marketing Copy
// Centralized SEO-optimized strings for better performance and consistency

export const SEO = {
  // Title Templates
  title: {
    main: "Lais Nutri | Nutrição Comportamental & Esportiva em BH",
    homepage: "Nutricionista em Belo Horizonte - Savassi e Pampulha",
    services: "Serviços de Nutrição Personalizada",
    about: "Sobre Dra. Lais - Nutricionista em BH",
  },

  // Meta Descriptions
  description: {
    main: "Transforme sua relação com a alimentação. Consultas presenciais em Savassi e Pampulha. Agendamento online via WhatsApp.",
    services:
      "Consulta nutricional, análise de perfil e revisão de dieta. Presencial ou online em Belo Horizonte.",
    about: "Dra. Lais Lima, nutricionista especializada em nutrição comportamental e esportiva com atendimento em Belo Horizonte.",
  },

  // Keywords
  keywords: [
    "nutricionista",
    "Belo Horizonte",
    "BH",
    "nutrição comportamental",
    "nutrição esportiva",
    "emagrecimento",
    "dieta personalizada",
    "nutrição online",
    "Savassi",
    "Pampulha",
  ],

  // Heading Copy
  headings: {
    h1: "Transforme sua Relação com a Alimentação",
    services: "Serviços Personalizados para sua Saúde",
    about: "Conheça a Lais",
    ecosystem: "Um Ecossistema Completo para sua Saúde",
    journey: "Sua Jornada de Transformação",
    testimonials: "Vidas Transformadas",
    faq: "Perguntas Frequentes",
  },

  // Structured Data
  organization: {
    name: "Lais Nutri",
    description: "Nutricionista especializada em nutrição comportamental e esportiva",
    url: "https://laisnutri.com.br",
    logo: "https://laisnutri.com.br/logo.svg",
    email: "contato@laisnutri.com.br",
    phone: "+5531993034536",
  },

  // Breadcrumb
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Sobre", url: "/#sobre" },
    { name: "Serviços", url: "/#servicos" },
    { name: "FAQ", url: "/#duvidas" },
  ],

  // Call-to-Actions
  cta: {
    primary: "Agendar Consulta",
    secondary: "Descobrir meu Perfil",
    whatsapp: "Fale Comigo no WhatsApp",
  },
};

// Rich Snippet Data for Services
export const SERVICES_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "serviceType": "MedicalBusiness",
  "offers": [
    {
      "@type": "Offer",
      "name": "Consulta Nutricional",
      "description": "Avaliação completa e prescrição de dieta personalizada",
      "priceCurrency": "BRL",
      "price": "180.00",
      "availableDeliveryMethod": ["OnSitePickup"],
    },
  ],
};
