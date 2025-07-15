import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
  Menu,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="E-Combinator Logo" className="h-10 w-auto" />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              About Us
            </Link>
            <Link href="/programs" className="text-sm font-medium text-blue-600 border-b-2 border-blue-600">
              Programs
            </Link>
            <Link href="#news" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              News and Updates
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
            <Link href="/help" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Help
            </Link>
          </nav>

          <Button className="hidden md:inline-flex bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Get Started
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50" />

        <div className="relative z-10 text-center text-white px-4 md:px-6">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            🚀 Transform Your Ideas Into Reality
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Ethiopian <span className="text-yellow-400">Startups</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Join our comprehensive accelerator programs designed to turn innovative ideas into successful businesses
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-6 rounded-xl"
          >
            Apply Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl mb-4">
              Featured{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Comprehensive programs designed to accelerate your startup journey from ideation to market success
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-2xl overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="h-20 w-20 bg-blue-500 rounded-2xl flex items-center justify-center">
                  <Target className="h-10 w-10 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-gray-900 mb-3">Startup Incubation</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  6-month intensive program providing mentorship, workspace, and seed funding for early-stage startups
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-2xl overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <div className="h-20 w-20 bg-green-500 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-gray-900 mb-3">Growth Acceleration</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Advanced program for scaling startups ready to expand their market reach and operational capacity
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-2xl overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <div className="h-20 w-20 bg-purple-500 rounded-2xl flex items-center justify-center">
                  <Lightbulb className="h-10 w-10 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-gray-900 mb-3">Innovation Labs</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Research and development focused programs for tech startups working on cutting-edge solutions
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-2xl overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <div className="h-20 w-20 bg-orange-500 rounded-2xl flex items-center justify-center">
                  <Users className="h-10 w-10 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-gray-900 mb-3">Mentorship Network</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Connect with industry experts and successful entrepreneurs for guidance and strategic advice
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Mentors Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">Mentors</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Learn from industry leaders and successful entrepreneurs who will guide your startup journey
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-white text-center">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center overflow-hidden">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-br from-blue-300 to-blue-400 flex items-center justify-center">
                    <div className="text-2xl font-bold text-blue-800">AM</div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Abebe Mekuria</h3>
                <p className="text-blue-600 font-semibold text-sm mb-3">Tech Entrepreneur</p>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Former CTO at leading fintech company, expert in scaling technology solutions
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-white text-center">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center overflow-hidden">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-br from-purple-300 to-purple-400 flex items-center justify-center">
                    <div className="text-2xl font-bold text-purple-800">ST</div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Sara Tadesse</h3>
                <p className="text-purple-600 font-semibold text-sm mb-3">Business Strategist</p>
                <p className="text-gray-600 text-xs leading-relaxed">
                  MBA from Harvard, specializes in business model innovation and market expansion
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-white text-center">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gradient-to-br from-green-200 to-green-300 flex items-center justify-center overflow-hidden">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-br from-green-300 to-green-400 flex items-center justify-center">
                    <div className="text-2xl font-bold text-green-800">DG</div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Daniel Girma</h3>
                <p className="text-green-600 font-semibold text-sm mb-3">Investment Expert</p>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Venture capitalist with 10+ years experience in African startup ecosystem
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-white text-center">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gradient-to-br from-orange-200 to-orange-300 flex items-center justify-center overflow-hidden">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-br from-orange-300 to-orange-400 flex items-center justify-center">
                    <div className="text-2xl font-bold text-orange-800">MH</div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Meron Haile</h3>
                <p className="text-orange-600 font-semibold text-sm mb-3">Marketing Guru</p>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Digital marketing expert who has helped 50+ startups achieve product-market fit
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Funding Opportunities Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl mb-6">
                Funding{" "}
                <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                  Opportunities
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Access multiple funding streams designed to support startups at different stages of growth. From seed
                funding to Series A preparation, we provide the financial resources you need to scale.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100">
                    <DollarSign className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Seed Funding</h3>
                    <p className="text-gray-600 text-sm">Up to $50,000 for early-stage startups</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                    <TrendingUp className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Growth Capital</h3>
                    <p className="text-gray-600 text-sm">$100K - $500K for scaling businesses</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100">
                    <Building className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Investor Network</h3>
                    <p className="text-gray-600 text-sm">Connect with VCs and angel investors</p>
                  </div>
                </div>
              </div>

              <Button className="mt-8 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                Learn More About Funding
              </Button>
            </div>

            <div className="lg:pl-8">
              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-gradient-to-br from-green-50 to-blue-50">
                <CardContent className="p-8">
                  <div className="h-64 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600 mb-2">$2.5M+</div>
                      <div className="text-gray-600">Total Funding Distributed</div>
                      <div className="mt-4 text-2xl font-bold text-blue-600">45+</div>
                      <div className="text-gray-600">Startups Funded</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Government Program Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="lg:pr-8">
              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-white">
                <CardContent className="p-8">
                  <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <Building className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                      <div className="text-xl font-bold text-gray-900">Government Partnership</div>
                      <div className="text-gray-600 mt-2">Official Innovation Hub</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl mb-6">
                Government{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Program
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                E-Combinator is proud to partner with the Ethiopian government to drive innovation and economic growth.
                Our government-backed programs provide additional support and resources for qualifying startups.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Tax incentives for participating startups</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Access to government contracts and procurement</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Regulatory support and compliance guidance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Priority access to public sector opportunities</span>
                </div>
              </div>

              <Button className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Apply for Government Program
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">Join E-Combinator Today</h2>
            <p className="text-xl mb-8 opacity-90">
              Ready to transform your startup idea into a successful business? Apply now and join Ethiopia's most
              innovative entrepreneurial community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl">
                Start Your Application
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 rounded-xl bg-transparent"
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            {/* Company Info */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <img src="/logo.png" alt="E-Combinator Logo" className="h-10 w-auto" />
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Empowering the next generation of entrepreneurs with the tools, network, and guidance needed to build
                successful companies.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                  <Instagram className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="text-gray-400 hover:text-white transition-colors">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link href="#news" className="text-gray-400 hover:text-white transition-colors">
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
                  <Link href="/help" className="text-gray-400 hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
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
                  <Mail className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-400">hello@e-combinator.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-400">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} E-Combinator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
