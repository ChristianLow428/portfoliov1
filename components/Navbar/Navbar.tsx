"use client";

import { useNav } from "@/context/NavContext";
import { heroData } from "@/db/main";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "@/styles/components/Navbar.module.scss";
import Right from "./Right";

const animationDuration = 1.5;

const circleVariants = {
  start: { width: 0, height: 0, display: "block" },
  end: {
    width: [0, 20, 20, 0, 0],
    height: [0, 20, 20, 0, 0],
    transition: {
      duration: animationDuration,
      times: [0, 0.2, 0.6, 0.6, 1],
      ease: "linear" as const,
    },
  },
};

const lineVariants = {
  start: { width: 0, height: "0%", opacity: 1.5 },
  end: {
    width: ["0%", "0%", "100%", "100%", "0%"],
    height: ["0%", "0%", "0%", "105%", "0%"],
    opacity: [1, 1, 1, 0, 0],
    transition: {
      duration: animationDuration,
      times: [0, 0.2, 0.6, 0.999, 1],
      ease: "linear" as const,
    },
  },
};

const clipVariants = {
  start: {
    clipPath: "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
  },
  end: {
    clipPath: [
      "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
      "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
      "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
      "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ],
    transition: {
      duration: animationDuration,
      times: [0, 0.2, 0.65, 0.999, 1],
      ease: "linear" as const,
    },
  },
};

export default function Navbar() {
  const { navState, toggleNav } = useNav();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 800);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={styles.navbar}>
      <motion.div
        variants={circleVariants}
        initial="start"
        animate="end"
        className={styles.circle}
      />
      <motion.div
        variants={lineVariants}
        initial="start"
        animate="end"
        className={styles.line}
      />
      <motion.div
        ref={containerRef}
        variants={clipVariants}
        initial="start"
        animate="end"
        className={styles.clip}
        onAnimationComplete={() => {
          if (!containerRef.current) return;
          const parent = containerRef.current.parentNode;
          while (containerRef.current.firstChild) {
            parent?.insertBefore(
              containerRef.current.firstChild,
              containerRef.current
            );
          }
          containerRef.current.remove();
        }}
      >
        <div className={styles.navbar_left}>
          <h1
            className={`${styles.navbar_left_logo} ${
              navState.open ? styles.navbar_left_logo_active : ""
            }`}
          >
            {heroData.name}
          </h1>
        </div>
        <div
          className={`${styles.navbar_right} ${
            navState.open ? styles.navbar_right_active : ""
          }`}
        >
          <Right mobile={mobile} />
        </div>
        <div
          onClick={toggleNav}
          className={`${styles.navbar_toggle} ${
            navState.open ? styles.navbar_toggle_active : ""
          }`}
        >
          <div
            className={`${styles.navbar_toggle_up} ${
              navState.open ? styles.navbar_toggle_active_up : ""
            }`}
          />
          <div
            className={`${styles.navbar_toggle_down} ${
              navState.open ? styles.navbar_toggle_active_down : ""
            }`}
          />
        </div>
      </motion.div>
    </nav>
  );
}
