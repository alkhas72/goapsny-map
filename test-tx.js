const { tx, t } = require("@transifex/native");

tx.init({
  token: "1/dummy"
});

tx.cache.update("ru", {
  "Search for places...": "Поиск мест..."
});

tx.setCurrentLocale("ru").then(() => {
    console.log(t("Search for places..."));
});
