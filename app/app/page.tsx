"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import UrlForm from "../components/url-form"
import ChatInterface from "../components/chat-interface"

export default function AppPage() {
  const [isUrlSubmitted, setIsUrlSubmitted] = useState(false)

  return (
    <div className="space-y-8">
      <div className="text-center py-8">
        <h2 className="text-4xl font-bold mb-4 text-primary">CruzAssist Demo</h2>
        <p className="text-lg text-foreground">
          Input the link to your website to get
          <br />a demo custom AI chatbot for your website
        </p>
      </div>
      <div className="bg-white py-8 w-full">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-semibold text-center mb-6">Enter your URL</h3>
          <UrlForm onUrlSubmit={() => setIsUrlSubmitted(true)} />
        </div>
      </div>
      {isUrlSubmitted && (
        <div className="max-w-4xl mx-auto px-4">
          <Card className="p-2 border-2 border-blue-200 shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]">
            <CardContent>
              <div className="flex items-center justify-center h-24">
                <h3 className="text-2xl font-semibold text-center">Ask questions about your website</h3>
              </div>
              <ChatInterface />
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

