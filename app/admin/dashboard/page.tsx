"use client"

import { useMemo, useState } from "react"
import { Eye, Users, Check, Clock, X, DollarSign, Briefcase, ArrowRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import Link from "next/link"

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

type Status = "pending" | "approved" | "rejected"

interface Application {
  id: string
  startupName: string
  email: string
  sector: string
  submissionDate: string // ISO - "YYYY-MM-DD"
  status: Status
}

/* -------------------------------------------------------------------------- */
/*                               Mock generator                               */
/* -------------------------------------------------------------------------- */

function makeMockApps(count = 20): Application[] {
  const sectors = ["E-commerce", "Fintech", "Agriculture", "Technology", "Health", "Education", "Logistics", "Other"]
  const statuses: Status[] = ["pending", "approved", "rejected"]

  return Array.from({ length: count }, (_, i) => {
    const daysAgo = Math.floor(Math.random() * 30)
    const date = new Date(Date.now() - daysAgo * 86_400_000).toISOString().slice(0, 10)

    return {
      id: `APP-${String(i + 1).padStart(3, "0")}`,
      startupName: `Startup ${i + 1}`,
      email: `founder${i + 1}@example.com`,
      sector: sectors[Math.floor(Math.random() * sectors.length)],
      submissionDate: date,
      status: statuses[Math.floor(Math.random() * statuses.length)],
    }
  })
}

/* -------------------------------------------------------------------------- */
/*                                Page component                              */
/* -------------------------------------------------------------------------- */

export default function AdminDashboard() {
  const [apps, setApps] = useState<Application[]>(makeMockApps(50))
  const [statusFilter, setStatusFilter] = useState<Status | "all">("all")
  const [search, setSearch] = useState("")
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc")

  /* --------------------------- derived application list --------------------------- */

  const visibleApps = useMemo(() => {
    let list = apps

    // filter
    if (statusFilter !== "all") list = list.filter((a) => a.status === statusFilter)
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(
        (a) =>
          a.startupName.toLowerCase().includes(q) ||
          a.email.toLowerCase().includes(q) ||
          a.sector.toLowerCase().includes(q),
      )
    }

    // sort
    list = [...list].sort((a, b) =>
      sortDir === "asc"
        ? a.submissionDate.localeCompare(b.submissionDate)
        : b.submissionDate.localeCompare(a.submissionDate),
    )

    return list
  }, [apps, statusFilter, search, sortDir])

  /* --------------------------- analytics data --------------------------- */
  const analyticsData = useMemo(() => {
    const total = apps.length
    const approved = apps.filter((app) => app.status === "approved").length
    const pending = apps.filter((app) => app.status === "pending").length
    const rejected = apps.filter((app) => app.status === "rejected").length

    const statusData = [
      { name: "Approved", value: approved, color: "#57BBF7" }, // Sky Blue
      { name: "Pending", value: pending, color: "#F58220" }, // Orange
      { name: "Rejected", value: rejected, color: "#FF4D4F" }, // Red
    ]

    // Calculate sector distribution
    const sectorCounts: Record<string, number> = {}
    apps.forEach((app) => {
      sectorCounts[app.sector] = (sectorCounts[app.sector] || 0) + 1
    })

    const sectorData = Object.entries(sectorCounts).map(([name, value]) => ({
      name,
      value,
    }))

    // Calculate daily submissions for the last 7 days
    const today = new Date()
    const last7Days = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(today)
      date.setDate(date.getDate() - i)
      return date.toISOString().slice(0, 10)
    }).reverse()

    const dailySubmissions = last7Days.map((date) => {
      const count = apps.filter((app) => app.submissionDate === date).length
      return {
        date,
        count,
      }
    })

    return { total, approved, pending, rejected, statusData, sectorData, dailySubmissions }
  }, [apps])

  /* --------------------------------- helpers --------------------------------- */

  const badgeVariant = (s: Status) =>
    (({ pending: "outline", approved: "default", rejected: "destructive" }) as const)[s]

  /* ---------------------------------- render --------------------------------- */

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="text-muted-foreground">Overview of application statistics and recent submissions</p>
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
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Applications</CardTitle>
            <Users className="h-4 w-4 text-brand-orange" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{analyticsData.total}</div>
            <p className="text-xs text-muted-foreground">All applications received</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg rounded-2xl bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Approved</CardTitle>
            <Check className="h-4 w-4 text-brand-blue-sky" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{analyticsData.approved}</div>
            <p className="text-xs text-muted-foreground">
              {Math.round((analyticsData.approved / analyticsData.total) * 100)}% approval rate
            </p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg rounded-2xl bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending Review</CardTitle>
            <Clock className="h-4 w-4 text-brand-orange" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{analyticsData.pending}</div>
            <p className="text-xs text-muted-foreground">Applications awaiting decision</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg rounded-2xl bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Rejected</CardTitle>
            <X className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{analyticsData.rejected}</div>
            <p className="text-xs text-muted-foreground">
              {Math.round((analyticsData.rejected / analyticsData.total) * 100)}% rejection rate
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
            <CardDescription>Distribution of application statuses</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={analyticsData.statusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent! * 100).toFixed(0)}%`}
                >
                  {analyticsData.statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => [`${value} applications`, ""]}
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
            <CardDescription>Applications received over the last 7 days</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={analyticsData.dailySubmissions}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  formatter={(value) => [`${value} applications`, "Submissions"]}
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
            <CardTitle className="text-sm font-medium text-muted-foreground">Average Team Size</CardTitle>
            <Users className="h-4 w-4 text-brand-blue-deep" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">3.7</div>
            <p className="text-xs text-muted-foreground">People per startup</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg rounded-2xl bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Funding Requested</CardTitle>
            <DollarSign className="h-4 w-4 text-brand-blue-sky" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">$2.4M</div>
            <p className="text-xs text-muted-foreground">Total funding requested</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg rounded-2xl bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Top Sector</CardTitle>
            <Briefcase className="h-4 w-4 text-brand-orange" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">Technology</div>
            <p className="text-xs text-muted-foreground">32% of all applications</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Applications */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-foreground">Recent Applications</h2>
          <Link href="/admin/applications" className="text-brand-blue-deep hover:text-brand-blue-deep/80 text-sm">
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
                <TableHead className="text-right text-foreground">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {visibleApps.slice(0, 5).map((app) => (
                <TableRow key={app.id} className="hover:bg-muted/10">
                  <TableCell className="font-medium text-foreground">{app.startupName}</TableCell>
                  <TableCell className="text-muted-foreground">{app.sector}</TableCell>
                  <TableCell className="text-muted-foreground">{app.submissionDate}</TableCell>
                  <TableCell>
                    <Badge variant={badgeVariant(app.status)} className="capitalize">
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
  )
}
