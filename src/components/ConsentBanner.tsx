/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";

/**
 * Componente de Consentimento para LGPD/GDPR
 * Exibe banner na primeira vez e persiste escolha no localStorage
 */
export const ConsentBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  const enableAnalytics = useCallback(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
      });
    }
  }, []);

  useEffect(() => {
    // Verifica se usuário já deu consentimento no localStorage
    const consent = localStorage.getItem("analytics_consent");

    if (consent === null) {
      // Primeira vez - mostrar banner
      setShowBanner(true);
    } else if (consent === "true") {
      // Já consentiu - ativar analytics
      enableAnalytics();
    }
    // Se consent === "false", apenas não mostra o banner
  }, [enableAnalytics]);

  const handleAccept = () => {
    localStorage.setItem("analytics_consent", "true");
    localStorage.setItem("consent_date", new Date().toISOString());
    setShowBanner(false);
    enableAnalytics();
  };

  const handleReject = () => {
    localStorage.setItem("analytics_consent", "false");
    setShowBanner(false);
  };

  // Não renderiza banner se usuário já decidiu
  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-stone-900 border-t border-stone-700 shadow-2xl animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Texto do banner */}
        <div className="flex-1">
          <p className="text-sm text-stone-300 leading-relaxed">
            Usamos{" "}
            <span className="font-bold text-emerald-500">Google Analytics</span>{" "}
            para entender como você interage com nosso site e melhorar sua
            experiência. Seus dados são anônimos e seguros.
          </p>
          <p className="text-xs text-stone-500 mt-2">
            Leia nossa{" "}
            <a
              href="#politica-privacidade"
              className="text-emerald-500 hover:text-emerald-400 underline"
            >
              política de privacidade
            </a>
          </p>
        </div>

        {/* Botões de ação */}
        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleReject}
            className="px-4 py-2 text-sm font-medium text-stone-400 hover:text-stone-300 border border-stone-700 rounded-lg transition-colors cursor-pointer"
            aria-label="Rejeitar cookies"
          >
            Rejeitar
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors cursor-pointer"
            aria-label="Aceitar cookies"
          >
            Aceitar
          </button>
        </div>

        {/* Botão fechar mobile */}
        <button
          onClick={handleReject}
          className="md:hidden absolute top-3 right-3 text-stone-500 hover:text-stone-300 transition-colors p-1"
          aria-label="Fechar banner"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};
