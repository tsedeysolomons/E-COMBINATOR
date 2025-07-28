"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function MobileNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/programs", label: "Programs" },
    { href: "/news", label: "News and Updates" },
    { href: "/contact", label: "Contact" },
    { href: "/help", label: "Help" },
    { href: "/admin/dashboard", label: "Admin Dashboard" },
    { href: "/auth/signup", label: "Sign Up" },
    { href: "/auth/signin", label: "Sign In" },
    { href: "/apply", label: "Get Started" },
  ]

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col gap-6 p-4">
          <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
            <img src="/logo.png" alt="E-Combinator Logo" className="h-10 w-auto" />
          </Link>
          <nav className="grid gap-4 text-lg font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2 text-foreground hover:text-brand-blue-deep transition-colors ${pathname === link.href ? "text-brand-blue-deep font-semibold" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}
