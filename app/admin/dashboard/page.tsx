"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Eye,
  Users,
  Check,
  Clock,
  X,
  DollarSign,
  Briefcase,
  ArrowRight,
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Link from "next/link";
import { getApplicationAnalytics } from "@/lib/analytics";

// Define the analytics data type (matching analyticsSchema)
interface AnalyticsData {
  totalApplications: number;
  approved: { count: number; percentage: number };
  pending: { count: number; percentage: number };
  rejected: { count: number; percentage: number };
  dailySubmissions: { date: string; count: number }[];
  averageTeamSize: number;
  totalFundingRequested: number;
  topSector: { sector: string; percentage: number };
  recentApplications: {
    id: number;
    startupName: string;
    sector: string;
    date: string;
    status: string;
  }[];
}

export default function AdminDashboard() {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Fetch analytics data on mount
  useEffect(() => {
    async function fetchAnalytics() {
      try {
        setLoading(true);
        const result = await getApplicationAnalytics();
        if (result.success && result.data) {
          setAnalytics(result.data);
        } else {
          setError(result.message || "Failed to load analytics");
        }
      } catch (err) {
        setError("An unexpected error occurred");
        console.error("Analytics fetch error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchAnalytics();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="h-8 w-64 bg-muted rounded" />
            <div className="h-4 w-96 bg-muted rounded mt-2" />
          </div>
          <div className="h-10 w-40 bg-muted rounded" />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-32 bg-muted rounded-2xl" />
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <div className="h-80 bg-muted rounded-2xl" />
          <div className="h-80 bg-muted rounded-2xl" />
        </div>
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-32 bg-muted rounded-2xl" />
          ))}
        </div>
        <div className="h-64 bg-muted rounded-2xl" />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="p-8">
        <div className="flex items-center justify-center gap-2 text-destructive">
          <X className="h-6 w-6" />
          <p>{error}</p>
        </div>
        <Button onClick={() => window.location.reload()} className="mt-4">
          Retry
        </Button>
      </div>
    );
  }

  // Data state
  if (!analytics) {
    return null;
  }

  // Prepare chart data
  const statusData = [
    {
      name: "Approved",
      value: analytics.approved.percentage,
      count: analytics.approved.count,
      color: "#57BBF7",
    },
    {
      name: "Pending",
      value: analytics.pending.percentage,
      count: analytics.pending.count,
      color: "#F58220",
    },
    {
      name: "Rejected",
      value: analytics.rejected.percentage,
      count: analytics.rejected.count,
      color: "#FF4D4F",
    },
  ];

  const badgeVariant = (s: string) =>
    ((
      {
        pending: "outline",
        approved: "default",
        rejected: "destructive",
      } as const
    )[s as "pending" | "approved" | "rejected"] || "outline");

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">
            Overview of application statistics and recent submissions
          </p>
        </div>
        <Button className="bg-brand-gradient-primary">
          <Link href="/admin/applications" className="flex items-center gap-2">
            View All Applications <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card className="border-0 shadow-lg rounded-2xl bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Applications
            </CardTitle>
            <Users className="h-4 w-4 text-brand-orange" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {analytics.totalApplications}
            </div>
            <p className="text-xs text-muted-foreground">
              All applications received
            </p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg rounded-2xl bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Approved
            </CardTitle>
            <Check className="h-4 w-4 text-brand-blue-sky" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {analytics.approved.count}
            </div>
            <p className="text-xs text-muted-foreground">
              {analytics.approved.percentage}% approval rate
            </p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg rounded-2xl bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pending Review
            </CardTitle>
            <Clock className="h-4 w-4 text-brand-orange" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {analytics.pending.count}
            </div>
            <p className="text-xs text-muted-foreground">
              Applications awaiting decision
            </p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg rounded-2xl bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Rejected
            </CardTitle>
            <X className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {analytics.rejected.count}
            </div>
            <p className="text-xs text-muted-foreground">
              {analytics.rejected.percentage}% rejection rate
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid gap-6 md:grid-cols-2 mb-8">
        {/* Status Distribution */}
        <Card className="border-0 shadow-lg rounded-2xl bg-card">
          <CardHeader>
            <CardTitle>Application Status</CardTitle>
            <CardDescription>
              Distribution of application statuses
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value?.toFixed(0)}%`}
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name, props) => [
                    `${props.payload.count} applications`,
                    name,
                  ]}
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    borderColor: "hsl(var(--border))",
                    borderRadius: "0.5rem",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Daily Submissions */}
        <Card className="border-0 shadow-lg rounded-2xl bg-card">
          <CardHeader>
            <CardTitle>Daily Submissions</CardTitle>
            <CardDescription>
              Applications received over the last 7 days
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={analytics.dailySubmissions}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(var(--border))"
                />
                <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  formatter={(value) => [
                    `${value} applications`,
                    "Submissions",
                  ]}
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    borderColor: "hsl(var(--border))",
                    borderRadius: "0.5rem",
                  }}
                />
                <Bar dataKey="count" fill="#F58220" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Additional Metrics */}
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card className="border-0 shadow-lg rounded-2xl bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Average Team Size
            </CardTitle>
            <Users className="h-4 w-4 text-brand-blue-deep" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {analytics.averageTeamSize}
            </div>
            <p className="text-xs text-muted-foreground">People per startup</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg rounded-2xl bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Funding Requested
            </CardTitle>
            <DollarSign className="h-4 w-4 text-brand-blue-sky" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              ${(analytics.totalFundingRequested / 1000000).toFixed(1)}M
            </div>
            <p className="text-xs text-muted-foreground">
              Total funding requested
            </p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg rounded-2xl bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Top Sector
            </CardTitle>
            <Briefcase className="h-4 w-4 text-brand-orange" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {analytics.topSector.sector}
            </div>
            <p className="text-xs text-muted-foreground">
              {analytics.topSector.percentage}% of all applications
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Applications */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-foreground">
            Recent Applications
          </h2>
          <Link
            href="/admin/applications"
            className="text-brand-blue-deep hover:text-brand-blue-deep/80 text-sm"
          >
            View all
          </Link>
        </div>
        <div className="border border-border rounded-lg overflow-hidden shadow-lg">
          <Table>
            <TableHeader className="bg-muted/20">
              <TableRow>
                <TableHead className="text-foreground">Startup</TableHead>
                <TableHead className="text-foreground">Sector</TableHead>
                <TableHead className="text-foreground">Date</TableHead>
                <TableHead className="text-foreground">Status</TableHead>
                <TableHead className="text-right text-foreground">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {analytics.recentApplications.map((app) => (
                <TableRow key={app.startupName} className="hover:bg-muted/10">
                  <TableCell className="font-medium text-foreground">
                    {app.startupName}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {app.sector}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {app.date}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={badgeVariant(app.status)}
                      className="capitalize"
                    >
                      {app.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border text-muted-foreground hover:bg-muted/20 bg-transparent"
                      asChild
                    >
                      <Link href={`/admin/applications/${app.id}`}>
                        <Eye className="h-4 w-4 mr-2" /> View
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
