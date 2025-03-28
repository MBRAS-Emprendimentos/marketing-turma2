import React from 'react';
import Link from 'next/link';

export default function Aula1() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Voltar para página principal
        </Link>

        <h1 className="text-4xl font-thin text-slate-800 mb-8 tracking-tight">
          Aula 1: Marketing Imobiliário – A Confluência entre Arte e Ciência para Gerar Valor Real
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-light text-slate-800 mb-4 border-b pb-2 border-slate-200">
            Introdução: Conectando-se ao "Porquê" do Corretor
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border border-slate-100">
            <p className="text-lg mb-4 text-slate-700">Comece provocando reflexão:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>"Quem aqui já sentiu que fez tudo certo, mas o cliente ainda assim não fechou negócio?"</li>
              <li>"Por que um cliente escolhe você e a MBRAS, em vez de outro corretor ou imobiliária?"</li>
            </ul>
            <p className="mt-4 text-slate-700">
              Explique que esses desafios são justamente onde o marketing efetivo atua, transformando a maneira como você atrai, engaja e converte clientes.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-light text-slate-800 mb-4 border-b pb-2 border-slate-200">
            Apresentação da Nova Definição de Marketing
          </h2>
          <blockquote className="border-l-4 border-blue-600 pl-8 py-6 bg-white rounded-lg shadow-md">
            <p className="text-xl text-slate-700 leading-relaxed font-light">
              Marketing é a <span className="font-medium text-blue-700">confluência entre arte e ciência</span> que, através do equilíbrio constante entre <span className="font-medium text-blue-700">dados, estratégia, comunicação e execução</span>, cultiva <span className="font-medium text-blue-700">conexões e experiências</span> entre pessoas e marcas, gerando <span className="font-medium text-blue-700">valor mútuo</span>.
            </p>
            <div className="mt-4 text-sm text-slate-500 text-right pr-4">
              Ronaldo Martins - MBRAS
              <a href="https://t.co/clqgcaiSqv" target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-600 hover:text-blue-800 hover:underline">
                Fonte
              </a>
            </div>
          </blockquote>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-light text-slate-800 mb-4 border-b pb-2 border-slate-200">
            Entendendo Arte e Ciência no Marketing Imobiliário
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-100">
              <h3 className="text-xl font-medium text-blue-800 mb-3">Arte</h3>
              <p className="text-slate-700">
                É o elemento emocional, a criatividade e o storytelling que conectam pessoas aos imóveis, fazendo com que elas sintam e desejem um novo estilo de vida.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
              <h3 className="text-xl font-medium text-slate-800 mb-3">Ciência</h3>
              <p className="text-slate-700">
                São os dados concretos que direcionam estratégias eficientes, permitindo identificar precisamente quem são os compradores potenciais e como abordá-los da forma mais certeira.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-light text-slate-800 mb-4 border-b pb-2 border-slate-200">
            Exemplificando na Prática
          </h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-slate-800 mb-3">Exemplo Geral:</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
              <p className="text-slate-700">
                A Netflix usa algoritmos (ciência) para recomendar conteúdos, mas o que prende o espectador são trailers e imagens impactantes (arte).
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-slate-800 mb-3">Exemplo Imobiliário (MBRAS):</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
              <ul className="list-disc pl-6 space-y-3 text-slate-700">
                <li><strong className="text-slate-900">Ciência:</strong> Identificar clientes potenciais analisando dados como perfil econômico, histórico de busca, localização e preferências específicas.</li>
                <li><strong className="text-slate-900">Arte:</strong> Criar anúncios que mostrem o imóvel como cenário de momentos memoráveis (família reunida, amigos em um jantar descontraído, etc.).</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-light text-slate-800 mb-4 border-b pb-2 border-slate-200">
            O Equilíbrio em 4 Etapas Essenciais
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
              <h3 className="text-lg font-medium text-blue-700 mb-2">1. Dados</h3>
              <p className="text-slate-700">Saber exatamente quem é seu público e o que ele busca.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
              <h3 className="text-lg font-medium text-blue-700 mb-2">2. Estratégia</h3>
              <p className="text-slate-700">Planejar como abordar, comunicar e converter esse público.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
              <h3 className="text-lg font-medium text-blue-700 mb-2">3. Comunicação</h3>
              <p className="text-slate-700">Mensagens claras e envolventes que atingem as emoções e necessidades do cliente.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
              <h3 className="text-lg font-medium text-blue-700 mb-2">4. Execução</h3>
              <p className="text-slate-700">Ações coordenadas, consistentes e monitoradas, sempre ajustando com base nos resultados.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-light text-slate-800 mb-4 border-b pb-2 border-slate-200">
            Cultivando Experiências que Conectam
          </h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-slate-800 mb-3">Exemplo Geral:</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
              <p className="text-slate-700">
                Apple cria eventos que geram expectativa e uma sensação de pertencimento.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-slate-800 mb-3">Exemplo Imobiliário (MBRAS):</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
              <ul className="list-disc pl-6 space-y-3 text-slate-700">
                <li>Apresente imóveis com storytelling: "Imagine seus filhos brincando nesse jardim enquanto você relaxa na varanda..."</li>
                <li>Ofereça uma experiência personalizada: memorize detalhes pessoais dos clientes, ofereça conforto durante as visitas (um café, atenção aos pets, etc.).</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-light text-slate-800 mb-4 border-b pb-2 border-slate-200">
            Valor Mútuo na Prática
          </h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-slate-800 mb-3">Exemplo Geral:</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
              <p className="text-slate-700">
                A Starbucks personaliza a experiência do cliente escrevendo o nome de cada consumidor no copo e criando programas de fidelidade que premiam visitas frequentes, gerando valor percebido e aumentando a fidelização.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-slate-800 mb-3">Exemplo Imobiliário (MBRAS):</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
              <ul className="list-disc pl-6 space-y-3 text-slate-700">
                <li><strong className="text-slate-900">Para o Cliente:</strong> Atendimento consultivo, apoio em todo processo (documentação, financiamento, pós-venda).</li>
                <li><strong className="text-slate-900">Para a MBRAS/Corretor:</strong> Clientes satisfeitos, maior número de indicações, fortalecimento da marca e credibilidade profissional.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-light text-slate-800 mb-4 border-b pb-2 border-slate-200">
            Conclusão e Desafio de Ação
          </h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-slate-800 mb-3">Recapitule:</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
              <p className="text-slate-700">
                Marketing une criatividade (arte) e dados (ciência) para gerar conexões, experiências memoráveis e valor mútuo.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-slate-800 mb-3">Desafio:</h3>
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm border-l-4 border-blue-600">
              <p className="text-slate-700 font-medium">
                Utilize uma das AIs da tabela que você nunca utilizou antes.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}