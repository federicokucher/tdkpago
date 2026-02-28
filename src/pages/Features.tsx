import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const featuresByCategory = [
  {
    category: "Core Payments",
    description: "Everything you need to process payments globally",
    items: [
      {
        title: "Instant Settlement",
        description: "Process transactions in milliseconds with our optimized payment routing. Funds available immediately, not days.",
        icon: "⚡",
        details: ["Sub-100ms processing", "Real-time confirmation", "Instant fund availability"]
      },
      {
        title: "Global Coverage",
        description: "Connect to 300+ payment networks across 180+ countries. One integration for every market.",
        icon: "🌍",
        details: ["180+ countries", "300+ payment networks", "Local payment methods"]
      },
      {
        title: "Multi-Currency Support",
        description: "Handle 135+ currencies with real-time exchange rates. Automatic currency conversion and hedging.",
        icon: "💱",
        details: ["135+ currencies", "Real-time rates", "FX hedging available"]
      },
      {
        title: "Smart Routing",
        description: "AI-powered routing that automatically selects the best path for each transaction based on success rate and cost.",
        icon: "🧠",
        details: ["99.9% success rate", "Cost optimization", "Failure prevention"]
      },
    ]
  },
  {
    category: "Developer Experience",
    description: "Built for developers who want to move fast",
    items: [
      {
        title: "Developer-First APIs",
        description: "RESTful APIs, webhooks, and SDKs in 10+ languages. Documentation that actually helps.",
        icon: "🛠️",
        details: ["10+ SDKs", "", "OpenREST & GraphQLAPI spec"]
      },
      {
        title: "Sandbox Environment",
        description: "Test integrations with zero cost before going live. Full parity with production.",
        icon: "🧪",
        details: ["Free testing", "Full parity", "Test cards included"]
      },
      {
        title: "Comprehensive Documentation",
        description: "Detailed guides, code samples, API references, and tutorials. From quickstart to advanced.",
        icon: "📚",
        details: ["Step-by-step guides", "Code samples", "Video tutorials"]
      },
      {
        title: "Webhooks & Events",
        description: "Real-time notifications for every event. Build reactive integrations easily.",
        icon: "🔔",
        details: ["Real-time events", "Retry logic", "Event replay"]
      },
    ]
  },
  {
    category: "Security & Compliance",
    description: "Bank-grade security for every transaction",
    items: [
      {
        title: "PCI-DSS Compliant",
        description: "Full PCI-DSS Level 1 compliance. We handle the sensitive data so you don't have to.",
        icon: "🔒",
        details: ["Level 1 certified", "End-to-end encryption", "Tokenization"]
      },
      {
        title: "Fraud Detection",
        description: "ML-powered fraud detection that adapts to new threats in real-time.",
        icon: "🛡️",
        details: ["Real-time analysis", "Custom rules", "3D Secure 2"]
      },
      {
        title: "99.999% Uptime",
        description: "Enterprise-grade infrastructure with automatic failover. Your payments never stop.",
        icon: "📈",
        details: ["SLA guarantee", "Multi-region", "Auto failover"]
      },
      {
        title: "AML/KYC Compliance",
        description: "Built-in compliance tools for anti-money laundering and know your customer requirements.",
        icon: "⚖️",
        details: ["Screening lists", "Verification APIs", "Audit logs"]
      },
    ]
  },
  {
    category: "Analytics & Reporting",
    description: "Full visibility into your payment operations",
    items: [
      {
        title: "Real-Time Dashboard",
        description: "Monitor transactions, revenue, and metrics in real-time. Know what's happening now.",
        icon: "📊",
        details: ["Live metrics", "Custom widgets", "Alerting"]
      },
      {
        title: "Advanced Reporting",
        description: "Generate detailed reports on revenue, refunds, disputes, and more. Export to CSV or PDF.",
        icon: "📋",
        details: ["Custom reports", "Scheduled delivery", "Multiple formats"]
      },
      {
        title: "Revenue Recovery",
        description: "Automatically identify and recover failed payments. Reduce churn and maximize revenue.",
        icon: "💰",
        details: ["Smart retries", "Dunning management", "Card updates"]
      },
      {
        title: "Dispute Management",
        description: "Built-in tools to manage chargebacks and disputes. Win more cases with evidence.",
        icon: "⚠️",
        details: ["Evidence gathering", "Automated responses", "Win tracking"]
      },
    ]
  },
]

const useCases = [
  {
    title: "Marketplaces",
    description: "Split payments between sellers and platforms automatically",
    icon: "🏪",
  },
  {
    title: "SaaS Subscriptions",
    description: "Handle recurring billing with automatic retries and upgrades",
    icon: "☁️",
  },
  {
    title: "E-commerce",
    description: "Accept payments globally with optimized checkout flows",
    icon: "🛒",
  },
  {
    title: "Platforms",
    description: "Onboard users and handle payments on their behalf",
    icon: "🏢",
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Features() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 bg-gradient-radial" />
        {/* Laser beam effects */}
        <div className="beam-glow -top-32 -left-32" style={{ animationDelay: '0s' }} />
        <div className="beam-glow -top-32 -left-32" style={{ animationDelay: '2s' }} />
        <div className="spotlight-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-6 text-sm px-4 py-1.5 border-primary/20 text-primary">
              Features
            </Badge>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Payment features for
              <br />
              <span className="text-gradient">every business</span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              From instant settlements to fraud detection, everything you need to process payments globally at scale.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" asChild className="glow-green-hover bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/get-started">Start building — it's free</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Talk to sales</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Quick Links */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl font-bold mb-4">Built for every use case</h2>
            <p className="text-muted-foreground">Whether you're a startup or enterprise, we have you covered</p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {useCases.map((useCase) => (
              <motion.div key={useCase.title} variants={fadeInUp}>
                <Card className="border-border/50 bg-card/50 backdrop-blur hover:bg-card/80 hover:border-primary/30 transition-all duration-300 h-full text-center">
                  <CardContent className="pt-6">
                    <div className="text-4xl mb-3">{useCase.icon}</div>
                    <h3 className="font-semibold mb-2">{useCase.title}</h3>
                    <p className="text-sm text-muted-foreground">{useCase.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features by Category */}
      {featuresByCategory.map((category, categoryIndex) => (
        <section key={category.category} className={`py-20 ${categoryIndex % 2 === 1 ? 'bg-muted/30' : ''}`}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <Badge variant="secondary" className="mb-3">{category.category}</Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{category.category}</h2>
              <p className="text-muted-foreground">{category.description}</p>
            </motion.div>
            <motion.div 
              className="grid gap-6 md:grid-cols-2"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {category.items.map((feature) => (
                <motion.div key={feature.title} variants={fadeInUp}>
                  <Card className="border-border/50 bg-card/50 backdrop-blur hover:bg-card/80 hover:border-primary/30 transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">{feature.icon}</div>
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-1">{feature.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {feature.details.map((detail) => (
                          <Badge key={detail} variant="outline" className="text-xs">
                            {detail}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Start integrating for free. No credit card required. 5 minute setup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="glow-green-hover bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/get-started">Start building — it's free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Request a demo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
