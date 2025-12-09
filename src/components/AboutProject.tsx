import {
  GraduationCap,
  Users,
  Globe,
  Heart,
} from "lucide-react";

export function AboutProject() {
  return (
    <section
      id="sobre"
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Diagonal stripes background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #000 0px, #000 10px, transparent 10px, transparent 20px)",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="inline-block bg-black text-yellow-400 px-6 py-2 mb-6 uppercase tracking-widest text-sm border-4 border-yellow-400 skew-x-[-5deg]">
              <span className="inline-block skew-x-[5deg]">
                🎓 Projeto Universitário
              </span>
            </div>
            <h2 className="text-5xl text-black md:text-7xl uppercase mb-6">
              <span className="inline-block border-b-8 border-pink-500">
                Sobre
              </span>{" "}
              o Projeto
            </h2>
          </div>

          <div className="bg-black text-white p-8 md:p-12 mb-12 border-l-8 border-cyan-400 relative">
            <div className="absolute top-4 right-4 w-16 h-16 border-4 border-yellow-400 rotate-45"></div>
            <p className="text-lg mb-6 text-gray-300">
              O{" "}
              <span className="text-yellow-400 uppercase tracking-wide">
                EngSim
              </span>{" "}
              é uma iniciativa acadêmica desenvolvida na
              Universidade Federal dos Vales do Jequitinhonha 
              e Mucuri com o objetivo de democratizar o acesso 
              ao conhecimento em simulação de processos químicos 
              utilizando AVEVA Process Simulation.
            </p>
            <p className="text-lg mb-6 text-gray-300">
              Este repositório educacional reúne simulações
              prontas, tutoriais detalhados e materiais de apoio
              criados por professores e alunos, promovendo o
              aprendizado colaborativo e prático em Engenharia
              Química.
            </p>
            <p className="text-lg text-gray-300">
              Todo o conteúdo é disponibilizado{" "}
              <span className="bg-green-500 text-black px-2 py-1">
                GRATUITAMENTE
              </span>{" "}
              para estudantes, professores e entusiastas da
              área, contribuindo para a formação de
              profissionais mais capacitados.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-6 text-center relative group hover:scale-105 transition-transform">
              <div className="absolute inset-0 border-4 border-black translate-x-2 translate-y-2 -z-10"></div>
              <GraduationCap className="w-12 h-12 text-black mx-auto mb-3" />
              <h3 className="text-black mb-2 uppercase tracking-wide">
                Educacional
              </h3>
              <p className="text-black text-sm">
                100% focado em aprendizado
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-400 to-purple-500 p-6 text-center relative group hover:scale-105 transition-transform">
              <div className="absolute inset-0 border-4 border-black translate-x-2 translate-y-2 -z-10"></div>
              <Globe className="w-12 h-12 text-black mx-auto mb-3" />
              <h3 className="text-black mb-2 uppercase tracking-wide">
                Acesso Livre
              </h3>
              <p className="text-black text-sm">
                Gratuito para todos
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-6 text-center relative group hover:scale-105 transition-transform">
              <div className="absolute inset-0 border-4 border-black translate-x-2 translate-y-2 -z-10"></div>
              <Users className="w-12 h-12 text-black mx-auto mb-3" />
              <h3 className="text-black mb-2 uppercase tracking-wide">
                Colaborativo
              </h3>
              <p className="text-black text-sm">
                Criado pela comunidade
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-6 text-center relative group hover:scale-105 transition-transform">
              <div className="absolute inset-0 border-4 border-black translate-x-2 translate-y-2 -z-10"></div>
              <Heart className="w-12 h-12 text-black mx-auto mb-3" />
              <h3 className="text-black mb-2 uppercase tracking-wide">
                Sem Fins Lucrativos
              </h3>
              <p className="text-black text-sm">
                Projeto acadêmico
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}