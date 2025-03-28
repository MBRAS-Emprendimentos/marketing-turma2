"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import Image from "next/image";

const navigation = {
  main: [
    { name: "Início", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Imóveis", href: "/busca?listingType=sale" },
    { name: "Contato", href: "/contato" },
    { name: "Política de Privacidade", href: "/politica-de-privacidade" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/mbrasempreendimentos",
      icon: FacebookIcon,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/mbrasempreendimentos",
      icon: InstagramIcon,
    },
    {
      name: "X",
      href: "https://x.com/mbrasimoveis",
      icon: FaXTwitter,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/mbras-soluções-imobiliárias",
      icon: LinkedinIcon,
    },
  ],
};

export default function Footer() {
  const pathname = usePathname();
  if (pathname.includes("presentation")) return null;

  return (
    <footer className="relative overflow-hidden bg-slate-950 border-t border-slate-800 pt-16 pb-8 text-slate-300">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.15),transparent_70%)] opacity-30" />
      
      <div className="relative container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Column 1: Logo and Social Links */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/mbras-logo.jpg"
              alt="Logo MBRAS"
              width={128}
              height={55}
              className="w-36 mb-6 rounded-md"
            />
            <div className="flex gap-4 mt-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-400 hover:text-primary hover:scale-110 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                >
                  <item.icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="text-slate-200">
            <h3 className="text-lg font-medium mb-5 text-white">Links Rápidos</h3>
            <nav className="flex flex-col gap-3">
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group text-slate-400 hover:text-primary transition-colors duration-300 flex items-center"
                >
                  <span>{item.name}</span>
                  <ArrowUpRight className="size-3.5 ml-1.5 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact Information */}
          <div className="text-slate-200">
            <h3 className="text-lg font-medium mb-5 text-white">Contato</h3>
            <div className="space-y-5">
              <a
                href="https://maps.app.goo.gl/8FqHgfei2yJPbiKr7"
                className="group flex items-start gap-3 text-slate-400 hover:text-slate-200 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="size-5 flex-shrink-0 mt-0.5 text-primary/70 group-hover:text-primary transition-colors duration-300" />
                <span className="text-sm group-hover:underline decoration-primary/30 underline-offset-4">
                  Av. Magalhães de Castro 4.800, Park Tower – 23° andar
                  Cidade Jardim - São Paulo - SP, 05676-120
                </span>
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=5511977998888"
                className="group flex items-center gap-3 text-slate-400 hover:text-slate-200 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="size-5 text-green-500 group-hover:text-green-400 transition-colors duration-300" />
                <span className="text-sm group-hover:underline decoration-green-500/30 underline-offset-4">+55 11 97799 8888</span>
              </a>

              <a
                href="tel:+551151856999"
                className="group flex items-center gap-3 text-slate-400 hover:text-slate-200 transition-colors duration-300"
              >
                <Phone className="size-5 text-primary/70 group-hover:text-primary transition-colors duration-300" />
                <span className="text-sm group-hover:underline decoration-primary/30 underline-offset-4">+55 11 5185 6999</span>
              </a>

              <a
                href="mailto:mbras@mbras.com.br"
                className="group flex items-center gap-3 text-slate-400 hover:text-slate-200 transition-colors duration-300"
              >
                <Mail className="size-5 text-primary/70 group-hover:text-primary transition-colors duration-300" />
                <span className="text-sm group-hover:underline decoration-primary/30 underline-offset-4">mbras@mbras.com.br</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-6 border-t border-slate-800/50 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} MBRAS Imobiliária — CRECI-SP 23907-J</p>
        </div>
      </div>
    </footer>
  );
}