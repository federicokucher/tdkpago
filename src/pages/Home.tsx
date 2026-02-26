import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

const features = [
  {
    title: "Instant Settlement",
    description: "Process transactions in milliseconds with our optimized payment routing",
    icon: "⚡",
  },
  {
    title: "Bank-Grade Security",
    description: "PCI-DSS compliant with end-to-end encryption and real-time fraud detection",
    icon: "🔒",
  },
  {
    title: "Global Coverage",
    description: "Connect to 300+ payment networks across 180+ countries",
    icon: "🌍",
  },
  {
    title: "99.999% Uptime",
    description: "Enterprise-grade infrastructure with automatic failover",
    icon: "📈",
  },
  {
    title: "Developer First",
    description: "RESTful APIs, webhooks, and SDKs in 10+ languages",
    icon: "🛠️",
  },
  {
    title: "Real-time Analytics",
    description: "Monitor transactions, revenue, and metrics in real-time dashboard",
    icon: "📊",
  },
]

const stats = [
  { value: "1M+", label: "Connected merchants" },
  { value: "50+", label: "Modular microservices" },
  { value: "600M", label: "Integrated payers" },
  { value: "99.999%", label: "Uptime SLA" },
]

const sponsors = [
  "UnionPay",
  "TDK Labs",
  "GlobalPay",
  "SecureNet",
  "PayFast",
  "TechFinance",
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

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Grid Background */}
      <section className="relative py-32 text-center min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 bg-gradient-radial" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-6 text-sm px-4 py-1.5 border-primary/20 text-primary">
              Trusted by 1M+ merchants worldwide
            </Badge>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl mb-6">
              <span className="text-gradient">Payment infrastructure</span>
              <br />
              for global wallets.
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Connect global wallets to local instant payment networks. 
              Process millions of transactions with bank-grade security, 
              99.999% uptime, and real-time settlement.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-4 justify-center"
          >
            <Button size="lg" asChild className="transition-all duration-200 hover:scale-105 glow-green-hover bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/get-started">Start building</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="transition-all duration-200 hover:scale-105">
              <Link to="/contact">Request demo</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Bento Grid Style */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Everything you need to process payments
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Built for scale. Designed for developers. Ready for global expansion.
            </p>
          </motion.div>
          <motion.div 
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature) => (
              <motion.div key={feature.title} variants={scaleIn}>
                <Card className="border-border/50 bg-card/50 backdrop-blur hover:bg-card/80 hover:border-primary/30 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="text-4xl mb-3 transition-transform duration-300 hover:scale-110 inline-block">
                      {feature.icon}
                    </div>
                    <CardTitle className="transition-colors duration-200">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-muted/30 relative">
        <div className="absolute inset-0 bg-grid" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Built for scale</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Powering payments for the world's fastest-growing companies
            </p>
          </motion.div>
          <motion.div 
            className="grid gap-6 md:grid-cols-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeInUp} className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
              Start integrating in minutes. No credit card required for testing.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild className="glow-green-hover bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/get-started">Start building</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Talk to sales</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 bg-muted/30 border-t">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-center text-sm text-muted-foreground mb-8">
              Trusted by innovative companies worldwide
            </p>
          </motion.div>
          <motion.div 
            className="flex flex-wrap justify-center gap-8 items-center opacity-60"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {sponsors.map((sponsor) => (
              <motion.div
                key={sponsor}
                variants={scaleIn}
                className="text-lg font-semibold text-muted-foreground px-6 py-3"
              >
                {sponsor}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-md text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">
              Stay in the loop
            </h2>
            <p className="text-muted-foreground mb-8">
              Get the latest updates on payments, APIs, and product launches.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-2"
          >
            <Input 
              placeholder="Enter your email" 
              type="email" 
              className="transition-all duration-200 focus:ring-2 focus:ring-primary/50"
            />
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Subscribe</Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
