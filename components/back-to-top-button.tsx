"use client";

import React from 'react';

export function BackToTopButton() {
  return (
    <div className="fixed bottom-4 right-4 sm:hidden z-20">
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
        aria-label="Voltar ao topo"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}
