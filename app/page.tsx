"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart3,
  Users,
  Target,
  Settings,
  Star,
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

export default function HomePage() {
  const pathname = usePathname()
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="nav-header">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/logo.png" alt="E-Combinator Logo" className="h-10 w-auto" />
          </div>

          <nav className="nav-menu">
            <Link href="#" className="nav-link">
              Home
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/programs" className="nav-link">
              Programs
            </Link>
            <Link href="/news" className="nav-link">
              News and Updates
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
            <Link href="/help" className="nav-link">
              Help
            </Link>
            <Link
              href="/admin/dashboard"
              className={`nav-link ${pathname === "/admin/dashboard" ? "nav-link-active" : ""}`}
            >
              Admin Dashboard
            </Link>
          </nav>

          <AuthButtons currentPage="other" />
          <MobileNav />
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section hero-gradient">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Fuel Your{" "}
              <span className="bg-gradient-to-r from-brand-orange to-brand-blue-deep bg-clip-text text-transparent">
                Startup Dreams
              </span>
            </h1>
            <p className="hero-subtitle">
              E-Combinator connects ambitious founders with the resources, mentorship, and investor network they need to
              transform innovative ideas into successful companies.
            </p>
            <div className="hero-buttons">
              <Button className="hero-button-primary" asChild>
                <Link href="/apply">Get Started Today</Link>
              </Button>
              <Button className="hero-button-secondary">Watch Demo</Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-brand-blue-sky/20 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-brand-orange/20 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-4">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-brand-orange to-brand-blue-deep bg-clip-text text-transparent">
                Scale Fast
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our comprehensive platform provides founders with powerful tools and connections to accelerate their
              startup journey from idea to IPO.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="feature-card">
              <CardHeader className="feature-card-header">
                <div className="feature-card-icon bg-gradient-to-r from-brand-blue-deep to-brand-blue-sky">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="feature-card-title">Founder Dashboard</CardTitle>
              </CardHeader>
              <CardContent className="feature-card-content">
                <CardDescription className="feature-card-description">
                  Track your startup's progress with comprehensive analytics, milestone tracking, and performance
                  insights all in one place.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardHeader className="feature-card-header">
                <div className="feature-card-icon bg-gradient-to-r from-brand-blue-deep to-brand-orange">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="feature-card-title">Startup Scoring System</CardTitle>
              </CardHeader>
              <CardContent className="feature-card-content">
                <CardDescription className="feature-card-description">
                  Get objective assessments of your startup's potential with our AI-powered scoring system based on
                  market data and expert analysis.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardHeader className="feature-card-header">
                <div className="feature-card-icon bg-gradient-to-r from-brand-orange to-brand-blue-sky">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="feature-card-title">Investor Network</CardTitle>
              </CardHeader>
              <CardContent className="feature-card-content">
                <CardDescription className="feature-card-description">
                  Connect directly with vetted investors, VCs, and angel investors who are actively looking for startups
                  in your industry and stage.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardHeader className="feature-card-header">
                <div className="feature-card-icon bg-gradient-to-r from-brand-blue-sky to-brand-blue-deep">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="feature-card-title">Admin Tools</CardTitle>
              </CardHeader>
              <CardContent className="feature-card-content">
                <CardDescription className="feature-card-description">
                  Streamline operations with powerful admin tools for team management, document sharing, and workflow
                  automation.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-muted/20 to-brand-blue-sky/10">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-4">
              Success Stories from{" "}
              <span className="bg-gradient-to-r from-brand-blue-sky to-brand-blue-deep bg-clip-text text-transparent">
                Our Alumni
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join hundreds of successful founders who transformed their ideas into thriving businesses through our
              incubator program.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mb-16">
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "E-Combinator didn't just give us funding – they gave us the strategic guidance and network
                  connections that turned our MVP into a $10M ARR SaaS platform."
                </blockquote>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-brand-orange/20 p-1 shadow-md mr-4 flex items-center justify-center">
                    <span className="text-brand-orange font-bold">SJ</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Sarah Johnson</div>
                    <div className="text-sm text-muted-foreground">CEO, TechFlow Solutions</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "The mentorship and investor introductions were game-changing. We went from bootstrapped to Series A
                  in just 18 months thanks to E-Combinator's support."
                </blockquote>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-brand-blue-sky/20 p-1 shadow-md mr-4 flex items-center justify-center">
                    <span className="text-brand-blue-deep font-bold">MC</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Michael Chen</div>
                    <div className="text-sm text-muted-foreground">Founder, GreenTech Innovations</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "E-Combinator's scoring system helped us identify our weak points early and pivot successfully. Now
                  we're the leading fintech startup in our region."
                </blockquote>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-brand-navy-bg/20 p-1 shadow-md mr-4 flex items-center justify-center">
                    <span className="text-brand-navy-bg font-bold">AP</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Aisha Patel</div>
                    <div className="text-sm text-muted-foreground">Co-founder, FinanceForward</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Startup Logos */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-8 font-medium">TRUSTED BY INNOVATIVE STARTUPS</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="h-12 w-32 bg-muted rounded-lg flex items-center justify-center">
                <span className="font-bold text-muted-foreground">TechFlow</span>
              </div>
              <div className="h-12 w-32 bg-muted rounded-lg flex items-center justify-center">
                <span className="font-bold text-muted-foreground">GreenTech</span>
              </div>
              <div className="h-12 w-32 bg-muted rounded-lg flex items-center justify-center">
                <span className="font-bold text-muted-foreground">FinanceForward</span>
              </div>
              <div className="h-12 w-32 bg-muted rounded-lg flex items-center justify-center">
                <span className="font-bold text-muted-foreground">DataDrive</span>
              </div>
              <div className="h-12 w-32 bg-muted rounded-lg flex items-center justify-center">
                <span className="font-bold text-muted-foreground">CloudScale</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-section">
              <div className="flex items-center space-x-2 mb-4">
                <img src="/logo.png" alt="E-Combinator Logo" className="h-10 w-auto" />
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering the next generation of entrepreneurs with the tools, network, and guidance needed to build
                successful companies.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-gray-800">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-gray-800">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-gray-800">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-gray-800">
                  <Instagram className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Navigation */}
            <div className="footer-section">
              <h3 className="footer-title">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="footer-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="footer-link">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="footer-link">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="footer-link">
                    News and Updates
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="footer-section">
              <h3 className="footer-title">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/help" className="footer-link">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="footer-link">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer-link">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer-link">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h3 className="footer-title">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-300">info@ecombinator.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-300">+251 911 223 344</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-300">Addis Ababa, Ethiopia</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">© {new Date().getFullYear()} E-Combinator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
