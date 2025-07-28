"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import {
  Users,
  Target,
  Lightbulb,
  TrendingUp,
  DollarSign,
  Building,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { AuthButtons } from "@/components/auth-buttons"
import { MobileNav } from "@/components/mobile-nav"
import { usePathname } from "next/navigation"

export default function ProgramsPage() {
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
              className={`text-sm font-medium ${pathname === "/programs" ? "text-brand-blue-deep border-b-2 border-brand-blue-deep" : "text-foreground hover:text-brand-blue-deep transition-colors"}`}
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

      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/placeholder.svg?height=600&width=1200')`,
            filter: "brightness(0.7)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-deep/50 to-brand-navy-bg/50" />

        <div className="relative z-10 text-center text-primary-foreground px-4 md:px-6">
          {/* Removed: <Badge className="mb-6 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/30">
            🚀 Transform Your Ideas Into Reality
          </Badge> */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Ethiopian <span className="text-brand-orange">Startups</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Join our comprehensive accelerator programs designed to turn innovative ideas into successful businesses
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-brand-orange to-primary hover:from-brand-orange/90 hover:to-primary/90 text-lg px-8 py-6 rounded-xl"
            asChild
          >
            <Link href="/apply">
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-4">
              Featured{" "}
              <span className="bg-gradient-to-r from-brand-blue-deep to-brand-navy-bg bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Comprehensive programs designed to accelerate your startup journey from ideation to market success
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-2xl overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-brand-blue-sky/20 to-brand-blue-sky/30 flex items-center justify-center">
                <div className="h-20 w-20 bg-brand-blue-deep rounded-2xl flex items-center justify-center">
                  <Target className="h-10 w-10 text-primary-foreground" />
                </div>
              </div>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-foreground mb-3">Startup Incubation</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  6-month intensive program providing mentorship, workspace, and seed funding for early-stage startups
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-2xl overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-brand-blue-sky/20 to-brand-blue-deep/20 flex items-center justify-center">
                <div className="h-20 w-20 bg-brand-blue-sky rounded-2xl flex items-center justify-center">
                  <TrendingUp className="h-10 w-10 text-primary-foreground" />
                </div>
              </div>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-foreground mb-3">Growth Acceleration</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  Advanced program for scaling startups ready to expand their market reach and operational capacity
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-2xl overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-brand-navy-bg/20 to-brand-navy-bg/30 flex items-center justify-center">
                <div className="h-20 w-20 bg-brand-navy-bg rounded-2xl flex items-center justify-center">
                  <Lightbulb className="h-10 w-10 text-primary-foreground" />
                </div>
              </div>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-foreground mb-3">Innovation Labs</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  Research and development focused programs for tech startups working on cutting-edge solutions
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-2xl overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-brand-orange/20 to-brand-orange/30 flex items-center justify-center">
                <div className="h-20 w-20 bg-brand-orange rounded-2xl flex items-center justify-center">
                  <Users className="h-10 w-10 text-primary-foreground" />
                </div>
              </div>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-foreground mb-3">Mentorship Network</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  Connect with industry experts and successful entrepreneurs for guidance and strategic advice
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Mentors Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-muted/20 to-brand-blue-sky/10">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-brand-blue-sky to-brand-blue-deep bg-clip-text text-transparent">
                Mentors
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Learn from industry leaders and successful entrepreneurs who will guide your startup journey
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card text-center">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gradient-to-br from-brand-blue-sky/20 to-brand-blue-sky/30 flex items-center justify-center overflow-hidden">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-br from-brand-blue-sky/30 to-brand-blue-sky/40 flex items-center justify-center">
                    <div className="text-2xl font-bold text-brand-blue-deep">AM</div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">Abebe Mekuria</h3>
                <p className="text-brand-blue-deep font-semibold text-sm mb-3">Tech Entrepreneur</p>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Former CTO at leading fintech company, expert in scaling technology solutions
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card text-center">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gradient-to-br from-brand-navy-bg/20 to-brand-navy-bg/30 flex items-center justify-center overflow-hidden">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-br from-brand-navy-bg/30 to-brand-navy-bg/40 flex items-center justify-center">
                    <div className="text-2xl font-bold text-brand-navy-bg">ST</div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">Sara Tadesse</h3>
                <p className="text-brand-navy-bg font-semibold text-sm mb-3">Business Strategist</p>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  MBA from Harvard, specializes in business model innovation and market expansion
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card text-center">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gradient-to-br from-brand-blue-sky/20 to-brand-blue-deep/20 flex items-center justify-center overflow-hidden">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-br from-brand-blue-sky/30 to-brand-blue-deep/30 flex items-center justify-center">
                    <div className="text-2xl font-bold text-brand-blue-sky">DG</div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">Daniel Girma</h3>
                <p className="text-brand-blue-sky font-semibold text-sm mb-3">Investment Expert</p>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Venture capitalist with 10+ years experience in African startup ecosystem
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card text-center">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gradient-to-br from-brand-orange/20 to-brand-orange/30 flex items-center justify-center overflow-hidden">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-br from-brand-orange/30 to-brand-orange/40 flex items-center justify-center">
                    <div className="text-2xl font-bold text-brand-orange">MH</div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">Meron Haile</h3>
                <p className="text-brand-orange font-semibold text-sm mb-3">Marketing Guru</p>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Digital marketing expert who has helped 50+ startups achieve product-market fit
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Funding Opportunities Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-6">
                Funding{" "}
                <span className="bg-gradient-to-r from-brand-blue-sky to-brand-blue-deep bg-clip-text text-transparent">
                  Opportunities
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Access multiple funding streams designed to support startups at different stages of growth. From seed
                funding to Series A preparation, we provide the financial resources you need to scale.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue-sky/20">
                    <DollarSign className="h-4 w-4 text-brand-blue-deep" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Seed Funding</h3>
                    <p className="text-muted-foreground text-sm">Up to $50,000 for early-stage startups</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue-deep/20">
                    <TrendingUp className="h-4 w-4 text-brand-blue-deep" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Growth Capital</h3>
                    <p className="text-muted-foreground text-sm">$100K - $500K for scaling businesses</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-navy-bg/20">
                    <Building className="h-4 w-4 text-brand-navy-bg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Investor Network</h3>
                    <p className="text-muted-foreground text-sm">Connect with VCs and angel investors</p>
                  </div>
                </div>
              </div>

              <Button className="mt-8 bg-gradient-to-r from-brand-blue-sky to-brand-blue-deep hover:from-brand-blue-sky/90 hover:to-brand-blue-deep/90">
                Learn More About Funding
              </Button>
            </div>

            <div className="lg:pl-8">
              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-gradient-to-br from-brand-blue-sky/10 to-brand-blue-deep/10">
                <CardContent className="p-8">
                  <div className="h-64 bg-gradient-to-br from-brand-blue-sky/20 to-brand-blue-deep/20 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-brand-blue-deep mb-2">$2.5M+</div>
                      <div className="text-muted-foreground">Total Funding Distributed</div>
                      <div className="mt-4 text-2xl font-bold text-brand-blue-sky">45+</div>
                      <div className="text-muted-foreground">Startups Funded</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Government Program Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-brand-blue-sky/10 to-brand-orange/10">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="lg:pr-8">
              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card">
                <CardContent className="p-8">
                  <div className="h-64 bg-gradient-to-br from-brand-blue-sky/20 to-brand-orange/20 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <Building className="h-16 w-16 text-brand-blue-deep mx-auto mb-4" />
                      <div className="text-xl font-bold text-foreground">Government Partnership</div>
                      <div className="text-muted-foreground mt-2">Official Innovation Hub</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-6">
                Government{" "}
                <span className="bg-gradient-to-r from-brand-blue-deep to-brand-navy-bg bg-clip-text text-transparent">
                  Program
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                E-Combinator is proud to partner with the Ethiopian government to drive innovation and economic growth.
                Our government-backed programs provide additional support and resources for qualifying startups.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-brand-blue-deep rounded-full"></div>
                  <span className="text-foreground">Tax incentives for participating startups</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-brand-blue-deep rounded-full"></div>
                  <span className="text-foreground">Access to government contracts and procurement</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-brand-blue-deep rounded-full"></div>
                  <span className="text-foreground">Regulatory support and compliance guidance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-brand-blue-deep rounded-full"></div>
                  <span className="text-foreground">Priority access to public sector opportunities</span>
                </div>
              </div>

              <Button className="mt-8 bg-gradient-to-r from-brand-blue-deep to-brand-navy-bg hover:from-brand-blue-deep/90 hover:to-brand-navy-bg/90">
                Apply for Government Program
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-brand-blue-deep to-brand-navy-bg">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center text-primary-foreground">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">Join E-Combinator Today</h2>
            <p className="text-xl mb-8 opacity-90">
              Ready to transform your startup idea into a successful business? Apply now and join Ethiopia's most
              innovative entrepreneurial community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-primary-foreground text-brand-blue-deep hover:bg-muted text-lg px-8 py-6 rounded-xl"
                asChild
              >
                <Link href="/apply">Start Your Application</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-brand-blue-deep text-lg px-8 py-6 rounded-xl bg-transparent"
              >
                Schedule a Call
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
                  <Link href="#news" className="text-muted-foreground hover:text-primary-foreground transition-colors">
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
