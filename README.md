# Lais Nutri - Landing Page

Uma landing page moderna para a nutricionista Lais, especializada em nutrição comportamental e esportiva. O projeto é totalmente focado em captura de leads através de agendamentos integrados com WhatsApp.

## 🎯 Visão Geral

**Lais Nutri** é uma landing page completa e funcional que apresenta serviços nutricionais com:

- 📱 Fluxo de agendamento intuitivo (serviço → local → data/hora → dados)
- 💬 Integração direta com WhatsApp para confirmação
- 🎨 Design moderno com Tailwind CSS e componentes reutilizáveis
- 📝 Validação robusta de formulários com React Hook Form + Zod
- 🎯 Quiz interativo para identificar perfil do paciente
- 📍 Múltiplas unidades de atendimento
- 🗣️ Seções de depoimentos, FAQ e informações sobre métodos

**Importante:** Este é um projeto **sem backend**. Não há persistência de dados ou API - todos os agendamentos são encaminhados diretamente para WhatsApp.

---

## 📋 Arquitetura do Projeto

### Estrutura de Pastas

```
landingpage-lais/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── globals.css              # Estilos globais
│   │   ├── layout.tsx               # Layout raiz com metadata
│   │   └── page.tsx                 # Homepage principal
│   │
│   ├── components/                   # Componentes React reutilizáveis
│   │   ├── Header.tsx               # Navbar com navegação
│   │   ├── HeroSection.tsx           # Seção hero com CTA
│   │   ├── AboutSection.tsx          # Sobre a Lais
│   │   ├── ServicesSection.tsx       # Serviços oferecidos
│   │   ├── MethodSection.tsx         # Método de trabalho
│   │   ├── EcosystemSection.tsx      # Ferramentas digitais
│   │   ├── JourneySection.tsx        # Jornada do paciente
│   │   ├── TickerSection.tsx         # Ticker com estatísticas
│   │   ├── TestimonialsSection.tsx   # Depoimentos de pacientes
│   │   ├── FaqSection.tsx            # Perguntas frequentes
│   │   ├── BookingModal.tsx          # Modal com fluxo de agendamento
│   │   ├── WhatsAppButton.tsx        # Botão flutuante do WhatsApp
│   │   └── Footer.tsx                # Rodapé com contatos
│   │
│   ├── features/                     # Funcionalidades específicas
│   │   ├── quiz/                     # Sistema de quiz
│   │   │   ├── QuizData.ts          # Dados das perguntas
│   │   │   └── QuizModal.tsx        # Modal do quiz
│   │   │
│   │   └── staps/                    # Steps do agendamento
│   │       ├── StepService.tsx       # Seleção de serviço
│   │       ├── StepLocation.tsx      # Seleção de localidade
│   │       ├── StepDate.tsx          # Seleção de data/hora
│   │       └── StepForm.tsx          # Formulário com validação
│   │
│   ├── hooks/                        # Custom React Hooks
│   │   └── useBooking.ts            # Hook do fluxo de agendamento
│   │
│   ├── lib/                          # Utilitários e tipos
│   │   ├── constants.ts              # Todas as constantes e dados
│   │   └── types.ts                  # Tipos TypeScript
│   │
│   ├── service/                      # Serviços/Utilitários
│   │   ├── calendar.ts               # Formatação de datas
│   │   └── calendarService.tsx       # Links de Google Calendar
│   │
│   └── store/                        # State Management com Zustand
│       └── modalStore.ts             # Estado global de modais
│
├── public/                           # Arquivos estáticos
├── package.json                      # Dependências
├── tsconfig.json                     # Configuração TypeScript
├── tailwind.config.ts                # Configuração Tailwind
├── next.config.ts                    # Configuração Next.js
└── eslint.config.mjs                 # Configuração ESLint
```

---

## 🔧 Stack Tecnológico

### Frontend

- **Next.js 16.0.10** - Framework React com SSR e otimizações
- **React 19.2.1** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first CSS
- **lucide-react** - Ícones SVG

