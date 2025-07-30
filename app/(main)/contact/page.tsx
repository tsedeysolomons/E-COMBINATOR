"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
} from "lucide-react";
import Link from "next/link";
import { AuthButtons } from "@/components/auth-buttons";
import { MobileNav } from "@/components/mobile-nav";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const AddressMap = dynamic(() => import("@/components/where-weare"), {
  ssr: false,
});

export default function ContactPage() {
  const pathname = usePathname();
  return (
    <div className="min-h-screen bg-background">
      {/* Contact Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-brand-blue-sky/10 via-background to-brand-orange/10">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            {/* Removed: <Badge className="mb-6 bg-brand-blue-sky/20 text-brand-blue-deep hover:bg-brand-blue-sky/30">
              💬 Get In Touch
            </Badge> */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Contact{" "}
              <span className="bg-gradient-to-r from-brand-blue-deep to-brand-navy-bg bg-clip-text text-transparent">
                Us
              </span>
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl max-w-3xl mx-auto leading-relaxed">
              We're here to help. Reach out to us with any questions or
              inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Information Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Send us a Message
                  </h2>
                  <form className="space-y-6">
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground mb-2 block"
                      >
                        Name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue-deep focus:border-transparent bg-muted/20"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground mb-2 block"
                      >
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue-deep focus:border-transparent bg-muted/20"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="message"
                        className="text-sm font-medium text-foreground mb-2 block"
                      >
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Your message here..."
                        rows={6}
                        className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue-deep focus:border-transparent bg-muted/20 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-brand-blue-deep hover:bg-brand-blue-deep/90 text-primary-foreground py-3 px-6 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2"
                    >
                      <Send className="h-4 w-4" />
                      <span>Submit</span>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Our Contact Information
                </h2>
                <div className="space-y-6">
                  <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-brand-blue-deep to-brand-blue-sky">
                          <MapPin className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            Address
                          </h3>
                          <p className="text-muted-foreground">
                            Addis Ababa, Ethiopia
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-brand-blue-sky to-brand-blue-deep">
                          <Phone className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            Phone
                          </h3>
                          <p className="text-muted-foreground">
                            +251 911 223 344
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-brand-navy-bg to-brand-orange">
                          <Mail className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            Email
                          </h3>
                          <p className="text-muted-foreground">
                            info@ecombinator.com
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-brand-orange to-primary">
                          <Clock className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            Business Hours
                          </h3>
                          <p className="text-muted-foreground">
                            Monday - Friday: 9:00 AM - 6:00 PM
                          </p>
                          <p className="text-muted-foreground">
                            Saturday: 10:00 AM - 4:00 PM
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-xl border-2 hover:bg-muted/20 hover:border-border bg-transparent"
                  >
                    <Facebook className="h-5 w-5 text-brand-blue-deep" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-xl border-2 hover:bg-muted/20 hover:border-border bg-transparent"
                  >
                    <Twitter className="h-5 w-5 text-brand-blue-deep" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-xl border-2 hover:bg-muted/20 hover:border-border bg-transparent"
                  >
                    <Linkedin className="h-5 w-5 text-brand-blue-deep" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-xl border-2 hover:bg-muted/20 hover:border-border bg-transparent"
                  >
                    <Instagram className="h-5 w-5 text-brand-blue-deep" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-muted/20 to-brand-blue-sky/10">
        <div className="container px-4 md:px-6">
          <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card max-w-6xl mx-auto">
            <AddressMap />
          </Card>
          {/* <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Visit Our{" "}
              <span className="bg-gradient-to-r from-brand-blue-deep to-brand-navy-bg bg-clip-text text-transparent">
                Office
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Located in the heart of Addis Ababa, our office is easily
              accessible and welcoming to all visitors.
            </p>
          </div>

          <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card max-w-4xl mx-auto">
            <CardContent className="p-0">
              <div className="h-96 bg-gradient-to-br from-brand-blue-sky/20 to-brand-navy-bg/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-brand-blue-deep mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    E-Combinator Office
                  </h3>
                  <p className="text-muted-foreground">Addis Ababa, Ethiopia</p>
                  <Button className="mt-4 bg-gradient-to-r from-brand-blue-deep to-brand-navy-bg hover:from-brand-blue-deep/90 hover:to-brand-navy-bg/90">
                    Get Directions
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card> */}
        </div>
      </section>
    </div>
  );
}
