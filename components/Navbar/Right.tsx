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
    if (mobile && navState.open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [navState.open, mobile]);

  // Unified nav links array including both internal scroll links and external links
  const navLinks = [
    { label: "About", to: "about", isExternal: false },
    { label: "Skills", to: "skills", isExternal: false },
    { label: "Projects", to: "projects", isExternal: false },
    { label: "Contact", to: "contact", isExternal: false },
    {
      label: "Resume",
      url: "https://docs.google.com/document/d/1D2LHU3mNBmzIgbGSeYadmPyZNLVY2X3T/edit",
      isExternal: true,
    },
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
            key={link.label}
            className={styles.navbar_right_list_item}
          >
            {link.isExternal ? (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeNav}
              >
                {link.label}
              </a>
            ) : (
              <Link
                onClick={closeNav}
                to={link.to!}
                href={link.to}
                smooth
                duration={600}
                offset={50}
              >
                {link.label}
              </Link>
            )}
          </motion.li>
        ))}
      </motion.ul>

      {mobile && (
        <div className={styles.navbar_right_links}>
          <div className={styles.navbar_right_links_line} />
          <div className={styles.navbar_right_links_container}>
            <a
              className={styles.navbar_right_links_container_link}
              href={contactData.links[1].url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github"
            >
              <Icon icon="mdi:github" />
            </a>
            <a
              className={styles.navbar_right_links_container_link}
              href={contactData.links[2].url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="linkedin"
            >
              <Icon icon="mdi:linkedin" />
            </a>
            <a
              className={styles.navbar_right_links_container_link}
              href={contactData.links[0].url}
              target="_blank"
              rel="noopener noreferrer"
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