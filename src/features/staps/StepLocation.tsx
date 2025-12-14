import Image from "next/image";
import { ChevronLeft, MapPin } from "lucide-react";
import { StepLocationProps } from "../../lib/types";

export const StepLocation: React.FC<StepLocationProps> = ({
  selectedLocation,
  setSelectedLocation,
  setStep,
  handleBack,
  LOCATIONS,
}) => {
  return (
    <div className="animate-fade-in h-full flex flex-col">
      <button
        onClick={handleBack}
        className="flex items-center gap-1 text-stone-400 hover:text-stone-600 mb-6 w-fit text-sm font-bold"
      >
        <ChevronLeft size={16} /> Voltar
      </button>

      <div className="grid gap-4">
        {LOCATIONS.map((loc) => (
          <div
            key={loc.id}
            onClick={() => {
              setSelectedLocation(loc);
              setStep("calendar");
            }}
            className={`relative overflow-hidden rounded-xl border-2 cursor-pointer transition-all group hover:shadow-lg ${
              selectedLocation.id === loc.id
                ? "border-emerald-500 ring-1 ring-emerald-500"
                : "border-stone-100"
            }`}
          >
            <div className="flex h-24">
              <div className="w-32 bg-stone-200 relative">
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
              <div className="flex-1 p-4 flex flex-col justify-center bg-white group-hover:bg-emerald-50/10 transition-colors">
                <h3 className="font-bold text-stone-800 flex items-center gap-2">
                  <MapPin size={16} className="text-emerald-500" /> {loc.name}
                </h3>
                <p className="text-sm text-stone-500 mt-1">{loc.address}</p>
                <p className="text-xs text-stone-400">{loc.city}</p>
              </div>
              <div className="flex items-center px-4 text-stone-300 group-hover:text-emerald-500">
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedLocation.id === loc.id
                      ? "border-emerald-500"
                      : "border-stone-300"
                  }`}
                >
                  {selectedLocation.id === loc.id && (
                    <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
