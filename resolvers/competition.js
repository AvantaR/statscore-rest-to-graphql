import { CompetitionTC, CompetitionShowTC } from "../schemas/competition.js";
import competitionRepository from "../repositories/competition.js";

export default {
  competitions: {
    type: [CompetitionTC],
    args: {
      limit: "Int",
      page: "Int"
    },
    resolve: (_, { limit, page }) => {
      return competitionRepository.index(limit, page);
    },
  },
  competition: {
    type: CompetitionShowTC,
    args: { id: "Int!" },
    resolve: (_, { id }) => {
      return competitionRepository.show(id);
    },
  },
};
