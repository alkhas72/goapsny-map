import {
  type LanguageTag,
  getILanguageTagsFromAcceptLanguageHeader,
  getMostPreferableLanguageTag,
} from "@sozialhelden/core";
import { headers } from "next/headers";

export function getLanguageTagFromAcceptLanguageHeaders(): LanguageTag {
  // Force Russian language as requested locally
  return "ru" as LanguageTag;
}
