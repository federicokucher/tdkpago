import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const features = [
  {
    title: "Fast",
    description: "Seamless integration with local instant payment networks",
    icon: "⚡",
  },
  {
    title: "Secure",
    description: "Real-time transfer security with guaranteed protection",
    icon: "🔒",
  },
  {
    title: "Tailored",
    description: "Custom solutions to fit your specific needs perfectly",
    icon: "🎯",
  },
  {
    title: "Transparent",
    description: "Simple, flexible pricing with no hidden costs",
    icon: "💎",
  },
  {
    title: "Technological",
    description: "Easy implementation of advanced functionalities",
    icon: "🛠️",
  },
  {
    title: "Scalable",
    description: "Effortless global wallet expansion with our scalable infrastructure",
    icon: "📈",
  },
]

const stats = [
  { value: "1M+", label: "Connected merchants" },
  { value: "50+", label: "Modular microservices and APIs" },
  { value: "600M", label: "Integrated payers" },
  { value: "10+", label: "Worldwide Partners" },
]

export default function Technology() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Modern infrastructure for global wallets
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            New generation infrastructure bridging global wallets and 
            local instant payment networks.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="border-none shadow-none bg-transparent">
                <CardHeader>
                  <div className="text-4xl mb-2">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bridge Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">A bridge for global wallets</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            A fast, secure, and scalable payment infrastructure to connect 
            global wallets with local instant payment networks.
          </p>
        </div>
      </section>

      {/* Framework Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Cutting-edge solutions for global wallets</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Take control of your global wallet and stay ahead of local instant 
            payment network trends with our robust infrastructure.
          </p>
          <div className="grid gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold">{stat.value}</div>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developers Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Built by developers, for developers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform, made by developers for developers, offers cutting-edge 
            solutions for instant payments and global wallets, empowering 
            innovation in finance.
          </p>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-md">
          <h2 className="text-2xl font-bold text-center mb-4">
            Stay informed and never miss an update
          </h2>
          <div className="flex gap-2 mt-8">
            <Input placeholder="Enter your email" type="email" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
