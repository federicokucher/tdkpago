import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

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

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Who we are and why we're doing this
          </h1>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title}>
                <CardHeader>
                  <div className="text-4xl mb-2">{value.icon}</div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold">{stat.value}</div>
                <p className="mt-2 text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-md">
          <h2 className="text-2xl font-bold text-center mb-4">
            Stay informed and never miss an update
          </h2>
          <div className="flex gap-2 mt-8">
            <Input placeholder="Enter your email" type="email" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
