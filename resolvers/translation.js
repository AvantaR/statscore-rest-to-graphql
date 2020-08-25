import { TranslationTC } from "../schemas/translation.js";
import translationRepository from "../repositories/translation.js";

export default {
  translations: {
    type: [TranslationTC],
    args: {
      limit: "Int",
      page: "Int"
    },
    resolve: (_, { limit, page }) => {
      return translationRepository.index(limit, page);
    },
  },
  translation: {
    type: TranslationTC,
    args: { id: "Int!" },
    resolve: (_, { id }) => {
      return translationRepository.show(id);
    },
  },
};
