"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Mail, Phone, LinkIcon, Building, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { AuthButtons } from "@/components/auth-buttons"
import { MobileNav } from "@/components/mobile-nav"
import { usePathname } from "next/navigation"

// Helper so we don't repeat the red asterisk
const Required = () => <span className="text-destructive">*</span>

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    website: "",
    startupName: "",
    teamSize: "",
    sector: "",
    description: "",
    problem: "",
    differentiation: "",
    validated: "",
    customers: "",
    potentialCustomers: "",
    milestones: "",
    benefits: [] as string[],
    fundingSecured: "",
    investmentAmount: "",
    investmentType: "",
    valuation: "",
    progress: "",
    pitchDeck: null as File | null,
  })

  const pathname = usePathname()
  const router = useRouter()

  /* ---------- handlers ---------- */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((p) => ({ ...p, [name]: value }))
  }

  const handleRadio = (name: keyof typeof formData, value: string) => setFormData((p) => ({ ...p, [name]: value }))

  const handleCheckbox = (value: string, checked: boolean) =>
    setFormData((p) => ({
      ...p,
      benefits: checked ? [...p.benefits, value] : p.benefits.filter((b) => b !== value),
    }))

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData((p) => ({
      ...p,
      pitchDeck: e.target.files?.[0] ?? null,
    }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Application data ➜", formData)

    // Create URL parameters for the confirmation page
    const params = new URLSearchParams({
      startup: formData.startupName,
      email: formData.email,
      phone: formData.phone,
      teamSize: formData.teamSize,
      sector: formData.sector,
    })

    if (formData.website) {
      params.set("website", formData.website)
    }

    // Redirect to confirmation page
    router.push(`/apply/confirmation?${params.toString()}`)
  }

  const clearForm = () =>
    setFormData({
      email: "",
      phone: "",
      website: "",
      startupName: "",
      teamSize: "",
      sector: "",
      description: "",
      problem: "",
      differentiation: "",
      validated: "",
      customers: "",
      potentialCustomers: "",
      milestones: "",
      benefits: [],
      fundingSecured: "",
      investmentAmount: "",
      investmentType: "",
      valuation: "",
      progress: "",
      pitchDeck: null,
    })

  /* ---------- ui ---------- */
  return (
    <div className="min-h-screen bg-background">
      {/* ---------- header ---------- */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <img src="/logo.png" alt="E-Combinator logo" className="h-10 w-auto" />
          <nav className="hidden md:flex items-center space-x-8">
            {["/", "/about", "/programs", "/news", "/contact", "/help", "/admin/dashboard"].map((href, i) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium ${pathname === href ? "text-brand-blue-deep border-b-2 border-brand-blue-deep" : "text-foreground hover:text-brand-blue-deep transition-colors"}`}
              >
                {["Home", "About Us", "Programs", "News", "Contact", "Help", "Admin Dashboard"][i]}
              </Link>
            ))}
          </nav>
          <AuthButtons currentPage="apply" />
          <MobileNav />
        </div>
      </header>

      {/* ---------- hero ---------- */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-brand-blue-sky/10 via-background to-brand-orange/10">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Get Started with{" "}
            <span className="bg-gradient-to-r from-brand-blue-deep to-brand-navy-bg bg-clip-text text-transparent">
              E-Combinator
            </span>
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Fill out the form below to begin your accelerator application.
          </p>
        </div>
      </section>

      {/* ---------- form ---------- */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl mx-auto">
            {/* ---------- contact ---------- */}
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card">
              <CardHeader>
                <CardTitle className="text-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* email */}
                <div>
                  <Label htmlFor="email" className="text-foreground">
                    Email address <Required />
                  </Label>
                  <div className="relative mt-2">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="pl-10 bg-muted/20 border-border focus:ring-brand-blue-deep"
                    />
                  </div>
                </div>
                {/* phone */}
                <div>
                  <Label htmlFor="phone" className="text-foreground">
                    Phone number <Required />
                  </Label>
                  <div className="relative mt-2">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+251-911-000-000"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="pl-10 bg-muted/20 border-border focus:ring-brand-blue-deep"
                    />
                  </div>
                </div>
                {/* website */}
                <div>
                  <Label htmlFor="website" className="text-foreground">
                    Website link (optional)
                  </Label>
                  <div className="relative mt-2">
                    <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="website"
                      name="website"
                      type="url"
                      placeholder="https://"
                      value={formData.website}
                      onChange={handleChange}
                      className="pl-10 bg-muted/20 border-border focus:ring-brand-blue-deep"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ---------- startup basics ---------- */}
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card">
              <CardHeader>
                <CardTitle className="text-foreground">Startup Basics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="startupName" className="text-foreground">
                    Startup name <Required />
                  </Label>
                  <div className="relative mt-2">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="startupName"
                      name="startupName"
                      placeholder="Your startup"
                      value={formData.startupName}
                      onChange={handleChange}
                      required
                      className="pl-10 bg-muted/20 border-border focus:ring-brand-blue-deep"
                    />
                  </div>
                </div>

                {/* team size */}
                <div>
                  <Label className="text-foreground">
                    Number of team members <Required />
                  </Label>
                  <RadioGroup
                    value={formData.teamSize}
                    onValueChange={(v) => handleRadio("teamSize", v)}
                    className="flex flex-wrap gap-4 mt-2"
                  >
                    {["1", "2", "3", "4", "5", "6", ">6"].map((n) => (
                      <div key={n} className="flex items-center space-x-2">
                        <RadioGroupItem id={`team-${n}`} value={n} />
                        <Label htmlFor={`team-${n}`} className="text-muted-foreground">
                          {n}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* sector */}
                <div>
                  <Label className="text-foreground">
                    Startup sector <Required />
                  </Label>
                  <RadioGroup
                    value={formData.sector}
                    onValueChange={(v) => handleRadio("sector", v)}
                    className="flex flex-col gap-2 mt-2"
                  >
                    {[
                      "E-commerce",
                      "Fintech",
                      "Agriculture",
                      "Technology",
                      "Health",
                      "Education",
                      "Logistics",
                      "Other",
                    ].map((s) => (
                      <div key={s} className="flex items-center space-x-2">
                        <RadioGroupItem id={`sector-${s}`} value={s} />
                        <Label htmlFor={`sector-${s}`} className="text-muted-foreground">
                          {s}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>

            {/* ---------- narrative ---------- */}
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card">
              <CardHeader>
                <CardTitle className="text-foreground">Your Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  ["description", "Startup description (min 80 words)"],
                  ["problem", "What problem does your startup solve?"],
                  ["differentiation", "What differentiates you from competitors?"],
                  ["potentialCustomers", "Who are your potential customers?"],
                ].map(([name, label]) => (
                  <div key={name}>
                    <Label htmlFor={name} className="text-foreground">
                      {label} <Required />
                    </Label>
                    <Textarea
                      id={name}
                      name={name}
                      value={formData[name as keyof typeof formData] as string}
                      onChange={handleChange}
                      rows={4}
                      required
                      className="mt-2 bg-muted/20 border-border focus:ring-brand-blue-deep"
                    />
                  </div>
                ))}

                {/* idea validation */}
                <div>
                  <Label className="text-foreground">
                    Have you validated your idea? <Required />
                  </Label>
                  <RadioGroup
                    value={formData.validated}
                    onValueChange={(v) => handleRadio("validated", v)}
                    className="flex gap-6 mt-2"
                  >
                    {["Yes", "No"].map((v) => (
                      <div key={v} className="flex items-center space-x-2">
                        <RadioGroupItem id={`val-${v}`} value={v} />
                        <Label htmlFor={`val-${v}`} className="text-muted-foreground">
                          {v}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>

            {/* ---------- progress & needs ---------- */}
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card">
              <CardHeader>
                <CardTitle className="text-foreground">Progress & Needs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* active customers */}
                <div>
                  <Label htmlFor="customers" className="text-foreground">
                    Active customers <Required />
                  </Label>
                  <Input
                    id="customers"
                    name="customers"
                    type="number"
                    value={formData.customers}
                    onChange={handleChange}
                    required
                    className="mt-2 bg-muted/20 border-border focus:ring-brand-blue-deep"
                  />
                </div>

                {/* milestones */}
                <div>
                  <Label htmlFor="milestones" className="text-foreground">
                    Key milestones & achievements <Required />
                  </Label>
                  <Textarea
                    id="milestones"
                    name="milestones"
                    value={formData.milestones}
                    onChange={handleChange}
                    rows={3}
                    required
                    className="mt-2 bg-muted/20 border-border focus:ring-brand-blue-deep"
                  />
                </div>

                {/* benefits */}
                <div>
                  <Label className="text-foreground">
                    How can E-Combinator help you? <Required />
                  </Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                    {["Funding", "Resources (e.g. office)", "Mentorship", "Marketing"].map((b) => (
                      <div key={b} className="flex items-center space-x-2">
                        <Checkbox
                          id={`benefit-${b}`}
                          checked={formData.benefits.includes(b)}
                          onCheckedChange={(c) => handleCheckbox(b, c as boolean)}
                        />
                        <Label htmlFor={`benefit-${b}`} className="text-muted-foreground">
                          {b}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* funding secured */}
                <div>
                  <Label className="text-foreground">
                    Have you secured funding? <Required />
                  </Label>
                  <RadioGroup
                    value={formData.fundingSecured}
                    onValueChange={(v) => handleRadio("fundingSecured", v)}
                    className="flex gap-6 mt-2"
                  >
                    {["Yes", "No"].map((v) => (
                      <div key={v} className="flex items-center space-x-2">
                        <RadioGroupItem id={`fund-${v}`} value={v} />
                        <Label htmlFor={`fund-${v}`} className="text-muted-foreground">
                          {v}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* conditional investment details */}
                {formData.fundingSecured === "Yes" && (
                  <>
                    <div>
                      <Label htmlFor="investmentAmount" className="text-foreground">
                        Investment amount secured <Required />
                      </Label>
                      <Input
                        id="investmentAmount"
                        name="investmentAmount"
                        value={formData.investmentAmount}
                        onChange={handleChange}
                        required
                        className="mt-2 bg-muted/20 border-border focus:ring-brand-blue-deep"
                      />
                    </div>
                    <div>
                      <Label className="text-foreground">
                        Investment type <Required />
                      </Label>
                      <RadioGroup
                        value={formData.investmentType}
                        onValueChange={(v) => handleRadio("investmentType", v)}
                        className="flex gap-6 mt-2"
                      >
                        {["Free seed funding", "Equity seed funding"].map((v) => (
                          <div key={v} className="flex items-center space-x-2">
                            <RadioGroupItem id={`type-${v}`} value={v} />
                            <Label htmlFor={`type-${v}`} className="text-muted-foreground">
                              {v}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  </>
                )}

                {/* valuation */}
                <div>
                  <Label htmlFor="valuation" className="text-foreground">
                    Current valuation (optional)
                  </Label>
                  <Input
                    id="valuation"
                    name="valuation"
                    value={formData.valuation}
                    onChange={handleChange}
                    className="mt-2 bg-muted/20 border-border focus:ring-brand-blue-deep"
                  />
                </div>

                {/* progress scale */}
                <div>
                  <Label className="text-foreground">
                    Progress on a scale of 1–10 <Required />
                  </Label>
                  <RadioGroup
                    value={formData.progress}
                    onValueChange={(v) => handleRadio("progress", v)}
                    className="flex justify-between items-center mt-4"
                  >
                    <span className="text-sm text-muted-foreground">Low</span>
                    {Array.from({ length: 10 }, (_, i) => String(i + 1)).map((n) => (
                      <div key={n} className="flex flex-col items-center">
                        <RadioGroupItem id={`prog-${n}`} value={n} />
                        <Label htmlFor={`prog-${n}`} className="mt-1 text-sm text-muted-foreground">
                          {n}
                        </Label>
                      </div>
                    ))}
                    <span className="text-sm text-muted-foreground">High</span>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>

            {/* ---------- pitch deck ---------- */}
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card">
              <CardHeader>
                <CardTitle className="text-foreground">
                  Pitch Deck <Required />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Upload one PDF or presentation file (max&nbsp;10&nbsp;MB) with team, product, milestones, market,
                  costs, marketing strategy, and competitor analysis.
                </p>
                <Input
                  id="pitchDeck"
                  type="file"
                  accept=".pdf,.ppt,.pptx"
                  onChange={handleFile}
                  required
                  className="bg-muted/20 border-border focus:ring-brand-blue-deep"
                />
                {formData.pitchDeck && (
                  <p className="text-sm text-muted-foreground">Selected: {formData.pitchDeck.name}</p>
                )}
              </CardContent>
            </Card>

            {/* ---------- actions ---------- */}
            <div className="flex justify-between pt-4">
              <Button type="submit" className="bg-brand-orange hover:bg-primary/90">
                Submit Application
              </Button>
              <Button
                type="button"
                variant="ghost"
                onClick={clearForm}
                className="text-brand-orange hover:text-primary/90"
              >
                Clear form
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* ---------- footer ---------- */}
      <footer className="bg-brand-dark-navy text-primary-foreground py-16">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src="/logo.png" alt="logo" className="h-10 mb-4" />
              <p className="text-muted-foreground">Empowering the next generation of entrepreneurs.</p>
              <div className="flex space-x-3 mt-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon) => (
                  <Button
                    key={Icon.displayName}
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-primary-foreground"
                  >
                    <Icon className="h-5 w-5" />
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                {["/", "/about", "/programs", "/news"].map((href, i) => (
                  <li key={href}>
                    <Link href={href} className="text-muted-foreground hover:text-primary-foreground">
                      {["Home", "About", "Programs", "News"][i]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/help" className="text-muted-foreground hover:text-primary-foreground">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary-foreground">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@ecombinator.com</span>
              </p>
              <p className="flex items-center space-x-2 text-muted-foreground mt-2">
                <Phone className="h-4 w-4" />
                <span>+251 911 223 344</span>
              </p>
              <p className="flex items-center space-x-2 text-muted-foreground mt-2">
                <MapPin className="h-4 w-4" />
                <span>Addis Ababa, Ethiopia</span>
              </p>
            </div>
          </div>
          <p className="text-center text-muted-foreground mt-8 border-t border-gray-800 pt-6">
            © {new Date().getFullYear()} E-Combinator. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
