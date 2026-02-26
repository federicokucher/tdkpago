import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
    title: "Flexible",
    description: "Custom solutions to fit your specific needs perfectly",
    icon: "🔧",
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

const sponsors = [
  "UnionPay",
  "TDK Labs",
  "GlobalPay",
  "SecureNet",
  "PayFast",
  "TechFinance",
]

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Payment infrastructure for global wallets.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A fast, secure, and scalable payment infrastructure to connect 
            global wallets with local instant payment networks.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/get-started">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/technology">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">New powerful infrastructure for solving challenges</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
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

      {/* Framework/Stats Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Cutting-edge solutions for global wallets</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Take control of your global wallet and stay ahead of local instant 
            payment network trends with our robust infrastructure.
          </p>
          <div className="grid gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <Badge variant="secondary" className="text-3xl font-bold py-3 px-6">
                  {stat.value}
                </Badge>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Build Great Things Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Build great things together</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Next-generation infrastructure for global wallets that aim to enable 
            their users to pay anytime and anywhere like a local.
          </p>
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

      {/* Sponsors Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">Meet our main sponsors</h2>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor}
                className="text-xl font-semibold text-muted-foreground px-8 py-4 border rounded-lg"
              >
                {sponsor}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24">
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
