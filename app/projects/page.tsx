import { ProjectCard, type ProjectType } from "@/components/projects/ProjectCard"

export const metadata = {
  title: "Proyectos | Yoel Zoff",
  description: "Explora mis proyectos recientes de desarrollo Full Stack.",
}

const allProjects: ProjectType[] = [
  {
    id: "1",
    slug: "klyvo",
    title: "Klyvo - SaaS Multitenant",
    description: "Plataforma SaaS para gestión inteligente de stock y ventas. Incluye automatizaciones con IA y sincronización en tiempo real.",
    imageUrl: "/images/klyvo imagen portada.png",
    technologies: ["Next.js", "Supabase", "OpenAI", "API Mercado Libre", "API WhatsApp", "Mercado Pago"],
    status: "En Testeo",
  },
  {
    id: "2",
    slug: "zoma",
    title: "ZOMA ERP - SaaS Multi-Tenant",
    description: "Plataforma SaaS con arquitectura de cuatro portales especializados para administración, preventistas mobile, clientes y contadores, con integración fiscal y pasarela de pago.",
    imageUrl: "/images/zoma portada.png",
    technologies: ["Next.js 15", "Supabase", "Mercado Pago API", "AFIP API", "Websockets"],
    status: "En Producción",
  },
  {
    id: "3",
    slug: "ana-mary-joyas",
    title: "Ana Mary Joyas - Headless E-Commerce",
    description: "Plataforma de comercio electrónico Headless a medida, de alto rendimiento y arquitectura modular. Combina una experiencia de usuario premium con Mercado Libre, Mercado Pago y Andreani.",
    imageUrl: "/images/anamary-home.png",
    technologies: ["Next.js 16", "React 19", "Supabase", "Mercado Libre API", "Mercado Pago API", "Andreani API"],
    status: "En Producción",
  },
  {
    id: "5",
    slug: "five-saint",
    title: "Five Saint - E-Commerce & Comercial CRM",
    description: "Ecosistema digital completo con catálogo de productos de alta gama y dos portales de administración (Catálogo y CRM Comercial).",
    imageUrl: "/images/Five Saint.png",
    technologies: ["Next.js 16", "TypeScript", "Tailwind CSS", "Supabase"],
    status: "En Desarrollo",
  },
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Proyectos</h1>
        <p className="text-xl text-muted-foreground">
          Una selección de mis trabajos más recientes en desarrollo web y móvil.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
