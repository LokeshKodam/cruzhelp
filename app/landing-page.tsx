import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white text-center px-4">
      <h1 className="text-5xl font-bold mb-6 text-primary">Welcome to CruzAgent</h1>
      <p className="text-xl mb-8 max-w-2xl text-foreground">
        Unlock the power of your website with AI-driven insights. CruzAgent seamlessly integrates with your web content,
        providing intelligent answers and enhancing user engagement.
      </p>

      <div className="space-y-8 mb-12">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <FeatureCard
            title="Smart Scraping"
            description="Effortlessly extract and analyze your website's content with our advanced scraping technology."
          />
          <FeatureCard
            title="AI-Powered Answers"
            description="Get instant, accurate responses to user queries based on your website's unique content."
          />
          <FeatureCard
            title="Seamless Integration"
            description="Easily incorporate CruzAgent into your existing website for an enhanced user experience."
          />
        </div>
      </div>

      <Link href="/app" passHref>
        <Button
          size="lg"
          className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Try CruzAgent Now
        </Button>
      </Link>

      <p className="mt-12 text-sm text-muted-foreground">
        Experience the future of website interaction. No credit card required.
      </p>
    </div>
  )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
      <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-foreground">{description}</p>
    </div>
  )
}

