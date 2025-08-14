
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"; // Added this import
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-8">
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm text-lg px-6 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Agência #1 em Resultados
            </Badge>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Transformamos
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent block">
              Ideias em Sucesso
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Somos especialistas em marketing digital e desenvolvimento de tecnologia. 
            Criamos estratégias personalizadas que geram resultados reais para o seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105">
              Começar Agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white hover:text-indigo-600 px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300">
              Ver Portfolio
            </Button>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Zap className="w-16 h-16 text-yellow-300" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </motion.div>
      </div>

      <style jsx>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>
    </section>
  );
}
