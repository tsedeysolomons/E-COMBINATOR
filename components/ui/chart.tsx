"use client"
import { LabelList, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function Component() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
      <RadialBarChart
        data={chartData}
        cx="50%"
        cy="30%"
        innerRadius={20}
        outerRadius={140}
        barSize={24}
        angleAxisId={0}
        startAngle={90}
        endAngle={450}
      >
        <PolarGrid
          gridType="circle"
          radialLines={false}
          stroke="none"
          className="first:fill-muted last:fill-background"
        />
        <RadialBar dataKey="visitors" />
        <PolarRadiusAxis angle={90} domain={[0, 300]} tick={false} tickLine={false} axisLine={false}>
          <LabelList dataKey="browser" className="fill-foreground" fontSize={10} offset={8} position="insideStart" />
        </PolarRadiusAxis>
        <ChartTooltip cursor={false} content={<ChartTooltipContent className="w-[150px]" nameKey="browser" />} />
      </RadialBarChart>
    </ChartContainer>
  )
}
