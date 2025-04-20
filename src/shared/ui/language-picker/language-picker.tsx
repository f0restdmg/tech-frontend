"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useRef, useState } from "react";
import clsx from "clsx";
import { useOutsideClick } from "@/shared/lib/hooks";
import { languages } from "./config";
import { LanguagePickerProps } from "./types";
import styles from "./language-picker.module.css";

export const LanguagePicker = ({ className }: LanguagePickerProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLang = useLocale();

  const [opened, setOpened] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleSelect = (lang: string) => {
    router.replace(pathname, { locale: lang });
    setOpened(false);
  };

  useOutsideClick(wrapperRef, () => setOpened(false));

  const current = languages.find((l) => l.code === currentLang) || languages[0];

  return (
    <div className={clsx(styles.language, className)} ref={wrapperRef}>
      <button
        className={styles.language__picker}
        onClick={() => setOpened((prev) => !prev)}
      >
        {current.label}
        <span className={styles.language__arrow} />
      </button>
      {opened && (
        <div className={styles.language__dropdown}>
          {languages.map((lang) => (
            <button
              className={styles.language__option}
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
