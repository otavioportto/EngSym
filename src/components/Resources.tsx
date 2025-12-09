import {
  Download,
  FileText,
  PlayCircle,
  BookMarked,
} from "lucide-react";

const resources = [
  {
    icon: Download,
    title: "Arquivos de Simulação",
    description: "Destilação, absorção, reatores e mais",
    count: "25+",
    color: "cyan",
  },
  {
    icon: PlayCircle,
    title: "Vídeo Tutoriais",
    description: "Aprenda no seu próprio ritmo",
    count: "40+",
    color: "pink",
  },
  {
    icon: FileText,
    title: "Guias de Estudo",
    description: "Material de apoio completo",
    count: "15+",
    color: "yellow",
  },
  {
    icon: BookMarked,
    title: "Experimentos",
    description: "Projetos práticos orientados",
    count: "30+",
    color: "green",
  },
];

const colorMap: any = {
  cyan: { bg: "bg-cyan-400", border: "border-cyan-400" },
  pink: { bg: "bg-pink-400", border: "border-pink-400" },
  yellow: { bg: "bg-yellow-400", border: "border-yellow-400" },
  green: { bg: "bg-green-400", border: "border-green-400" },
};

export function Resources() {
  return (
    <section
      id="recursos"
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Spray paint splatter effect */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-pink-400 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-cyan-400 rounded-full opacity-20 blur-2xl"></div>

      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="inline-block bg-black text-cyan-400 px-6 py-2 mb-6 uppercase tracking-widest text-sm border-4 border-cyan-400 skew-x-[-5deg]">
            <span className="inline-block skew-x-[5deg]">
              📚 Acervo Aberto
            </span>
          </div>
          <h2 className="text-5xl text-black md:text-7xl uppercase mb-4">
            <span className="inline-block border-b-8 border-pink-500">
              Biblioteca
            </span>{" "}
            de Recursos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Todo o conteúdo está disponível gratuitamente para
            download e uso educacional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white border-4 border-black p-6 relative group hover:scale-105 transition-transform cursor-pointer"
            >
              <div
                className={`absolute inset-0 ${colorMap[resource.color].bg} translate-x-2 translate-y-2 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform`}
              ></div>
              <div className="flex items-start justify-between mb-4">
                <resource.icon className="w-10 h-10 text-black" />
                <div
                  className={`${colorMap[resource.color].bg} text-black px-3 py-1 text-xl rotate-3`}
                >
                  {resource.count}
                </div>
              </div>
              <h3 className="mb-2 uppercase tracking-wide">
                {resource.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {resource.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative bg-black text-white p-8 md:p-10 border-8 border-pink-500">
            <div className="absolute top-4 right-4 w-20 h-20 border-4 border-yellow-400 rotate-12"></div>
            <div className="relative z-10">
              <div className="inline-block bg-pink-500 text-black px-4 py-1 uppercase text-sm mb-4 rotate-[-2deg]">
                👨‍🏫 Para Professores
              </div>
              <h3 className="text-3xl uppercase mb-4">
                Enriqueça <br />
                suas Aulas
              </h3>
              <p className="text-gray-300 mb-6">
                Acesse simulações testadas e validadas, com
                notas pedagógicas e sugestões de como aplicar em
                sala de aula.
              </p>
              <button className="bg-yellow-400 text-black px-6 py-3 uppercase tracking-wider hover:bg-pink-500 transition-all border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Explorar Materiais
              </button>
            </div>
          </div>

          <div className="relative bg-black text-white p-8 md:p-10 border-8 border-cyan-400">
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-yellow-400 rotate-45"></div>
            <div className="relative z-10">
              <div className="inline-block bg-cyan-400 text-black px-4 py-1 uppercase text-sm mb-4 rotate-[2deg]">
                🎓 Para Alunos
              </div>
              <h3 className="text-3xl uppercase mb-4">
                Aprenda <br />
                Praticando
              </h3>
              <p className="text-gray-300 mb-6">
                Tutoriais desenvolvidos para facilitar seu
                aprendizado autônomo, com exercícios
                progressivos e desafios práticos.
              </p>
              <button className="bg-yellow-400 text-black px-6 py-3 uppercase tracking-wider hover:bg-cyan-400 transition-all border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Ver Tutoriais
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}