### Formulários & Validação

- **react-hook-form 7.68.0** - Gerenciamento de formulários eficiente
- **@hookform/resolvers 5.2.2** - Integração com validadores
- **zod 4.1.13** - Validação com schemas

### State Management

- **zustand 5.0.9** - Estado global leve (modais de agendamento e quiz)

### Utilitários

- **tailwind-merge 3.4.0** - Merge de classes Tailwind

---

## 🚀 Começando

### Pré-requisitos

- Node.js 18+ e npm (ou yarn/pnpm)
- Conhecimento básico de React e TypeScript

### Instalação

```bash
# Clone o repositório
git clone <seu-repositorio>
cd landingpage-lais

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build para Produção

```bash
# Build otimizado
npm run build

# Inicie o servidor de produção
npm start
```

---

## 📐 Fluxo de Agendamento

O fluxo de agendamento é o coração da aplicação:

```
[Usuário clica em CTA]
    ↓
[Quiz Modal] ← (opcional) Identifica perfil do paciente
    ↓
[Booking Modal] abre com 4 steps:
    ├─ Step 1: Seleção de Serviço
    │   └─ Opciones: Consulta Nutricional, Análise de Perfil, Revisão de Dieta
    │
    ├─ Step 2: Seleção de Local
    │   └─ Opciones: Unidade Savassi, Unidade Pampulha
    │
    ├─ Step 3: Data & Hora
    │   └─ Calendário interativo (próximos 7 dias)
    │
    └─ Step 4: Dados Pessoais (com validação)
        └─ Nome (2+ palavras, sem números)
           Telefone (10-11 dígitos)
           Email (opcional, gmail/hotmail/outlook)

    ↓
[Confirmação] → Link de Google Calendar + WhatsApp
    ↓
[Redirecionamento para WhatsApp] com mensagem pré-formatada
```

### Componentes Principais do Flow

**`useBooking.ts`**

- Hook customizado que gerencia todo o estado do agendamento
- Usa `useReducer` para lógica complexa
- Fornece métodos para navegação entre steps
- Integra com Google Calendar e WhatsApp

**`modalStore.ts`**

- Zustand store para controlar visibilidade de modais
- Estados: `isBookingOpen`, `isQuizOpen`, `quizResult`
- Actions: abrir/fechar booking, abrir/fechar quiz, finalizar quiz

---

## 📝 Estrutura de Dados

### Types Principais (src/lib/types.ts)

```typescript
// Serviço oferecido
type ServiceType = {
  id: string;
  title: string;
  duration: string;
  price: string;
  description: string;
  icon: React.ElementType;
  type: "presencial" | "online";
};

// Local de atendimento
type LocationType = {
  id: string;
  name: string;
  address: string;
  city: string;
  image: string;
};

// Detalhes do paciente no agendamento
interface PatientDetails {
  age: number;
  weight: number;
  height: number;
  gender: string;
  complaints: string;
  restrictions: string;
}
```

### Constants (src/lib/constants.ts)

Centralizadas em um único arquivo para evitar duplicação:

- **Company Info**: Nome, tagline, descrição
- **Contact Details**: Email, número WhatsApp, links
- **Offices**: Endereços de unidades (Savassi, Pampulha)
- **Social Media**: Links para redes sociais
- **Services**: Array de serviços disponíveis
- **Locations**: Array de unidades de atendimento
- **Testimonials**: Depoimentos de pacientes
- **FAQ Items**: Perguntas frequentes

---

## ✅ Validação de Formulários

### Schema Zod (src/features/staps/StepForm.tsx)

```typescript
const schema = z.object({
  name: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .refine((val) => !val.match(/\d/), "Nome não pode conter números")
    .refine(
      (val) => val.trim().split(/\s+/).length >= 2,
      "Nome e sobrenome são obrigatórios"
    ),

  phone: z.string().regex(/^\d{10,11}$/, "Telefone deve ter 10 ou 11 dígitos"),

  email: z
    .string()
    .optional()
    .refine(
      (val) =>
        !val || /^[^@]+@(gmail\.com|hotmail\.com|outlook\.com)$/.test(val),
      "Email deve ser Gmail, Hotmail ou Outlook"
    ),
});
```

**Validações:**

- ✅ Nome: mínimo 2 caracteres, sem números, nome + sobrenome obrigatório
- ✅ Telefone: 10-11 dígitos (DDD + número)
- ✅ Email: opcional, apenas domínios específicos
- ✅ Real-time validation com `mode: "onChange"`

---

## 🎨 Design & Styling

### Paleta de Cores

- **Primary**: Emerald (verde) - `emerald-600`
- **Secondary**: Stone (cinza/bege) - `stone-900`, `stone-800`
- **Accents**: Purple, white backgrounds

### Componentes Tailwind

- Responsivo (mobile-first)
- Animações suaves (hover, transitions)
- Acessibilidade (contraste, focus states)
- Componentes compostos com `clsx` e `tailwind-merge`

---

## 🔌 Integração WhatsApp

Não há API backend. O fluxo é totalmente frontend:

```typescript
const WHATSAPP_NUMBER = "5531993034536";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

