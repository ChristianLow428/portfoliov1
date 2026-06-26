"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import styles from "@/styles/components/Footer.module.scss";

const arrowVariants = {
  start: { y: 0 },
  end: {
    y: [-5, 5, -5],
    transition: {
      y: { repeat: Infinity, duration: 2, ease: "easeInOut" as const },
    },
  },
};

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_scroll}>
        <Link
          to="hero"
          href="hero"
          aria-label="hero"
          smooth
          duration={600}
          offset={-100}
        >
          <motion.div
            variants={arrowVariants}
            initial="start"
            animate="end"
            className={styles.footer_scroll_arrow}
          >
            <Icon
              className={styles.footer_scroll_arrow_svg}
              icon="ph:caret-double-up-thin"
            />
          </motion.div>
        </Link>
      </div>
      <div className={styles.footer_textContainer}>
        <Icon icon="" />
        <p></p>
      </div>
    </div>
  );
}
