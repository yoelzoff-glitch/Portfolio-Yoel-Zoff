import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/20 bg-zinc-50/50 dark:bg-zinc-950/20 backdrop-blur-sm py-16 mt-32 relative overflow-hidden">
      {/* Background soft glow blobs */}
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-violet-500/5 dark:bg-violet-500/3 bg-glow-blob pointer-events-none -z-10 animate-pulse duration-[6s]" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full bg-cyan-500/5 dark:bg-cyan-500/3 bg-glow-blob pointer-events-none -z-10 animate-pulse duration-[6s]" />

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border/20">
          
          {/* Col 1: Brand & Desc */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="font-extrabold text-xl tracking-tight flex items-center gap-1.5 w-fit">
              Yoel Zoff
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Desarrollador Full Stack especializado en la creación de aplicaciones web de alto rendimiento, integraciones de pago complejas y flujos con Inteligencia Artificial.
            </p>
            
            {/* Contact quick links */}
            <div className="space-y-2 pt-2 text-sm">
              <a href="mailto:yoel.zoff@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors w-fit">
                <Mail className="h-4 w-4 text-violet-500/80" />
                yoel.zoff@gmail.com
              </a>
              <a href="https://wa.me/5491141453929" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors w-fit">
                <Phone className="h-4 w-4 text-cyan-500/80" />
                +54 9 11 4145-3929
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 md:col-start-7 space-y-4">
            <h4 className="font-bold text-sm tracking-wider uppercase text-zinc-400 dark:text-zinc-500">Navegación</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Inicio</Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">Sobre Mí</Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">Proyectos</Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Connect / Socials */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-bold text-sm tracking-wider uppercase text-zinc-400 dark:text-zinc-500">Redes y Conectividad</h4>
            <p className="text-muted-foreground text-xs leading-relaxed">
              ¿Listo para dar vida a tu idea? Contactame para hablar de tu próximo proyecto.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://linkedin.com/in/yoel-zoff-ab7ba1168/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-border/40 bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <FaLinkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-border/40 bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <FaGithub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
              <a 
                href="https://wa.me/5491141453929" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-border/40 bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <FaWhatsapp className="h-4 w-4" />
                <span className="sr-only">WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            © {currentYear} Yoel Zoff. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-1.5 select-none font-medium">
            Hecho en Buenos Aires, Argentina
            <span className="inline-block w-4 h-2.5 bg-sky-400 relative overflow-hidden rounded-[1px] border border-sky-300/30">
              <span className="absolute inset-x-0 top-1/3 bottom-1/3 bg-white" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-yellow-500" />
            </span>
          </p>
        </div>

      </div>
    </footer>
  )
}
