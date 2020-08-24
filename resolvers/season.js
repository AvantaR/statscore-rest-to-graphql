import { SeasonTC } from "../schemas/season.js";
import seasonRepository from "../repositories/season.js";

export default {
  seasons: {
    type: [SeasonTC],
    args: { limit: 'Int' },
    resolve: async (_, { limit }) => {
      const seasons = [];
      const results = await seasonRepository.index();

      results.competitions.forEach(competition => {
        competition.seasons.forEach(season => {
          seasons.push(season);
        });
      });

      return seasons.slice(0, limit);
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
