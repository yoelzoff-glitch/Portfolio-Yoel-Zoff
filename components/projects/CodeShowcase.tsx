"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Copy, FileCode } from "lucide-react"

interface CodeSnippet {
  title: string
  filepath?: string
  description: string
  code: string
  language: string
}

interface CodeShowcaseProps {
  snippets: CodeSnippet[]
}

function highlightTS(code: string) {
  let i = 0
  let result = ""
  
  const keywords = new Set([
    "export", "async", "function", "let", "const", "await", "if", 
    "return", "throw", "new", "try", "catch", "import", "from", 
    "else", "interface", "type", "class", "extends", "default", "as"
  ])

  const types = new Set([
    "Promise", "any", "string", "number", "boolean", "Response", "Request", 
    "NextResponse", "Error", "AppError", "NextRequest", "NextPage"
  ])

  const values = new Set(["true", "false", "null", "undefined"])

  function escapeHtml(str: string) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  }

  while (i < code.length) {
    // 1. Single line comment
    if (code.startsWith("//", i)) {
      let end = code.indexOf("\n", i)
      if (end === -1) end = code.length
      result += `<span class="text-zinc-500 font-normal">${escapeHtml(code.slice(i, end))}</span>`
      i = end
      continue
    }

    // 2. Multi-line comment
    if (code.startsWith("/*", i)) {
      let end = code.indexOf("*/", i)
      if (end === -1) end = code.length
      else end += 2
      result += `<span class="text-zinc-500 font-normal">${escapeHtml(code.slice(i, end))}</span>`
      i = end
      continue
    }

    // 3. String literals (Single quote, double quote, backtick template)
    if (code[i] === '"' || code[i] === "'" || code[i] === "`") {
      const quote = code[i]
      let end = i + 1
      let escaped = false
      while (end < code.length) {
        if (code[end] === quote && !escaped) {
          end++
          break
        }
        escaped = code[end] === "\\" && !escaped
        end++
      }
      result += `<span class="text-emerald-400">${escapeHtml(code.slice(i, end))}</span>`
      i = end
      continue
    }

    // 4. Numbers
    if (/\d/.test(code[i])) {
      let end = i
      while (end < code.length && /[\d.]/.test(code[end])) {
        end++
      }
      result += `<span class="text-amber-500">${escapeHtml(code.slice(i, end))}</span>`
      i = end
      continue
    }

    // 5. Identifiers (Keywords, Types, Values, general words)
    if (/[a-zA-Z_$]/.test(code[i])) {
      let end = i
      while (end < code.length && /[a-zA-Z0-9_$]/.test(code[end])) {
        end++
      }
      const word = code.slice(i, end)
      if (keywords.has(word)) {
        result += `<span class="text-purple-400 font-semibold">${word}</span>`
      } else if (types.has(word)) {
        result += `<span class="text-sky-400 font-medium">${word}</span>`
      } else if (values.has(word)) {
        result += `<span class="text-amber-400">${word}</span>`
      } else {
        result += escapeHtml(word)
      }
      i = end
      continue
    }

    // 6. Any other character (operators, punctuation, spaces)
    result += escapeHtml(code[i])
    i++
  }

  return result
}

export function CodeShowcase({ snippets }: CodeShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [copied, setCopied] = useState(false)

  if (!snippets || snippets.length === 0) return null

  const activeSnippet = snippets[activeIndex]

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeSnippet.code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <div className="space-y-6">
      {/* Tabs list */}
      <div className="flex flex-wrap gap-2 border-b border-border/50 pb-4">
        {snippets.map((snip, index) => (
          <button
            key={snip.title}
            onClick={() => {
              setActiveIndex(index)
              setCopied(false)
            }}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all cursor-pointer ${
              activeIndex === index
                ? "bg-primary text-primary-foreground shadow-sm scale-[1.02]"
                : "bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            <span className="flex items-center gap-2">
              <FileCode className="h-4 w-4" />
              {snip.title.split(" (")[0]}
            </span>
          </button>
        ))}
      </div>

      {/* Description */}
      <div className="bg-muted/20 p-4 rounded-lg border border-border/30">
        <h4 className="font-semibold text-foreground mb-1">{activeSnippet.title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {activeSnippet.description}
        </p>
      </div>

      {/* Terminal View */}
      <div className="relative rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-xl flex flex-col font-mono text-xs md:text-sm">
        {/* Mock Window Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800 text-zinc-400 select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
            {activeSnippet.filepath && (
              <span className="ml-4 text-xs font-mono text-zinc-500 hidden sm:inline-block">
                {activeSnippet.filepath}
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-3">
            {activeSnippet.filepath && (
              <span className="text-xs font-mono text-zinc-500 inline-block sm:hidden">
                {activeSnippet.filepath.split("/").pop()}
              </span>
            )}
            <button
              onClick={handleCopy}
              className="p-1.5 rounded bg-zinc-800 hover:bg-zinc-700 active:scale-95 transition-all text-zinc-300 hover:text-white cursor-pointer"
              title="Copiar código"
            >
              {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Code Block Container */}
        <div className="overflow-x-auto max-h-[500px] p-4 text-zinc-100 bg-zinc-950/95 leading-relaxed selection:bg-zinc-800">
          <pre className="overflow-visible">
            <code
              dangerouslySetInnerHTML={{
                __html: highlightTS(activeSnippet.code),
              }}
            />
          </pre>
        </div>
      </div>
    </div>
  )
}
