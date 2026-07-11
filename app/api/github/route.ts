import { unstable_cache } from "next/cache";
import { NextResponse } from "next/server";

type Contribution = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type ContributionsResponse = {
  total: Record<number | string, number>;
  contributions: Contribution[];
};

const getCachedContributions = unstable_cache(
  async (username = "yuvanvk"): Promise<ContributionsResponse> => {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
    );
    if (!response.ok) {
      throw new Error(`GitHub contributions fetch failed: ${response.status}`);
    }
    const data = (await response.json()) as ContributionsResponse;
    return {
      contributions: data.contributions,
      total: data.total,
    };
  },
  ["github-contributions"],
  { revalidate: 60 * 60 * 24 },
);

export async function GET() {
  try {
    const data = await getCachedContributions();
    return NextResponse.json(data);
  } catch (error) {
    console.error("GITHUB_CONTRIBUTIONS_FETCH_ERROR", error);
    return NextResponse.json(
      { error: "Failed to fetch contributions" },
      { status: 500 },
    );
  }
}