import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

const posts = [
  {
    title: "The Future of Instant Payments",
    excerpt: "Discover how instant payment networks are transforming global finance and what it means for your business.",
    date: "January 15, 2026",
    category: "Insights",
  },
  {
    title: "Building Secure Payment Infrastructure",
    excerpt: "Best practices for implementing secure payment solutions that scale with your business needs.",
    date: "January 8, 2026",
    category: "Security",
  },
  {
    title: "Global Wallets: A New Era of Financial Inclusion",
    excerpt: "How modern payment infrastructure is connecting unbanked populations with global financial networks.",
    date: "December 20, 2025",
    category: "Technology",
  },
  {
    title: "API Integration Best Practices",
    excerpt: "Learn how to seamlessly integrate payment APIs into your platform for maximum efficiency and reliability.",
    date: "December 12, 2025",
    category: "Development",
  },
  {
    title: "The Rise of Cross-Border Payments",
    excerpt: "Exploring the challenges and solutions in modern cross-border payment processing.",
    date: "November 28, 2025",
    category: "Insights",
  },
  {
    title: "Fraud Prevention in Digital Payments",
    excerpt: "Advanced strategies to protect your payment infrastructure from fraudulent activities.",
    date: "November 15, 2025",
    category: "Security",
  },
  {
    title: "Merchant Onboarding Made Simple",
    excerpt: "Streamline your merchant onboarding process with modern payment infrastructure.",
    date: "November 5, 2025",
    category: "Business",
  },
  {
    title: "Real-Time Settlement: What You Need to Know",
    excerpt: "Understanding the benefits and implementation of real-time settlement systems.",
    date: "October 22, 2025",
    category: "Technology",
  },
  {
    title: "Scaling Payment Infrastructure for Growth",
    excerpt: "Strategies for building payment systems that scale with your business demands.",
    date: "October 10, 2025",
    category: "Architecture",
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
      staggerChildren: 0.08
    }
  }
}

export default function Blog() {
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
              Blog
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest insights on payments, technology, and financial infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {posts.map((post) => (
              <motion.div key={post.title} variants={fadeInUp}>
                <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                  <CardHeader>
                    <div className="text-sm text-muted-foreground mb-2">
                      {post.category} · {post.date}
                    </div>
                    <CardTitle className="line-clamp-2 transition-colors duration-200">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button variant="outline" className="w-full transition-all duration-200 hover:scale-[1.02]">Read More</Button>
                  </div>
                </Card>
              </motion.div>
            ))}
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
