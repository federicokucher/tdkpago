import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { useState } from "react"

type Particle = {
  id: number
  left: number
  delay: number
  duration: number
}

function FloatingParticles() {
  const [particles] = useState<Particle[]>(() => 
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: 20 + Math.random() * 60,
      delay: Math.random() * 8,
      duration: 4 + Math.random() * 4,
    }))
  )

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-primary/40 rounded-full"
          style={{
            left: `${particle.left}%`,
            bottom: '20%',
            animation: `shooting-star ${particle.duration}s linear infinite`,
            animationDelay: `${particle.delay}s`,
            boxShadow: '0 0 6px oklch(0.45 0.15 160 / 0.6), 0 0 12px oklch(0.45 0.15 160 / 0.3)',
          }}
        />
      ))}
    </div>
  )
}

const features = [
  {
    category: "Payments",
    items: [
      {
        title: "Instant Settlement",
        description: "Process transactions in milliseconds with our optimized payment routing",
        icon: "⚡",
        iconAlt: "Lightning bolt",
      },
      {
        title: "Global Coverage",
        description: "Connect to payment networks across LATAM and beyond",
        icon: "🌍",
        iconAlt: "Globe",
      },
      {
        title: "Multiple Currencies",
        description: "Support for multiple currencies with real-time exchange rates",
        icon: "💱",
        iconAlt: "Currency exchange",
      },
    ]
  },
  {
    category: "Developer Experience",
    items: [
      {
        title: "Developer First APIs",
        description: "RESTful APIs, webhooks, and SDKs in multiple languages",
        icon: "🛠️",
        iconAlt: "Tools",
      },
      {
        title: "Comprehensive Docs",
        description: "Detailed guides, code samples, and API references",
        icon: "📚",
        iconAlt: "Books",
      },
      {
        title: "Sandbox Environment",
        description: "Test integrations with zero cost before going live",
        icon: "🧪",
        iconAlt: "Test tube",
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
        iconAlt: "Lock",
      },
      {
        title: "99.999% Uptime",
        description: "Enterprise-grade infrastructure with automatic failover",
        icon: "📈",
        iconAlt: "Chart",
      },
      {
        title: "Real-time Analytics",
        description: "Monitor transactions, revenue, and metrics in real-time",
        icon: "📊",
        iconAlt: "Analytics chart",
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

const mainSponsor = "UnionPay"

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
      {/* 1. HERO - Premium, distinctive design */}
      <section className="relative py-32 lg:py-48 text-center min-h-[85vh] flex items-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 spotlight-glow" style={{ animationDelay: '0s' }} />
        
        {/* Floating particles */}
        <FloatingParticles />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Badge 
              variant="outline" 
              className="mb-8 text-sm px-5 py-2 border-primary/20 text-primary bg-primary/5 backdrop-blur-sm"
            >
              <span className="mr-2">✦</span>
              Backed by {mainSponsor}
            </Badge>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              <span className="text-gradient-animated">Payment infrastructure</span>
              <br />
              <span className="text-foreground/90">for global wallets.</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p 
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Connect global wallets to local instant payment networks. 
              Process millions of transactions with bank-grade security.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              asChild 
              className="glow-button text-base px-8 py-6 h-auto font-medium"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              <Link to="/get-started">
                Start building — it's free
                <span className="ml-2">→</span>
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="text-base px-8 py-6 h-auto font-medium"
            >
              <Link to="/contact">Talk to sales</Link>
            </Button>
          </motion.div>
          
          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              5 min integration
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Free sandbox
            </span>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS - Enhanced with better styling */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label} 
                variants={fadeInUp}
                className="text-center relative"
              >
                <div 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-animated mb-2"
                  style={{ fontFamily: 'var(--font-outfit)' }}
                >
                  {stat.value}
                </div>
                <p className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</p>
                {index < stats.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-border/50" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. FEATURES - Organizadas por categoría */}
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
                    <Card className="glass-card hover:bg-card/60 hover:border-primary/40 transition-all duration-500 h-full group hover:shadow-lg hover:shadow-primary/5">
                      <CardHeader>
                        <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">{feature.icon}</div>
                        <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
          </div>
        </section>
      ))}

      {/* 4. HOW IT WORKS */}
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
              <pre className="text-muted-foreground"><code className="language-bash">{`# Install the SDK
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

      {/* 5. CTA SECUNDARIO */}
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

      {/* 6. SPONSORS - Our main partner */}
      <section className="py-16 bg-muted/30 border-y">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm text-muted-foreground mb-4">Our main partner</p>
            <div className="text-3xl md:text-4xl font-bold text-gradient">
              {mainSponsor}
            </div>
            <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
              The world's largest payment network, enabling us to connect global wallets to local instant payment systems across 180+ countries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 7. NEWSLETTER */}
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
              placeholder="Enter your email…" 
              type="email" 
              autoComplete="email"
              aria-label="Email address"
              className="transition-all duration-200 focus:ring-2 focus:ring-primary/50"
            />
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Subscribe</Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
