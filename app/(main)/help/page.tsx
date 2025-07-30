"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  ChevronDown,
  ChevronUp,
  Mail,
  Search,
  Settings,
  DollarSign,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  MapPin,
  BookOpen,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { AuthButtons } from "@/components/auth-buttons"
import { usePathname } from "next/navigation"
import { MobileNav } from "@/components/mobile-nav"

export default function HelpPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const pathname = usePathname()

  const faqs = [
    {
      question: "What is E-Combinator?",
      answer:
        "E-Combinator is an AI-powered accelerator for Ethiopian startups, providing resources, mentorship, and funding to help them grow and succeed.",
    },
    {
      question: "How does the accelerator program work?",
      answer:
        "Our accelerator program is a 6-month intensive journey that includes mentorship sessions, workshops, networking events, and access to our investor network. Startups receive seed funding, office space, and personalized guidance to scale their business.",
    },
    {
      question: "What types of startups does E-Combinator support?",
      answer:
        "We support early-stage to growth-stage startups across various industries including technology, healthcare, agriculture, fintech, and social impact ventures. We're particularly interested in AI-driven solutions and startups that can create positive impact in Ethiopia and Africa.",
    },
    {
      question: "How can I apply to the program?",
      answer:
        "You can apply through our online application form available on our Programs page. The application process includes submitting your business plan, team information, and participating in interview rounds with our selection committee.",
    },
    {
      question: "What is the selection criteria?",
      answer:
        "We evaluate startups based on team strength, market opportunity, product-market fit, scalability potential, and alignment with our mission. We also consider the startup's potential for positive social and economic impact.",
    },
  ]

  const helpTopics = [
    {
      icon: Mail,
      title: "Getting Started",
      description: "Learn how to set up your account and navigate the platform.",
      color: "from-brand-blue-deep to-brand-blue-sky",
    },
    {
      icon: Search,
      title: "Community Guidelines",
      description: "Understand the rules and expectations for community engagement.",
      color: "from-brand-navy-bg to-brand-orange",
    },
    {
      icon: Settings,
      title: "Technical Support",
      description: "Get assistance with technical issues and platform features.",
      color: "from-brand-blue-sky to-brand-blue-deep",
    },
    {
      icon: DollarSign,
      title: "Funding & Investments",
      description: "Find information about funding opportunities and investment processes.",
      color: "from-brand-orange to-primary",
    },
  ]

  return (
    <div className="min-h-screen bg-background">

      {/* Help Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-brand-blue-sky/10 via-background to-brand-orange/10">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            {/* Removed: <Badge className="mb-6 bg-brand-blue-sky/20 text-brand-blue-deep hover:bg-brand-blue-sky/30">
              ❓ Help Center
            </Badge> */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-brand-blue-deep to-brand-navy-bg bg-clip-text text-transparent">
                Help
              </span>
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions or explore our help topics.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card">
                  <Collapsible
                    open={openFaq === index}
                    onOpenChange={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        className="w-full p-6 text-left justify-between hover:bg-muted/20 rounded-none h-auto"
                      >
                        <span className="text-lg font-semibold text-foreground">{faq.question}</span>
                        {openFaq === index ? (
                          <ChevronUp className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        )}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="px-6 pb-6">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Help Topics Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-muted/20 to-brand-blue-sky/10">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-12 text-center">
              Help Topics
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {helpTopics.map((topic, index) => {
                const IconComponent = topic.icon
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-2xl overflow-hidden bg-card cursor-pointer"
                  >
                    <CardContent className="p-8 text-center">
                      <div
                        className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${topic.color} group-hover:scale-110 transition-transform`}
                      >
                        <IconComponent className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-4">{topic.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{topic.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              Need More{" "}
              <span className="bg-gradient-to-r from-brand-blue-sky to-brand-blue-deep bg-clip-text text-transparent">
                Help?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Can't find what you're looking for? Our support team is here to help you succeed.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-brand-blue-deep to-brand-navy-bg">
                    <MessageCircle className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Live Chat</h3>
                  <p className="text-muted-foreground text-sm mb-4">Get instant help from our support team</p>
                  <Button className="bg-gradient-to-r from-brand-blue-deep to-brand-navy-bg hover:from-brand-blue-deep/90 hover:to-brand-navy-bg/90">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-brand-blue-sky to-brand-blue-deep">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Email Support</h3>
                  <p className="text-muted-foreground text-sm mb-4">Send us a detailed message</p>
                  <Button
                    variant="outline"
                    className="border-2 hover:bg-muted/20 hover:border-border bg-transparent"
                    asChild
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-brand-navy-bg to-brand-orange">
                    <BookOpen className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Documentation</h3>
                  <p className="text-muted-foreground text-sm mb-4">Browse our comprehensive guides</p>
                  <Button variant="outline" className="border-2 hover:bg-muted/20 hover:border-border bg-transparent">
                    View Docs
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
