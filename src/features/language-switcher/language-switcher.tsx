"use client";

import { usePathname, useRouter } from "next/navigation";

import { LanguageLabel } from "./constants";

import styles from "./language-switcher.module.css";

export const LanguageSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (locale: "ru" | "en") => {
    const segments = pathname.split("/").filter(Boolean);

    const isLocalized = segments[0] === "ru" || segments[0] === "en";
    if (!isLocalized) segments.unshift(locale);
    if (isLocalized) segments[0] = locale;

    router.push("/" + segments.join("/"));
  };

  return (
    <div className={styles["language-switcher"]}>
      <button
        type="button"
        className={styles["language-switcher__item"]}
        aria-label={LanguageLabel.RUS}
        onClick={() => switchLanguage("ru")}
      >
        RUS
      </button>
      <span>|</span>
      <button
        type="button"
        className={styles["language-switcher__item"]}
        aria-label={LanguageLabel.ENG}
        onClick={() => switchLanguage("en")}
      >
        ENG
      </button>
    </div>
  );
};
