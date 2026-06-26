"use client";

import { heroData } from "@/db/main";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "react-scroll";
import styles from "@/styles/components/Hero.module.scss";
import UI from "@/styles/components/UI.module.scss";

const aniTime = 2;
const delayTime = 1.5;
const times = [0, 0.5, 0.55, 1, 1];

const circleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: [0, 1, 1, 1, 1],
    transition: { duration: aniTime, times, delay: delayTime },
  },
};

const imgContainerVariants = {
  hidden: { rotate: 0, opacity: 0 },
  visible: {
    rotate: [-10, -10, -10, -10, -10],
    opacity: [0, 0, 1, 1, 1],
    borderWidth: [0, 1, 3, 3, 3],
    x: ["0rem", "0rem", "0rem", "-2rem", "-2rem"],
    y: ["0rem", "0rem", "0rem", "-1.5rem", "-1.5rem"],
    transition: { duration: aniTime, times, delay: delayTime },
  },
};

const backgroundVariants = {
  hidden: { opacity: 0, rotate: 0 },
  visible: {
    opacity: [0, 0, 0, 1, 1],
    rotate: [-10, -10, -10, -10, -10],
    transition: { duration: aniTime, times, delay: delayTime },
  },
};

const mainContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: delayTime + 0.5 },
  },
};

const textChildrenVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 12 },
  },
};

const arrowVariants = {
  start: { y: 0 },
  end: {
    y: [-5, 5, -5],
    transition: {
      y: { repeat: Infinity, duration: 2, ease: "easeInOut" as const },
    },
  },
};

const scrollVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: delayTime } },
};

export default function Hero() {
  return (
    <div className={styles.hero} id="hero">
      <div className={styles.hero_left}>
        <motion.div
          variants={mainContainerVariants}
          initial="hidden"
          animate="visible"
          className={styles.hero_left_container}
        >
          <div className={styles.hero_left_container_text}>
            <motion.span variants={textChildrenVariants} className={UI.lightText}>
              {heroData.hi}
            </motion.span>
            <motion.span variants={textChildrenVariants} className={UI.normalText}>
              {heroData.name}
            </motion.span>
            <motion.div
              variants={textChildrenVariants}
              className={styles.hero_left_container_text_expertise}
            >
              <span className={UI.importantText}>{heroData.expertise[0]}</span>
              <div className={styles.hero_left_container_text_expertise_circle} />
              <span className={UI.importantText}>{heroData.expertise[1]}</span>
            </motion.div>
            <motion.span variants={textChildrenVariants} className={UI.normalText}>
              {heroData.about}
            </motion.span>
          </div>
          <motion.a
            href="/Docs/resume.pdf"
            target="_blank"
            variants={textChildrenVariants}
            whileHover={{
              boxShadow: "0.7rem 0.7rem 0px var(--secondary)",
              transform: "translate(-0.7rem, -0.7rem)",
            }}
            className={styles.hero_left_container_btn}
          >
            {heroData.btnText}
          </motion.a>
        </motion.div>
        <motion.div
          variants={circleVariants}
          initial="hidden"
          animate="visible"
          className={styles.hero_left_circle}
        />
      </div>

      <div className={styles.hero_right}>
        <motion.div
          initial="hidden"
          animate="visible"
          className={styles.hero_right_container}
        >
          <motion.div
            variants={circleVariants}
            className={styles.hero_right_container_circle}
          />
          <motion.div
            variants={imgContainerVariants}
            className={styles.hero_right_container_imgContainer}
          >
            <Image
              className={styles.hero_right_container_imgContainer_image}
              src={heroData.img}
              alt="Profile"
              width={380}
              height={380}
              priority
            />
          </motion.div>
          <motion.div
            variants={backgroundVariants}
            className={styles.hero_right_container_background}
          />
        </motion.div>
      </div>

      <motion.div
        variants={scrollVariants}
        initial="hidden"
        animate="visible"
        className={styles.hero_scroll}
      >
        <Link
          to="about"
          smooth
          duration={600}
          offset={10}
          href="about"
          aria-label="about"
        >
          <Icon
            className={styles.hero_scroll_mouse}
            icon="iconamoon:mouse-thin"
          />
          <motion.div
            variants={arrowVariants}
            initial="start"
            animate="end"
            className={styles.hero_scroll_arrow}
          >
            <Icon
              className={styles.hero_scroll_arrow_svg}
              icon="ph:caret-double-down-thin"
            />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
}
