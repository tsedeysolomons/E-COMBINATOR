import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <Skeleton className="h-10 w-64 mb-2" />
          <Skeleton className="h-6 w-96" />
        </div>
        <Skeleton className="h-10 w-40" />
      </div>

      {/* Key Metrics Skeletons */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i} className="border-0 shadow-lg rounded-2xl bg-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-4 rounded-full" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-8 w-24 mb-1" />
              <Skeleton className="h-4 w-48" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Skeletons */}
      <div className="grid gap-6 md:grid-cols-2 mb-8">
        {Array.from({ length: 2 }).map((_, i) => (
          <Card key={i} className="border-0 shadow-lg rounded-2xl bg-card">
            <CardHeader>
              <Skeleton className="h-6 w-48 mb-2" />
              <Skeleton className="h-4 w-64" />
            </CardHeader>
            <CardContent className="h-[300px] flex items-center justify-center">
              <Skeleton className="h-full w-full rounded-lg" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Metrics Skeletons */}
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <Card key={i} className="border-0 shadow-lg rounded-2xl bg-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-4 rounded-full" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-8 w-24 mb-1" />
              <Skeleton className="h-4 w-48" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Applications Table Skeleton */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-6 w-24" />
        </div>
        <div className="border border-border rounded-lg overflow-hidden shadow-lg">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/20">
                {Array.from({ length: 5 }).map((_, i) => (
                  <th key={i} className="p-4 text-left">
                    <Skeleton className="h-4 w-24" />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, i) => (
                <tr key={i} className="hover:bg-muted/10">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <td key={j} className="p-4">
                      <Skeleton className="h-4 w-32" />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
