import React from 'react';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden bg-brand-dark text-center">
      
      {/* Grid Background Effect (Opcional, simula o fundo quadriculado) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-6">
        {/* Badge Amarela */}
        <div className="inline-block px-4 py-1 mb-4 text-sm font-bold text-black bg-brand-yellow uppercase tracking-wider transform -skew-x-12">
          ⚡ Acesso Livre • Projeto Universitário
        </div>

        {/* Título Principal com Gradiente */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-brand-pink to-brand-cyan">
            Simulação
          </span>
          <br />
          <span className="text-white">de Processos</span>
          <br />
          <span className="text-brand-yellow">AVEVA</span>
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto border-l-4 border-brand-cyan pl-4 text-left">
          Repositório educacional com simulações práticas, tutoriais e materiais didáticos. 
          Feito por estudantes, para estudantes. 100% gratuito.
        </p>

        {/* Botões */}
        <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
          <button className="px-8 py-4 font-bold text-black bg-brand-yellow hover:bg-yellow-400 transition-all border-b-4 border-cyan-400 active:border-b-0">
            ACESSAR MATERIAIS 
          </button>
          
          <button className="px-8 py-4 font-bold text-white border-2 border-brand-pink hover:bg-brand-pink/20 transition-all">
            VER TUTORIAIS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;