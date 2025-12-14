import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  label?: string;
  className?: string;
  variant?: "primary" | "floating";
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = "5531993034536", // Replace with real number
  message = "Olá Lais! Gostaria de agendar uma consulta.",
  label = "Agendar no WhatsApp",
  className = "",
  variant = "primary",
}) => {
  const encodedMessage = encodeURIComponent(message);
  const href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  if (variant === "floating") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-105 animate-bounce-slow ${className}`}
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="font-semibold hidden md:inline">Agendar Agora</span>
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md ${className}`}
    >
      <MessageCircle size={20} />
      {label}
    </a>
  );
};
