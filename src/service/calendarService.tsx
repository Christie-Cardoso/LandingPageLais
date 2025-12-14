// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getAvailableTimeSlots = (_date: Date): string[] => {
  const times = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];
  return times;
};

export const generateGoogleCalendarLink = (
  date: Date,
  time: string,
  clientName: string,
  locationStr: string
) => {
  const [hours, minutes] = time.split(":").map(Number);

  const startDate = new Date(date);
  startDate.setHours(hours, minutes, 0);

  const endDate = new Date(startDate);
  endDate.setHours(hours + 1, minutes, 0); // Duração de 1 hora

  const formatGoogleDate = (d: Date) => {
    return d.toISOString().replace(/-|:|\.\d\d\d/g, "");
  };

  const startStr = formatGoogleDate(startDate);
  const endStr = formatGoogleDate(endDate);

  const title = encodeURIComponent("Consulta Nutricional com Lais");
  const details = encodeURIComponent(
    `Consulta agendada para o paciente ${clientName}.`
  );
  const location = encodeURIComponent(locationStr);
  const nutritionistEmail = "lais@exemplo.com.br";

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startStr}/${endStr}&details=${details}&location=${location}&add=${nutritionistEmail}`;
};

export const formatDateForWhatsApp = (date: Date): string => {
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};
