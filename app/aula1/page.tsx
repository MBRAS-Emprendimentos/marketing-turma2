import React from 'react';
import Link from 'next/link';
import { BackToTopButton } from '@/components/back-to-top-button'; // Certifique-se que este componente existe
import {
  ArrowLeft,
  BookOpen,
  Lightbulb,
  HelpCircle, // Para perguntas
  Quote,      // Para citação
  Palette,    // Para Arte
  BrainCircuit, // Para Ciência
  ArrowRight, // Para o novo CTA
} from 'lucide-react';

export default function Aula1() {
  return (
    <div className="flex flex-col items-center w-full bg-background text-foreground">
      {/* Hero section */}
      <div className="w-full bg-gradient-to-b from-primary/5 via-background/0 to-background pt-16 pb-12 sm:pt-20 sm:pb-16">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          {/* Botão Voltar */}
          <div className="mb-8 sm:mb-10">
            <Link
              href="/" // Ajuste se o link inicial for outro
              className="inline-flex items-center text-sm text-primary hover:text-primary/80 group bg-card/80 backdrop-blur-sm px-3 py-1.5 rounded-md shadow-sm border border-border/30 transition-all duration-300 hover:border-border/50 hover:bg-card"
            >
              <ArrowLeft className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
              Voltar para o Início
            </Link>
          </div>

          {/* Título da Página */}
          <div className="space-y-3">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
              <BookOpen className="h-3.5 w-3.5 mr-1.5" />
              Módulo 1: Fundamentos Essenciais
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-3">
              Marketing Imobiliário:
              <span className="block bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text mt-1 sm:mt-2">
                A Base para Alavancar sua Carreira
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl">
              Entenda como a união de arte e ciência cria valor e prepara você para acelerar seus resultados no mercado imobiliário.
            </p>
          </div>
        </div>
      </div>

      {/* Container do Conteúdo */}
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Introdução */}
        <div className="mb-16 bg-card p-6 sm:p-8 rounded-xl shadow-lg border border-border/50 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none opacity-70"></div>
          <div className="relative z-10">
            <p className="text-lg sm:text-xl text-foreground leading-relaxed">
              Bem-vindo(a) à primeira aula! Vamos desvendar os conceitos essenciais do marketing imobiliário. Dominar esta base é o primeiro passo para se diferenciar e <span className="font-medium text-primary">preparar o terreno para acelerar seu sucesso</span> no competitivo mercado atual.
            </p>
          </div>
        </div>

        {/* Seção 1: Conectando-se ao "Porquê" do Corretor */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-shrink-0 size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
              <span className="font-semibold text-lg">1</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-medium text-foreground">
              Conectando-se ao "Porquê" do Corretor
            </h2>
          </div>

          <div className="bg-card p-6 sm:p-8 rounded-xl shadow-md border border-border/50">
            <p className="text-base sm:text-lg text-foreground leading-relaxed font-medium mb-5">
              Comece provocando reflexão:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="bg-muted/50 p-4 rounded-lg text-foreground/90 flex items-start border border-border/30">
                <HelpCircle className="h-5 w-5 mr-3 mt-1 text-primary/80 flex-shrink-0" />
                <span>"Quem aqui já sentiu que fez tudo certo, mas o cliente ainda assim não fechou negócio?"</span>
              </li>
              <li className="bg-muted/50 p-4 rounded-lg text-foreground/90 flex items-start border border-border/30">
                <HelpCircle className="h-5 w-5 mr-3 mt-1 text-primary/80 flex-shrink-0" />
                <span>"Por que um cliente escolhe você e a MBRAS, em vez de outro corretor ou imobiliária?"</span>
              </li>
            </ul>
            <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
              <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                Explique que esses desafios são onde o <span className="font-medium">marketing estratégico</span> atua, transformando a maneira como você atrai, engaja e converte clientes, <span className="font-medium">construindo um caminho para resultados mais consistentes</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Seção 2: Apresentação da Nova Definição de Marketing */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-shrink-0 size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
              <span className="font-semibold text-lg">2</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-medium text-foreground">
              Nova Definição de Marketing (MBRAS)
            </h2>
          </div>

          <blockquote className="bg-gradient-to-br from-card to-card/90 p-8 sm:p-10 rounded-xl shadow-lg border border-border/50 relative overflow-hidden">
            <Quote className="absolute top-4 left-4 h-10 w-10 text-primary/10 sm:h-12 sm:w-12" aria-hidden="true" />
            <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none opacity-70"></div>
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl pointer-events-none opacity-50"></div>

            <div className="relative z-10 pl-4 sm:pl-6"> {/* Ajuste de padding por causa do ícone Quote */}
              <p className="text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed">
                Marketing é a <span className="font-semibold text-primary">confluência entre arte e ciência</span> que, através do equilíbrio constante entre <span className="font-semibold text-primary">dados, estratégia, comunicação e execução</span>, cultiva <span className="font-semibold text-primary">conexões e experiências</span> entre pessoas e marcas, gerando <span className="font-semibold text-primary">valor mútuo</span>.
              </p>
              <div className="mt-6 text-sm text-muted-foreground text-right">
                — Ronaldo Martins (MBRAS)
                {/* Verifique se este link ainda é válido e relevante */}
                <a href="https://t.co/clqgcaiSqv" target="_blank" rel="noopener noreferrer" className="ml-2 text-primary hover:text-primary/80 hover:underline inline-flex items-center group">
                  Fonte
                  <ArrowRight className="h-3 w-3 ml-1 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </blockquote>
        </section>

        {/* Seção 3: Entendendo Arte e Ciência no Marketing Imobiliário */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-shrink-0 size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
              <span className="font-semibold text-lg">3</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-medium text-foreground">
              Arte e Ciência no Marketing Imobiliário
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card Arte */}
            <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-card/0 p-6 sm:p-8 rounded-xl shadow-md border border-primary/20 relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-primary/10 rounded-full blur-2xl pointer-events-none opacity-80"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-primary/20">
                  <h3 className="text-xl font-semibold text-primary">Arte</h3>
                  <Palette className="h-6 w-6 text-primary/60" />
                </div>
                <p className="text-base text-foreground/90 leading-relaxed">
                  É o elemento <span className="font-medium">emocional</span>: a criatividade, o storytelling e a estética que conectam pessoas aos imóveis, despertando o desejo por um novo estilo de vida.
                </p>
              </div>
            </div>

            {/* Card Ciência */}
            <div className="bg-gradient-to-br from-muted/60 via-muted/30 to-card/0 p-6 sm:p-8 rounded-xl shadow-md border border-border/50 relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-foreground/5 rounded-full blur-2xl pointer-events-none opacity-60"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-border/50">
                  <h3 className="text-xl font-semibold text-foreground">Ciência</h3>
                  <BrainCircuit className="h-6 w-6 text-foreground/60" />
                </div>
                <p className="text-base text-foreground/90 leading-relaxed">
                  É o elemento <span className="font-medium">racional</span>: a análise de dados, métricas e testes que permitem entender o mercado, segmentar clientes e otimizar estratégias com precisão.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 4: Exemplificando na Prática */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-shrink-0 size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
              <span className="font-semibold text-lg">4</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-medium text-foreground">
              Exemplificando na Prática
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium text-foreground mb-3 inline-flex items-center">
                <Lightbulb className="h-5 w-5 mr-2 text-primary" />
                Exemplo Geral (Streaming)
              </h3>
              <div className="bg-card p-6 rounded-xl shadow-sm border border-border/50">
                <p className="text-base text-foreground/90 leading-relaxed">
                  A Netflix usa algoritmos (<span className="font-medium">ciência</span>) para recomendar filmes com base no seu histórico, mas o que realmente te convence a assistir é um trailer envolvente ou uma imagem de capa impactante (<span className="font-medium">arte</span>).
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-foreground mb-3 inline-flex items-center">
                <Lightbulb className="h-5 w-5 mr-2 text-primary" />
                Exemplo Imobiliário (MBRAS)
              </h3>
              <div className="bg-card p-6 rounded-xl shadow-sm border border-border/50">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 size-6 bg-muted rounded-full flex items-center justify-center mr-3 mt-1 border border-border/40">
                      <BrainCircuit className="h-3.5 w-3.5 text-foreground/70" />
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Ciência:</span> Identificar leads qualificados analisando dados demográficos, comportamento online (visitas ao site, cliques em anúncios), histórico de interações e poder de compra.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 size-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1 border border-primary/30">
                      <Palette className="h-3.5 w-3.5 text-primary/80" />
                    </div>
                    <div>
                      <span className="font-medium text-primary">Arte:</span> Criar um anúncio em vídeo que não apenas mostra os cômodos, mas conta a história de uma família aproveitando a varanda gourmet, ou um casal relaxando na sala de estar, conectando-se com as aspirações do cliente.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 5: O Equilíbrio em 4 Etapas Essenciais */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-shrink-0 size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
              <span className="font-semibold text-lg">5</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-medium text-foreground">
              O Equilíbrio em 4 Pilares Essenciais
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Card Dados */}
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border/50 relative overflow-hidden group hover:border-primary/30 transition-all duration-300 hover:shadow-md">
              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-primary/5 rounded-full blur-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-3">
                  <div className="flex-shrink-0 size-8 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-3 border border-primary/20">
                    <span className="font-medium text-sm">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-primary">Dados</h3>
                </div>
                <p className="text-base text-foreground/80 leading-relaxed">
                  Entender profundamente quem é seu público, o que ele busca, onde ele está e quais são suas dores e desejos.
                </p>
              </div>
            </div>

            {/* Card Estratégia */}
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border/50 relative overflow-hidden group hover:border-primary/30 transition-all duration-300 hover:shadow-md">
              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-primary/5 rounded-full blur-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-3">
                  <div className="flex-shrink-0 size-8 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-3 border border-primary/20">
                    <span className="font-medium text-sm">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-primary">Estratégia</h3>
                </div>
                <p className="text-base text-foreground/80 leading-relaxed">
                  Definir objetivos claros e planejar como alcançar, engajar e converter seu público-alvo de forma eficaz.
                </p>
              </div>
            </div>

            {/* Card Comunicação */}
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border/50 relative overflow-hidden group hover:border-primary/30 transition-all duration-300 hover:shadow-md">
              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-primary/5 rounded-full blur-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-3">
                  <div className="flex-shrink-0 size-8 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-3 border border-primary/20">
                    <span className="font-medium text-sm">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-primary">Comunicação</h3>
                </div>
                <p className="text-base text-foreground/80 leading-relaxed">
                  Criar mensagens e conteúdos relevantes (arte) que ressoem com as emoções e necessidades do cliente, nos canais certos.
                </p>
              </div>
            </div>

            {/* Card Execução */}
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border/50 relative overflow-hidden group hover:border-primary/30 transition-all duration-300 hover:shadow-md">
              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-primary/5 rounded-full blur-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-3">
                  <div className="flex-shrink-0 size-8 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-3 border border-primary/20">
                    <span className="font-medium text-sm">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-primary">Execução</h3>
                </div>
                <p className="text-base text-foreground/80 leading-relaxed">
                  Implementar as ações planejadas de forma consistente, monitorar os resultados (ciência) e otimizar continuamente.
                </p>
              </div>
            </div>
          </div>

          {/* Frase de Fechamento da Seção 5 */}
          <p className="mt-8 text-center text-foreground/80 text-base sm:text-lg">
            O sucesso reside no <span className="font-medium text-primary">equilíbrio e na aplicação coordenada</span> desses quatro pilares fundamentais.
          </p>
        </section>

        {/* CTA Final */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground rounded-xl shadow-xl text-center relative overflow-hidden border border-primary/50">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_60%)] opacity-70 pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/path/to/subtle-pattern.svg')] opacity-5 pointer-events-none"></div> {/* Opcional: Adicionar um padrão sutil */}

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Pronto para o próximo passo?</h2>
            <p className="text-lg mb-6 text-primary-foreground/90 max-w-2xl mx-auto">
              No próximo módulo, vamos mergulhar em <span className="font-semibold">ferramentas e táticas</span> para implementar esse equilíbrio no seu dia a dia como corretor MBRAS e <span className="font-semibold">começar a acelerar seus resultados</span>.
            </p>
            <Link
              href="/aula2" 
              className="inline-flex items-center bg-primary-foreground text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary-foreground/90 transition-colors duration-300 shadow-md transform hover:scale-105"
            >
              <ArrowRight className="h-5 w-5 mr-2" />
              Ir para a Próxima Aula
            </Link>
          </div>
        </div>
      </div> {/* Fim do container do conteúdo */}

      <BackToTopButton />
    </div>
  );
}