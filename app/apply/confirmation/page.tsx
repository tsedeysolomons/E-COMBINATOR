"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  CheckCircle,
  Download,
  Mail,
  Phone,
  Building,
  Tag,
  Calendar,
  FileText,
  Home,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
} from "lucide-react"

interface SubmissionData {
  applicationId: string
  submissionDate: string
  startupName: string
  email: string
  phone: string
  website?: string
  teamSize: string
  sector: string
  description: string
  benefits: string[]
  fundingSecured: string
  investmentAmount?: string
  progress: string
}

export default function ConfirmationPage() {
  const searchParams = useSearchParams()
  const [submissionData, setSubmissionData] = useState<SubmissionData | null>(null)

  useEffect(() => {
    // Extract the values we need from searchParams to avoid infinite loop
    const startup = searchParams.get("startup")
    const email = searchParams.get("email")
    const phone = searchParams.get("phone")
    const website = searchParams.get("website")
    const teamSize = searchParams.get("teamSize")
    const sector = searchParams.get("sector")

    // In a real application, you would fetch this data based on a submission ID
    // For now, we'll simulate the data
    const mockData: SubmissionData = {
      applicationId: `APP-${Date.now().toString().slice(-6)}`,
      submissionDate: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
      startupName: startup || "Your Startup",
      email: email || "founder@example.com",
      phone: phone || "+251-911-000-000",
      website: website || undefined,
      teamSize: teamSize || "3",
      sector: sector || "Technology",
      description: "AI-powered solution for modern business challenges...",
      benefits: ["Funding", "Mentorship", "Resources"],
      fundingSecured: "No",
      progress: "7",
    }

    setSubmissionData(mockData)
  }, []) // Empty dependency array - only run once on mount

  if (!submissionData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-orange"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="nav-header">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/logo.png" alt="E-Combinator Logo" className="h-10 w-auto" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-20 md:py-32">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          {/* Success Message */}
          <div className="text-center mb-16">
            <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-green-600 animate-bounce-subtle">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Thank you!</h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Your application was submitted successfully
            </p>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Submitted on {submissionData.submissionDate}</span>
            </div>
          </div>

          {/* Application Summary */}
          <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card mb-8">
            <CardHeader className="bg-gradient-to-r from-brand-blue-sky/10 to-brand-orange/10">
              <CardTitle className="flex items-center gap-3">
                <FileText className="h-6 w-6 text-brand-blue-deep" />
                Application Summary
              </CardTitle>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>
                  Application ID: <strong className="text-foreground">{submissionData.applicationId}</strong>
                </span>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Submitted
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid gap-6 md:grid-cols-2">
                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    <Mail className="h-4 w-4 text-brand-blue-deep" />
                    Contact Information
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Email:</span>
                      <span className="font-medium text-foreground">{submissionData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Phone:</span>
                      <span className="font-medium text-foreground">{submissionData.phone}</span>
                    </div>
                    {submissionData.website && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Website:</span>
                        <span className="font-medium text-brand-blue-deep">{submissionData.website}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Startup Details */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    <Building className="h-4 w-4 text-brand-blue-deep" />
                    Startup Details
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Startup Name:</span>
                      <span className="font-medium text-foreground">{submissionData.startupName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Team Size:</span>
                      <span className="font-medium text-foreground">{submissionData.teamSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sector:</span>
                      <span className="font-medium text-foreground">{submissionData.sector}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Progress (1-10):</span>
                      <span className="font-medium text-foreground">{submissionData.progress}/10</span>
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              {/* Benefits Sought */}
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Tag className="h-4 w-4 text-brand-blue-deep" />
                  Benefits Sought
                </h3>
                <div className="flex flex-wrap gap-2">
                  {submissionData.benefits.map((benefit, index) => (
                    <Badge key={index} variant="secondary" className="bg-brand-blue-sky/20 text-brand-blue-deep">
                      {benefit}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card mb-8">
            <CardHeader>
              <CardTitle className="text-foreground">What Happens Next?</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue-deep text-white text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Application Review</h4>
                    <p className="text-muted-foreground text-sm">
                      Our team will review your application within 5-7 business days. We'll assess your startup's
                      potential and alignment with our program.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue-sky text-white text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Initial Screening</h4>
                    <p className="text-muted-foreground text-sm">
                      If your application passes the initial review, we'll schedule a brief screening call to discuss
                      your startup and answer any questions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-orange text-white text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Final Decision</h4>
                    <p className="text-muted-foreground text-sm">
                      We'll notify you of our decision via email. Accepted startups will receive detailed information
                      about the next steps and program timeline.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="hero-button-primary" asChild>
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                Back to Homepage
              </Link>
            </Button>

            <Button variant="outline" className="border-2 hover:bg-muted/20 hover:border-border bg-transparent" asChild>
              <Link href="/programs">
                Learn About Our Programs
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>

            <Button variant="outline" className="border-2 hover:bg-muted/20 hover:border-border bg-transparent">
              <Download className="h-4 w-4 mr-2" />
              Download Confirmation
            </Button>
          </div>

          {/* Contact Information */}
          <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-gradient-to-r from-brand-blue-sky/10 to-brand-orange/10">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold text-foreground mb-4">Questions About Your Application?</h3>
              <p className="text-muted-foreground mb-6">
                Our team is here to help. Don't hesitate to reach out if you have any questions about the application
                process or our programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  variant="outline"
                  className="border-2 hover:bg-muted/20 hover:border-border bg-transparent"
                  asChild
                >
                  <Link href="/contact">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Support
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-2 hover:bg-muted/20 hover:border-border bg-transparent"
                  asChild
                >
                  <Link href="/help">Help Center</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

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
                  <Link href="/" className="footer-link">
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
