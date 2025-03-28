import React from 'react';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] md:h-[90vh] bg-gradient-to-b from-primary/5 to-background text-foreground flex items-center justify-center text-center overflow-hidden px-4 sm:px-6 py-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
      </div>
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] dark:opacity-30 opacity-10"></div>
      
      <div className="relative z-10 max-w-3xl">
        <div className="mb-4 bg-primary/90 text-primary-foreground text-xs sm:text-sm px-4 py-1.5 rounded-full inline-flex items-center space-x-1 shadow-lg shadow-primary/20">
          <span className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse"></span>
          <span>Turma 2 - Marketing</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6 sm:mb-8 leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">Fundamentos de Marketing</span>
          <br />
          <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">& Inteligência Artificial</span>
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
          Descubra como a combinação de <strong className="text-foreground font-medium">conhecimento em marketing</strong> e o poder da <strong className="text-primary font-medium">Inteligência Artificial</strong> podem acelerar seus resultados.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/aula1" className="group inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-primary/20">
            Iniciar Aula 1
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#ferramentas" className="group inline-flex items-center justify-center px-6 py-3 border border-muted/50 text-base font-medium rounded-full text-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-xl">
            Ver Ferramentas
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-y-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
