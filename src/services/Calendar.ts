/* eslint-disable @typescript-eslint/no-explicit-any */
export const generateGoogleCalendarLink = (
  date: Date,
  time: string,
  clientName: string,
  serviceName: string,
  location: string
) => {
  const [hours, minutes] = time.split(":").map(Number);

  const start = new Date(date);
  start.setHours(hours, minutes, 0);

  const end = new Date(start);
  end.setHours(start.getHours() + 1);

  const fmt = (d: Date) => d.toISOString().replace(/-|:|\.\d\d\d/g, "");

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `Consulta: ${serviceName} com Lais`,
    details: `Consulta agendada para ${clientName}.`,
    location,
    dates: `${fmt(start)}/${fmt(end)}`,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

export const openWhatsAppScheduling = (data: any) => {
  const phone = "5531999999999";

  const message = `
Olá! 🌿 Gostaria de confirmar meu agendamento:

📝 *Serviço:* ${data.service}
📍 *Local:* ${data.location}
📅 *Data:* ${data.date}
⏰ *Horário:* ${data.time}
👤 *Nome:* ${data.name}

🔗 *Calendário:* ${data.calendarLink}
  `.trim();

  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};
