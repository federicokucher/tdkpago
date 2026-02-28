import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/hooks/useTheme"
import { motion, AnimatePresence } from "framer-motion"

type NavItem = {
  label: string
  href: string
  description: string
  external?: boolean
}

const productItems: NavItem[] = [
  { label: "Features", href: "/features", description: "Everything you need to process payments" },
  { label: "Technology", href: "/technology", description: "Enterprise-grade infrastructure" },
  { label: "Pricing", href: "/pricing", description: "Simple, transparent pricing" },
  { label: "API Reference", href: "/docs", description: "Comprehensive documentation" },
  { label: "Status", href: "/status", description: "System uptime and health" },
]

const companyItems: NavItem[] = [
  { label: "About", href: "/about", description: "Learn about our mission" },
  { label: "Careers", href: "/careers", description: "Join our team" },
  { label: "Contact", href: "/contact", description: "Get in touch" },
  { label: "Team", href: "/team", description: "Meet the people behind Tdkpago" },
]

const resourcesItems: NavItem[] = [
  { label: "Documentation", href: "/docs", description: "Guides and API reference" },
  { label: "Blog", href: "/blog", description: "Latest updates and insights" },
  { label: "Community", href: "/community", description: "Join the conversation" },
  { label: "Help Center", href: "/help", description: "FAQs and support" },
  { label: "Discord", href: "https://discord.gg/tdkpago", description: "Chat with us", external: true },
]

function NavLink({ item }: { item: NavItem }) {
  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col gap-1 rounded-md p-3 hover:bg-muted transition-colors"
      >
        <span className="font-medium flex items-center gap-2">
          {item.label}
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </span>
        <span className="text-sm text-muted-foreground">{item.description}</span>
      </a>
    )
  }
  return (
    <Link
      to={item.href}
      className="flex flex-col gap-1 rounded-md p-3 hover:bg-muted transition-colors"
    >
      <span className="font-medium">{item.label}</span>
      <span className="text-sm text-muted-foreground">{item.description}</span>
    </Link>
  )
}

export function Header() {
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">Tdkpago</span>
          </Link>
          <span className="hidden sm:inline-block text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
            Powered by UnionPay
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Product Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                  Product
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4 grid gap-3">
                    {productItems.map((item) => (
                      <NavLink key={item.href} item={item} />
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Company Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4 grid gap-3">
                    {companyItems.map((item) => (
                      <NavLink key={item.href} item={item} />
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Resources Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4 grid gap-3">
                    {resourcesItems.map((item) => (
                      <NavLink key={item.href} item={item} />
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Blog - No dropdown */}
              <NavigationMenuItem>
                <Link to="/blog">
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    active={location.pathname === "/blog"}
                  >
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side - Theme + CTAs */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="cursor-pointer"
          >
            {theme === "light" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            )}
          </Button>
          
          <Button variant="ghost" size="sm" className="hidden lg:flex text-muted-foreground">
            Log in
          </Button>
          
          <Button asChild className="hidden sm:flex">
            <Link to="/get-started">Get Started</Link>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </>
              )}
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t bg-background"
          >
            <div className="container px-4 py-6 space-y-4">
              {/* Product */}
              <div>
                <h4 className="font-medium text-sm text-muted-foreground mb-2">Product</h4>
                <div className="space-y-2">
                  {productItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-medium text-sm text-muted-foreground mb-2">Company</h4>
                <div className="space-y-2">
                  {companyItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-medium text-sm text-muted-foreground mb-2">Resources</h4>
                <div className="space-y-2">
                  {resourcesItems.map((item) => (
                    item.external ? (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 hover:text-primary transition-colors"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 hover:text-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    )
                  ))}
                </div>
              </div>

              {/* Blog */}
              <Link
                to="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 hover:text-primary transition-colors"
              >
                Blog
              </Link>

              <div className="pt-4 border-t space-y-2">
                <Button variant="outline" className="w-full">
                  Log in
                </Button>
                <Button asChild className="w-full">
                  <Link to="/get-started" onClick={() => setMobileMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
