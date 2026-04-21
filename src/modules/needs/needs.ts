import { t } from "~/modules/i18n/utils/tFunction";
import type { FC } from "react";
import { FullyWheelchairAccessibleIcon } from "~/components/icons/mobility/FullyWheelchairAccessibleIcon";
import { NoDataIcon } from "~/components/icons/mobility/NoDataIcon";
import { NotWheelchairAccessibleIcon } from "~/components/icons/mobility/NotWheelchairAccessibleIcon";
import { PartiallyWheelchairAccessibleCombinationIcon } from "~/components/icons/mobility/PartiallyWheelchairAccessibleCombinationIcon";
import { FullyWheelchairAccessibleToiletIcon } from "~/components/icons/toilets/FullyWheelchairAccessibleToiletIcon";
import { ToiletPresentIcon } from "~/components/icons/toilets/ToiletPresentIcon";

// add additional need categories and needs to this settings object,
// everything else including types will be auto-generated based on it.
const configuredSettings = {
  mobility: {
    title: () => "Мобильность",
    needs: {
      "no-need": {
        label: () => "Нет ограничений",
      },
      "fully-wheelchair-accessible": {
        label: () => "Доступно на кресле-коляске",
        help: () =>
          "Вход без ступеней, во все помещения можно попасть без препятствий.",
        icon: FullyWheelchairAccessibleIcon,
      },
      "partially-wheelchair-accessible": {
        label: () => "Частично доступно",
        help: () =>
          "На входе одна ступенька до 7 см, в большинство комнат можно попасть без препятствий.",
        icon: PartiallyWheelchairAccessibleCombinationIcon,
      },
      "not-wheelchair-accessible": {
        label: () => "Недоступно",
        help: () =>
          "Вход имеет высокую ступеньку или несколько ступенек, в помещения нельзя попасть.",
        icon: NotWheelchairAccessibleIcon,
      },
      "no-data": {
        label: () => "Нет информации",
        help: () =>
          "Нет информации о доступности для кресел-колясок.",
        icon: NoDataIcon,
      },
    },
  },
  toilet: {
    title: () => "Туалеты",
    needs: {
      "no-need": {
        label: () => "Нет ограничений",
      },
      "fully-wheelchair-accessible": {
        label: () => "Туалет для инвалидов",
        icon: FullyWheelchairAccessibleToiletIcon,
      },
      "toilet-present": {
        label: () => "Есть туалет",
        icon: ToiletPresentIcon,
      },
      // Would be nice, but we currently have no way to filter for it
      // "no-data": {
      //   label: () => t(`No toilet info yet`),
      // },
    },
  },
} as const;

// Identifier for a category that groups multiple needs
export type NeedCategory = keyof typeof configuredSettings;

// Possible values for needs
export type NeedValue =
  keyof (typeof configuredSettings)[NeedCategory]["needs"];

// All the properties each individual need has
export type NeedProperties = {
  label: () => string;
  help?: () => string;
  icon?: FC;
};

// Complete configuration of all available needs and their respective categories
export type NeedSettings = Record<
  string,
  {
    title: () => string;
    needs: Record<string, NeedProperties>;
  }
>;

// A map that contains what need has been selected for each available category
export type NeedSelection = {
  [key in NeedCategory]:
    | keyof (typeof configuredSettings)[key]["needs"]
    | undefined;
};

// A map that contains all the properties of the selected need for each
// available category
export type Needs = {
  [key in NeedCategory]?: NeedProperties;
};

// we're using const assertions in order to automatically generate types
// from the settings. but in order to make sure the configuredSettings above
// also satisfy their own interface, we have a settings variable typed
// with the aforementioned interface. if something is off with the
// configuredSettings above, typescript will show an error on this settings
// variable instead. this is not ideal, but it ensures type-safety and allows
// for auto-type magic.
export const settings: NeedSettings = configuredSettings;

export const categories = Object.entries(settings).map(
  ([category]) => category as NeedCategory,
);

export const emptyNeeds = Object.fromEntries(
  categories.map((category) => [category, undefined]),
) as NeedSelection;
