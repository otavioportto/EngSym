import { BookOpen, ChevronRight, Zap } from "lucide-react";

export function Hero() {
  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#00ff88 1px, transparent 1px), linear-gradient(90deg, #00ff88 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Neon accents */}
      <div className="absolute top-20 left-0 w-1 h-64 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500"></div>
      <div className="absolute top-40 right-0 w-1 h-48 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500"></div>

      <nav className="relative container mx-auto px-4 py-6 border-b-4 border-yellow-400">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-400 rotate-45 flex items-center justify-center">
              <Zap className="w-6 h-6 text-black -rotate-45" />
            </div>
            <div>
              <div className="uppercase tracking-wider">
                EngSim
              </div>
              <div className="text-xs text-yellow-400 tracking-widest">
                SIMULAÇÕES DE PROCESSOS
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 uppercase text-sm tracking-wide">
            <a
              href="#sobre"
              className="hover:text-yellow-400 transition-colors"
            >
              Sobre
            </a>
            <a
              href="#recursos"
              className="hover:text-cyan-400 transition-colors"
            >
              Recursos
            </a>
            <a
              href="#tutoriais"
              className="hover:text-pink-400 transition-colors"
            >
              Tutoriais
            </a>
            <a
              href="#comunidade"
              className="hover:text-green-400 transition-colors"
            >
              Comunidade
            </a>
          </div>
        </div>
      </nav>

      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block bg-yellow-400 text-black px-6 py-2 mb-8 uppercase tracking-wider text-sm skew-x-[-5deg] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="inline-block skew-x-[5deg]">
              ⚡ Acesso Livre • Projeto Universitário
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl mb-6 uppercase leading-none">
            <span className="inline-block bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_30px_rgba(255,255,0,0.5)]">
              Simulação
            </span>
            <br />
            <span className="text-white">de Processos</span>
            <br />
            <span className="text-yellow-400">AVEVA</span>
          </h1>

          <div className="border-l-4 border-cyan-400 pl-6 mb-10">
            <p className="text-xl md:text-2xl text-gray-300">
              Repositório educacional com simulações práticas,
              tutoriais e materiais didáticos. Feito por
              estudantes, para estudantes. 100% gratuito.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-yellow-400 text-black px-8 py-4 uppercase tracking-wider hover:bg-cyan-400 transition-all hover:translate-x-1 hover:translate-y-[-4px] shadow-[4px_4px_0px_0px_rgba(0,255,255,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,255,255,1)] flex items-center justify-center gap-2">
              Acessar Materiais
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="border-4 border-pink-500 text-white px-8 py-4 uppercase tracking-wider hover:bg-pink-500 transition-all">
              Ver Tutoriais
            </button>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400"></div>
    </div>
  );
}