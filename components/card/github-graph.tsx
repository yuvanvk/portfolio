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

const LEVEL_CLASSNAMES: Record<0 | 1 | 2 | 3 | 4, string> = {
  0: "bg-[#eaeaea] dark:bg-[#1a1a1a]",
  1: "bg-[#c4c4c4] dark:bg-[#333333]",
  2: "bg-[#8f8f8f] dark:bg-[#666666]",
  3: "bg-[#525252] dark:bg-[#a8a8a8]",
  4: "bg-black dark:bg-white",
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
              'data-[level="0"]:fill-[#eaeaea] dark:data-[level="0"]:fill-[#1a1a1a]',
              'data-[level="1"]:fill-[#c4c4c4] dark:data-[level="1"]:fill-[#333333]',
              'data-[level="2"]:fill-[#8f8f8f] dark:data-[level="2"]:fill-[#666666]',
              'data-[level="3"]:fill-[#525252] dark:data-[level="3"]:fill-[#a8a8a8]',
              'data-[level="4"]:fill-black dark:data-[level="4"]:fill-white',
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
                className={cn(
                  "h-full w-full rounded-sm border border-border",
                  LEVEL_CLASSNAMES[level as 0 | 1 | 2 | 3 | 4],
                )}
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