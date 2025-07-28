"use client"

import { useMemo, useState } from "react"
import { ArrowUpDown, CheckCircle, ChevronDown, Eye, XCircle, Filter, Search, Download, Plus } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
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
}

/* -------------------------------------------------------------------------- */
/*                               Mock generator                               */
/* -------------------------------------------------------------------------- */

function makeMockApps(count = 20): Application[] {
  const sectors = ["E-commerce", "Fintech", "Agriculture", "Technology", "Health", "Education", "Logistics", "Other"]
  const statuses: Status[] = ["pending", "approved", "rejected"]
  const teamSizes = ["1", "2", "3", "4", "5", "6", ">6"]
  const validatedOptions = ["Yes", "No"]
  const fundingOptions = ["Yes", "No"]
  const investmentTypes = ["Free seed funding", "Equity seed funding"]
  const progressScale = Array.from({ length: 10 }, (_, i) => String(i + 1))
  const benefitsOptions = ["Funding", "Resources (e.g. office)", "Mentorship", "Marketing"]

  return Array.from({ length: count }, (_, i) => {
    const daysAgo = Math.floor(Math.random() * 30)
    const date = new Date(Date.now() - daysAgo * 86_400_000).toISOString().slice(0, 10)

    const fundingSecured = fundingOptions[Math.floor(Math.random() * fundingOptions.length)]
    const hasFunding = fundingSecured === "Yes"

    return {
      id: `APP-${String(i + 1).padStart(3, "0")}`,
      startupName: `Startup ${i + 1}`,
      email: `founder${i + 1}@example.com`,
      phone: `+251-911-${String(Math.floor(Math.random() * 9000) + 1000).padStart(4, "0")}-${String(Math.floor(Math.random() * 9000) + 1000).padStart(4, "0")}`,
      website: i % 3 === 0 ? `https://startup${i + 1}.com` : undefined,
      teamSize: teamSizes[Math.floor(Math.random() * teamSizes.length)],
      sector: sectors[Math.floor(Math.random() * sectors.length)],
      description: `This is a detailed description for Startup ${i + 1}. We aim to revolutionize the ${sectors[Math.floor(Math.random() * sectors.length)].toLowerCase()} sector with our innovative solution.`,
      problem: `The current market lacks efficient solutions for ${sectors[Math.floor(Math.random() * sectors.length)].toLowerCase()} challenges.`,
      differentiation: `Our unique AI-powered approach provides a ${Math.random() > 0.5 ? "10x faster" : "50% cheaper"} solution than existing alternatives.`,
      validated: validatedOptions[Math.floor(Math.random() * validatedOptions.length)],
      customers: String(Math.floor(Math.random() * 1000)),
      potentialCustomers: `Millions in the ${sectors[Math.floor(Math.random() * sectors.length)].toLowerCase()} market.`,
      milestones: `Achieved MVP, secured initial users, and completed seed round.`,
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
    }
  })
}

/* -------------------------------------------------------------------------- */
/*                                Page component                              */
/* -------------------------------------------------------------------------- */

