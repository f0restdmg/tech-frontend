import Image from "next/image";
import clsx from "clsx";

import { PreviewCardProps } from "./types";

import styles from "./preview-card.module.css";

export const PreviewCard = ({
  name,
  image,
  link,
  className,
}: PreviewCardProps) => {
  return (
    <a href={link} className={clsx(styles.card, className)}>
      {image && (
        <div className={styles.card__image}>
          <Image
            className={styles.card__img}
            src={image}
            alt={name}
            sizes="(max-width: 1024px) 60px, 100px"
            fill
          />
        </div>
      )}
      <div className={styles.card__name}>{name}</div>
    </a>
  );
};
