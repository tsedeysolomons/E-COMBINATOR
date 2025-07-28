"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Target,
  DollarSign,
  Users,
  Rocket,
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

export default function AboutPage() {
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
              className={`text-sm font-medium ${pathname === "/about" ? "text-brand-blue-deep border-b-2 border-brand-blue-deep" : "text-foreground hover:text-brand-blue-deep transition-colors"}`}
            >
              About Us
            </Link>
            <Link
              href="#programs"
              className="text-sm font-medium text-foreground hover:text-brand-blue-deep transition-colors"
            >
              Programs
            </Link>
            <Link
              href="#news"
              className="text-sm font-medium text-foreground hover:text-brand-blue-deep transition-colors"
            >
              News and Updates
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-foreground hover:text-brand-blue-deep transition-colors"
            >
              Contact
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
          </nav>

          <AuthButtons currentPage="other" />
          <MobileNav />
        </div>
      </header>

      {/* About Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-brand-blue-sky/10 via-background to-brand-orange/10">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            {/* Removed: <Badge className="mb-6 bg-brand-blue-sky/20 text-brand-blue-deep hover:bg-brand-blue-sky/30">
              🌟 About E-Combinator
            </Badge> */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              About{" "}
              <span className="bg-gradient-to-r from-brand-blue-deep to-brand-orange bg-clip-text text-transparent">
                E-Combinator
              </span>
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Empowering the next generation of entrepreneurs with cutting-edge technology, strategic mentorship, and
              access to a global network of investors and industry leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-brand-orange to-primary bg-clip-text text-transparent">
                Leadership Team
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Meet the visionary leaders driving innovation and growth in the startup ecosystem.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card text-center">
              <CardContent className="p-8">
                <div className="mx-auto mb-6 h-32 w-32 rounded-full bg-gradient-to-br from-brand-orange/20 to-brand-orange/30 flex items-center justify-center overflow-hidden">
                  <div className="h-28 w-28 rounded-full bg-gradient-to-br from-brand-orange/30 to-brand-orange/40 flex items-center justify-center">
                    <div className="text-4xl font-bold text-brand-orange">BA</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Dr. Bethlehem Alemu</h3>
                <p className="text-brand-orange font-semibold mb-4">CEO</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Visionary leader with 15+ years in tech entrepreneurship and venture capital, driving strategic growth
                  and innovation across emerging markets.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card text-center">
              <CardContent className="p-8">
                <div className="mx-auto mb-6 h-32 w-32 rounded-full bg-gradient-to-br from-brand-blue-sky/20 to-brand-blue-sky/30 flex items-center justify-center overflow-hidden">
                  <div className="h-28 w-28 rounded-full bg-gradient-to-br from-brand-blue-sky/30 to-brand-blue-sky/40 flex items-center justify-center">
                    <div className="text-4xl font-bold text-brand-blue-deep">SK</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Mr. Solomon Kebede</h3>
                <p className="text-brand-blue-deep font-semibold mb-4">CTO</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Technology innovator and AI expert with deep expertise in scalable systems, leading our technical
                  vision and platform development.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card text-center">
              <CardContent className="p-8">
                <div className="mx-auto mb-6 h-32 w-32 rounded-full bg-gradient-to-br from-brand-navy-bg/20 to-brand-navy-bg/30 flex items-center justify-center overflow-hidden">
                  <div className="h-28 w-28 rounded-full bg-gradient-to-br from-brand-navy-bg/30 to-brand-navy-bg/40 flex items-center justify-center">
                    <div className="text-4xl font-bold text-brand-navy-bg">SM</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Ms. Selamawit Mekonnen</h3>
                <p className="text-brand-navy-bg font-semibold mb-4">COO</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Operations excellence leader with proven track record in scaling startups, ensuring seamless execution
                  of our accelerator programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Goals Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-muted/20 to-brand-blue-sky/10">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Our Mission */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-brand-blue-sky to-brand-blue-deep bg-clip-text text-transparent">
                  Mission
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower Ethiopian startups by providing access to mentorship, funding, and a network of investors,
                fostering innovation and growth in the tech ecosystem. We believe in transforming bold ideas into
                successful businesses that drive economic growth and create lasting impact in our communities.
              </p>
            </div>

            {/* Our Vision */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-brand-navy-bg to-brand-orange bg-clip-text text-transparent">
                  Vision
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become the leading AI-powered accelerator in Africa, driving technological advancements and creating
                a thriving startup community in Ethiopia. We envision a future where Ethiopian entrepreneurs lead global
                innovation, supported by world-class resources and mentorship.
              </p>
            </div>

            {/* Our Goals */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8">
                Our{" "}
                <span className="bg-gradient-to-r from-brand-orange to-primary bg-clip-text text-transparent">
                  Goals
                </span>
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-brand-blue-deep to-brand-blue-sky">
                        <Target className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2">
                          Connect 500 startups with mentors by 2025
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Building a comprehensive mentorship network to guide entrepreneurs through their journey.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-brand-blue-sky to-brand-blue-deep">
                        <DollarSign className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2">
                          Facilitate $10M in funding within 3 years
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Connecting promising startups with investors to fuel growth and innovation.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-brand-navy-bg to-brand-orange">
                        <Users className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2">Build a network of 100+ active investors</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Creating a robust ecosystem of funding partners across different investment stages.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-brand-orange to-primary">
                        <Rocket className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2">Launch 10 successful AI-driven startups</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Fostering the next generation of AI-powered companies that will shape the future.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
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
