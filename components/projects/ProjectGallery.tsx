"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface ProjectImage {
  url: string
  caption: string
}

interface ProjectGalleryProps {
  images: ProjectImage[]
  title: string
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  if (!images || images.length === 0) {
    return null
  }

  // If there's only one image, show it simply
  if (images.length === 1) {
    return (
      <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-zinc-950 border border-border/50 shadow-md">
        <Image
          src={images[0].url}
          alt={images[0].caption || title}
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-contain"
        />
        {images[0].caption && (
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 text-white">
            <p className="text-sm font-medium opacity-90">{images[0].caption}</p>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Main Image Viewport */}
      <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-zinc-950 border border-border/50 shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={images[activeIndex].url}
              alt={images[activeIndex].caption || `${title} - Captura ${activeIndex + 1}`}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Caption Overlay */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 text-white">
          <p className="text-sm font-medium opacity-90 transition-opacity duration-200">
            {images[activeIndex].caption}
          </p>
        </div>
      </div>

      {/* Navigation Thumbnails */}
      <div className="flex gap-4 justify-center flex-wrap">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "relative w-28 h-16 rounded-lg overflow-hidden border-2 bg-zinc-950 transition-all duration-200 cursor-pointer shadow-sm hover:scale-[1.03] active:scale-95 focus:outline-none",
              activeIndex === index 
                ? "border-primary ring-2 ring-primary/20 scale-[1.03] opacity-100" 
                : "border-border/50 opacity-60 hover:opacity-100"
            )}
          >
            <Image
              src={img.url}
              alt={`${title} Miniatura ${index + 1}`}
              fill
              sizes="112px"
              className="object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
