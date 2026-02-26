import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

const values = [
  {
    icon: "🎯",
    title: "Our Mission",
    description:
      "Our mission is to foster financial inclusion and transform the way transactions are conducted worldwide. We are dedicated to providing innovative and secure solutions that efficiently connect global communities with instant payment networks, thereby driving economic growth and enhancing lives everywhere.",
  },
  {
    icon: "🌍",
    title: "Our Role",
    description:
      "As a leading financial technology company, our role is to drive the instant payments revolution by providing the necessary infrastructure to efficiently connect global wallets with instant payment networks. We strive to be pioneers in creating innovative and secure solutions that promote financial inclusion and enhance the transaction experience for individuals and businesses worldwide.",
  },
  {
    icon: "💡",
    title: "Our Values",
    description:
      "Our values are rooted in constant innovation, unwavering integrity, and effective collaboration, all aimed towards excellence and empowerment both within our company and in society at large.",
  },
]

const stats = [
  { value: "1M+", label: "Connected merchants" },
  { value: "600M+", label: "Integrated payers" },
  { value: "50+", label: "Modular microservices and APIs" },
  { value: "10+", label: "Partners Worldwide" },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
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
      <section className="py-24 text-center min-h-[50vh] flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Who we are and why we're doing this
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid gap-8 md:grid-cols-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value) => (
              <motion.div key={value.title} variants={scaleIn}>
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <div className="text-4xl mb-2 transition-transform duration-300 hover:scale-110 inline-block">
                      {value.icon}
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid gap-8 md:grid-cols-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeInUp} className="text-center">
                <div className="text-4xl font-bold transition-transform duration-300 hover:scale-110 inline-block">
                  {stat.value}
                </div>
                <p className="mt-2 text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-muted/30">
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
            <Input placeholder="Enter your email" type="email" className="transition-all duration-200 focus:ring-2 focus:ring-primary/50" />
            <Button className="transition-all duration-200 hover:scale-105">Subscribe</Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
