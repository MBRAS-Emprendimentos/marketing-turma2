"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Assuming lucide-react for icons
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-card text-card-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo / Site Title */}
        <Link href="/" className="text-xl sm:text-2xl font-medium text-primary hover:text-primary/90 transition-colors">
          MBRAS Marketing
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Início
          </Link>
          <Link href="/aula1" className="text-muted-foreground hover:text-foreground transition-colors">
            Aula 1
          </Link>
          {/* Add more links as needed */}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button 
            onClick={toggleMobileMenu} 
            className="text-muted-foreground hover:text-foreground focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel (Dropdown) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-card/95 backdrop-blur-sm shadow-lg py-4 z-40">
          <nav className="flex flex-col items-center space-y-4">
            <Link 
              href="/" 
              className="text-muted-foreground hover:text-foreground transition-colors px-4 py-2 w-full text-center" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              href="/aula1" 
              className="text-muted-foreground hover:text-foreground transition-colors px-4 py-2 w-full text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Aula 1
            </Link>
            {/* Add more links as needed */}
          </nav>
        </div>
      )}
    </header>
  );
}
