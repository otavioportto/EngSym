import {
  Cpu,
  GraduationCap,
  FlaskConical,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Simulações AVEVA",
    description:
      "Biblioteca de arquivos de simulação desenvolvidos e testados por professores para uso didático",
    color: "cyan",
  },
  {
    icon: GraduationCap,
    title: "Material Didático",
    description:
      "Recursos educacionais criados especificamente para o contexto brasileiro de ensino de engenharia",
    color: "pink",
  },
  {
    icon: FlaskConical,
    title: "Experimentos Práticos",
    description:
      "Propostas de atividades práticas para alunos explorarem conceitos de forma autônoma e segura",
    color: "yellow",
  },
  {
    icon: Users,
    title: "Aprendizado Colaborativo",
    description:
      "Tutoriais passo a passo desenvolvidos pela comunidade acadêmica para facilitar o aprendizado",
    color: "green",
  },
];

const colorMap: any = {
  cyan: {
    bg: "bg-cyan-400",
    border: "border-cyan-400",
    text: "text-cyan-400",
  },
  pink: {
    bg: "bg-pink-400",
    border: "border-pink-400",
    text: "text-pink-400",
  },
  yellow: {
    bg: "bg-yellow-400",
    border: "border-yellow-400",
    text: "text-yellow-400",
  },
  green: {
    bg: "bg-green-400",
    border: "border-green-400",
    text: "text-green-400",
  },
};

export function Features() {
  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Diagonal accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 -skew-x-12 -translate-y-32 translate-x-32 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500 skew-x-12 translate-y-32 -translate-x-32 opacity-20"></div>

      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="inline-block bg-yellow-400 text-black px-6 py-2 mb-6 uppercase tracking-widest text-sm skew-x-[-5deg] border-4 border-black">
            <span className="inline-block skew-x-[5deg]">
              ✨ O que Oferecemos
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl uppercase mb-4">
            Recursos{" "}
            <span className="inline-block border-b-8 border-cyan-400">
              Educacionais
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Materiais desenvolvidos por educadores para
            educadores e estudantes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-black border-4 border-white p-6 relative group hover:-translate-y-2 transition-transform"
            >
              <div
                className={`absolute inset-0 ${colorMap[feature.color].bg} translate-x-2 translate-y-2 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform`}
              ></div>
              <feature.icon
                className={`w-12 h-12 ${colorMap[feature.color].text} mb-4`}
              />
              <h3 className="mb-3 uppercase tracking-wide">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}