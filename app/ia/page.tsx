'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Youtube, Sparkles, Brain, Zap, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AIConsultingLanding() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold text-white">Consultoría IA</span>
            </div>
            <Button
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 bg-transparent"
              onClick={() => router.push('/booking')}
            >
              Contacto
            </Button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-6 md:py-8 lg:py-12">
          <div className="text-center max-w-4xl mx-auto">
            {/* Profile Image */}
            <div className="relative mb-4 md:mb-6">
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-purple-500 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="/logo.png"
                    alt="Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full border-4 border-cyan-400 animate-pulse opacity-30"></div>
            </div>

            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-3 md:mb-4 leading-tight px-2">
              Transforma tu
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {" "}
                Negocio{" "}
              </span>
              con IA
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 md:mb-6 max-w-3xl mx-auto px-4">
              Descubre el poder de la Inteligencia Artificial para revolucionar tu empresa y alcanzar nuevos niveles de
              éxito
            </p>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-4 md:space-x-6 mb-6 md:mb-8">
              <a href="https://www.instagram.com/ia.pablosmarcos/" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-pink-500/50">
                  <Instagram className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
              </a>
              <a href="https://www.youtube.com/@IAPablosMarcos" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-500/50">
                  <Youtube className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
              </a>
              <a href="https://www.tiktok.com/@iapablosmarcos" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-black to-gray-800 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gray-500/50">
                  <img src="/tiktok.jpg" alt="TikTok" className="h-10 w-10 md:h-14 md:w-14 object-cover rounded-full" />
                </div>
              </a>
            </div>

            {/* Main CTA Text */}
            <div className="mb-6 md:mb-8 px-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-cyan-400 mb-3 md:mb-4">
                Asesoría de Inteligencia Artificial
              </h2>
              <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
                Expertos en implementación de soluciones de IA personalizadas para tu negocio
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-4 md:p-6 text-center">
                <Zap className="h-10 w-10 md:h-12 md:w-12 text-yellow-400 mx-auto mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Automatización</h3>
                <p className="text-sm md:text-base text-gray-300">Optimiza procesos y reduce costos operativos</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-4 md:p-6 text-center">
                <Brain className="h-10 w-10 md:h-12 md:w-12 text-purple-400 mx-auto mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Análisis Inteligente</h3>
                <p className="text-sm md:text-base text-gray-300">Toma decisiones basadas en datos precisos</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-4 md:p-6 text-center">
                <Sparkles className="h-10 w-10 md:h-12 md:w-12 text-cyan-400 mx-auto mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Innovación</h3>
                <p className="text-sm md:text-base text-gray-300">Mantente a la vanguardia tecnológica</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Booking Section */}
        <section className="container mx-auto px-4 py-4">
          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-4 px-4 md:py-8 md:px-12 text-sm md:text-2xl group transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full max-w-sm md:max-w-2xl mx-auto"
              onClick={() => router.push('/booking')}
            >
              <span className="block md:inline text-center">Agenda tu llamada</span>
              <span className="block md:inline md:ml-1 text-center">gratuita</span>
              <ArrowRight className="ml-2 md:ml-4 h-5 w-5 md:h-8 md:w-8 group-hover:translate-x-1 transition-transform inline-block mt-1 md:mt-0" />
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-8 border-t border-slate-800">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Asesoría de Inteligencia Artificial. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </div>
  )
} 