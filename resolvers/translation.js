import { TranslationTC } from "../schemas/translation.js";
import translationRepository from "../repositories/translation.js";

export default {
  translations: {
    type: [TranslationTC],
    args: { limit: "Int" },
    resolve: (_, { limit }) => {
      return translationRepository.index(limit);
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
