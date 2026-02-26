import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

const techFeatures = [
  {
    title: "Microservices Architecture",
    description: "50+ independent microservices handling payments, fraud detection, reconciliation, and more. Each service scales independently based on demand.",
    icon: "🏗️",
  },
  {
    title: "Multi-Region Deployment",
    description: "Deployed across 8 regions worldwide with automatic failover. 99.999% uptime SLA ensures your payments never stop.",
    icon: "🌍",
  },
  {
    title: "Real-time Processing",
    description: "Sub-100ms latency for payment processing. Optimized routing algorithms find the fastest path to local payment networks.",
    icon: "⚡",
  },
  {
    title: "Bank-Grade Security",
    description: "PCI-DSS Level 1 certified. End-to-end encryption, tokenization, and real-time fraud detection powered by ML.",
    icon: "🔒",
  },
  {
    title: "Smart Routing",
    description: "AI-powered routing automatically selects the best payment network based on success rate, cost, and settlement time.",
    icon: "🧠",
  },
  {
    title: "Instant Settlement",
    description: "Real-time settlement to local banks. No waiting days for funds — get your money the same day.",
    icon: "💎",
  },
]

const integrations = [
  { name: "REST API", description: "Modern RESTful API with OpenAPI spec" },
  { name: "Webhooks", description: "Real-time event notifications" },
  { name: "SDKs", description: "Official libraries for 10+ languages" },
  { name: "Plugins", description: "WooCommerce, Shopify, Magento and more" },
  { name: "GraphQL", description: "GraphQL API for flexible queries" },
  { name: "Bulk API", description: "Process thousands of payments at once" },
]

const protocols = [
  { name: "ISO 20022", description: "Global payment messaging standard" },
  { name: "ISO 27001", description: "Information security management" },
  { name: "PCI-DSS", description: "Payment card industry compliance" },
  { name: "SOC 2 Type II", description: "Security and availability" },
  { name: "GDPR", description: "Data protection compliance" },
  { name: "AML/KYC", description: "Anti-money laundering compliance" },
]

const stats = [
  { value: "<100ms", label: "Average latency" },
  { value: "99.999%", label: "Uptime SLA" },
  { value: "300+", label: "Payment networks" },
  { value: "180+", label: "Countries supported" },
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

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
}

export default function Technology() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 text-center min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 bg-gradient-radial" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4 text-sm px-3 py-1 border-primary/20 text-primary">
              Technology
            </Badge>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Built for the future of <span className="text-gradient">payments</span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade infrastructure designed for scale. 
              Process millions of transactions with bank-grade security and real-time settlement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted/30 border-y">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeInUp} className="text-center">
                <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Enterprise architecture</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The same infrastructure that powers millions of transactions daily
            </p>
          </motion.div>
          <motion.div 
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {techFeatures.map((feature) => (
              <motion.div key={feature.title} variants={scaleIn}>
                <Card className="border-border/50 bg-card/50 backdrop-blur hover:bg-card/80 hover:border-primary/30 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="text-3xl mb-2">{feature.icon}</div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Developer-first integration</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Integrate in minutes with our comprehensive APIs and SDKs
            </p>
          </motion.div>
          <motion.div 
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {integrations.map((item) => (
              <motion.div key={item.name} variants={fadeInUp}>
                <Card className="border-border/50 hover:border-primary/30 transition-colors">
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Compliance & Security</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Bank-grade security and compliance standards
            </p>
          </motion.div>
          <motion.div 
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {protocols.map((item) => (
              <motion.div key={item.name} variants={scaleIn}>
                <Card className="border-border/50 bg-card/50 backdrop-blur">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Badge variant="outline" className="text-primary border-primary/30">✓</Badge>
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">Ready to integrate?</h2>
            <p className="text-muted-foreground mb-6">
              Get your API keys and start building in minutes.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/get-started">Get API Keys</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-md text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-bold mb-3">Stay updated</h2>
            <p className="text-muted-foreground mb-6">
              Get the latest on APIs and features.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Enter your email" type="email" className="transition-all duration-200 focus:ring-2 focus:ring-primary/50" />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Subscribe</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
