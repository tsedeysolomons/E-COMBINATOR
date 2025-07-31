"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpDown,
  CheckCircle,
  ChevronDown,
  Eye,
  XCircle,
  Filter,
  Search,
  Download,
  Plus,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { getApplications, updateApplicationStatus } from "@/lib/applications";

// Define types
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
}

export default function ApplicationsPage() {
  const [apps, setApps] = useState<Application[]>([]);
  const [statusFilter, setStatusFilter] = useState<Status | "all">("all");
  const [sectorFilter, setSectorFilter] = useState<string | "all">("all");
  const [search, setSearch] = useState("");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const appsPerPage = 10;

  // Fetch applications on mount
  useEffect(() => {
    async function fetchApplications() {
      try {
        setLoading(true);
        const result = await getApplications();
        if (result.success && result.data) {
          setApps(result.data);
        } else {
          setError(result.message || "Failed to load applications");
        }
      } catch (err) {
        setError("An unexpected error occurred");
        console.error("Applications fetch error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchApplications();
  }, []);

  // Update application status
  const changeStatus = async (id: string, status: Status) => {
    try {
      const result = await updateApplicationStatus(id, status);
      if (result.success) {
        setApps((prev) =>
          prev.map((a) => (a.id === id ? { ...a, status } : a))
        );
      } else {
        console.error(result.message);
      }
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  // Derived sectors
  const sectors = useMemo(() => {
    const uniqueSectors = new Set(apps.map((app) => app.sector));
    return Array.from(uniqueSectors);
  }, [apps]);

  // Filtered and sorted applications
  const visibleApps = useMemo(() => {
    let list = apps;

    // Filter by status
    if (statusFilter !== "all")
      list = list.filter((a) => a.status === statusFilter);

    // Filter by sector
    if (sectorFilter !== "all")
      list = list.filter((a) => a.sector === sectorFilter);

    // Search
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (a) =>
          a.startupName.toLowerCase().includes(q) ||
          a.email.toLowerCase().includes(q) ||
          a.sector.toLowerCase().includes(q)
      );
    }

    // Sort
    list = [...list].sort((a, b) =>
      sortDir === "asc"
        ? a.submissionDate.localeCompare(b.submissionDate)
        : b.submissionDate.localeCompare(b.submissionDate)
    );

    // Pagination
    const start = (page - 1) * appsPerPage;
    const end = start + appsPerPage;
    return list.slice(start, end);
  }, [apps, statusFilter, sectorFilter, search, sortDir, page]);

  // Helper for badge variant
  const badgeVariant = (s: Status) =>
    ((
      {
        pending: "outline",
        approved: "default",
        rejected: "destructive",
      } as const
    )[s]);

  // Loading state
  if (loading) {
    return (
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="h-8 w-64 bg-muted rounded" />
            <div className="h-4 w-96 bg-muted rounded mt-2" />
          </div>
          <div className="flex gap-2">
            <div className="h-10 w-28 bg-muted rounded" />
            <div className="h-10 w-28 bg-muted rounded" />
          </div>
        </div>
        <div className="mb-8 p-4 bg-muted rounded-lg">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="h-10 w-full md:w-64 bg-muted rounded" />
            <div className="flex gap-2">
              <div className="h-10 w-24 bg-muted rounded" />
              <div className="h-10 w-24 bg-muted rounded" />
              <div className="h-10 w-24 bg-muted rounded" />
            </div>
          </div>
        </div>
        <div className="h-64 bg-muted rounded-lg" />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="p-8 text-center">
        <div className="flex items-center justify-center gap-2 text-destructive">
          <XCircle className="h-6 w-6" />
          <p>{error}</p>
        </div>
        <Button onClick={() => window.location.reload()} className="mt-4">
          Retry
        </Button>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Applications</h1>
          <p className="text-muted-foreground">
            Manage and review startup applications
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="border-border text-foreground hover:bg-muted/20 bg-transparent"
          >
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
                  Status: {statusFilter}{" "}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-card border-border"
              >
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
                  Sector: {sectorFilter}{" "}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-card border-border"
              >
                <DropdownMenuItem
                  onClick={() => setSectorFilter("all")}
                  className="text-foreground hover:bg-muted/20"
                >
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
              Date {sortDir === "asc" ? "↑" : "↓"}{" "}
              <ArrowUpDown className="ml-2 h-4 w-4" />
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
              <TableHead className="text-right text-foreground">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {visibleApps.length ? (
              visibleApps.map((app) => (
                <TableRow key={app.id} className="hover:bg-muted/10">
                  <TableCell className="font-medium text-foreground">
                    {app.startupName}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {app.email}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {app.sector}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {app.submissionDate}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={badgeVariant(app.status)}
                      className="capitalize"
                    >
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
                    {app.status && (
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
                <TableCell
                  colSpan={6}
                  className="text-center py-8 text-muted-foreground"
                >
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
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            Previous
          </Button>
          {Array.from(
            { length: Math.ceil(apps.length / appsPerPage) },
            (_, i) => (
              <Button
                key={i + 1}
                variant={page === i + 1 ? "default" : "outline"}
                size="sm"
                className={`border-border ${
                  page === i + 1
                    ? "bg-muted/20"
                    : "text-foreground hover:bg-muted/20 bg-transparent"
                }`}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </Button>
            )
          )}
          <Button
            variant="outline"
            size="sm"
            className="border-border text-foreground hover:bg-muted/20 bg-transparent"
            onClick={() =>
              setPage((p) =>
                Math.min(Math.ceil(apps.length / appsPerPage), p + 1)
              )
            }
            disabled={page === Math.ceil(apps.length / appsPerPage)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
