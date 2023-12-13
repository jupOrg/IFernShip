import { setLocale } from "yup";
import { pt } from "yup-locales";
import { vocabulary } from "./vocabulary";

setLocale({
  ...pt,
  mixed: {
    ...pt.mixed,
    required: ({ path }) => {
      let noun = vocabulary[path] as string;

      if (!noun) {
        return "Esse é um campo obrigatório";
      }

      noun = noun[0].toUpperCase() + noun.slice(1);
      return noun + " é um campo obrigatório";
    },
  },
});
