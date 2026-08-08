"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare, Send, Phone } from "lucide-react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 1000)
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-5xl">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Contacto</h1>
          <p className="text-xl text-muted-foreground mb-8">
            ¿Tienes un proyecto en mente? Hablemos de cómo puedo ayudarte a hacerlo realidad.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <a href="mailto:yoel.zoff@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  yoel.zoff@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">WhatsApp / Teléfono</p>
                <a href="https://wa.me/5491141453929" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  +54 9 11 4145-3929
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">Redes Sociales</p>
                <div className="flex gap-2">
                  <a href="https://linkedin.com/in/yoel-zoff-ab7ba1168/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    LinkedIn
                  </a>
                  <span className="text-muted-foreground">•</span>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <Card className="border-border/50 shadow-lg">
            <CardHeader>
              <CardTitle>Envíame un mensaje</CardTitle>
              <CardDescription>
                Completá el formulario y te responderé lo antes posible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="py-8 text-center text-green-600 dark:text-green-400">
                  <p className="text-lg font-medium mb-2">¡Mensaje enviado con éxito!</p>
                  <p className="text-sm opacity-80">Me pondré en contacto contigo pronto.</p>
                  <Button variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Nombre</label>
                    <Input id="name" required placeholder="Tu nombre" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" required placeholder="tu@email.com" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Mensaje</label>
                    <Textarea 
                      id="message" 
                      required 
                      placeholder="Contame sobre tu proyecto..." 
                      className="min-h-[150px] bg-background"
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : (
                      <>
                        <Send className="mr-2 h-4 w-4" /> Enviar Mensaje
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
