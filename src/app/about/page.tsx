import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
  Menu,
} from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
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
            <Link href="/about" className="text-sm font-medium text-blue-600 border-b-2 border-blue-600">
              About Us
            </Link>
            <Link href="#programs" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
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

      {/* About Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">🌟 About E-Combinator</Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                E-Combinator
              </span>
            </h1>
            <p className="text-lg text-gray-600 sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Empowering the next generation of entrepreneurs with cutting-edge technology, strategic mentorship, and
              access to a global network of investors and industry leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Leadership Team
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Meet the visionary leaders driving innovation and growth in the startup ecosystem.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-white text-center">
              <CardContent className="p-8">
                <div className="mx-auto mb-6 h-32 w-32 rounded-full bg-gradient-to-br from-orange-200 to-orange-300 flex items-center justify-center overflow-hidden">
                  <div className="h-28 w-28 rounded-full bg-gradient-to-br from-orange-300 to-orange-400 flex items-center justify-center">
                    <div className="text-4xl font-bold text-orange-800">BA</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Bethlehem Alemu</h3>
                <p className="text-orange-600 font-semibold mb-4">CEO</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Visionary leader with 15+ years in tech entrepreneurship and venture capital, driving strategic growth
                  and innovation across emerging markets.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-white text-center">
              <CardContent className="p-8">
                <div className="mx-auto mb-6 h-32 w-32 rounded-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center overflow-hidden">
                  <div className="h-28 w-28 rounded-full bg-gradient-to-br from-blue-300 to-blue-400 flex items-center justify-center">
                    <div className="text-4xl font-bold text-blue-800">SK</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mr. Solomon Kebede</h3>
                <p className="text-blue-600 font-semibold mb-4">CTO</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Technology innovator and AI expert with deep expertise in scalable systems, leading our technical
                  vision and platform development.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-white text-center">
              <CardContent className="p-8">
                <div className="mx-auto mb-6 h-32 w-32 rounded-full bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center overflow-hidden">
                  <div className="h-28 w-28 rounded-full bg-gradient-to-br from-purple-300 to-purple-400 flex items-center justify-center">
                    <div className="text-4xl font-bold text-purple-800">SM</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ms. Selamawit Mekonnen</h3>
                <p className="text-purple-600 font-semibold mb-4">COO</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Operations excellence leader with proven track record in scaling startups, ensuring seamless execution
                  of our accelerator programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Goals Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Our Mission */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                  Mission
                </span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To empower Ethiopian startups by providing access to mentorship, funding, and a network of investors,
                fostering innovation and growth in the tech ecosystem. We believe in transforming bold ideas into
                successful businesses that drive economic growth and create lasting impact in our communities.
              </p>
            </div>

            {/* Our Vision */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Vision
                </span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become the leading AI-powered accelerator in Africa, driving technological advancements and creating
                a thriving startup community in Ethiopia. We envision a future where Ethiopian entrepreneurs lead global
                innovation, supported by world-class resources and mentorship.
              </p>
            </div>

            {/* Our Goals */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
                Our{" "}
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Goals</span>
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-blue-600">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">Connect 500 startups with mentors by 2025</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Building a comprehensive mentorship network to guide entrepreneurs through their journey.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-green-600">
                        <DollarSign className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">Facilitate $10M in funding within 3 years</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Connecting promising startups with investors to fuel growth and innovation.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-purple-600">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">Build a network of 100+ active investors</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Creating a robust ecosystem of funding partners across different investment stages.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-orange-600">
                        <Rocket className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">Launch 10 successful AI-driven startups</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
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
                  <Link href="#programs" className="text-gray-400 hover:text-white transition-colors">
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
