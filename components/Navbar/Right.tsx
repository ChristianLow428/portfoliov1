"use client";

import { useNav } from "@/context/NavContext";
import { contactData } from "@/db/main";
import { Icon } from "@iconify/react";
import { type Variants, motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-scroll";
import styles from "@/styles/components/Navbar.module.scss";

type RightProps = {
  mobile: boolean;
};

const listVariants: Variants = {
  animate: { transition: { staggerChildren: 0.2 } },
};

const itemVariants: Variants = {
  initial: { opacity: 0, x: "-100%" },
  animate: {
    opacity: 1,
    x: "0%",
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

export default function Right({ mobile }: RightProps) {
  const { navState, closeNav } = useNav();

  useEffect(() => {
    const stopScroll = () => {
      if (mobile && navState.open) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("scroll", stopScroll);
    return () => window.removeEventListener("scroll", stopScroll);
  }, [navState.open, mobile]);

  const navLinks = [
    { label: "About", to: "about" },
    { label: "Skills", to: "skills" },
    { label: "Projects", to: "projects" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <>
      <motion.ul
        variants={listVariants}
        animate={!navState.open && mobile ? "initial" : "animate"}
        className={styles.navbar_right_list}
      >
        {navLinks.map((link) => (
          <motion.li
            variants={itemVariants}
            key={link.to}
            className={styles.navbar_right_list_item}
          >
            <Link
              onClick={closeNav}
              to={link.to}
              href={link.to}
              smooth
              duration={600}
              offset={50}
            >
              {link.label}
            </Link>
          </motion.li>
        ))}
        <motion.li
          variants={itemVariants}
          className={styles.navbar_right_list_item}
        >
          <a href="/Docs/resume.pdf" target="_blank" onClick={closeNav}>
            Resume
          </a>
        </motion.li>
      </motion.ul>

      {mobile && (
        <div className={styles.navbar_right_links}>
          <div className={styles.navbar_right_links_line} />
          <div className={styles.navbar_right_links_container}>
            <a
              className={styles.navbar_right_links_container_link}
              href={contactData.links[1].url}
              target="_blank"
              aria-label="github"
            >
              <Icon icon="mdi:github" />
            </a>
            <a
              className={styles.navbar_right_links_container_link}
              href={contactData.links[2].url}
              target="_blank"
              aria-label="linkedin"
            >
              <Icon icon="mdi:linkedin" />
            </a>
            <a
              className={styles.navbar_right_links_container_link}
              href={contactData.links[0].url}
              target="_blank"
              aria-label="email"
            >
              <Icon icon="mi:email" />
            </a>
          </div>
          <div className={styles.navbar_right_links_line} />
        </div>
      )}
    </>
  );
}
