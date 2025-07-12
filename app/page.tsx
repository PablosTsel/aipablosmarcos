import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Youtube, Sparkles, Brain, Zap, ArrowRight } from "lucide-react"

export default function AIConsultingLanding() {
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
              <span className="text-xl font-bold text-white">AI Consulting</span>
            </div>
            <Button
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 bg-transparent"
            >
              Contacto
            </Button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Profile Image */}
            <div className="relative mb-8">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-purple-500 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="/logo.png"
                    alt="Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute inset-0 w-40 h-40 mx-auto rounded-full border-4 border-cyan-400 animate-pulse opacity-30"></div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transforma tu
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {" "}
                Negocio{" "}
              </span>
              con IA
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Descubre el poder de la Inteligencia Artificial para revolucionar tu empresa y alcanzar nuevos niveles de
              éxito
            </p>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6 mb-12">
              <a href="#" className="group">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-pink-500/50">
                  <Instagram className="h-8 w-8 text-white" />
                </div>
              </a>
              <a href="#" className="group">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-500/50">
                  <Youtube className="h-8 w-8 text-white" />
                </div>
              </a>
              <a href="#" className="group">
                <div className="w-16 h-16 bg-gradient-to-r from-black to-gray-800 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gray-500/50">
                  <img src="/tiktok.jpg" alt="TikTok" className="h-14 w-14 object-cover rounded-full" />
                </div>
              </a>
            </div>

            {/* Main CTA Text */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-4">
                Asesoría de Inteligencia Artificial
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Expertos en implementación de soluciones de IA personalizadas para tu industria
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Automatización</h3>
                <p className="text-gray-300">Optimiza procesos y reduce costos operativos</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Brain className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Análisis Inteligente</h3>
                <p className="text-gray-300">Toma decisiones basadas en datos precisos</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Sparkles className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Innovación</h3>
                <p className="text-gray-300">Mantente a la vanguardia tecnológica</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Subscription Section */}
        <section className="container mx-auto px-4 py-16">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-slate-800 to-slate-900 border-slate-700 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Únete a la Revolución IA</h3>
                <p className="text-lg text-gray-300">
                  Recibe insights exclusivos, casos de estudio y las últimas tendencias en Inteligencia Artificial
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="Nombre"
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400"
                  />
                </div>
                <Input
                  type="text"
                  placeholder="Empresa (opcional)"
                  className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400"
                />
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 text-lg group">
                  Suscribirse Ahora
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>

              <p className="text-sm text-gray-400 text-center mt-4">No spam. Cancela cuando quieras. 100% gratuito.</p>
            </CardContent>
          </Card>
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
