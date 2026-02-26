import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

const features = [
  {
    category: "Payments",
    items: [
      {
        title: "Instant Settlement",
        description: "Process transactions in milliseconds with our optimized payment routing",
        icon: "⚡",
      },
      {
        title: "Global Coverage",
        description: "Connect to 300+ payment networks across 180+ countries",
        icon: "🌍",
      },
      {
        title: "Multiple Currencies",
        description: "Support for 135+ currencies with real-time exchange rates",
        icon: "💱",
      },
    ]
  },
  {
    category: "Developer Experience",
    items: [
      {
        title: "Developer First APIs",
        description: "RESTful APIs, webhooks, and SDKs in 10+ languages",
        icon: "🛠️",
      },
      {
        title: "Comprehensive Docs",
        description: "Detailed guides, code samples, and API references",
        icon: "📚",
      },
      {
        title: "Sandbox Environment",
        description: "Test integrations with zero cost before going live",
        icon: "🧪",
      },
    ]
  },
  {
    category: "Security & Compliance",
    items: [
      {
        title: "Bank-Grade Security",
        description: "PCI-DSS compliant with end-to-end encryption and fraud detection",
        icon: "🔒",
      },
      {
        title: "99.999% Uptime",
        description: "Enterprise-grade infrastructure with automatic failover",
        icon: "📈",
      },
      {
        title: "Real-time Analytics",
        description: "Monitor transactions, revenue, and metrics in real-time",
        icon: "📊",
      },
    ]
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
      {/* Hero Section */}
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
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
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
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Connect global wallets to local instant payment networks. 
              Process millions of transactions with bank-grade security.
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground"
          >
            <span>No credit card required</span>
            <span>•</span>
            <span>5 min integration</span>
            <span>•</span>
            <span>Free sandbox</span>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30 border-y">
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
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section - Organized by Category */}
      {features.map((category, categoryIndex) => (
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
              <h2 className="text-2xl font-bold">Everything you need</h2>
            </motion.div>
            <motion.div 
              className="grid gap-6 md:grid-cols-3"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {category.items.map((feature) => (
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
      ))}

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Integrate in minutes</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Get started with just a few lines of code
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-muted/50 rounded-lg p-6 font-mono text-sm overflow-x-auto">
              <pre className="text-muted-foreground"><code>{`# Install the SDK
npm install @tdkpago/sdk

# Initialize
import { Tdkpago } from '@tdkpago/sdk'

const client = new Tdkpago({
  apiKey: process.env.TDKPAGO_KEY
})

# Process a payment
const payment = await client.payments.create({
  amount: 1000,
  currency: 'USD',
  destination: 'wallet_id',
  instant: true
})`}</code></pre>
            </div>
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
              Start integrating for free. No credit card required.
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

      {/* Sponsors Section */}
      <section className="py-12 bg-muted/30 border-t">
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
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-md text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-3">Stay in the loop</h2>
            <p className="text-muted-foreground mb-6">
              Get updates on payments, APIs, and product launches.
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
