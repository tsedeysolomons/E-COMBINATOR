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
  Menu,
} from "lucide-react"
import Link from "next/link"

export default function NewsPage() {
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
            <Link href="/programs" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Programs
            </Link>
            <Link href="/news" className="text-sm font-medium text-blue-600 border-b-2 border-blue-600">
              News and Updates
            </Link>
            <Link href="/help" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Help
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Contact
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

      {/* News Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">📰 Latest Updates</Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              News and{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Updates
              </span>
            </h1>
            <p className="text-lg text-gray-600 sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Stay informed about the latest developments in the Ethiopian startup ecosystem, E-Combinator initiatives,
              and iCog Labs advancements.
            </p>
          </div>
        </div>
      </section>

      {/* News Articles Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Article 1 */}
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-white">
              <div className="grid md:grid-cols-3 gap-0">
                <div className="md:col-span-2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge className="bg-blue-100 text-blue-700">Announcement</Badge>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      March 15, 2024
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    E-Combinator Announces New Cohort of Startups
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    E-Combinator has selected ten promising Ethiopian startups for its latest acceleration program.
                    These startups represent a diverse range of industries, including agriculture, healthcare, and
                    education, showcasing the innovative spirit of Ethiopian entrepreneurs.
                  </p>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Read More
                  </Button>
                </div>
                <div className="md:col-span-1">
                  <div className="h-full min-h-[300px] bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
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
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-white">
              <div className="grid md:grid-cols-3 gap-0">
                <div className="md:col-span-2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge className="bg-green-100 text-green-700">Research</Badge>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      March 10, 2024
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">iCog Labs Launches AI Research Initiative</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    iCog Labs has announced a new research initiative focused on developing AI solutions for local
                    challenges in Ethiopia. The initiative will collaborate with universities and industry partners to
                    advance artificial intelligence research and applications.
                  </p>
                  <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                    Read More
                  </Button>
                </div>
                <div className="md:col-span-1">
                  <div className="h-full min-h-[300px] bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
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
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-white">
              <div className="grid md:grid-cols-3 gap-0">
                <div className="md:col-span-2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge className="bg-purple-100 text-purple-700">Event</Badge>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      March 5, 2024
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    E-Combinator Hosts Networking Event for Startups
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    E-Combinator recently hosted a networking event in Addis Ababa, bringing together startups,
                    investors, and mentors. The event facilitated connections and collaborations within the Ethiopian
                    startup ecosystem, fostering innovation and growth.
                  </p>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Read More
                  </Button>
                </div>
                <div className="md:col-span-1">
                  <div className="h-full min-h-[300px] bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
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
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-white">
              <div className="grid md:grid-cols-3 gap-0">
                <div className="md:col-span-2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge className="bg-orange-100 text-orange-700">Award</Badge>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      February 28, 2024
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Ethiopian Startup Wins Regional Innovation Award
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    An Ethiopian startup supported by E-Combinator has won a prestigious regional innovation award for
                    its groundbreaking solution in the agricultural sector. The award recognizes the startup's impact
                    and potential for transforming agriculture in East Africa.
                  </p>
                  <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                    Read More
                  </Button>
                </div>
                <div className="md:col-span-1">
                  <div className="h-full min-h-[300px] bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
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
            <Button variant="ghost" size="icon" className="text-gray-400">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button className="bg-blue-600 text-white hover:bg-blue-700 w-10 h-10">1</Button>
            <Button variant="ghost" className="text-gray-600 hover:text-blue-600 w-10 h-10">
              2
            </Button>
            <Button variant="ghost" className="text-gray-600 hover:text-blue-600 w-10 h-10">
              3
            </Button>
            <Button variant="ghost" className="text-gray-600 hover:text-blue-600">
              Next
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-blue-600">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">Stay Updated</h2>
            <p className="text-xl mb-8 opacity-90">
              Subscribe to our newsletter to receive the latest news, updates, and insights from the Ethiopian startup
              ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-xl">
                Subscribe
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
                  <Link href="/news" className="text-gray-400 hover:text-white transition-colors">
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
