import React from 'react';

// Interface para definir a estrutura dos dados da ferramenta de IA
interface AITool {
  name: string;
  link: string;
  model: string;
}

// Dados das ferramentas de IA
const aiTools: AITool[] = [
  { name: 'ChatGPT', link: 'chat.openai.com', model: 'GPT-4.5' },
  { name: 'Claude', link: 'claude.ai', model: 'Claude 3.7 Sonnet' },
  { name: 'AI Studio', link: 'aistudio.google.com', model: 'Gemini 2.5 Pro' },
  { name: 'Grok', link: 'grok.x.ai', model: 'Grok 3' },
  { name: 'DeepSeek', link: 'platform.deepseek.com', model: 'DeepSeek-R1' },
];


export default function Home() {
  return (
    <>
      <div className="space-y-12">
        {/* Hero Section - Enhanced with better typography and visual elements */}
        <section className="relative h-[90vh] bg-slate-950 -mt-6 flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
              alt="Luxury Real Estate" 
              className="w-full h-full object-cover opacity-30 transition-transform duration-10000 transform scale-105 animate-slow-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/80 to-slate-950/90"></div>
          </div>
          <div className="container relative z-10 mx-auto px-6 md:px-8 text-white">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-thin mb-8 leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-200">
                Fundamentos de Marketing Imobiliário
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mb-12 text-blue-50 leading-relaxed font-light tracking-wide">
                Aprenda como a confluência entre arte e ciência pode gerar valor real para seus clientes e transformar sua carreira no mercado imobiliário.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#ferramentas" className="px-8 py-3 bg-transparent hover:bg-white/10 border border-white/30 text-white rounded-md transition-colors duration-300 text-center font-light tracking-wide">
                  Ver Ferramentas de AI
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Aula de Marketing Imobiliário - Enhanced with better spacing and visual hierarchy */}
        <section id="marketing" className="py-20 bg-white rounded-t-3xl -mt-10 shadow-xl relative z-10">
          <div className="container mx-auto px-6 md:px-8">
            {/* Definição de Marketing */}
            <div className="mb-16 max-w-4xl mx-auto">
              <h2 className="text-3xl font-light text-slate-800 mb-6 tracking-tight">
                Apresentação da Definição de Marketing 2025
              </h2>
              <blockquote className="border-l-4 border-blue-600 pl-8 py-6 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg shadow-md">
                <p className="text-xl italic text-slate-700 leading-relaxed font-light">
                  Marketing é a <strong className="font-medium text-blue-700">confluência entre arte e ciência</strong> que, através do equilíbrio constante entre <strong className="font-medium text-blue-700">dados, estratégia, comunicação e execução</strong>, cultiva <strong className="font-medium text-blue-700">conexões e experiências</strong> entre pessoas e marcas, gerando <strong className="font-medium text-blue-700">valor mútuo</strong>.
                </p>
                <div className="mt-4 text-sm text-slate-500 italic text-right pr-4">
  Ronaldo Martins - MBRAS
</div>
              </blockquote>

            </div>

            {/* Ferramentas de IA - Enhanced with better visual design */}
            <div id="ferramentas" className="mt-20">
              <h2 className="text-3xl font-light text-slate-800 mb-8 tracking-tight flex items-center">
                <span className="bg-blue-600 w-1 h-8 rounded mr-4"></span>
                Planilha de Ferramentas de IA
              </h2>
              <div className="overflow-hidden rounded-xl border border-slate-200 shadow-xl">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-gradient-to-r from-slate-800 to-blue-900">
                    <tr>
                      <th scope="col" className="px-8 py-5 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Ferramenta de IA
                      </th>
                      <th scope="col" className="px-8 py-5 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Link de Acesso
                      </th>
                      <th scope="col" className="px-8 py-5 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Modelo Mais Avançado
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    {aiTools.map((tool, index) => (
                      <tr key={tool.name} className={`hover:bg-blue-50 transition-colors duration-300 ${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                        <td className="px-8 py-6 whitespace-nowrap text-base font-medium text-slate-900">
                          {tool.name}
                        </td>
                        <td className="px-8 py-6 whitespace-nowrap text-base text-blue-600 hover:text-blue-800">
                          <a href={`https://${tool.link}`} target="_blank" rel="noopener noreferrer" className="hover:underline transition-all">
                            {tool.link}
                          </a>
                        </td>
                        <td className="px-8 py-6 whitespace-nowrap text-base text-slate-700 font-mono">
                          <span className="px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-xs">
                            {tool.model}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}