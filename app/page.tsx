"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/projects/ProjectCard"
import { motion } from "framer-motion"
import { TerminalMockup } from "@/components/common/TerminalMockup"
import { Code2, Server, Globe } from "lucide-react"

const featuredProjects = [
  {
    id: "1",
    slug: "klyvo",
    title: "Klyvo - SaaS de Gestión Inteligente",
    description: "Sistema SaaS multitenant para gestión integral de stock, automatización de ventas e integraciones avanzadas.",
    imageUrl: "/images/klyvo imagen portada.png",
    technologies: ["Next.js", "Supabase", "OpenAI", "Mercado Libre API", "WhatsApp API"],
  },
  {
    id: "2",
    slug: "zoma",
    title: "ZOMA ERP - SaaS Multi-Tenant",
    description: "SaaS de gestión comercial con cuatro portales especializados (Admin, Vendedores, Clientes, Contadores), facturación oficial AFIP e integración de cobros.",
    imageUrl: "/images/zoma portada.png",
    technologies: ["Next.js 15", "Supabase", "Mercado Pago", "AFIP API"],
  },
  {
    id: "3",
    slug: "ana-mary-joyas",
    title: "Ana Mary Joyas - Headless E-Commerce",
    description: "Plataforma e-commerce Headless a medida con sincronización de Mercado Libre, checkout de Mercado Pago, Andreani Envíos y panel de analíticas en tiempo real.",
    imageUrl: "/images/anamary-home.png",
    technologies: ["Next.js 16", "React 19", "Supabase", "Mercado Libre API", "Mercado Pago API", "Andreani API"],
  },
  {
    id: "4",
    slug: "five-saint",
    title: "Five Saint - E-Commerce & CRM",
    description: "Ecosistema digital completo con catálogo de productos de alta gama y dos portales de administración (Catálogo y CRM Comercial).",
    imageUrl: "/images/Five Saint.png",
    technologies: ["Next.js 16", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase"],
  },
]

const techGroups = [
  {
    title: "Frontend Development",
    description: "Interfaces modernas, ultrarrápidas y optimizadas para SEO y conversión.",
    icon: <Globe className="h-6 w-6 text-violet-500" />,
    skills: ["Next.js 14/15 App Router", "React 19 & Server Components", "React Native & Expo", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend & Database",
    description: "Servicios altamente seguros, escalables y orientados a la integridad del dato.",
    icon: <Server className="h-6 w-6 text-indigo-500" />,
    skills: ["Node.js (Express / Fastify)", "Supabase Architecture", "PostgreSQL (RLS & Triggers)", "WebSocket Server", "Background Job Queues", "REST & GraphQL APIs"]
  },
  {
    title: "APIs & Integraciones",
    description: "Automatización de flujos de negocio integrando los proveedores líderes.",
    icon: <Code2 className="h-6 w-6 text-cyan-500" />,
    skills: ["Mercado Pago (OAuth/Webhooks)", "Mercado Libre Core API", "Andreani Logística API", "WhatsApp Cloud API (Meta)", "OpenAI GPT & Whisper SDK", "AFIP Factura Electrónica API"]
  }
]

export default function Home() {
  return (
    <div className="flex flex-col gap-24 relative overflow-hidden">
      {/* Background patterns and glowing blobs */}
      <div className="absolute inset-0 bg-dot-pattern text-zinc-500/10 dark:text-zinc-400/5 pointer-events-none -z-10" />
      <div className="absolute top-[10%] left-[-10%] w-[380px] h-[380px] rounded-full bg-violet-500/10 dark:bg-violet-500/5 bg-glow-blob pointer-events-none -z-10" />
      <div className="absolute top-[30%] right-[-10%] w-[420px] h-[420px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/5 bg-glow-blob pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="container mx-auto px-4 mt-12 md:mt-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          {/* Hero text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Pulsing Status Badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25 shadow-sm shadow-emerald-500/5 mb-6 select-none">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Disponible para proyectos complejos
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Yoel Zoff
              <span className="block mt-2 bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 dark:from-violet-400 dark:via-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent">
                Desarrollador Full Stack
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Especializado en arquitecturas sólidas con <strong className="text-foreground font-semibold">Next.js</strong>, integraciones de pago complejas y flujos basados en <strong className="text-foreground font-semibold">Inteligencia Artificial</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" className="shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all font-semibold" asChild>
                <Link href="/projects">Explorar Proyectos</Link>
              </Button>
              <Button size="lg" variant="outline" className="backdrop-blur-sm" asChild>
                <Link href="/contact">Contactar Conmigo</Link>
              </Button>
            </div>
          </motion.div>

          {/* Interactive terminal mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <TerminalMockup />
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="border-t border-b border-border/20 bg-muted/20 py-24 relative">
        <div className="absolute inset-0 bg-grid-pattern text-zinc-500/5 pointer-events-none -z-10" />
        
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ecosistema Tecnológico</h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Domino herramientas del lado del cliente y servidor para concebir soluciones robustas de extremo a extremo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {techGroups.map((group, idx) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-card hover:bg-card/80 border border-border/40 hover:border-primary/20 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="p-3 bg-muted rounded-xl w-fit mb-6">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{group.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{group.description}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-border/10">
                  {group.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-2.5 py-1 bg-muted text-xs font-semibold rounded-md border border-border/20 text-zinc-600 dark:text-zinc-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container mx-auto px-4 mb-24 max-w-6xl">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Proyectos Destacados</h2>
            <p className="text-muted-foreground">Una selección de sistemas empresariales e integraciones premium.</p>
          </div>
          <Button variant="ghost" className="hover:gap-2 group transition-all" asChild>
            <Link href="/projects">
              Ver todos los proyectos <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
