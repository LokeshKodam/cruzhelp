"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion, AnimatePresence } from "framer-motion"

type Message = {
  role: "user" | "ai"
  content: string
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector("[data-radix-scroll-area-viewport]")
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight
      }
    }
  }, [scrollAreaRef]) // Fixed dependency

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // TODO: Implement actual AI question answering logic
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulating API call
      const aiMessage: Message = {
        role: "ai",
        content: `This is a sample response from CruzAgent to: "${input}". It can be a very long response that doesn't get cut off and instead wraps to new lines within the same text box. This ensures that all the content is visible and easily readable, even for very long single-word inputs.`,
      }
      setMessages((prev) => [...prev, aiMessage])
    } catch (error) {
      console.error("Failed to get AI response:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col w-full p-4">
      <ScrollArea ref={scrollAreaRef} className="h-[400px] w-full mb-4 overflow-y-auto">
        <AnimatePresence>
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              className={`mb-4 flex ${message.role === "ai" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`px-4 py-2 rounded-lg max-w-[80%] ${
                  message.role === "ai" ? "bg-primary text-primary-foreground" : "bg-muted"
                }`}
              >
                <div className="whitespace-normal break-words hyphens-auto [overflow-wrap:anywhere]">
                  {message.content}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </ScrollArea>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <Input
          type="text"
          placeholder="Ask a question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isLoading}
          className="flex-grow"
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Thinking..." : "Ask"}
        </Button>
      </form>
    </div>
  )
}

