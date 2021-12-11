import type { VFC } from "react";

import { Animate } from "@/core/components/Animate";
import { H1 } from "@/core/components/H1";

import { CompletionsSummaryCard } from "../CompletionsSummaryCard";
import { EarningsSummaryCard } from "../EarningsSummaryCard";
import { GameListTable } from "../GameListTable";
import { MostRecentAchievementBanner } from "../MostRecentAchievementBanner";
import { TrophiesChartCard } from "../TrophiesChartCard";

export const GamingServiceRoot: VFC = () => {
  return (
    <>
      <Animate.FadeUpOnMount>
        <H1>PlayStation Network</H1>
      </Animate.FadeUpOnMount>

      <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-2 sm:mb-4">
        <Animate.StaggerOnMount delay={100}>
          <EarningsSummaryCard />
          <CompletionsSummaryCard />
        </Animate.StaggerOnMount>
      </div>

      <Animate.FadeUpOnMount delay={300}>
        <div className="space-y-4">
          <MostRecentAchievementBanner />

          <TrophiesChartCard />

          <p className="text-lg font-light tracking-tight !mt-8">Game List</p>
          <GameListTable />
        </div>
      </Animate.FadeUpOnMount>
    </>
  );
};