// Ao finalizar agendamento:
window.open(
  `${WHATSAPP_LINK}?text=${encodeURIComponent(formattedMessage)}`,
  "_blank"
);
```

**Mensagem enviada:**

```
Olá! Gostaria de agendar uma consulta.
Serviço: [Nome do serviço]
Data: [Data/Hora selecionada]
Local: [Unidade]
Nome: [Nome do paciente]
Telefone: [Telefone]
```

---

## 📱 Responsividade

- **Mobile**: Stack vertical, modais em fullscreen
- **Tablet**: Grid duplo, ajustes de padding
- **Desktop**: Layout completo, animações sofisticadas

---

## 🧪 Testes (Futuros)

Recomendações:

- Unit tests: `jest` + `@testing-library/react`
- E2E tests: `playwright` ou `cypress`
- Validação de formulários: testes de schema zod

---

## 📊 Performance

- ✅ Next.js Image Optimization
- ✅ Code splitting automático
- ✅ Server Components (onde aplicável)
- ✅ Tailwind CSS (bundle otimizado)
- ✅ Lazy loading de componentes

---

## 🔒 Segurança

- ✅ TypeScript strict mode
- ✅ Validação client-side rigorosa com Zod
- ✅ Sem exposição de secrets (WhatsApp número é público)
- ⚠️ **Nota**: Para produção, considere adicionar rate limiting no WhatsApp

---

## 📈 Melhorias Futuras

### Médias

1. **Email Notifications**: Confirmações automáticas por email
2. **Google Calendar Integration**: Sincronização bidireccional
3. **Analytics**: Rastreamento de conversão e comportamento
4. **SEO**: Meta tags, schema.org, sitemap dinâmico
5. **Acessibilidade**: WCAG 2.1 AA compliance

### Baixas

1. **Temas**: Dark mode toggle
2. **i18n**: Suporte a múltiplos idiomas
3. **PWA**: Instalação como app

---

## 🛠️ Troubleshooting

### Problema: Modal não abre

**Solução**: Verifique se `useModalStore` está importado corretamente e se a ação está sendo chamada.

### Problema: Validação não funciona

**Solução**: Certifique-se que o schema Zod está correto e que `resolver` é passado para `useForm`.

### Problema: WhatsApp não abre

**Solução**: Verifique se o número está no formato correto com código de país (55 para Brasil).

---

## 📄 Licença

Propriedade privada da Lais Nutri.

---

## 🤝 Contribuições

Sugestões e melhorias são bem-vindas! Entre em contato via WhatsApp ou email.

---

## 📞 Contato

- **Email**: contato@laisnutri.com.br
- **WhatsApp**: (31) 99303-4536
- **Instagram**: [@laisnutri](https://instagram.com)

---

**Última atualização**: Dezembro 2025 | Next.js 16.0.10 | React 19.2.1
