"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

interface UrlFormProps {
  onUrlSubmit: () => void
}

export default function UrlForm({ onUrlSubmit }: UrlFormProps) {
  const [url, setUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // TODO: Implement actual web scraping logic
      await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulating API call
      toast({
        title: "Success",
        description: "Website scraped successfully!",
      })
      onUrlSubmit() // Call the onUrlSubmit prop after successful scraping
      setUrl("") // Clear the input after successful submission
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to scrape the website. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 w-full">
      <Input
        type="url"
        placeholder="Enter website URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
        className="max-w-xl w-full"
      />
      <Button type="submit" disabled={isLoading} className="w-40">
        {isLoading ? "Scraping..." : "Scrape"}
      </Button>
    </form>
  )
}

