"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import { languages } from "./config";
import { LanguagePickerProps } from "./types";
import styles from "./language-picker.module.css";

export const LanguagePicker = ({ className }: LanguagePickerProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const currentLang = pathname?.split("/")[1] || "en";

  const [opened, setOpened] = useState(false);

  const handleSelect = (code: string) => {
    const segments = pathname?.split("/") || [];
    segments[1] = code;
    router.push(segments.join("/"));
    setOpened(false);
  };

  const current = languages.find((l) => l.code === currentLang) || languages[0];

  return (
    <div className={clsx(styles.language, className)}>
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
