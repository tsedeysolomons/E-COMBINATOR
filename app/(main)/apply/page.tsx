"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Mail, Phone, LinkIcon, Building } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { addStartupApplications } from "@/lib/actions";
import { Label } from "@/components/ui/label";
import { string } from "better-auth";

// Define the form schema using Zod
const formSchema = z
  .object({
    email: z
      .string()
      .email({ message: "Please enter a valid email" })
      .min(1, "Email is required"),
    phone: z
      .string()
      .min(1, "Phone number is required")
      .max(20, "Phone number is too long"),
    website: z
      .string()
      .url({ message: "Please enter a valid URL" })
      .optional()
      .or(z.literal("")),
    startupName: z
      .string()
      .min(1, "Startup name is required")
      .max(255, "Startup name is too long"),
    teamSize: z.enum(["1", "2", "3", "4", "5", "6", ">6"], {
      errorMap: () => ({ message: "Please select a team size" }),
    }),
    sector: z.enum(
      [
        "E-commerce",
        "Fintech",
        "Agriculture",
        "Technology",
        "Health",
        "Education",
        "Logistics",
        "Other",
      ],
      {
        errorMap: () => ({ message: "Please select a sector" }),
      }
    ),
    description: z
      .string()
      .min(80, "Description must be at least 80 characters")
      .max(5000, "Description is too long"),
    problem: z
      .string()
      .min(1, "Problem statement is required")
      .max(5000, "Problem statement is too long"),
    differentiation: z
      .string()
      .min(1, "Differentiation is required")
      .max(5000, "Differentiation is too long"),
    potentialCustomers: z
      .string()
      .min(1, "Potential customers are required")
      .max(5000, "Potential customers description is too long"),
    validated: z.boolean().default(false),
    activeCustomers: z.number({
      message: "Active customers must be a non-negative integer",
    }),
    milestones: z
      .string()
      .min(1, "Milestones are required")
      .max(5000, "Milestones description is too long"),
    supportNeeded: z
      .array(z.enum(["Funding", "Resources", "Mentorship", "Marketing"]))
      .min(1, "At least one support need is required"),
    fundingSecured: z
      .boolean({
        message: "Please select if funding is secured",
      })
      .default(false),
    investmentAmount: z
      .string()
      .max(50, "Investment amount is too long")
      .optional()
      .or(z.literal(""))
      .refine(
        (val) => val === "" || !isNaN(Number(val?.replace(/[^0-9.]/g, ""))),
        { message: "Investment amount must be a valid number or empty" }
      ),
    investmentType: z
      .enum(["Free seed funding", "Equity seed funding", ""])
      .optional()
      .default(""),
    valuation: z
      .string()
      .max(50, "Valuation is too long")
      .optional()
      .or(z.literal("")),
    progress: z.number().default(1),
    pitchDeck: z
      .instanceof(File, { message: "Please upload a file" })
      .refine(
        (file) => file.size <= 10 * 1024 * 1024,
        "File size must not exceed 10MB"
      )
      .refine(
        (file) =>
          [
            "application/pdf",
            "application/vnd.ms-powerpoint",
            "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          ].includes(file.type),
        "File must be a PDF or PowerPoint"
      ),
  })
  .refine(
    (data) => {
      if (data.fundingSecured) {
        return data.investmentAmount !== "" && data.investmentType !== "";
      }
      return true;
    },
    {
      message: "Investment amount and type are required if funding is secured",
      path: ["investmentAmount"],
    }
  );

// Helper for required field indicator
const Required = () => <span className="text-destructive">*</span>;

export default function ApplyPage() {
  const router = useRouter();

  // Initialize the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phone: "",
      website: "",
      startupName: "",
      teamSize: "1",
      sector: "Technology",
      description: "",
      problem: "",
      differentiation: "",
      potentialCustomers: "",
      validated: false,
      //activeCustomers: 0,
      milestones: "",
      supportNeeded: [],
      fundingSecured: false,
      investmentAmount: "",
      investmentType: "",
      valuation: "",
      progress: 1,
      pitchDeck: undefined,
    },
    mode: "onChange", // Validate on change for better UX
  });

  // Handle form submission
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value], _) => {
        {
          formData.append(key, value as any);
        }
      });

      const result = await addStartupApplications(formData);
      if (result.success) {
        const params = new URLSearchParams({
          startup: data.startupName,
          email: data.email,
          phone: data.phone,
          teamSize: data.teamSize,
          sector: data.sector,
        });
        if (data.website) {
          params.set("website", data.website);
        }
        router.push(`/apply/confirmation?${params.toString()}`);
      } else {
        form.setError("root", {
          message: result.message || "Failed to submit application",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      form.setError("root", { message: "An unexpected error occurred" });
    }

    console.log(data);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
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

      {/* Form Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 max-w-4xl mx-auto"
              encType="multipart/form-data"
            >
              {/* Contact Information */}
              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card">
                <CardHeader>
                  <CardTitle className="text-foreground">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Email address <Required />
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                              placeholder="you@example.com"
                              className="pl-10 bg-muted/20 border-border focus:ring-brand-blue-deep"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Phone number <Required />
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                              placeholder="+251-911-000-000"
                              className="pl-10 bg-muted/20 border-border focus:ring-brand-blue-deep"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Website link (optional)</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                              placeholder="https://"
                              className="pl-10 bg-muted/20 border-border focus:ring-brand-blue-deep"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Startup Basics */}
              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card">
                <CardHeader>
                  <CardTitle className="text-foreground">
                    Startup Basics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="startupName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Startup name <Required />
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                              placeholder="Your startup"
                              className="pl-10 bg-muted/20 border-border focus:ring-brand-blue-deep"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="teamSize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Number of team members <Required />
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="flex flex-wrap gap-4 mt-2"
                          >
                            {["1", "2", "3", "4", "5", "6", ">6"].map((n) => (
                              <div
                                key={n}
                                className="flex items-center space-x-2"
                              >
                                <RadioGroupItem id={`team-${n}`} value={n} />
                                <Label
                                  htmlFor={`team-${n}`}
                                  className="text-muted-foreground"
                                >
                                  {n}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="sector"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Startup sector <Required />
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
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
                              <div
                                key={s}
                                className="flex items-center space-x-2"
                              >
                                <RadioGroupItem id={`sector-${s}`} value={s} />
                                <Label
                                  htmlFor={`sector-${s}`}
                                  className="text-muted-foreground"
                                >
                                  {s}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Your Story */}
              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card">
                <CardHeader>
                  <CardTitle className="text-foreground">Your Story</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    {
                      name: "description",
                      label: "Startup description (min 80 words)",
                    },
                    {
                      name: "problem",
                      label: "What problem does your startup solve?",
                    },
                    {
                      name: "differentiation",
                      label: "What differentiates you from competitors?",
                    },
                    {
                      name: "potentialCustomers",
                      label: "Who are your potential customers?",
                    },
                  ].map(({ name, label }) => (
                    <FormField
                      key={name}
                      control={form.control}
                      name={name as keyof z.infer<typeof formSchema>}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            {label} <Required />
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              rows={4}
                              className="bg-muted/20 border-border focus:ring-brand-blue-deep"
                              {...(field as any)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                  <FormField
                    control={form.control}
                    name="validated"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Have you validated your idea? <Required />
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={(value: string) => {
                              form.setValue(
                                "validated",
                                value == "Yes" ? true : false
                              );
                            }}
                            value={field.value ? "Yes" : "No"}
                            className="flex gap-6 mt-2"
                          >
                            {["Yes", "No"].map((v) => (
                              <div
                                key={v}
                                className="flex items-center space-x-2"
                              >
                                <RadioGroupItem id={`val-${v}`} value={v} />
                                <Label
                                  htmlFor={`val-${v}`}
                                  className="text-muted-foreground"
                                >
                                  {v}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Progress & Needs */}
              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card">
                <CardHeader>
                  <CardTitle className="text-foreground">
                    Progress & Needs
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="activeCustomers"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Active customers <Required />
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            className="bg-muted/20 border-border focus:ring-brand-blue-deep"
                            {...field}
                            onChange={(e) =>
                              field.onChange(Number(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="milestones"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Key milestones & achievements <Required />
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            rows={3}
                            className="bg-muted/20 border-border focus:ring-brand-blue-deep"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="supportNeeded"
                    render={() => (
                      <FormItem>
                        <FormLabel>
                          How can E-Combinator help you? <Required />
                        </FormLabel>
                        <FormControl>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                            {[
                              "Funding",
                              "Resources",
                              "Mentorship",
                              "Marketing",
                            ].map((b) => (
                              <div
                                key={b}
                                className="flex items-center space-x-2"
                              >
                                <Checkbox
                                  id={`benefit-${b}`}
                                  checked={form
                                    .getValues("supportNeeded")
                                    .includes(b as any)}
                                  onCheckedChange={(checked) => {
                                    const current =
                                      form.getValues("supportNeeded");
                                    form.setValue(
                                      "supportNeeded",
                                      checked
                                        ? ([...current, b] as any)
                                        : (current.filter(
                                            (v) => v !== b
                                          ) as any),
                                      { shouldValidate: true }
                                    );
                                  }}
                                />
                                <Label
                                  htmlFor={`benefit-${b}`}
                                  className="text-muted-foreground"
                                >
                                  {b}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="fundingSecured"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Have you secured funding? <Required />
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={(value: string) => {
                              form.setValue(
                                "fundingSecured",
                                value == "Yes" ? true : false
                              );
                            }}
                            value={field.value ? "Yes" : "No"}
                            className="flex gap-6 mt-2"
                          >
                            {["Yes", "No"].map((v) => (
                              <div
                                key={v}
                                className="flex items-center space-x-2"
                              >
                                <RadioGroupItem id={`fund-${v}`} value={v} />
                                <Label
                                  htmlFor={`fund-${v}`}
                                  className="text-muted-foreground"
                                >
                                  {v}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {form.watch("fundingSecured") === true && (
                    <>
                      <FormField
                        control={form.control}
                        name="investmentAmount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Investment amount secured <Required />
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-muted/20 border-border focus:ring-brand-blue-deep"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="investmentType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Investment type <Required />
                            </FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                value={field.value}
                                className="flex gap-6 mt-2"
                              >
                                {[
                                  "Free seed funding",
                                  "Equity seed funding",
                                ].map((v) => (
                                  <div
                                    key={v}
                                    className="flex items-center space-x-2"
                                  >
                                    <RadioGroupItem
                                      id={`type-${v}`}
                                      value={v}
                                    />
                                    <Label
                                      htmlFor={`type-${v}`}
                                      className="text-muted-foreground"
                                    >
                                      {v}
                                    </Label>
                                  </div>
                                ))}
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}
                  <FormField
                    control={form.control}
                    name="valuation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current valuation (optional)</FormLabel>
                        <FormControl>
                          <Input
                            className="bg-muted/20 border-border focus:ring-brand-blue-deep"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="progress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Progress on a scale of 1–10 <Required />
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={(value) =>
                              form.setValue("progress", Number(value))
                            }
                            value={String(field.value)}
                            className="flex justify-between items-center mt-4"
                          >
                            <span className="text-sm text-muted-foreground">
                              Low
                            </span>
                            {Array.from({ length: 10 }, (_, i) =>
                              String(i + 1)
                            ).map((n) => (
                              <div
                                key={n}
                                className="flex flex-col items-center"
                              >
                                <RadioGroupItem id={`prog-${n}`} value={n} />
                                <Label
                                  htmlFor={`prog-${n}`}
                                  className="mt-1 text-sm text-muted-foreground"
                                >
                                  {n}
                                </Label>
                              </div>
                            ))}
                            <span className="text-sm text-muted-foreground">
                              High
                            </span>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Pitch Deck */}
              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-card">
                <CardHeader>
                  <CardTitle className="text-foreground">
                    Pitch Deck <Required />
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormDescription>
                    Upload one PDF or presentation file (max 10 MB) with team,
                    product, milestones, market, costs, marketing strategy, and
                    competitor analysis.
                  </FormDescription>
                  <FormField
                    control={form.control}
                    name="pitchDeck"
                    render={({ field: { onChange, value, ...rest } }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="file"
                            accept=".pdf,.ppt,.pptx"
                            className="bg-muted/20 border-border focus:ring-brand-blue-deep"
                            onChange={(e) => {
                              const file = e.target.files?.[0] ?? null;
                              onChange(file);
                            }}
                            {...rest}
                          />
                        </FormControl>
                        {value && (
                          <FormDescription>
                            Selected: {value.name}
                          </FormDescription>
                        )}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Actions */}
              <div className="flex justify-between pt-4">
                <Button
                  type="submit"
                  className="bg-brand-orange hover:bg-primary/90"
                >
                  Submit Application
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => form.reset()}
                  className="text-brand-orange hover:text-primary/90"
                >
                  Clear form
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </section>
    </div>
  );
}