export default function ApplicationsPage() {
  const [apps, setApps] = useState<Application[]>(makeMockApps(50))
  const [statusFilter, setStatusFilter] = useState<Status | "all">("all")
  const [sectorFilter, setSectorFilter] = useState<string | "all">("all")
  const [search, setSearch] = useState("")
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc")

  /* --------------------------- derived application list --------------------------- */

  const sectors = useMemo(() => {
    const uniqueSectors = new Set(apps.map((app) => app.sector))
    return Array.from(uniqueSectors)
  }, [apps])

  const visibleApps = useMemo(() => {
    let list = apps

    // filter by status
    if (statusFilter !== "all") list = list.filter((a) => a.status === statusFilter)

    // filter by sector
    if (sectorFilter !== "all") list = list.filter((a) => a.sector === sectorFilter)

    // search
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
  }, [apps, statusFilter, sectorFilter, search, sortDir])

  /* --------------------------------- helpers --------------------------------- */

  const badgeVariant = (s: Status) =>
    (({ pending: "outline", approved: "default", rejected: "destructive" }) as const)[s]

  const changeStatus = (id: string, status: Status) =>
    setApps((prev) => prev.map((a) => (a.id === id ? { ...a, status } : a)))

  /* ---------------------------------- render --------------------------------- */

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Applications</h1>
          <p className="text-muted-foreground">Manage and review startup applications</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-border text-foreground hover:bg-muted/20 bg-transparent">
            <Download className="h-4 w-4 mr-2" /> Export
          </Button>
          <Button className="bg-brand-gradient-primary">
            <Plus className="h-4 w-4 mr-2" /> Add Application
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card className="mb-8 p-4 border-border">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search applications..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="max-w-sm bg-muted/20 border-border focus:ring-brand-blue-deep"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4 self-stretch">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Filters:</span>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="capitalize bg-transparent border-border text-foreground hover:bg-muted/20"
                >
                  Status: {statusFilter} <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card border-border">
                {["all", "pending", "approved", "rejected"].map((s) => (
                  <DropdownMenuItem
                    key={s}
                    onClick={() => setStatusFilter(s as any)}
                    className="text-foreground hover:bg-muted/20"
                  >
                    {s}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="capitalize bg-transparent border-border text-foreground hover:bg-muted/20"
                >
                  Sector: {sectorFilter} <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card border-border">
                <DropdownMenuItem onClick={() => setSectorFilter("all")} className="text-foreground hover:bg-muted/20">
                  all
                </DropdownMenuItem>
                {sectors.map((s) => (
                  <DropdownMenuItem
                    key={s}
                    onClick={() => setSectorFilter(s)}
                    className="text-foreground hover:bg-muted/20"
                  >
                    {s}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="outline"
              onClick={() => setSortDir(sortDir === "asc" ? "desc" : "asc")}
              className="bg-transparent border-border text-foreground hover:bg-muted/20"
            >
              Date {sortDir === "asc" ? "↑" : "↓"} <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>

      {/* Applications Table */}
      <div className="border border-border rounded-lg overflow-hidden shadow-lg">
        <Table>
          <TableHeader className="bg-muted/20">
            <TableRow>
              <TableHead className="text-foreground">Startup</TableHead>
              <TableHead className="text-foreground">Email</TableHead>
              <TableHead className="text-foreground">Sector</TableHead>
              <TableHead className="text-foreground">Date</TableHead>
              <TableHead className="text-foreground">Status</TableHead>
              <TableHead className="text-right text-foreground">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {visibleApps.length ? (
              visibleApps.map((app) => (
                <TableRow key={app.id} className="hover:bg-muted/10">
                  <TableCell className="font-medium text-foreground">{app.startupName}</TableCell>
                  <TableCell className="text-muted-foreground">{app.email}</TableCell>
                  <TableCell className="text-muted-foreground">{app.sector}</TableCell>
                  <TableCell className="text-muted-foreground">{app.submissionDate}</TableCell>
                  <TableCell>
                    <Badge variant={badgeVariant(app.status)} className="capitalize">
                      {app.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-border text-muted-foreground hover:bg-muted/20 bg-transparent"
                      asChild
                    >
                      <Link href={`/admin/applications/${app.id}`}>
                        <Eye className="h-4 w-4" />
                      </Link>
                    </Button>
                    {app.status === "pending" && (
                      <>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => changeStatus(app.id, "approved")}
                          className="border-border text-brand-blue-sky hover:bg-muted/20"
                        >
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => changeStatus(app.id, "rejected")}
                          className="border-border text-destructive hover:bg-muted/20"
                        >
                          <XCircle className="h-4 w-4" />
                        </Button>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                  No applications match your criteria.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-medium">{visibleApps.length}</span> of{" "}
          <span className="font-medium">{apps.length}</span> applications
        </p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-border text-foreground hover:bg-muted/20 bg-transparent"
          >
            Previous
          </Button>
          <Button variant="outline" size="sm" className="border-border bg-muted/20 text-foreground">
            1
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-border text-foreground hover:bg-muted/20 bg-transparent"
          >
            2
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-border text-foreground hover:bg-muted/20 bg-transparent"
          >
            3
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-border text-foreground hover:bg-muted/20 bg-transparent"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
