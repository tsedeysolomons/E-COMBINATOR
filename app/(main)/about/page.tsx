"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
} from "lucide-react";
import Link from "next/link";
import { AuthButtons } from "@/components/auth-buttons";
import { MobileNav } from "@/components/mobile-nav";
import { usePathname } from "next/navigation";
import NavBar from "@/components/nav-bar";

export default function AboutPage() {
  const pathname = usePathname();
  return (
    <div className="min-h-screen bg-background">
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
              E-Combinator is a program partner with iCog Labs that supports
              early-stage Ethiopian startups with high potential. Our mission is
              to guide these startups through their most critical growth phase
              helping them access the exposure, mentorship,and strategic
              guidance they need to become world-class companies.
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
              Meet the visionary leaders driving innovation and growth in the
              startup ecosystem.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card text-center">
              <CardContent className="p-8">
                <div className="mx-auto mb-6 h-32 w-32 rounded-full bg-gradient-to-br from-brand-orange/20 to-brand-orange/30 flex items-center justify-center overflow-hidden">
                  <div className="h-28 w-28 rounded-full bg-gradient-to-br from-brand-orange/30 to-brand-orange/40 flex items-center justify-center">
                    <div className="text-4xl font-bold text-brand-orange">
                      BA
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Dr. Bethlehem Alemu
                </h3>
                <p className="text-brand-orange font-semibold mb-4">CEO</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Visionary leader with 15+ years in tech entrepreneurship and
                  venture capital, driving strategic growth and innovation
                  across emerging markets.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card text-center">
              <CardContent className="p-8">
                <div className="mx-auto mb-6 h-32 w-32 rounded-full bg-gradient-to-br from-brand-blue-sky/20 to-brand-blue-sky/30 flex items-center justify-center overflow-hidden">
                  <div className="h-28 w-28 rounded-full bg-gradient-to-br from-brand-blue-sky/30 to-brand-blue-sky/40 flex items-center justify-center">
                    <div className="text-4xl font-bold text-brand-blue-deep">
                      SK
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Mr. Solomon Kebede
                </h3>
                <p className="text-brand-blue-deep font-semibold mb-4">CTO</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Technology innovator and AI expert with deep expertise in
                  scalable systems, leading our technical vision and platform
                  development.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card text-center">
              <CardContent className="p-8">
                <div className="mx-auto mb-6 h-32 w-32 rounded-full bg-gradient-to-br from-brand-navy-bg/20 to-brand-navy-bg/30 flex items-center justify-center overflow-hidden">
                  <div className="h-28 w-28 rounded-full bg-gradient-to-br from-brand-navy-bg/30 to-brand-navy-bg/40 flex items-center justify-center">
                    <div className="text-4xl font-bold text-brand-navy-bg">
                      SM
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Ms. Selamawit Mekonnen
                </h3>
                <p className="text-brand-navy-bg font-semibold mb-4">COO</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Operations excellence leader with proven track record in
                  scaling startups, ensuring seamless execution of our
                  accelerator programs.
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
                To empower Ethiopian startups by providing access to mentorship,
                funding, and a network of investors, fostering innovation and
                growth in the tech ecosystem. We believe in transforming bold
                ideas into successful businesses that drive economic growth and
                create lasting impact in our communities.
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
                <ol className="list-disc pl-6 space-y-2">
                  <li>
                    To create a startup-focused platform that supports the
                    scaling of Ethiopian startups through an integrated support
                    system based on globally proven approaches.
                  </li>
                  <li>
                    To provide entrepreneurs with the mentorship, connections,
                    and visibility they need to grow into world-class companies.
                  </li>
                  <li>
                    To help founders think globally by exposing them to vibrant
                    and diverse entrepreneurial ecosystems.
                  </li>
                  <li>
                    To build a comprehensive, up-to-date database of Ethiopian
                    startups.
                  </li>
                </ol>
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
                          Connect 100+ startups with mentors by 2025
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Building a comprehensive mentorship network to guide
                          entrepreneurs through their journey.
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
                          Facilitate some in funding within the folloing years
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Connecting promising startups with investors to fuel
                          growth and innovation.
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
                        <h3 className="font-semibold text-foreground mb-2">
                          Build a network of some active investors
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Creating a robust ecosystem of funding partners across
                          different investment stages.
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
                        <h3 className="font-semibold text-foreground mb-2">
                          Launch 10 successful AI-driven startups
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Fostering the next generation of AI-powered companies
                          that will shape the future.
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
    </div>
  );
}
