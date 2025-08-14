import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  Zap, 
  Phone, 
  Mail, 
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter
} from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Início', href: '#hero' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' }
  ];

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="font-bold text-xl text-gray-900">
                Digital<span className="text-indigo-600">Agency</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6">
                Começar Projeto
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium w-full text-left"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="px-3 py-2">
                  <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white">
                    Começar Projeto
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-0">
        <div id="hero">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="font-bold text-xl">
                  Digital<span className="text-indigo-400">Agency</span>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                Transformamos ideias em soluções digitais de sucesso. 
                Especialistas em marketing digital e desenvolvimento de tecnologia.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-lg mb-6">Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-indigo-400" />
                  <span className="text-gray-400">+55 (11) 9999-9999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-indigo-400" />
                  <span className="text-gray-400">contato@agencia.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-indigo-400" />
                  <span className="text-gray-400">São Paulo, SP - Brasil</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-lg mb-6">Serviços</h3>
              <ul className="space-y-2">
                {[
                  'Marketing Digital',
                  'Desenvolvimento Web',
                  'Design & Branding',
                  'Apps Mobile',
                  'E-commerce',
                  'Consultoria'
                ].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Digital Agency. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}