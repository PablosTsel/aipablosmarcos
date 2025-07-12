'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, CalendarIcon, Clock } from "lucide-react";
// @ts-ignore - Firebase db may be null during build
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function BookingPage() {
  const router = useRouter();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [formData, setFormData] = useState({
    time: "",
    nombre: "",
    email: "",
    telefono: "",
    servicio: "",
    objetivo: "",
    experiencia: "",
    ciudad: "",
    presupuesto: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !formData.time) {
      toast.error("Por favor selecciona una fecha y hora");
      return;
    }

    if (!db) {
      toast.error("Error de conexión. Por favor recarga la página.");
      return;
    }

    try {
      const bookingData = {
        ...formData,
        date: date.toISOString(),
        createdAt: new Date().toISOString()
      };

      await addDoc(collection(db, "bookings"), bookingData);
      
      toast.success("¡Reserva confirmada! Te contactaremos pronto.");
      router.push("/");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error al guardar la reserva. Intenta de nuevo.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => router.push("/")}>
              <Brain className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold text-white">AI Consulting</span>
            </div>
          </nav>
        </header>

        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Agenda tu llamada gratuita
          </h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Date and Time Selection */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5 text-cyan-400" />
                    Selecciona una fecha
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                    className="rounded-md border-slate-700 text-white"
                    showOutsideDays={false}
                  />
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Clock className="h-5 w-5 text-cyan-400" />
                    Selecciona una hora
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={formData.time} onValueChange={(value) => setFormData({...formData, time: value})}>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue placeholder="Elige una hora" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((hour) => (
                        <SelectItem key={hour} value={`${hour}:00 PM`}>
                          {hour}:00 PM
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>
            </div>

            {/* Form Fields */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Información de contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="nombre" className="text-gray-300">1. Nombre completo</Label>
                  <p className="text-sm text-gray-400 mb-2">Para personalizar mensajes y llamadas</p>
                  <Input
                    id="nombre"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-300">2. Correo electrónico</Label>
                  <p className="text-sm text-gray-400 mb-2">Para seguimiento y envío de info</p>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>

                <div>
                  <Label htmlFor="telefono" className="text-gray-300">3. Teléfono (con WhatsApp)</Label>
                  <p className="text-sm text-gray-400 mb-2">✅ Muy importante para cerrar por llamada o nota de voz</p>
                  <Input
                    id="telefono"
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>

                <div>
                  <Label htmlFor="servicio" className="text-gray-300">4. Selecciona el servicio que te interesa</Label>
                  <Select required value={formData.servicio} onValueChange={(value) => setFormData({...formData, servicio: value})}>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white mt-2">
                      <SelectValue placeholder="Elige un servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asesoria-inmobiliaria">Asesoría inmobiliaria</SelectItem>
                      <SelectItem value="carsharing">Carsharing y rentabilidad de coches</SelectItem>
                      <SelectItem value="automatizacion-ia">Automatización con IA para tu negocio</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="objetivo" className="text-gray-300">5. ¿Qué objetivo quieres alcanzar?</Label>
                  <p className="text-sm text-gray-400 mb-2">Ejemplo: "Quiero empezar a invertir en propiedades con poco capital"</p>
                  <Textarea
                    id="objetivo"
                    required
                    value={formData.objetivo}
                    onChange={(e) => setFormData({...formData, objetivo: e.target.value})}
                    className="bg-slate-700 border-slate-600 text-white"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="experiencia" className="text-gray-300">6. ¿Tienes alguna experiencia previa en este ámbito? (opcional)</Label>
                  <p className="text-sm text-gray-400 mb-2">✅ Esto te ayuda a adaptar tu pitch de venta</p>
                  <Textarea
                    id="experiencia"
                    value={formData.experiencia}
                    onChange={(e) => setFormData({...formData, experiencia: e.target.value})}
                    className="bg-slate-700 border-slate-600 text-white"
                    rows={2}
                  />
                </div>

                <div>
                  <Label htmlFor="ciudad" className="text-gray-300">7. ¿En qué ciudad vives? (para carsharing o inmobiliaria)</Label>
                  <Input
                    id="ciudad"
                    value={formData.ciudad}
                    onChange={(e) => setFormData({...formData, ciudad: e.target.value})}
                    className="bg-slate-700 border-slate-600 text-white mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="presupuesto" className="text-gray-300">8. ¿Cuál es tu presupuesto aproximado para iniciar?</Label>
                  <Select required value={formData.presupuesto} onValueChange={(value) => setFormData({...formData, presupuesto: value})}>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white mt-2">
                      <SelectValue placeholder="Selecciona un rango" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="menos-500">Menos de 500 €</SelectItem>
                      <SelectItem value="500-1000">500 – 1.000 €</SelectItem>
                      <SelectItem value="1000-5000">1.000–5.000 €</SelectItem>
                      <SelectItem value="mas-5000">Más de 5.000 €</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 text-lg"
                >
                  Confirmar reserva
                </Button>
              </CardContent>
            </Card>
          </form>
        </div>
      </div>
    </div>
  );
} 