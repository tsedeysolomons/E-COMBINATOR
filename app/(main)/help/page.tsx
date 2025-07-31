"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
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
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { AuthButtons } from "@/components/auth-buttons";
import { usePathname } from "next/navigation";
import { MobileNav } from "@/components/mobile-nav";

export default function HelpPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const pathname = usePathname();

  const faqs = [
    {
      question: "What is E-Combinator?",
      answer:
        " E-Combinator is a startup accelerator program run by partnering with  iCog Labs that supports early-stage Ethiopian tech startups through mentorship, training, funding support, and investor connections.",
    },
    {
      question: "Who can apply to E-Combinator?",
      answer:
        "  We welcome applications from all around the world,based on tech startups and entrepreneurs with innovative solutions and strong growth potential. Startups can be in sectors such as fintech, agritech, healthtech, edtech, ICT, and renewable energy.",
    },
    {
      question: "What stage should my startup be in to apply?",
      answer:
        "We support early-stage startups—this means you should at least have a prototype, MVP (minimum viable product), or early traction (users, revenue, or pilot projects).",
    },
    {
      question: " How long is the program?",
      answer:
        " The accelerator program runs for 6 months, including workshops, mentorship sessions, and investor engagement activities.",
    },
    {
      question: "Do you provide funding?",
      answer:
        " While we don’t directly provide funding, we prepare startups to become investment-ready and connect them with local and international investors.",
    },
    {
      question: " Will I need to relocate to join the program?",
      answer:
        "No. The program is hybrid—some activities are virtual while others may be in person, depending on the phase and nature of the sessions.",
    },
    {
      question: "How can I apply?",
      answer:
        " You can apply through our website by filling out the application form during the open call period.",
    },
    {
      question: "Can I apply if I’ve already received funding?",
      answer:
        "Yes, as long as you're still in the early stages and could benefit from acceleration, you’re eligible.",
    },
  ];

  const helpTopics = [
    {
      icon: Mail,
      title: "Getting Started",
      description:
        "Learn how to set up your account and navigate the platform.",
      color: "from-brand-blue-deep to-brand-blue-sky",
    },
    {
      icon: Search,
      title: "Community Guidelines",
      description:
        "Understand the rules and expectations for community engagement.",
      color: "from-brand-navy-bg to-brand-orange",
    },
    {
      icon: Settings,
      title: "Technical Support",
      description:
        "Get assistance with technical issues and platform features.",
      color: "from-brand-blue-sky to-brand-blue-deep",
    },
    {
      icon: DollarSign,
      title: "Funding & Investments",
      description:
        "Find information about funding opportunities and investment processes.",
      color: "from-brand-orange to-primary",
    },
  ];

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
                <Card
                  key={index}
                  className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card"
                >
                  <Collapsible
                    open={openFaq === index}
                    onOpenChange={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                  >
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        className="w-full p-6 text-left justify-between hover:bg-muted/20 rounded-none h-auto"
                      >
                        <span className="text-lg font-semibold text-foreground">
                          {faq.question}
                        </span>
                        {openFaq === index ? (
                          <ChevronUp className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        )}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="px-6 pb-6">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
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
                const IconComponent = topic.icon;
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
                      <h3 className="text-xl font-bold text-foreground mb-4">
                        {topic.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {topic.description}
                      </p>
                    </CardContent>
                  </Card>
                );
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
              Can't find what you're looking for? Our support team is here to
              help you succeed.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-brand-blue-deep to-brand-navy-bg">
                    <MessageCircle className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    Live Chat
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Get instant help from our support team
                  </p>
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
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    Email Support
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Send us a detailed message
                  </p>
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
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    Documentation
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Browse our comprehensive guides
                  </p>
                  <Button
                    variant="outline"
                    className="border-2 hover:bg-muted/20 hover:border-border bg-transparent"
                  >
                    View Docs
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
