"use client";

import { Anchor, Container, Group } from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import styles from "./styles.module.css";

const links = [
  { link: "#", label: "Contact" },
  { link: "#", label: "Privacy" },
  { link: "#", label: "Blog" },
  { link: "#", label: "Careers" },
];

export const Footer = () => {
  const items = links.map((link) => (
    <Anchor<"a">
      c="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <footer className={styles.footer}>
      <Container size={"lg"} className={styles.inner}>
        <MantineLogo size={28} />
        <Group className={styles.links}>{items}</Group>
      </Container>
    </footer>
  );
};
