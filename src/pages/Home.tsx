import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

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
      <section className="py-24 text-center min-h-[70vh] flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Payment infrastructure for global wallets.
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              A fast, secure, and scalable payment infrastructure to connect 
              global wallets with local instant payment networks.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4 justify-center"
          >
            <Button size="lg" asChild className="transition-all duration-200 hover:scale-105">
              <Link to="/get-started">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="transition-all duration-200 hover:scale-105">
              <Link to="/technology">Learn More</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-4">New powerful infrastructure for solving challenges</h2>
          </motion.div>
          <motion.div 
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature) => (
              <motion.div key={feature.title} variants={scaleIn}>
                <Card className="border-none shadow-none bg-transparent hover:bg-background/50 transition-colors duration-300 p-6">
                  <CardHeader>
                    <div className="text-4xl mb-2 transition-transform duration-300 hover:scale-110 inline-block">
                      {feature.icon}
                    </div>
                    <CardTitle className="transition-colors duration-200">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Framework/Stats Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-4">Cutting-edge solutions for global wallets</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              Take control of your global wallet and stay ahead of local instant 
              payment network trends with our robust infrastructure.
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
                <Badge variant="secondary" className="text-3xl font-bold py-3 px-6 transition-transform duration-300 hover:scale-110 inline-block">
                  {stat.value}
                </Badge>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Build Great Things Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Build great things together</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Next-generation infrastructure for global wallets that aim to enable 
              their users to pay anytime and anywhere like a local.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Developers Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Built by developers, for developers</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform, made by developers for developers, offers cutting-edge 
              solutions for instant payments and global wallets, empowering 
              innovation in finance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-center mb-12">Meet our main sponsors</h2>
          </motion.div>
          <motion.div 
            className="flex flex-wrap justify-center gap-8 items-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {sponsors.map((sponsor) => (
              <motion.div
                key={sponsor}
                variants={scaleIn}
                className="text-xl font-semibold text-muted-foreground px-8 py-4 border rounded-lg transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary cursor-default"
              >
                {sponsor}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-center mb-4">
              Stay informed and never miss an update
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-2 mt-8"
          >
            <Input 
              placeholder="Enter your email" 
              type="email" 
              className="transition-all duration-200 focus:ring-2 focus:ring-primary/50"
            />
            <Button className="transition-all duration-200 hover:scale-105">Subscribe</Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
