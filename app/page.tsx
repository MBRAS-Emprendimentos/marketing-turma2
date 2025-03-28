import React from 'react';
import { HeroSection } from '@/components/hero-section';

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
      <div className="space-y-8 sm:space-y-12">
        <HeroSection />

        {/* AI Tools Section - Display the AI tools in a responsive card layout */}
        <section className="py-12 sm:py-16 bg-gradient-to-tr from-muted/30 to-background">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-8 sm:mb-10 text-center">
              Ferramentas de IA <span className="text-primary">Recomendadas</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiTools.map((tool, index) => (
                <div key={index} className="bg-card hover:bg-card/90 border border-border rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col">
                  <h3 className="text-xl font-medium text-foreground mb-2">{tool.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">Modelo: {tool.model}</p>
                  <a 
                    href={`https://${tool.link}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:text-primary/80 text-sm font-medium flex items-center mt-auto"
                  >
                    {tool.link}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Marketing Definition Section - Improved responsiveness */}
        <section className="py-16 sm:py-20 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
            <div className="mb-8 sm:mb-12 md:mb-16 max-w-4xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-foreground mb-3 sm:mb-6 tracking-tight">
                Apresentação da Definição de Marketing 2025
              </h2>
              <blockquote className="border-l-2 sm:border-l-4 border-primary pl-3 sm:pl-6 md:pl-8 py-3 sm:py-5 md:py-6 bg-gradient-to-r from-muted/50 to-primary/10 rounded-lg shadow-md">
                <p className="text-sm sm:text-base md:text-xl italic text-foreground leading-relaxed font-light">
                  Marketing é a <strong className="font-medium text-primary">confluência entre arte e ciência</strong> que, através do equilíbrio constante entre <strong className="font-medium text-primary">dados, estratégia, comunicação e execução</strong>, cultiva <strong className="font-medium text-primary">conexões e experiências</strong> entre pessoas e marcas, gerando <strong className="font-medium text-primary">valor mútuo</strong>.
                </p>
                <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-muted-foreground italic text-right pr-2 sm:pr-4">
                  Ronaldo Martins - MBRAS
                  <a href="https://t.co/clqgcaiSqv" target="_blank" rel="noopener noreferrer" className="ml-2 text-primary hover:text-primary/80 hover:underline">
                    Fonte
                  </a>
                </div>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Tools Table - Improved responsiveness */}
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-muted/50 to-primary/10">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
            <div id="ferramentas" className="mt-8 sm:mt-12 md:mt-20">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-foreground mb-3 sm:mb-6 md:mb-8 tracking-tight flex items-center">
                <span className="bg-primary size-5 sm:size-6 md:size-8 rounded mr-2 sm:mr-3 md:mr-4"></span>
                Planilha de Ferramentas de IA
              </h2>
              <div className="overflow-x-auto rounded-xl border border-border shadow-xl">
                <table className="min-w-full divide-y divide-border"> 
                  <thead className="bg-muted"> 
                    <tr>
                      <th scope="col" className="px-4 py-3 sm:px-6 sm:py-4 text-left text-xs font-semibold text-foreground uppercase tracking-wider">Link de Acesso</th>
                      <th scope="col" className="px-4 py-3 sm:px-6 sm:py-4 text-left text-xs font-semibold text-foreground uppercase tracking-wider">Ferramenta</th>
                      <th scope="col" className="px-4 py-3 sm:px-6 sm:py-4 text-left text-xs font-semibold text-foreground uppercase tracking-wider hidden md:table-cell">Modelo Mais Avançado</th>
                      <th scope="col" className="px-4 py-3 sm:px-6 sm:py-4 text-left text-xs font-semibold text-foreground uppercase tracking-wider hidden lg:table-cell">Empresa</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border bg-card"> 
                    {aiTools.map((tool, index) => (
                      <tr key={tool.name} className="hover:bg-muted/50 transition-colors">
                        <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-muted-foreground">
                          <a 
                            href={`https://${tool.link}`} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-primary hover:text-primary/80 hover:underline flex items-center"
                          >
                            {tool.link}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </a>
                        </td>
                        <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-sm font-medium text-foreground">{tool.name}</td>
                        <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-muted-foreground hidden md:table-cell">{tool.model}</td>
                        <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-muted-foreground hidden lg:table-cell">
                          {tool.name === 'ChatGPT' ? 'OpenAI' : 
                           tool.name === 'Claude' ? 'Anthropic' : 
                           tool.name === 'AI Studio' ? 'Google' : 
                           tool.name === 'Grok' ? 'X ( Antigo Twitter )' : 
                           tool.name === 'DeepSeek' ? 'DeepSeek AI' : ''}
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