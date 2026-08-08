import { 
  MapPin, 
  Calendar, 
  Code2, 
  Sparkles, 
  GraduationCap, 
  Camera, 
  Layers, 
  Database, 
  ArrowRight,
  Cpu,
  Terminal,
  Smartphone,
  ShoppingBag
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Sobre mí | Yoel Zoff",
  description: "Conoce más sobre mi trayectoria, stack tecnológico y habilidades como desarrollador Full Stack.",
}

export default function AboutPage() {
  const coreTech = [
    "Next.js", "React", "React Native", "TypeScript", 
    "JavaScript", "Python", "PostgreSQL", "Supabase"
  ]

  const secondaryTech = [
    "Node.js", "Tailwind CSS", "VBA & Excel", "APIs Rest", 
    "Websockets", "Git & GitHub", "WooCommerce", "SEO Optimization"
  ]

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Background patterns and glowing blobs */}
      <div className="absolute inset-0 bg-dot-pattern text-zinc-500/10 dark:text-zinc-400/5 pointer-events-none -z-10" />
      <div className="absolute top-[5%] right-[-5%] w-[400px] h-[400px] rounded-full bg-violet-500/10 dark:bg-violet-500/5 bg-glow-blob pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/5 bg-glow-blob pointer-events-none -z-10 delay-700" />

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-6xl relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/25 shadow-sm shadow-violet-500/5 mb-6 select-none">
              <Sparkles className="h-3.5 w-3.5" />
              Conociendo al creador
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
              Sobre <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 dark:from-violet-400 dark:via-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent">mí</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Ingeniería de software y desarrollo Full Stack enfocado en automatización, integraciones y lógica de negocio.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Ficha Personal / Sidebar */}
          <div className="lg:col-span-4 space-y-8 font-sans">
            {/* Tarjeta Principal */}
            <div className="bg-card/80 backdrop-blur-md border border-border/50 rounded-3xl p-8 shadow-xl shadow-black/5 hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500 group">
              {/* Iniciales */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-primary/20 flex items-center justify-center text-primary font-bold text-3xl mb-6 mx-auto group-hover:scale-105 transition-transform duration-500 shadow-inner">
                YZ
              </div>
              
              <h3 className="text-2xl font-bold text-center mb-1 text-foreground">Yoel Zoff</h3>
              <p className="text-sm text-muted-foreground text-center mb-8 font-medium">Desarrollador Full Stack</p>

              <div className="space-y-5 border-t border-border/30 pt-8 text-sm">
                <div className="flex items-center gap-4 text-muted-foreground group/item">
                  <div className="p-2 bg-primary/5 rounded-lg group-hover/item:bg-primary/10 transition-colors">
                    <Calendar className="h-4 w-4 text-primary shrink-0" />
                  </div>
                  <span className="font-medium">27 años</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground group/item">
                  <div className="p-2 bg-primary/5 rounded-lg group-hover/item:bg-primary/10 transition-colors">
                    <MapPin className="h-4 w-4 text-primary shrink-0" />
                  </div>
                  <span className="font-medium">Rosario &bull; CABA</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground group/item">
                  <div className="p-2 bg-primary/5 rounded-lg group-hover/item:bg-primary/10 transition-colors">
                    <GraduationCap className="h-4 w-4 text-primary shrink-0" />
                  </div>
                  <span className="font-medium">Carrera de Programación</span>
                </div>
              </div>
            </div>

            {/* Tarjeta Stack Tecnológico Principal */}
            <div className="bg-card/80 backdrop-blur-md border border-border/50 rounded-3xl p-8 shadow-xl shadow-black/5 hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500">
              <h4 className="font-bold text-sm mb-5 flex items-center gap-2 text-foreground uppercase tracking-wider">
                <Terminal className="h-4 w-4 text-violet-500" />
                Stack Principal
              </h4>
              <div className="flex flex-wrap gap-2">
                {coreTech.map(tech => (
                  <Badge key={tech} variant="secondary" className="px-3 py-1.5 text-xs font-semibold bg-primary/5 hover:bg-primary/10 border-primary/10 transition-colors">
                    {tech}
                  </Badge>
                ))}
              </div>

              <h4 className="font-bold text-sm mt-8 mb-5 flex items-center gap-2 text-foreground uppercase tracking-wider">
                <Layers className="h-4 w-4 text-cyan-500" />
                Tecnologías y Entorno
              </h4>
              <div className="flex flex-wrap gap-2">
                {secondaryTech.map(tech => (
                  <Badge key={tech} variant="outline" className="px-3 py-1.5 text-xs text-muted-foreground bg-background/50 hover:text-foreground transition-colors">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Biografía y Enfoque */}
          <div className="lg:col-span-8 space-y-12">
            {/* Quién soy */}
            <section className="bg-card/40 backdrop-blur-sm border border-border/40 p-8 md:p-10 rounded-3xl shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                <Code2 className="h-6 w-6 text-primary" />
                Perfil Técnico y Enfoque
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Soy desarrollador Full Stack y disfruto crear productos y arquitecturas que resuelven problemas comerciales reales. 
                  A lo largo de mi experiencia participé en el desarrollo de aplicaciones web complejas, sistemas de gestión multi-tenant 
                  y plataformas de e-commerce personalizadas, liderando la lógica desde el diseño del esquema de base de datos hasta su implementación en producción.
                </p>
                <p>
                  Mi fuerte está en el desarrollo de software orientado al negocio: integración de servicios críticos, automatización de procesos mediante colas asíncronas y construcción de APIs escalables. 
                  Para esto, gran parte de mis desarrollos combinan robustez backend y comunicación en tiempo real con integraciones fluidas con Mercado Libre, Mercado Pago (OAuth y suscripciones), OpenAI, WhatsApp Cloud API y bases de datos robustas.
                </p>
              </div>
            </section>

            {/* Áreas de Mayor Especialización */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                Especialidades de Ingeniería
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card/60 backdrop-blur-md border border-border/40 hover:border-violet-500/30 p-6 md:p-8 rounded-3xl transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/5 hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-violet-500/10 rounded-xl text-violet-500">
                      <Cpu className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-lg">Backend & BD</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Diseño de servicios backend resilientes con Node.js y Python. Modelado relacional en PostgreSQL y Supabase implementando políticas de seguridad Row Level Security (RLS), triggers y mensajería en tiempo real mediante Websockets.
                  </p>
                </div>

                <div className="bg-card/60 backdrop-blur-md border border-border/40 hover:border-indigo-500/30 p-6 md:p-8 rounded-3xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5 hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-500">
                      <Smartphone className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-lg">Frontend & Mobile</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Creación de interfaces web altamente interactivas con React y Next.js (App Router, Server Components y optimización SSR). Desarrollo de aplicaciones móviles nativas multiplataforma utilizando React Native y Expo.
                  </p>
                </div>

                <div className="bg-card/60 backdrop-blur-md border border-border/40 hover:border-cyan-500/30 p-6 md:p-8 rounded-3xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5 hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-500">
                      <ShoppingBag className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-lg">E-commerce</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Desarrollo de motores de e-commerce responsive, ultrarrápidos y optimizados para SEO. Integración de pasarelas de pago y automatización de procesos de facturación e inventario comercial.
                  </p>
                </div>

                <div className="bg-card/60 backdrop-blur-md border border-border/40 hover:border-emerald-500/30 p-6 md:p-8 rounded-3xl transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500">
                      <Camera className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-lg">Sensibilidad Visual</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Mis bases en diseño y fotografía me brindan una comprensión profunda de la proporción, la simetría y la teoría del color, permitiéndome construir interfaces precisas que respetan fielmente el diseño de experiencia del usuario.
                  </p>
                </div>
              </div>
            </section>

            {/* Mi Trayectoria (Timeline) */}
            <section className="bg-muted/10 p-8 md:p-10 rounded-3xl border border-border/40">
              <h2 className="text-2xl md:text-3xl font-bold mb-10">
                Trayectoria y Formación
              </h2>
              
              <div className="space-y-10 relative before:absolute before:inset-y-0 before:left-[11px] before:w-[2px] before:bg-gradient-to-b before:from-violet-500 before:via-cyan-500 before:to-transparent">
                {/* Item 1 */}
                <div className="relative pl-12 group">
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-violet-500 bg-background flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-md shadow-violet-500/20">
                    <div className="w-2 h-2 rounded-full bg-violet-500" />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-wider text-violet-500 block mb-2">2020 - INICIO</span>
                    <h3 className="font-bold text-xl text-foreground mb-2">Desarrollo Web & E-commerce</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Comencé a dedicarme al desarrollo de software y e-commerce construyendo soluciones sobre WordPress y WooCommerce, mientras automatizaba procesos operativos locales para comercios mediante scripts y macros en Excel y VBA.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="relative pl-12 group">
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-indigo-500 bg-background flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-md shadow-indigo-500/20">
                    <div className="w-2 h-2 rounded-full bg-indigo-500" />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-wider text-indigo-500 block mb-2">EVOLUCIÓN</span>
                    <h3 className="font-bold text-xl text-foreground mb-2">SaaS, Cloud y Lenguajes Modernos</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Guiado por la necesidad de escalar la complejidad del software, profundicé de forma autodidacta en TypeScript, Javascript, Python y PostgreSQL. Comencé a construir arquitecturas modernas basadas en Next.js, React Native y ecosistemas de backend y APIs en la nube.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="relative pl-12 group">
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-cyan-500 bg-background flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-md shadow-cyan-500/20">
                    <div className="w-2 h-2 rounded-full bg-cyan-500" />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-wider text-cyan-500 block mb-2">ACTUALIDAD</span>
                    <h3 className="font-bold text-xl text-foreground mb-2">Estudios en Programación</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Actualmente me encuentro cursando la carrera formal de programación con el objetivo de dotar de una sólida base académica y teórica mis conocimientos previos, profundizando en algoritmos, estructuras de datos complejos y patrones de diseño de software.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Más allá del código */}
            <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 md:p-10 rounded-3xl border border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Sparkles className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <h3 className="font-bold text-2xl mb-4 flex items-center gap-3">
                  Más allá del código
                </h3>
                <p className="text-foreground/80 leading-relaxed text-lg mb-8 max-w-2xl">
                  Además de escribir código, me apasiona explorar cómo la inteligencia artificial aplicada y las automatizaciones pueden optimizar procesos de back-office cotidianos. Disfruto de la fotografía y el diseño visual, pasatiempos que nutren mi trabajo diario aportando un fuerte criterio estético a la estructuración de layouts interactivos, alineaciones de píxeles y usabilidad móvil.
                </p>
                <Button size="lg" className="shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all group" asChild>
                  <Link href="/projects" className="flex items-center gap-2 cursor-pointer font-semibold">
                    Ver mis proyectos <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
