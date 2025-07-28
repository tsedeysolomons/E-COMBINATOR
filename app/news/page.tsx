"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import Link from "next/link"
import { AuthButtons } from "@/components/auth-buttons"
import { MobileNav } from "@/components/mobile-nav"
import { usePathname } from "next/navigation"

export default function NewsPage() {
  const pathname = usePathname()
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="E-Combinator Logo" className="h-10 w-auto" />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-brand-blue-deep transition-colors">
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-foreground hover:text-brand-blue-deep transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/programs"
              className="text-sm font-medium text-foreground hover:text-brand-blue-deep transition-colors"
            >
              Programs
            </Link>
            <Link
              href="/news"
              className={`text-sm font-medium ${pathname === "/news" ? "text-brand-blue-deep border-b-2 border-brand-blue-deep" : "text-foreground hover:text-brand-blue-deep transition-colors"}`}
            >
              News and Updates
            </Link>
            <Link
              href="/help"
              className="text-sm font-medium text-foreground hover:text-brand-blue-deep transition-colors"
            >
              Help
            </Link>
            <Link
              href="/admin/dashboard"
              className={`text-sm font-medium ${pathname === "/admin/dashboard" ? "text-brand-blue-deep border-b-2 border-brand-blue-deep" : "text-foreground hover:text-brand-blue-deep transition-colors"}`}
            >
              Admin Dashboard
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-foreground hover:text-brand-blue-deep transition-colors"
            >
              Contact
            </Link>
          </nav>

          <AuthButtons currentPage="other" />
          <MobileNav />
        </div>
      </header>

      {/* News Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-brand-blue-sky/10 via-background to-brand-orange/10">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            {/* Removed: <Badge className="mb-6 bg-brand-blue-sky/20 text-brand-blue-deep hover:bg-brand-blue-sky/30">
              📰 Latest Updates
            </Badge> */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              News and{" "}
              <span className="bg-gradient-to-r from-brand-blue-deep to-brand-navy-bg bg-clip-text text-transparent">
                Updates
              </span>
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Stay informed about the latest developments in the Ethiopian startup ecosystem, E-Combinator initiatives,
              and iCog Labs advancements.
            </p>
          </div>
        </div>
      </section>

      {/* News Articles Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Article 1 */}
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card">
              <div className="grid md:grid-cols-3 gap-0">
                <div className="md:col-span-2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge className="bg-brand-blue-sky/20 text-brand-blue-deep">Announcement</Badge>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      March 15, 2024
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    E-Combinator Announces New Cohort of Startups
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    E-Combinator has selected ten promising Ethiopian startups for its latest acceleration program.
                    These startups represent a diverse range of industries, including agriculture, healthcare, and
                    education, showcasing the innovative spirit of Ethiopian entrepreneurs.
                  </p>
                  <Button className="bg-gradient-to-r from-brand-blue-deep to-brand-navy-bg hover:from-brand-blue-deep/90 hover:to-brand-navy-bg/90">
                    Read More
                  </Button>
                </div>
                <div className="md:col-span-1">
                  <div className="h-full min-h-[300px] bg-gradient-to-br from-brand-blue-sky/20 to-brand-navy-bg/20 flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=300&width=400"
                      alt="Person working at desk"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* Article 2 */}
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card">
              <div className="grid md:grid-cols-3 gap-0">
                <div className="md:col-span-2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge className="bg-brand-blue-sky/20 text-brand-blue-deep">Research</Badge>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      March 10, 2024
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">iCog Labs Launches AI Research Initiative</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    iCog Labs has announced a new research initiative focused on developing AI solutions for local
                    challenges in Ethiopia. The initiative will collaborate with universities and industry partners to
                    advance artificial intelligence research and applications.
                  </p>
                  <Button className="bg-gradient-to-r from-brand-blue-sky to-brand-blue-deep hover:from-brand-blue-sky/90 hover:to-brand-blue-deep/90">
                    Read More
                  </Button>
                </div>
                <div className="md:col-span-1">
                  <div className="h-full min-h-[300px] bg-gradient-to-br from-brand-blue-sky/20 to-brand-blue-deep/20 flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=300&width=400"
                      alt="Person thinking and working"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* Article 3 */}
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card">
              <div className="grid md:grid-cols-3 gap-0">
                <div className="md:col-span-2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge className="bg-brand-navy-bg/20 text-brand-navy-bg">Event</Badge>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      March 5, 2024
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    E-Combinator Hosts Networking Event for Startups
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    E-Combinator recently hosted a networking event in Addis Ababa, bringing together startups,
                    investors, and mentors. The event facilitated connections and collaborations within the Ethiopian
                    startup ecosystem, fostering innovation and growth.
                  </p>
                  <Button className="bg-gradient-to-r from-brand-navy-bg to-brand-orange hover:from-brand-navy-bg/90 hover:to-brand-orange/90">
                    Read More
                  </Button>
                </div>
                <div className="md:col-span-1">
                  <div className="h-full min-h-[300px] bg-gradient-to-br from-brand-navy-bg/20 to-brand-orange/20 flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=300&width=400"
                      alt="Networking event with people"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* Article 4 */}
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card">
              <div className="grid md:grid-cols-3 gap-0">
                <div className="md:col-span-2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge className="bg-brand-orange/20 text-brand-orange">Award</Badge>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      February 28, 2024
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Ethiopian Startup Wins Regional Innovation Award
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    An Ethiopian startup supported by E-Combinator has won a prestigious regional innovation award for
                    its groundbreaking solution in the agricultural sector. The award recognizes the startup's impact
                    and potential for transforming agriculture in East Africa.
                  </p>
                  <Button className="bg-gradient-to-r from-brand-orange to-primary hover:from-brand-orange/90 hover:to-primary/90">
                    Read More
                  </Button>
                </div>
                <div className="md:col-span-1">
                  <div className="h-full min-h-[300px] bg-gradient-to-br from-brand-orange/20 to-primary/20 flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=300&width=400"
                      alt="Group of people celebrating"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center space-x-2 mt-16">
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button className="bg-brand-blue-deep text-primary-foreground hover:bg-brand-blue-deep/90 w-10 h-10">
              1
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-brand-blue-deep w-10 h-10">
              2
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-brand-blue-deep w-10 h-10">
              3
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-brand-blue-deep">
              Next
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-brand-blue-deep">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-brand-blue-deep to-brand-navy-bg">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center text-primary-foreground">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">Stay Updated</h2>
            <p className="text-xl mb-8 opacity-90">
              Subscribe to our newsletter to receive the latest news, updates, and insights from the Ethiopian startup
              ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground"
              />
              <Button
                size="lg"
                className="bg-primary-foreground text-brand-blue-deep hover:bg-muted px-8 py-3 rounded-xl"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark-navy text-primary-foreground py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            {/* Company Info */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <img src="/logo.png" alt="E-Combinator Logo" className="h-10 w-auto" />
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Empowering the next generation of entrepreneurs with the tools, network, and guidance needed to build
                successful companies.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-primary-foreground hover:bg-secondary"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-primary-foreground hover:bg-secondary"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-primary-foreground hover:bg-secondary"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-primary-foreground hover:bg-secondary"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/programs"
                    className="text-muted-foreground hover:text-primary-foreground transition-colors"
                  >
                    Programs
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                    News and Updates
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/help" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-muted-foreground hover:text-primary-foreground transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">hello@e-combinator.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-muted-foreground">© {new Date().getFullYear()} E-Combinator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
