import {
  Search,
  Download,
  Wrench,
  LineChart,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Explore",
    description:
      "Navegue pela biblioteca de simulações e tutoriais disponíveis",
    color: "cyan",
    emoji: "🔍",
  },
  {
    icon: Download,
    title: "Baixe",
    description:
      "Faça download dos arquivos AVEVA e materiais de apoio",
    color: "pink",
    emoji: "⬇️",
  },
  {
    icon: Wrench,
    title: "Pratique",
    description:
      "Siga os tutoriais e construa suas próprias simulações",
    color: "yellow",
    emoji: "🛠️",
  },
  {
    icon: LineChart,
    title: "Experimente",
    description:
      "Teste diferentes cenários e analise os resultados",
    color: "green",
    emoji: "📊",
  },
];

const colorMap: any = {
  cyan: "bg-cyan-400",
  pink: "bg-pink-400",
  yellow: "bg-yellow-400",
  green: "bg-green-400",
};

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-20 bg-gray-900 text-white relative overflow-hidden"
    >
      {/* Diagonal lines */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, #fff 0px, #fff 2px, transparent 2px, transparent 20px)",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-block bg-yellow-400 text-black px-6 py-2 mb-6 uppercase tracking-widest text-sm border-4 border-black skew-x-[-5deg]">
            <span className="inline-block skew-x-[5deg]">
              🎯 Simples e Rápido
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl uppercase mb-4">
            Como{" "}
            <span className="inline-block border-b-8 border-green-400">
              Funciona
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Comece a aprender em 4 passos simples
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-black border-4 border-white p-8 text-center relative group-hover:-translate-y-2 transition-transform">
                <div
                  className={`absolute inset-0 ${colorMap[step.color]} translate-x-2 translate-y-2 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform`}
                ></div>

                <div
                  className={`w-16 h-16 ${colorMap[step.color]} text-black text-3xl flex items-center justify-center mx-auto mb-4 rotate-45`}
                >
                  <span className="-rotate-45">
                    {index + 1}
                  </span>
                </div>

                <div className="text-5xl mb-4">
                  {step.emoji}
                </div>
                <h3 className="mb-3 uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 z-20">
                  <div className="w-6 h-1 bg-yellow-400"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}