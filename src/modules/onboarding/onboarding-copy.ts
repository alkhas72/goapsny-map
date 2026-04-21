import { t } from "~/modules/i18n/utils/tFunction"; // Pure copy definitions without hooks so they can be reused by tests and

// Pure copy definitions without hooks so they can be reused by tests and
// components. Hook-specific values (product name, settings URL) are injected via
// helper hooks.
export const onboardingCopy = {
  onboardingHeading: (productName: string) => `Добро пожаловать в ${productName}!`,
  startButtonText: "Начать обзор",
  locationHeading: "Геопозиция",
  locationExplanation: "**Для корректной работы GoApsny необходимо определить ваше местоположение. Это позволит нам показать ближайшие к вам доступные объекты.**",
  acceptButtonText: "Разрешить доступ",
  rejectButtonText: "Не сейчас",
  permissionRejectedText: (url: string) =>
    `Доступ к геопозиции ограничен. Вы сможете пользоваться картой, но ваше положение не будет отображаться. \nНастроить доступ можно в [настройках браузера](${url}).`,
  closeDialogButtonText: "Понятно",
  retryButtonText: "Повторить попытку",
  locationUnavailableText: (productName: string) =>
    `Ваше местоположение не определено. \nВы все равно можете пользоваться всеми функциями ${productName}, используя поиск вручную.`,
};
