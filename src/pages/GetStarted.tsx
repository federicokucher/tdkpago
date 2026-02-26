import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"

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

export default function GetStarted() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 text-center min-h-[40vh] flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Connect with our infrastructure
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's build great things together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-lg">
          <motion.div
            variants={scaleIn}
            initial="initial"
            animate="animate"
          >
            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle>Get Started</CardTitle>
                <CardDescription>
                  Tell us about your project and we'll help you get started.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Your company" className="transition-all duration-200 focus:ring-2 focus:ring-primary/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email</Label>
                    <Input id="email" type="email" placeholder="you@company.com" className="transition-all duration-200 focus:ring-2 focus:ring-primary/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="project">Project Description</Label>
                    <Textarea id="project" placeholder="Tell us about your project..." rows={5} className="transition-all duration-200 focus:ring-2 focus:ring-primary/50" />
                  </div>
                  <Button type="submit" className="w-full transition-all duration-200 hover:scale-[1.02]">
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
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
            <Input placeholder="Enter your email" type="email" className="transition-all duration-200 focus:ring-2 focus:ring-primary/50" />
            <Button className="transition-all duration-200 hover:scale-105">Subscribe</Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
