import { Star, Clock, Video } from "lucide-react";
import type { ServiceType, LocationType } from "./types";

// ============================================
// COMPANY INFO
// ============================================
export const COMPANY_NAME = "Lais Nutri";
export const COMPANY_TAGLINE = "Saúde Integrativa";
export const COMPANY_DESCRIPTION =
  "Acreditamos que a alimentação saudável deve ser leve, prazerosa e possível. Transformando vidas através do equilíbrio e da ciência nutricional.";

export const CONTACT_EMAIL = "contato@laisnutri.com.br";
export const WHATSAPP_NUMBER = "5531993034536";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

// ============================================
// LOCATIONS (ENDEREÇOS)
// ============================================
export const OFFICE_SAVASSI = {
  name: "Unidade Savassi",
  address: "Av. do Contorno, 6000 - Savassi",
  city: "Belo Horizonte, MG",
};

export const OFFICE_PAMPULHA = {
  name: "Unidade Pampulha",
  address: "Av. Pres. Antônio Carlos, 7000",
  city: "Belo Horizonte, MG",
};

// ============================================
// SOCIAL MEDIA
// ============================================
export const SOCIAL_LINKS = {
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  linkedin: "https://linkedin.com",
};

// ============================================
// TESTIMONIALS
// ============================================
export const TESTIMONIALS = [
  {
    name: "Juliana Paiva",
    loss: "-8kg",
    text: "A Lais mudou minha relação com o espelho. O aplicativo é incrível, uso o scanner de rótulos toda vez que vou ao mercado!",
  },
  {
    name: "Roberto Silva",
    loss: "-12kg",
    text: "Eu achava que precisava comer só salada. Descobri que posso comer arroz e feijão e emagrecer. O plano é muito prático.",
  },
  {
    name: "Carla Diaz",
    loss: "Massa Magra",
    text: "Ganhei 3kg de massa em 2 meses. O treino rendendo muito mais e a disposição lá em cima.",
  },
];

// ============================================
// FAQ ITEMS
// ============================================
export const FAQ_ITEMS = [
  {
    question: "Você aceita plano de saúde?",
    answer:
      "Meus atendimentos são particulares para garantir a qualidade e o tempo necessário (1h30) que você merece. Porém, emito recibo detalhado para que você solicite o reembolso junto ao seu convênio. A maioria dos planos reembolsa uma boa parte do valor.",
  },
  {
    question: "A consulta online funciona mesmo?",
    answer:
      "Com certeza! A metodologia é a mesma. A única diferença é a bioimpedância, que substituímos por medidas corporais que ensino você a tirar, e análise visual. A consulta é via Google Meet, olho no olho, com a mesma duração e entrega.",
  },
  {
    question: "Terei acesso ao aplicativo?",
    answer:
      "Sim! Todos os pacientes (presencial ou online) ganham acesso exclusivo ao aplicativo. Lá você terá seu plano alimentar, lista de compras, chat direto comigo e acesso a conteúdos exclusivos.",
  },
  {
    question: "O retorno está incluso?",
    answer:
      "Trabalho com planos de acompanhamento. A consulta avulsa (Primeira Consulta) inclui suporte por 30 dias para ajustes, mas não inclui uma nova consulta de retorno presencial. Para acompanhamento contínuo, temos pacotes com valores especiais.",
  },
  {
    question: "E se eu não gostar da dieta?",
    answer:
      "Impossível! Brincadeiras à parte, o plano é montado COM você, na hora. Não entrego nada pronto. Negociamos cada refeição baseada no que você gosta e pode comprar. Se mesmo assim precisar mudar algo, ajustamos na hora pelo WhatsApp.",
  },
];

// ============================================
// SERVICES & LOCATIONS
// ============================================
export const SERVICES: ServiceType[] = [
  {
    id: "primeira",
    title: "Primeira Consulta",
    duration: "1h 30min",
    price: "R$ 250",
    description: "Avaliação completa, bioimpedância e plano alimentar.",
    icon: Star,
    type: "presencial",
  },
  {
    id: "retorno",
    title: "Consulta de Retorno",
    duration: "45min",
    price: "R$ 150",
    description: "Acompanhamento de resultados e ajustes na dieta.",
    icon: Clock,
    type: "presencial",
  },
  {
    id: "online",
    title: "Atendimento Online",
    duration: "1h",
    price: "R$ 200",
    description: "Videoconferência via Google Meet.",
    icon: Video,
    type: "online",
  },
];

export const LOCATIONS: LocationType[] = [
  {
    id: "savassi",
    name: "Unidade Savassi",
    address: "Av. do Contorno, 6000 - Savassi",
    city: "Belo Horizonte, MG",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "lourdes",
    name: "Espaço Lourdes",
    address: "Rua da Bahia, 2500 - Lourdes",
    city: "Belo Horizonte, MG",
    image:
      "https://images.unsplash.com/photo-1504384308090-c54be3852f33?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "pampulha",
    name: "Pampulha Office",
    address: "Av. Pres. Antônio Carlos, 7000",
    city: "Belo Horizonte, MG",
    image:
      "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=600&auto=format&fit=crop",
  },
];
