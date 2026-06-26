"use client";

import { contactData } from "@/db/main";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import styles from "@/styles/Layout/MainLayout.module.scss";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      staggerDirection: -1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: {} },
};

const lineVariants = {
  hidden: { opacity: 0, height: "0" },
  visible: { opacity: 1, height: "15rem", transition: {} },
};

export default function Links() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={styles.links}
    >
      <motion.a
        variants={childVariants}
        className={styles.links_link}
        href={contactData.links[0].url}
        target="_blank"
        aria-label="email"
      >
        <Icon className={styles.links_link_icon} icon="mi:email" />
      </motion.a>
      <motion.a
        variants={childVariants}
        className={styles.links_link}
        href={contactData.links[2].url}
        target="_blank"
        aria-label="linkedin"
      >
        <Icon className={styles.links_link_icon} icon="mdi:linkedin" />
      </motion.a>
      <motion.a
        variants={childVariants}
        className={styles.links_link}
        href={contactData.links[1].url}
        target="_blank"
        aria-label="github"
      >
        <Icon className={styles.links_link_icon} icon="mdi:github" />
      </motion.a>
      <motion.div variants={lineVariants} className={styles.links_line} />
    </motion.div>
  );
}
