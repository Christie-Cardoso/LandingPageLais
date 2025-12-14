// Google Analytics 4 Helper Functions
// Rastreamento de eventos e pageviews

declare global {
  interface Window {
    gtag: (command: string, ...args: (string | Record<string, string | number | boolean>)[]) => void;
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';

/**
 * Registra um pageview no GA4
 * Útil para SPAs onde a URL muda sem full page reload
 */
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_ID, {
      page_path: url,
    });
  }
};

/**
 * Registra um evento customizado no GA4
 * @param action - Nome do evento (ex: 'booking_modal_open')
 * @param params - Parâmetros adicionais do evento
 */
export const event = (action: string, params: Record<string, string | number | boolean> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      ...params,
      timestamp: new Date().toISOString(),
    });
  }
};

/**
 * Rastreia abertura do booking modal
 */
export const trackBookingModalOpen = (source: string) => {
  event('booking_modal_open', {
    source, // 'hero_cta', 'navbar', 'quiz_finish', etc
  });
};

/**
 * Rastreia progresso no agendamento
 */
export const trackBookingStepComplete = (step: string, data?: Record<string, string | number | boolean>) => {
  event('booking_step_complete', {
    step, // 'service', 'location', 'date', 'form'
    ...(data || {}),
  });
};

/**
 * Rastreia seleção de serviço
 */
export const trackServiceSelected = (serviceId: string, serviceName: string) => {
  event('service_selected', {
    service_id: serviceId,
    service_name: serviceName,
  });
};

/**
 * Rastreia seleção de localidade
 */
export const trackLocationSelected = (locationId: string, locationName: string) => {
  event('location_selected', {
    location_id: locationId,
    location_name: locationName,
  });
};

/**
 * Rastreia data/hora selecionada
 */
export const trackDateTimeSelected = (date: string, time: string) => {
  event('datetime_selected', {
    date,
    time,
  });
};

/**
 * Rastreia conclusão do formulário e redirecionamento para WhatsApp
 * EVENTO MAIS IMPORTANTE - CONVERSÃO!
 */
export const trackBookingConversion = (data: {
  name: string;
  phone: string;
  email?: string;
  service: string;
  location: string;
  date: string;
}) => {
  event('booking_conversion', {
    service_name: data.service,
    location_name: data.location,
    booking_date: data.date,
    value: 1, // GA4 usa 'value' para conversões
    currency: 'BRL',
    transaction_id: `booking_${Date.now()}`, // ID único
  });
};

/**
 * Rastreia cliques em links de seções (scroll nav)
 */
export const trackSectionClick = (sectionId: string) => {
  event('section_click', {
    section: sectionId, // 'sobre', 'servicos', 'faq', etc
  });
};

/**
 * Rastreia envio de quiz
 */
export const trackQuizComplete = (result: string) => {
  event('quiz_complete', {
    quiz_result: result,
  });
};

/**
 * Rastreia clique em links externos (WhatsApp, social)
 */
export const trackExternalLink = (url: string, type: string) => {
  event('external_link_click', {
    url,
    type, // 'whatsapp', 'instagram', 'facebook', etc
  });
};
