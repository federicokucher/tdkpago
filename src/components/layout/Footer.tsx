import { Link } from "react-router-dom"
import { Separator } from "@/components/ui/separator"

const resources = [
  { label: "Home", href: "/" },
  { label: "Technology", href: "/technology" },
  { label: "Blog", href: "/blog" },
]

const company = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <span className="text-xl font-bold">Tdkpago</span>
            <p className="mt-4 text-sm text-muted-foreground max-w-md">
              A fast, secure, and scalable payment infrastructure to connect 
              global wallets with local instant payment networks.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          <p>© 2026 Tdkpago. All rights reserved. Powered by TDK Labs</p>
        </div>
      </div>
    </footer>
  )
}
