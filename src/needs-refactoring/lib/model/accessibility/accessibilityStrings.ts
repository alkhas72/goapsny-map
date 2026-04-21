import { t } from "~/modules/i18n/utils/tFunction";
import usePreferImperialUnits from "~/modules/i18n/hooks/usePreferImperialUnits";
import type { YesNoLimitedUnknown, YesNoUnknown } from "../ac/Feature";

export function accessibilityName(
  accessibility: YesNoLimitedUnknown,
): string | null {
  switch (accessibility) {
    // translator: Long accessibility description for full wheelchair accessibility
    case "yes":
      return "Доступно";
    // translator: Long accessibility description for partial wheelchair accessibility
    case "limited":
      return "Частично доступно";
    // translator: Long accessibility description for no wheelchair accessibility
    case "no":
      return "Недоступно";
    // translator: Long accessibility description for unknown wheelchair accessibility
    case "unknown":
      return "Неизвестно";
    default:
      return null;
  }
}

export function accessibilityColor(
  accessibility: YesNoLimitedUnknown,
): string | null {
  switch (accessibility) {
    // translator: color representing full accessibility
    case "yes":
      return t("green");
    // translator: color representing partial accessibility
    case "limited":
      return t("orange");
    // translator: color representing inaccessibility
    case "no":
      return t("red");
    // translator: color representing unknown accessibility
    case "unknown":
      return t("gray");
    default:
      return null;
  }
}

export function shortAccessibilityName(
  accessibility: YesNoLimitedUnknown,
): string | null {
  switch (accessibility) {
    // translator: Shortened accessibility description for full wheelchair accessibility (imagine as short answer to the question ‘how accessible is this place?’)
    case "yes":
      return "Доступно";
    // translator: Shortened accessibility description for partial wheelchair accessibility (imagine as short answer to the question ‘how accessible is this place?’)
    case "limited":
      return "Частично";
    // translator: Shortened accessibility description for no wheelchair accessibility (imagine as short answer to the question ‘how accessible is this place?’)
    case "no":
      return "Недоступно";
    // translator: Shortened accessibility description for unknown wheelchair accessibility (imagine as short answer to the question ‘how accessible is this place?’)
    case "unknown":
      return "Неизвестно";
    default:
      return null;
  }
}

export function useAccessibilityDescription(
  accessibility: YesNoLimitedUnknown,
): string | null {
  switch (accessibility) {
    // translator: Describes criteria for marking places as fully wheelchair accessible on Wheelmap
    case "yes":
      return "Вход без ступеней, важные зоны доступны без ступеней.";
    case "limited":
      return usePreferImperialUnits()
        ? // translator: Describes criteria for marking places as partially wheelchair accessible on Wheelmap, using imperial units
          t(
            "Entrance has one step with max. 3 inches height, most areas are without steps.",
          )
        : // translator: Describes criteria for marking places as partially wheelchair accessible on Wheelmap, using metric units
          "Вход имеет одну ступеньку до 7 см, большинство зон без ступеней.";
    // translator: Describes criteria for marking places as not wheelchair accessible on Wheelmap
    case "no":
      return "Вход имеет высокую ступеньку или несколько ступеней, важные зоны недоступны.";
    default:
      return null;
  }
}

export function toiletDescription(accessibility: YesNoUnknown): string | null {
  switch (accessibility) {
    // translator: Long toilet accessibility description on place toolbar if the toilet IS accessible
    case "yes":
      return "Туалет для инвалидов";
    // translator: Long toilet accessibility description on place toolbar if the toilet is NOT accessible
    case "no":
      return "Нет туалета для инвалидов";
    default:
      return null;
  }
}

export const accessibleToiletDescription = (useImperialUnits: boolean) => [
  useImperialUnits
    ? t(`Doorways' inner width ≥ 35 inches`)
    : t(`Doorways' inner width ≥ 90 cm`),
  useImperialUnits
    ? t("Clear turning space ≥ 59 inches wide")
    : t("Clear turning space ≥ 150 cm wide"),
  t("Wheelchair-height WC seat"),
  t("Foldable grab rails"),
  t("Accessible sink"),
];
