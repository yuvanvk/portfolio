
"use client";

import { cn } from "@/lib/utils";
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/kibo-ui/contribution-graph";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

type Contribution = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type ContributionsResponse = {
  total: Record<number | string, number>;
  contributions: Contribution[];
};

export const GithubGraph = () => {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [total, setTotal] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const fetchContributions = async () => {
      try {
        const response = await fetch("/api/github");
        if (!response.ok) throw new Error("Failed to fetch");
        const data = (await response.json()) as ContributionsResponse;

        if (!cancelled) {
          setContributions(data.contributions);
          setTotal(data.total);
        }
      } catch (error) {
        console.error("GITHUB_CONTRIBUTIONS_FETCH_ERROR", error);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    fetchContributions();

    return () => {
      cancelled = true;
    };
  }, []);

  if (isLoading) {
    return (
      <div className="h-[120px] w-full animate-pulse rounded-md bg-neutral-100 dark:bg-neutral-900" />
    );
  }

  return (
    <ContributionGraph
      data={contributions}
      blockSize={11}
      blockMargin={1}
      blockRadius={2}
      fontSize={12}
    >
      <ContributionGraphCalendar>
        {({ activity, dayIndex, weekIndex }) => (
          <ContributionGraphBlock
            activity={activity}
            className={cn(
              'data-[level="0"]:fill-[#ebedf0] dark:data-[level="0"]:fill-[#0e1a29]',
              'data-[level="1"]:fill-[#b3d4fc] dark:data-[level="1"]:fill-[#1a4f8f]',
              'data-[level="2"]:fill-[#6ba3f5] dark:data-[level="2"]:fill-[#2e6fc7]',
              'data-[level="3"]:fill-[#3b7ded] dark:data-[level="3"]:fill-[#4c8ef0]',
              'data-[level="4"]:fill-[#1e5bc6] dark:data-[level="4"]:fill-[#7ab3ff]',
            )}
            dayIndex={dayIndex}
            weekIndex={weekIndex}
          />
        )}
      </ContributionGraphCalendar>
      <ContributionGraphFooter>
        <ContributionGraphTotalCount>
          {({ totalCount, year }) => (
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground text-[12px]">Past 12 months: </span>
              <Badge variant="secondary" className="text-[11px]">
                {totalCount.toLocaleString()} contributions
              </Badge>
            </div>
          )}
        </ContributionGraphTotalCount>
        <ContributionGraphLegend>
          {({ level }) => (
            <div
              className="group relative flex h-3 w-3 items-center justify-center"
              data-level={level}
            >
              <div
                className={`h-full w-full rounded-sm border border-border ${level === 0 ? "bg-[#ebedf0] dark:bg-[#0a2f5c]" : ""} ${level === 1 ? "bg-[#b3d4fc] dark:bg-[#1a4f8f]" : ""} ${level === 2 ? "bg-[#6ba3f5] dark:bg-[#2e6fc7]" : ""} ${level === 3 ? "bg-[#3b7ded] dark:bg-[#4c8ef0]" : ""} ${level === 4 ? "bg-[#1e5bc6] dark:bg-[#7ab3ff]" : ""} `}
              />
              <span className="-top-8 absolute hidden rounded bg-popover px-2 py-1 text-popover-foreground text-xs shadow-md group-hover:block">
                Level {level}
              </span>
            </div>
          )}
        </ContributionGraphLegend>
      </ContributionGraphFooter>
    </ContributionGraph>
  );
};