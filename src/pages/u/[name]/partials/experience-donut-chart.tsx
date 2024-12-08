"use client";

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
    experience: {
        label: "Experience",
        color: "hsl(var(--chart-1))",
    },
    remaining: {
        label: "Next Level",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig;

export function ExperienceDonutChart({
    experiencePoints,
    experienceThreshold,
}: {
    experiencePoints: number;
    experienceThreshold: number;
}) {
    const chartData = [
        {
            experience: experiencePoints,
            remaining: experienceThreshold - experiencePoints,
        },
    ];

    return (
        <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square w-full max-w-[250px] absolute -top-16"
        >
            <RadialBarChart
                data={chartData}
                startAngle={180}
                endAngle={0}
                innerRadius={80}
                outerRadius={130}
            >
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                />
                <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                    <Label
                        content={({ viewBox }) => {
                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                return (
                                    <text
                                        x={viewBox.cx}
                                        y={viewBox.cy}
                                        textAnchor="middle"
                                    ></text>
                                );
                            }
                        }}
                    />
                </PolarRadiusAxis>
                <RadialBar
                    dataKey="experience"
                    stackId="a"
                    cornerRadius={5}
                    fill="var(--color-experience)"
                    className="stroke-transparent stroke-2"
                />
                <RadialBar
                    dataKey="remaining"
                    fill="var(--color-remaining)"
                    stackId="a"
                    cornerRadius={5}
                    className="stroke-transparent stroke-2"
                />
            </RadialBarChart>
        </ChartContainer>
    );
}
