import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function GetStarted() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Connect with our infrastructure
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's build great things together.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-lg">
          <Card>
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
                  <Input id="company" placeholder="Your company" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Work Email</Label>
                  <Input id="email" type="email" placeholder="you@company.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project">Project Description</Label>
                  <Textarea id="project" placeholder="Tell us about your project..." rows={5} />
                </div>
                <Button type="submit" className="w-full">
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24">
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
