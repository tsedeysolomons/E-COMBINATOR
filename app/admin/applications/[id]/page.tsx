"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  Mail,
  Phone,
  Globe,
  Users,
  Tag,
  CheckSquare,
  MessageSquare,
  Calendar,
  Edit,
  Trash2,
  Download,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

type Status = "pending" | "approved" | "rejected"

interface Application {
  id: string
  startupName: string
  email: string
  phone: string
  website?: string
  teamSize: string
  sector: string
  description: string
  problem: string
  differentiation: string
  validated: string
  customers: string
  potentialCustomers: string
  milestones: string
  benefits: string[]
  fundingSecured: string
  investmentAmount?: string
  investmentType?: string
  valuation?: string
  progress: string
  submissionDate: string // ISO - "YYYY-MM-DD"
  status: Status
  notes?: string
}

/* -------------------------------------------------------------------------- */
/*                               Mock generator                               */
/* -------------------------------------------------------------------------- */

function makeMockApp(id: string): Application {
  const sectors = ["E-commerce", "Fintech", "Agriculture", "Technology", "Health", "Education", "Logistics", "Other"]
  const statuses: Status[] = ["pending", "approved", "rejected"]
  const teamSizes = ["1", "2", "3", "4", "5", "6", ">6"]
  const validatedOptions = ["Yes", "No"]
  const fundingOptions = ["Yes", "No"]
  const investmentTypes = ["Free seed funding", "Equity seed funding"]
  const progressScale = Array.from({ length: 10 }, (_, i) => String(i + 1))
  const benefitsOptions = ["Funding", "Resources (e.g. office)", "Mentorship", "Marketing"]

  const daysAgo = Math.floor(Math.random() * 30)
  const date = new Date(Date.now() - daysAgo * 86_400_000).toISOString().slice(0, 10)

  const fundingSecured = fundingOptions[Math.floor(Math.random() * fundingOptions.length)]
  const hasFunding = fundingSecured === "Yes"

  const idNumber = Number.parseInt(id.replace("APP-", ""))

  return {
    id,
    startupName: `Startup ${idNumber}`,
    email: `founder${idNumber}@example.com`,
    phone: `+251-911-${String(Math.floor(Math.random() * 9000) + 1000).padStart(4, "0")}-${String(Math.floor(Math.random() * 9000) + 1000).padStart(4, "0")}`,
    website: idNumber % 3 === 0 ? `https://startup${idNumber}.com` : undefined,
    teamSize: teamSizes[Math.floor(Math.random() * teamSizes.length)],
    sector: sectors[Math.floor(Math.random() * sectors.length)],
    description: `This is a detailed description for Startup ${idNumber}. We aim to revolutionize the ${sectors[Math.floor(Math.random() * sectors.length)].toLowerCase()} sector with our innovative solution. Our platform uses cutting-edge technology to address key challenges in the market. We have developed a proprietary algorithm that optimizes resource allocation and improves efficiency by 40%. Our team has extensive experience in this domain and we've already secured partnerships with key industry players.`,
    problem: `The current market lacks efficient solutions for ${sectors[Math.floor(Math.random() * sectors.length)].toLowerCase()} challenges. Existing solutions are expensive, difficult to implement, and don't scale well. Users face significant barriers to adoption, and businesses struggle with integration issues. Our research shows that 78% of potential customers are dissatisfied with current options.`,
    differentiation: `Our unique AI-powered approach provides a ${Math.random() > 0.5 ? "10x faster" : "50% cheaper"} solution than existing alternatives. We've developed proprietary technology that addresses the key pain points in the market. Our solution is more user-friendly, scalable, and cost-effective than competitors. We also offer unique features that aren't available elsewhere, such as real-time analytics and predictive insights.`,
    validated: validatedOptions[Math.floor(Math.random() * validatedOptions.length)],
    customers: String(Math.floor(Math.random() * 1000)),
    potentialCustomers: `Millions in the ${sectors[Math.floor(Math.random() * sectors.length)].toLowerCase()} market. Our target audience includes small to medium-sized businesses, enterprise clients, and individual professionals. Market research indicates a potential customer base of over 5 million users globally, with a serviceable addressable market of approximately $2.3 billion.`,
    milestones: `Achieved MVP, secured initial users, and completed seed round. We've also established key partnerships with industry leaders, filed two patents for our core technology, and achieved product-market fit with our early adopters. Our customer retention rate is currently at 87%, and we're seeing a 15% month-over-month growth in user acquisition.`,
    benefits: Array.from(
      { length: Math.floor(Math.random() * benefitsOptions.length) + 1 },
      (_, idx) => benefitsOptions[idx],
    ),
    fundingSecured: fundingSecured,
    investmentAmount: hasFunding ? `$${(Math.floor(Math.random() * 500) + 50) * 1000}` : undefined,
    investmentType: hasFunding ? investmentTypes[Math.floor(Math.random() * investmentTypes.length)] : undefined,
    valuation: hasFunding ? `$${(Math.floor(Math.random() * 10) + 1) * 1000000}` : undefined,
    progress: progressScale[Math.floor(Math.random() * progressScale.length)],
    submissionDate: date,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    notes:
      idNumber % 2 === 0
        ? "This startup shows great potential. The team has strong technical expertise and their solution addresses a real market need. Follow up with them about their go-to-market strategy."
        : undefined,
  }
}

