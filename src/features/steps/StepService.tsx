import React from "react";
import { ChevronRight } from "lucide-react";
import { StepServiceProps } from "../../lib/types";

export const StepService: React.FC<StepServiceProps> = ({
  selectedService,
  handleServiceSelect,
  SERVICES,
}) => {
  return (
    <div className="animate-fade-in max-w-lg mx-auto h-full flex flex-col justify-center">
      <div className="space-y-4">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            onClick={() => handleServiceSelect(service)}
            className={`p-5 rounded-xl border-2 cursor-pointer transition-all flex justify-between items-center group ${
              selectedService.id === service.id
                ? "border-emerald-500 bg-emerald-50/30"
                : "border-stone-100 hover:border-emerald-200 hover:bg-stone-50"
            }`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`p-3 rounded-full ${
                  selectedService.id === service.id
                    ? "bg-emerald-100 text-emerald-600"
                    : "bg-stone-100 text-stone-400 group-hover:bg-emerald-50 group-hover:text-emerald-500"
                }`}
              >
                {React.createElement(service.icon, {
                  className: "text-emerald-500",
                  size: 20,
                })}
              </div>
              <div>
                <h3 className="font-bold text-stone-800 text-lg">
                  {service.title}
                </h3>
                <p className="text-sm text-stone-500">{service.description}</p>
              </div>
            </div>
            <ChevronRight className="text-stone-300 group-hover:text-emerald-500 transition-colors" />
          </div>
        ))}
      </div>
    </div>
  );
};
