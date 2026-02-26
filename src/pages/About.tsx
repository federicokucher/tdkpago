import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

const timeline = [
  {
    year: "2020",
    title: "Founded",
    description: "Tdkpago was founded with a vision to revolutionize global payments.",
  },
  {
    year: "2021",
    title: "First Partners",
    description: "Launched with 10 payment network integrations and first merchant partners.",
  },
  {
    year: "2022",
    title: "Global Expansion",
    description: "Expanded to 100+ countries and processed first 100M transactions.",
  },
  {
    year: "2023",
    title: "Series A",
    description: "Raised $50M in Series A funding to accelerate growth and product development.",
  },
  {
    year: "2024",
    title: "Market Leader",
    description: "Became the leading infrastructure for global wallet-to-bank payments.",
  },
  {
    year: "2025",
    title: "1M+ Merchants",
    description: "Empowered over 1 million merchants worldwide with instant payment capabilities.",
  },
]

const values = [
  {
    icon: "🎯",
    title: "Mission",
    description: "To democratize access to instant payments globally. We believe everyone deserves fast, secure, and affordable payment infrastructure — regardless of location or scale.",
  },
  {
    icon: "🌍",
    title: "Vision",
    description: "A world where money moves as instantly as information. Where any wallet, anywhere, can connect to any local payment network seamlessly.",
  },
  {
    icon: "💡",
    title: "Innovation",
    description: "We push boundaries. Our team constantly explores new technologies to make payments faster, cheaper, and more reliable.",
  },
  {
    icon: "🔒",
    title: "Trust",
    description: "Security isn't an afterthought — it's our foundation. We maintain bank-grade security standards and compliance certifications.",
  },
  {
    icon: "🤝",
    title: "Partnership",
    description: "We succeed when our partners succeed. We're committed to providing exceptional support and collaborative relationships.",
  },
  {
    icon: "📈",
    title: "Impact",
    description: "Every transaction we process enables economic growth. We measure success by the positive impact we create globally.",
  },
]

const stats = [
  { value: "1M+", label: "Merchants worldwide" },
  { value: "600M+", label: "End users served" },
  { value: "50+", label: "Microservices" },
  { value: "300+", label: "Payment networks" },
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

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 text-center min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 bg-gradient-radial" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4 text-sm px-3 py-1 border-primary/20 text-primary">
              About Tdkpago
            </Badge>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Building the future of <span className="text-gradient">global payments</span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're on a mission to make instant payments accessible to everyone, everywhere. 
              Founded in 2020, we've grown to empower over 1 million merchants worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our journey</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From a small team with a big vision to a global payment infrastructure leader
            </p>
          </motion.div>
          <div className="max-w-2xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 pb-8 last:pb-0"
              >
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="font-bold text-primary">{item.year}</span>
                </div>
                <div className="flex-shrink-0 w-3 h-3 rounded-full bg-primary mt-1.5" />
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">What drives us</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our values define who we are and how we work
            </p>
          </motion.div>
          <motion.div 
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value) => (
              <motion.div key={value.title} variants={scaleIn}>
                <Card className="border-border/50 bg-card/50 backdrop-blur hover:bg-card/80 hover:border-primary/30 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="text-3xl mb-2">{value.icon}</div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">Join our team</h2>
            <p className="text-muted-foreground mb-6">
              We're always looking for talented people to help us build the future of payments.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/contact">Get in touch</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/careers">View careers</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-md text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-bold mb-3">Stay updated</h2>
            <p className="text-muted-foreground mb-6">
              Get news about our company and product updates.
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
