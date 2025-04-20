import clsx from "clsx";
import { Logo } from "@/shared/ui/logo";
import { Socials } from "@/shared/ui/socials";
import { companyDetails, CONTACTS, DOCUMENTS, PRODUCT_INFO } from "./constants";
import styles from "./footer.module.css";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={clsx(styles.footer__inner, "container")}>
                <div className={styles.footer__top}>
                    <div className={styles.footer__product}>
                        <Logo />
                        <p className={styles["footer__product--text"]}>{PRODUCT_INFO}</p>
                    </div>
                    <ul className={styles.footer__questions}>
                        {CONTACTS.map((item, index) => (
                            <li key={index}>
                                {item.link ? (
                                    <a href={item.link} className={styles["footer__link"]}>
                                        {item.text}
                                    </a>
                                ) : (
                                    item.text
                                )}
                            </li>
                        ))}
                    </ul>
                    <ul className={styles.footer__links}>
                        {DOCUMENTS.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.link}
                                    className={styles["footer__link"]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.footer__bottom}>
                    <div className={styles.footer__details}>
                        {companyDetails.map((detail, index) => (
                            <span key={index}>{detail}</span>
                        ))}
                    </div>
                    <Socials />
                </div>
            </div>
        </footer>
    );
};
