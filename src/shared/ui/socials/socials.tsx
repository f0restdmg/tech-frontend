import { Icon } from "@/shared/ui/icon";
import { SOCIALS } from "./constants";
import styles from "./socials.module.css";

export const Socials = () => {
    return (
        <ul className={styles.socials}>
            {SOCIALS.map((social) => (
                <li key={social.name} className={styles["socials__item"]}>
                    <a
                        className={styles.socials__icon}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.ariaLabel}
                    >
                        <Icon section={"socials"} name={social.name} width={40} height={40} />
                    </a>
                </li>
            ))}
        </ul>
    );
};