/* -------------------------------------------------------------------------- */
/*                                Page component                              */
/* -------------------------------------------------------------------------- */

export default function ApplicationDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [application, setApplication] = useState<Application | null>(null)
  const [loading, setLoading] = useState(true)
  const [notes, setNotes] = useState("")
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    // Simulate API call to fetch application details
    const fetchApplication = () => {
      setLoading(true)
      setTimeout(() => {
        if (typeof params.id === "string") {
          const app = makeMockApp(params.id)
          setApplication(app)
          setNotes(app.notes || "")
        }
        setLoading(false)
      }, 500)
    }

    fetchApplication()
  }, [params.id])

  const handleStatusChange = (status: Status) => {
    if (application) {
      setApplication({ ...application, status })
    }
  }

  const handleSaveNotes = () => {
    if (application) {
      setApplication({ ...application, notes })
      setIsEditing(false)
    }
  }

  const badgeVariant = (s: Status) =>
    (({ pending: "outline", approved: "default", rejected: "destructive" }) as const)[s]

  if (loading) {
    return (
      <div className="p-8 flex items-center justify-center h-full">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-orange mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading application details...</p>
        </div>
      </div>
    )
  }

  if (!application) {
    return (
      <div className="p-8">
        <Alert variant="destructive">
          <AlertDescription>Application not found. The requested application may have been deleted.</AlertDescription>
        </Alert>
        <Button className="mt-4" asChild>
          <Link href="/admin/applications">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Applications
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <Button variant="outline" className="border-border text-foreground hover:bg-muted/20 bg-transparent" asChild>
            <Link href="/admin/applications">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">{application.startupName}</h1>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant={badgeVariant(application.status)} className="capitalize">
                {application.status}
              </Badge>
              <span className="text-sm text-muted-foreground">ID: {application.id}</span>
              <span className="text-sm text-muted-foreground">
                Submitted: {new Date(application.submissionDate).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-border text-foreground hover:bg-muted/20 bg-transparent">
            <Download className="h-4 w-4 mr-2" /> Export
          </Button>
          <Button variant="outline" className="border-border text-destructive hover:bg-destructive/10 bg-transparent">
            <Trash2 className="h-4 w-4 mr-2" /> Delete
          </Button>
          {application.status === "pending" && (
            <>
              <Button
                onClick={() => handleStatusChange("approved")}
                className="bg-brand-blue-sky hover:bg-brand-blue-sky/90"
              >
                <CheckCircle className="h-4 w-4 mr-2" /> Approve
              </Button>
              <Button onClick={() => handleStatusChange("rejected")} variant="destructive">
                <XCircle className="h-4 w-4 mr-2" /> Reject
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="details">
            <TabsList className="mb-6">
              <TabsTrigger value="details">Application Details</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="space-y-6">
              {/* Startup Information */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Startup Information</CardTitle>
                  <CardDescription>Basic information about the startup</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Startup Name</p>
                      <p className="font-medium text-foreground">{application.startupName}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Sector</p>
                      <p className="font-medium text-foreground">{application.sector}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Team Size</p>
                      <p className="font-medium text-foreground">{application.teamSize}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Idea Validated</p>
                      <p className="font-medium text-foreground">{application.validated}</p>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Description</p>
                    <p className="text-foreground">{application.description}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Problem & Solution */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Problem & Solution</CardTitle>
                  <CardDescription>The problem being addressed and the proposed solution</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Problem Statement</p>
                    <p className="text-muted-foreground">{application.problem}</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Differentiation</p>
                    <p className="text-muted-foreground">{application.differentiation}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Market & Traction */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Market & Traction</CardTitle>
                  <CardDescription>Market information and current traction</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Current Customers</p>
                      <p className="font-medium text-foreground">{application.customers}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Progress (1-10)</p>
                      <p className="font-medium text-foreground">{application.progress}/10</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Potential Customers</p>
                    <p className="text-foreground">{application.potentialCustomers}</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Milestones</p>
                    <p className="text-foreground">{application.milestones}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Funding */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Funding Information</CardTitle>
                  <CardDescription>Details about funding and investment</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Funding Secured</p>
                      <p className="font-medium text-foreground">{application.fundingSecured}</p>
                    </div>
                    {application.fundingSecured === "Yes" && (
                      <>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Investment Amount</p>
                          <p className="font-medium text-foreground">{application.investmentAmount}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Investment Type</p>
                          <p className="font-medium text-foreground">{application.investmentType}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Valuation</p>
                          <p className="font-medium text-foreground">{application.valuation}</p>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Benefits Sought</p>
                    <div className="flex flex-wrap gap-2">
                      {application.benefits.map((benefit, index) => (
                        <Badge key={index} variant="secondary" className="bg-muted/20 text-foreground">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="documents">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Documents</CardTitle>
                  <CardDescription>Attached documents and files</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <p className="text-muted-foreground">No documents have been uploaded for this application.</p>
                    <Button className="mt-4 bg-brand-gradient-primary">Upload Documents</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="history">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Application History</CardTitle>
                  <CardDescription>Timeline of changes and updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-1 bg-brand-orange rounded-full"></div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className="font-medium text-foreground">Application Submitted</p>
                          <p className="text-sm text-muted-foreground">{application.submissionDate}</p>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {application.startupName} submitted their application
                        </p>
                      </div>
                    </div>

                    {application.status !== "pending" && (
                      <div className="flex gap-4">
                        <div className="w-1 bg-brand-blue-sky rounded-full"></div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <p className="font-medium text-foreground">
                              Application {application.status === "approved" ? "Approved" : "Rejected"}
                            </p>
                            <p className="text-sm text-muted-foreground">{new Date().toISOString().slice(0, 10)}</p>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Admin user {application.status === "approved" ? "approved" : "rejected"} the application
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contact Information */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href={`mailto:${application.email}`} className="text-brand-blue-deep hover:underline">
                  {application.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href={`tel:${application.phone}`} className="text-brand-blue-deep hover:underline">
                  {application.phone}
                </a>
              </div>
              {application.website && (
                <div className="flex items-center gap-3">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <a
                    href={application.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue-deep hover:underline"
                  >
                    {application.website}
                  </a>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quick Info */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Quick Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Team Size</span>
                </div>
                <span className="font-medium">{application.teamSize}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Sector</span>
                </div>
                <span className="font-medium">{application.sector}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CheckSquare className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Validated</span>
                </div>
                <span className="font-medium">{application.validated}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Submitted</span>
                </div>
                <span className="font-medium">{application.submissionDate}</span>
              </div>
            </CardContent>
          </Card>

          {/* Admin Notes */}
          <Card className="border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle>Admin Notes</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsEditing(!isEditing)}
                className="h-8 w-8 text-muted-foreground"
              >
                <Edit className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              {isEditing ? (
                <div className="space-y-2">
                  <Textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Add notes about this application..."
                    className="min-h-[120px] border-border"
                  />
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleSaveNotes} className="bg-brand-gradient-primary">
                      Save Notes
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  {notes ? (
                    <p className="text-foreground">{notes}</p>
                  ) : (
                    <p className="text-muted-foreground italic">No notes added yet.</p>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Actions */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full bg-brand-gradient-primary">
                <MessageSquare className="h-4 w-4 mr-2" /> Send Message
              </Button>
              <Button
                variant="outline"
                className="w-full border-border text-foreground hover:bg-muted/20 bg-transparent"
              >
                <Calendar className="h-4 w-4 mr-2" /> Schedule Interview
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
