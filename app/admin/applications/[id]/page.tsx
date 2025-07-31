"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
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
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Link from "next/link";
import {
  getApplicationById,
  updateApplicationDetails,
} from "@/lib/applicationDetails";

// Types
type Status = "pending" | "approved" | "rejected";

interface Application {
  id: string;
  startupName: string;
  email: string;
  phone: string;
  website?: string;
  teamSize: string;
  sector: string;
  description: string;
  problem: string;
  differentiation: string;
  validated: string;
  customers: string;
  potentialCustomers: string;
  milestones: string;
  benefits: string[];
  fundingSecured: string;
  investmentAmount?: string;
  investmentType?: string;
  valuation?: string;
  progress: string;
  submissionDate: string;
  status: Status;
  notes?: string;
}

export default function ApplicationDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [application, setApplication] = useState<Application | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notes, setNotes] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    async function fetchApplication() {
      if (typeof params.id !== "string") {
        setError("Invalid application ID");
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const result = await getApplicationById(params.id);
        if (result.success && result.data) {
          setApplication(result.data);
          setNotes(result.data.adminNote || "");

          console.log(result.data);
        } else {
          setError(result.message || "Failed to load application");
        }
      } catch (err) {
        setError("An unexpected error occurred");
        console.error("Application fetch error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchApplication();
  }, [params.id]);

  const handleStatusChange = async (status: Status) => {
    if (!application) return;

    const prevStatus = application.status;
    setApplication({ ...application, status }); // Optimistic update

    try {
      const result = await updateApplicationDetails(application.id, { status });
      if (!result.success) {
        setApplication({ ...application, status: prevStatus }); // Revert on failure
        console.error(result.message);
      }
    } catch (err) {
      setApplication({ ...application, status: prevStatus }); // Revert on error
      console.error("Error updating status:", err);
    }
  };

  const handleSaveNotes = async () => {
    if (!application) return;

    const prevNotes = application.notes;
    setApplication({ ...application, notes }); // Optimistic update
    setIsEditing(false);

    try {
      const result = await updateApplicationDetails(application.id, { notes });
      if (!result.success) {
        setApplication({ ...application, notes: prevNotes }); // Revert on failure
        setIsEditing(true);
        console.error(result.message);
      }
    } catch (err) {
      setApplication({ ...application, notes: prevNotes }); // Revert on error
      setIsEditing(true);
      console.error("Error saving notes:", err);
    }
  };

  const badgeVariant = (s: Status) =>
    ((
      {
        pending: "outline",
        approved: "default",
        rejected: "destructive",
      } as const
    )[s]);

  if (loading) {
    return (
      <div className="p-8 flex items-center justify-center h-full">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-orange mx-auto"></div>
          <p className="mt-4 text-muted-foreground">
            Loading application details...
          </p>
        </div>
      </div>
    );
  }

  if (error || !application) {
    return (
      <div className="p-8">
        <Alert variant="destructive">
          <AlertDescription>
            {error ||
              "Application not found. The requested application may have been deleted."}
          </AlertDescription>
        </Alert>
        <Button className="mt-4" asChild>
          <Link href="/admin/applications">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Applications
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="border-border text-foreground hover:bg-muted/20 bg-transparent"
            asChild
          >
            <Link href="/admin/applications">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              {application.startupName}
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <Badge
                variant={badgeVariant(application.status)}
                className="capitalize"
              >
                {application.status}
              </Badge>
              <span className="text-sm text-muted-foreground">
                ID: {application.id}
              </span>
              <span className="text-sm text-muted-foreground">
                Submitted:{" "}
                {new Date(application.submissionDate).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="border-border text-foreground hover:bg-muted/20 bg-transparent"
          >
            <Download className="h-4 w-4 mr-2" /> Export
          </Button>
          <Button
            variant="outline"
            className="border-border text-destructive hover:bg-destructive/10 bg-transparent"
          >
            <Trash2 className="h-4 w-4 mr-2" /> Delete
          </Button>
          {application.status && ( // === "pending"
            <>
              <Button
                onClick={() => handleStatusChange("approved")}
                className="bg-brand-blue-sky hover:bg-brand-blue-sky/90"
              >
                <CheckCircle className="h-4 w-4 mr-2" /> Approve
              </Button>
              <Button
                onClick={() => handleStatusChange("rejected")}
                variant="destructive"
              >
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
                  <CardDescription>
                    Basic information about the startup
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">
                        Startup Name
                      </p>
                      <p className="font-medium text-foreground">
                        {application.startupName}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Sector</p>
                      <p className="font-medium text-foreground">
                        {application.sector}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Team Size</p>
                      <p className="font-medium text-foreground">
                        {application.teamSize}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">
                        Idea Validated
                      </p>
                      <p className="font-medium text-foreground">
                        {application.validated}
                      </p>
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
                  <CardDescription>
                    The problem being addressed and the proposed solution
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">
                      Problem Statement
                    </p>
                    <p className="text-muted-foreground">
                      {application.problem}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">
                      Differentiation
                    </p>
                    <p className="text-muted-foreground">
                      {application.differentiation}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Market & Traction */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Market & Traction</CardTitle>
                  <CardDescription>
                    Market information and current traction
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">
                        Current Customers
                      </p>
                      <p className="font-medium text-foreground">
                        {application.customers}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">
                        Progress (1-10)
                      </p>
                      <p className="font-medium text-foreground">
                        {application.progress}/10
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Potential Customers
                    </p>
                    <p className="text-foreground">
                      {application.potentialCustomers}
                    </p>
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
                  <CardDescription>
                    Details about funding and investment
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">
                        Funding Secured
                      </p>
                      <p className="font-medium text-foreground">
                        {application.fundingSecured}
                      </p>
                    </div>
                    {application.fundingSecured === "Yes" && (
                      <>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">
                            Investment Amount
                          </p>
                          <p className="font-medium text-foreground">
                            {application.investmentAmount}
                          </p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">
                            Investment Type
                          </p>
                          <p className="font-medium text-foreground">
                            {application.investmentType}
                          </p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">
                            Valuation
                          </p>
                          <p className="font-medium text-foreground">
                            {application.valuation}
                          </p>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Benefits Sought
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {application.benefits.map((benefit, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-muted/20 text-foreground"
                        >
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
                  <CardDescription>
                    Attached documents and files
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <p className="text-muted-foreground">
                      No documents have been uploaded for this application.
                    </p>
                    <Button className="mt-4 bg-brand-gradient-primary">
                      Upload Documents
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="history">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Application History</CardTitle>
                  <CardDescription>
                    Timeline of changes and updates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-1 bg-brand-orange rounded-full"></div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className="font-medium text-foreground">
                            Application Submitted
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {application.submissionDate}
                          </p>
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
                              Application{" "}
                              {application.status === "approved"
                                ? "Approved"
                                : "Rejected"}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {new Date().toISOString().slice(0, 10)}
                            </p>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Admin user{" "}
                            {application.status === "approved"
                              ? "approved"
                              : "rejected"}{" "}
                            the application
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
                <a
                  href={`mailto:${application.email}`}
                  className="text-brand-blue-deep hover:underline"
                >
                  {application.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a
                  href={`tel:${application.phone}`}
                  className="text-brand-blue-deep hover:underline"
                >
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
                <span className="font-medium">
                  {application.submissionDate}
                </span>
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
                    <Button
                      variant="outline"
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleSaveNotes}
                      className="bg-brand-gradient-primary"
                    >
                      Save Notes
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  {notes ? (
                    <p className="text-foreground">{notes}</p>
                  ) : (
                    <p className="text-muted-foreground italic">
                      No notes added yet.
                    </p>
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
  );
}