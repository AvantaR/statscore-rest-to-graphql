import { CompetitionTC, CompetitionShowTC } from "../schemas/competition.js";
import competitionRepository from "../repositories/competition.js";

export default {
  competitions: {
    type: [CompetitionTC],
    args: { limit: "Int" },
    resolve: (_, { limit }) => {
      return competitionRepository.index(limit);
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
