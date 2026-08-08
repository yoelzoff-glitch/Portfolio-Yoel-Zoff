import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export interface ProjectType {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
}

export function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <Card className="overflow-hidden flex flex-col h-full group bg-card/65 backdrop-blur-sm border border-border/40 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300">
      <div className="relative h-48 overflow-hidden bg-muted">
        {project.imageUrl && (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-4">
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.slice(0, 5).map(tech => (
            <Badge key={tech} variant="secondary" className="text-[10px] py-0.5 px-2 font-medium bg-muted text-zinc-600 dark:text-zinc-400 border border-border/20">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 5 && (
            <Badge variant="secondary" className="text-[10px] py-0.5 px-2 font-medium bg-muted text-zinc-500 border border-border/20">
              +{project.technologies.length - 5}
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-3 border-t border-border/20 bg-muted/10">
        <Button asChild className="w-full relative overflow-hidden group/btn font-semibold hover:shadow-sm transition-all duration-300" variant="secondary">
          <Link href={`/projects/${project.slug}`} className="flex items-center justify-center gap-1">
            Ver proyecto 
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 text-muted-foreground" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
