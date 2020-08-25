import { SeasonTC } from "../schemas/season.js";
import seasonRepository from "../repositories/season.js";

export default {
  seasons: {
    type: [SeasonTC],
    args: {
      limit: "Int",
      page: "Int"
    },
    resolve: async (_, { limit, page }) => {
      const seasons = [];
      const results = await seasonRepository.index(limit, page);

      results.competitions.forEach(competition => {
        competition.seasons.forEach(season => {
          seasons.push(season);
        });
      });

      return seasons;
    },
  },
  season: {
    type: SeasonTC,
    args: { id: "Int!" },
    resolve: (_, { id }) => {
      return seasonRepository.show(id);
    },
  },
};
