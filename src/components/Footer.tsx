import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Zap,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t-4 border-yellow-400 relative overflow-hidden">
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-r-4 border-b-4 border-cyan-400"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-l-4 border-t-4 border-pink-500"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
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
            <p className="text-sm text-gray-400 mb-4">
              Projeto acadêmico desenvolvido na Universidade
              Federal dos Vales do Jequitinhonha e Mucuri para democratizar o ensino de simulação de
              processos.
            </p>
            <div className="inline-block bg-green-500 text-black px-3 py-1 uppercase text-xs border-2 border-black">
              ✓ Sem fins lucrativos
            </div>
          </div>

          <div>
            <h4 className="uppercase tracking-wider mb-4 text-yellow-400 border-b-2 border-yellow-400 pb-2 inline-block">
              Recursos
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block"
                >
                  → Simulações
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block"
                >
                  → Tutoriais
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block"
                >
                  → Guias de Estudo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block"
                >
                  → Experimentos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-wider mb-4 text-pink-400 border-b-2 border-pink-400 pb-2 inline-block">
              Projeto
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-pink-400 transition-colors hover:translate-x-1 inline-block"
                >
                  → Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-pink-400 transition-colors hover:translate-x-1 inline-block"
                >
                  → Como Contribuir
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-pink-400 transition-colors hover:translate-x-1 inline-block"
                >
                  → Equipe
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-pink-400 transition-colors hover:translate-x-1 inline-block"
                >
                
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-wider mb-4 text-cyan-400 border-b-2 border-cyan-400 pb-2 inline-block">
              Conecte-se
            </h4>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <a
                href="#"
                className="w-12 h-12 bg-white border-2 border-black hover:bg-cyan-400 transition-all flex items-center justify-center group"
              >
                <Github className="w-5 h-5 text-black" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white border-2 border-black hover:bg-pink-400 transition-all flex items-center justify-center group"
              >
                <Linkedin className="w-5 h-5 text-black" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white border-2 border-black hover:bg-yellow-400 transition-all flex items-center justify-center group"
              >
                <Twitter className="w-5 h-5 text-black" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white border-2 border-black hover:bg-green-400 transition-all flex items-center justify-center group"
              >
                <Mail className="w-5 h-5 text-black" />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              engsim@universidade.edu.br
            </p>
          </div>
        </div>

        <div className="border-t-2 border-gray-800 pt-8 text-sm text-center">
          <div className="bg-yellow-400 text-black inline-block px-4 py-1 uppercase tracking-wide mb-2">
            &copy; 2025 EngSim
          </div>
          <p className="text-gray-500 text-xs">
            Universidade Federal dos Vales do Jequitinhonha e Mucuri • Instituto de Ciência e Tecnologia
            Química
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Projeto Acadêmico de Acesso Livre
          </p>
        </div>
      </div>
    </footer>
  );
}