import type { VFC } from "react";

import { BaseStatsBanner } from "@/core/components/BaseStatsBanner";

import { PlatformPin } from "../PlatformPin";

export const MostRecentCompletionCard: VFC = () => {
  return (
    <BaseStatsBanner>
      <div className="inline-flex flex-col md:flex-row flex-grow gap-x-2">
        <p className="text-gray-500 dark:text-gray-400 tracking-tight">
          Most Recent Completion<span className="hidden sm:inline">:</span>
        </p>
        <div className="flex gap-x-3">
          <p className="text-black dark:text-white flex">Super Mario Bros.</p>
          <PlatformPin platform="ra" />
        </div>
      </div>

      <div className="hidden md:inline-flex gap-x-2">
        <p className="text-gray-500 dark:text-gray-400 tracking-tight">
          Rarity:
        </p>
        <div className="flex gap-x-3">
          <p className="text-black dark:text-white">
            82.8%
            <span className="dark:text-gray-200 ml-1 text-sm tracking-tight">
              Common
            </span>
          </p>
        </div>
      </div>

      <div className="md:hidden flex gap-x-2 md:gap-x-0">
        <p className="text-black dark:text-white">82.8% Rarity</p>

        <div className="flex items-center md:absolute md:right-4">
          <p className="mt-0.5 text-sm text-gray-700 dark:text-gray-300">
            Common
          </p>
        </div>
      </div>
    </BaseStatsBanner>
  );
};