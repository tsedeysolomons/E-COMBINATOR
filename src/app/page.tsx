import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Menu,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="E-Combinator Logo"
              className="h-10 w-auto"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/programs"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Programs
            </Link>
            <Link
              href="/news"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              News and Updates
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/help"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
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

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">
              🚀 Accelerating Innovation Since 2024
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
              Fuel Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Startup Dreams
              </span>
            </h1>
            <p className="mb-8 text-lg text-gray-600 sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              E-Combinator connects ambitious founders with the resources,
              mentorship, and investor network they need to transform innovative
              ideas into successful companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Get Started Today
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 rounded-xl border-2 hover:bg-gray-50 bg-transparent"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl mb-4">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Scale Fast
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our comprehensive platform provides founders with powerful tools
              and connections to accelerate their startup journey from idea to
              IPO.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 group-hover:scale-110 transition-transform">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Founder Dashboard
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 leading-relaxed">
                  Track your startup's progress with comprehensive analytics,
                  milestone tracking, and performance insights all in one place.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 group-hover:scale-110 transition-transform">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Startup Scoring System
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 leading-relaxed">
                  Get objective assessments of your startup's potential with our
                  AI-powered scoring system based on market data and expert
                  analysis.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Investor Network
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 leading-relaxed">
                  Connect directly with vetted investors, VCs, and angel
                  investors who are actively looking for startups in your
                  industry and stage.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-green-500 to-green-600 group-hover:scale-110 transition-transform">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Admin Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 leading-relaxed">
                  Streamline operations with powerful admin tools for team
                  management, document sharing, and workflow automation.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl mb-4">
              Success Stories from{" "}
              <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                Our Alumni
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Join hundreds of successful founders who transformed their ideas
              into thriving businesses through our incubator program.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mb-16">
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "E-Combinator didn't just give us funding – they gave us the
                  strategic guidance and network connections that turned our MVP
                  into a $10M ARR SaaS platform."
                </blockquote>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-white p-1 shadow-md mr-4 flex items-center justify-center">
                    <img
                      src="/logo.png"
                      alt="E-Combinator"
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Sarah Johnson
                    </div>
                    <div className="text-sm text-gray-600">
                      CEO, TechFlow Solutions
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "The mentorship and investor introductions were game-changing.
                  We went from bootstrapped to Series A in just 18 months thanks
                  to E-Combinator's support."
                </blockquote>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-white p-1 shadow-md mr-4 flex items-center justify-center">
                    <img
                      src="/logo.png"
                      alt="E-Combinator"
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Michael Chen
                    </div>
                    <div className="text-sm text-gray-600">
                      Founder, GreenTech Innovations
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "E-Combinator's scoring system helped us identify our weak
                  points early and pivot successfully. Now we're the leading
                  fintech startup in our region."
                </blockquote>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-white p-1 shadow-md mr-4 flex items-center justify-center">
                    <img
                      src="/logo.png"
                      alt="E-Combinator"
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Aisha Patel
                    </div>
                    <div className="text-sm text-gray-600">
                      Co-founder, FinanceForward
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Startup Logos */}
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-8 font-medium">
              TRUSTED BY INNOVATIVE STARTUPS
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="h-12 w-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="font-bold text-gray-600">TechFlow</span>
              </div>
              <div className="h-12 w-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="font-bold text-gray-600">GreenTech</span>
              </div>
              <div className="h-12 w-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="font-bold text-gray-600">FinanceForward</span>
              </div>
              <div className="h-12 w-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="font-bold text-gray-600">DataDrive</span>
              </div>
              <div className="h-12 w-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="font-bold text-gray-600">CloudScale</span>
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
                <img
                  src="/logo.png"
                  alt="E-Combinator Logo"
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Empowering the next generation of entrepreneurs with the tools,
                network, and guidance needed to build successful companies.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-gray-800"
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
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/programs"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Programs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
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
                  <Link
                    href="/help"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
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
                  <span className="text-gray-400">info@ecombinator.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-400">+251 911 223 344</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-400">Addis Ababa, Ethiopia</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} E-Combinator. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
