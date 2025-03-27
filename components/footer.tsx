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
      href: "https://www.linkedin.com/company/mbras-solu%C3%A7%C3%B5es-imobili%C3%A1rias",
      icon: LinkedinIcon,
    },
  ],
};

export default function Footer() {
  const pathname = usePathname();
  if (pathname.includes("presentation")) return null;

  return (
    <footer className="relative overflow-hidden bg-slate-950 border-t border-gray-800">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.05),transparent_70%)]" />
      <div className="relative container mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Column 1: Logo and Social Links */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/mbras-logo.jpg"
              alt="Logo MBRAS"
              width={128}
              height={55}
              className="w-36 mb-6"
            />
            <div className="flex gap-4 mt-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-200 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="text-gray-400">
            <h3 className="text-gray-200 font-semibold mb-4">Links Rápidos</h3>
            <nav className="flex flex-col gap-3">
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm hover:text-gray-200 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact Information */}
          <div className="text-gray-400">
            <h3 className="text-gray-200 font-semibold mb-4">Contato</h3>
            <div className="space-y-4">
              <a
                href="https://maps.app.goo.gl/8FqHgfei2yJPbiKr7"
                className="flex items-start gap-2 hover:text-gray-200 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="h-5 w-5 flex-shrink-0 mt-1" />
                <span className="text-sm">
                  Av. Magalhães de Castro 4.800, Park Tower – 23° andar
                  Cidade Jardim - São Paulo - SP, 05676-120
                </span>
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=5511977998888"
                className="flex items-center gap-2 hover:text-gray-200 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="h-5 w-5 text-green-500" />
                <span className="text-sm">+55 11 97799 8888</span>
              </a>

              <a
                href="tel:+551151856999"
                className="flex items-center gap-2 hover:text-gray-200 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span className="text-sm">+55 11 5185 6999</span>
              </a>

              <a
                href="mailto:mbras@mbras.com.br"
                className="flex items-center gap-2 hover:text-gray-200 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="text-sm">mbras@mbras.com.br</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} MBRAS Imobiliária — CRECI-SP 23907-J</p>
        </div>
      </div>
    </footer>
  );
}