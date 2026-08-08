"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Tab {
  id: string
  name: string
  language: string
  code: React.ReactNode
}

export function TerminalMockup() {
  const [activeTab, setActiveTab] = useState("perfil")

  const tabs: Tab[] = [
    {
      id: "perfil",
      name: "developer.ts",
      language: "typescript",
      code: (
        <div className="font-mono text-xs md:text-sm leading-relaxed space-y-1 text-zinc-300">
          <div>
            <span className="text-pink-500">const</span> <span className="text-blue-400">developer</span> = &#123;
          </div>
          <div className="pl-4">
            <span className="text-zinc-400">name:</span> <span className="text-emerald-400">"Yoel Zoff"</span>,
          </div>
          <div className="pl-4">
            <span className="text-zinc-400">role:</span> <span className="text-emerald-400">"Full Stack Engineer"</span>,
          </div>
          <div className="pl-4">
            <span className="text-zinc-400">specialties:</span> <span className="text-zinc-300">[</span>
            <span className="text-emerald-400">"Next.js"</span>, <span className="text-emerald-400">"React Native"</span>, <span className="text-emerald-400">"APIs"</span>
            <span className="text-zinc-300">]</span>,
          </div>
          <div className="pl-4">
            <span className="text-zinc-400">stack:</span> &#123;
          </div>
          <div className="pl-8">
            <span className="text-zinc-400">frontend:</span> <span className="text-zinc-300">[</span>
            <span className="text-emerald-400">"Next.js 15"</span>, <span className="text-emerald-400">"Tailwind CSS"</span>, <span className="text-emerald-400">"Framer Motion"</span>
            <span className="text-zinc-300">]</span>,
          </div>
          <div className="pl-8">
            <span className="text-zinc-400">backend:</span> <span className="text-zinc-300">[</span>
            <span className="text-emerald-400">"Node.js"</span>, <span className="text-emerald-400">"Supabase"</span>, <span className="text-emerald-400">"PostgreSQL RLS"</span>
            <span className="text-zinc-300">]</span>,
          </div>
          <div className="pl-8">
            <span className="text-zinc-400">integrations:</span> <span className="text-zinc-300">[</span>
            <span className="text-emerald-400">"Mercado Pago API"</span>, <span className="text-emerald-400">"Andreani API"</span>, <span className="text-emerald-400">"WhatsApp Cloud"</span>
            <span className="text-zinc-300">]</span>
          </div>
          <div className="pl-4">&#125;,
          </div>
          <div className="pl-4">
            <span className="text-zinc-400">philosophy:</span> <span className="text-emerald-400">"Código limpio, arquitectura de alto rendimiento y UX premium."</span>
          </div>
          <div>&#125;;</div>
        </div>
      )
    },
    {
      id: "pagos",
      name: "webhook.ts",
      language: "typescript",
      code: (
        <div className="font-mono text-xs md:text-sm leading-relaxed space-y-1 text-zinc-300">
          <div>
            <span className="text-pink-500">import</span> &#123; <span className="text-blue-400">mercadopago</span> &#125; <span className="text-pink-500">from</span> <span className="text-emerald-400">"lib/mercadopago"</span>;
          </div>
          <div>
            <span className="text-pink-500">import</span> &#123; <span className="text-blue-400">supabase</span> &#125; <span className="text-pink-500">from</span> <span className="text-emerald-400">"lib/supabase"</span>;
          </div>
          <div className="text-zinc-500">// Procesar acreditación de pago y disparar logística</div>
          <div>
            <span className="text-pink-500">export async function</span> <span className="text-purple-400">handlePaymentWebhook</span>(
            <span className="text-orange-400">paymentId</span>: <span className="text-yellow-500">string</span>
            ) &#123;
          </div>
          <div className="pl-4">
            <span className="text-pink-500">const</span> payment = <span className="text-pink-500">await</span> mercadopago.<span className="text-blue-400">payment</span>.<span className="text-purple-400">findById</span>(paymentId);
          </div>
          <div className="pl-4">
            <span className="text-pink-500">if</span> (payment.status === <span className="text-emerald-400">'approved'</span>) &#123;
          </div>
          <div className="pl-8">
            <span className="text-pink-500">const</span> &#123; data: order &#125; = <span className="text-pink-500">await</span> supabase
          </div>
          <div className="pl-12">
            .<span className="text-purple-400">from</span>(<span className="text-emerald-400">'orders'</span>)
          </div>
          <div className="pl-12">
            .<span className="text-purple-400">update</span>(&#123; <span className="text-zinc-400">status:</span> <span className="text-emerald-400">'paid'</span> &#125;)
          </div>
          <div className="pl-12">
            .<span className="text-purple-400">eq</span>(<span className="text-emerald-400">'id'</span>, payment.external_reference)
          </div>
          <div className="pl-12">
            .<span className="text-purple-400">single</span>();
          </div>
          <div className="pl-8 mt-1 text-zinc-500">// Enviar etiqueta a Andreani y notificar vía WhatsApp</div>
          <div className="pl-8">
            <span className="text-pink-500">await</span> <span className="text-purple-400">dispatchShipping</span>(order);
          </div>
          <div className="pl-8">
            <span className="text-pink-500">await</span> <span className="text-purple-400">sendWhatsAppNotification</span>(order.phone, <span className="text-emerald-400">'Pago recibido'</span>);
          </div>
          <div className="pl-4">&#125;
          </div>
          <div>&#125;</div>
        </div>
      )
    }
  ]

  const activeCode = tabs.find(t => t.id === activeTab)?.code

  return (
    <div className="w-full rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950/90 backdrop-blur-md shadow-2xl shadow-violet-500/5 text-left flex flex-col h-[340px]">
      {/* Top Bar / Mac buttons & Tabs */}
      <div className="bg-zinc-900/60 px-4 py-3 flex items-center gap-4 select-none shrink-0 border-b border-zinc-900/50">
        <div className="flex gap-1.5 shrink-0">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>
        
        {/* Tabs */}
        <div className="flex gap-2 text-xs ml-4">
          {tabs.map(tab => {
            const isActive = tab.id === activeTab
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 rounded-md font-mono transition-colors relative ${
                  isActive ? "text-zinc-100" : "text-zinc-500 hover:text-zinc-400"
                }`}
              >
                {tab.name}
                {isActive && (
                  <motion.div
                    layoutId="active-tab-indicator"
                    className="absolute inset-0 bg-zinc-800/40 rounded-md -z-10 border border-zinc-800/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Editor Content */}
      <div className="p-5 overflow-y-auto flex-1 relative font-mono text-zinc-300">
        {/* Line Numbers */}
        <div className="absolute left-3 top-5 bottom-5 flex flex-col items-end text-zinc-600 text-xs select-none pr-3 border-r border-zinc-900 w-8">
          {Array.from({ length: activeTab === "perfil" ? 17 : 14 }).map((_, i) => (
            <span key={i} className="leading-relaxed h-[20px]">{i + 1}</span>
          ))}
        </div>

        {/* Code Block */}
        <div className="pl-10 relative h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15 }}
              className="h-full"
            >
              {activeCode}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mock Blinking Cursor */}
        <span className="absolute bottom-6 right-8 w-2 h-4 bg-violet-400 animate-pulse hidden md:inline-block" />
      </div>
    </div>
  )
}
