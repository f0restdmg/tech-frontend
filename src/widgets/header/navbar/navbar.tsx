import Link from "next/link";
import { mainMenu } from "./config";
import styles from "./navbar.module.css";

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar__list}>
                {mainMenu.map((item, index) => (
                    <li key={index}>
                        <Link className={styles.navbar__link} href={item.link} prefetch={false}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
