import type { NextApiRequest, NextApiResponse } from "next";

import { fetchAllPsnGames } from "@/integrations/psn/queries/fetchAllPsnGames";
import { fetchAllUserAchievements } from "@/integrations/ra/queries/fetchAllUserAchievements";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const [allPsnGames, allUserAchievements] = await Promise.all([
      fetchAllPsnGames("me"),
      fetchAllUserAchievements("WCopeland")
    ]);

    return res.json([...allPsnGames, ...allUserAchievements]);
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end("Method Not Allowed");
  }
}
