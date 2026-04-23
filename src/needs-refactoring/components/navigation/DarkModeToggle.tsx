import { IconButton, Theme, Tooltip } from "@radix-ui/themes";
import { t } from "~/modules/i18n/utils/tFunction";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "~/hooks/useTheme";

export default function DarkModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const handleClick = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const ariaLabel = isDark
    ? t("Switch to light mode")
    : t("Switch to dark mode");

  const Icon = isDark ? Sun : Moon;

  return (
    <Theme radius="small">
      <Tooltip content={ariaLabel}>
        <IconButton
          variant="soft"
          color="gray"
          size="3"
          aria-label={ariaLabel}
          onClick={handleClick}
        >
          <Icon aria-hidden="true" />
        </IconButton>
      </Tooltip>
    </Theme>
  );
}
