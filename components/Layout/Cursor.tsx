"use client";

import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "@/styles/Layout/MainLayout.module.scss";

export default function Cursor() {
  const [isClicked, setIsClicked] = useState(false);
  const [show, setShow] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseEnter = () => setShow(true);
    const handleMouseLeave = () => setShow(false);

    const handleMouseMove = (event: MouseEvent) => {
      setShow(true);
      if (!cursorRef.current) return;
      cursorX.set(event.clientX - cursorRef.current.clientWidth / 2);
      cursorY.set(event.clientY - cursorRef.current.clientHeight / 2);
    };

    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    if (windowWidth !== null && windowWidth <= 800) {
      setShow(false);
    } else if (windowWidth !== null) {
      setShow(true);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, [cursorX, cursorY, windowWidth]);

  return (
    <motion.div
      className={styles.cursor}
      ref={cursorRef}
      style={{
        x: cursorX,
        y: cursorY,
        opacity: show ? "1" : "0",
      }}
    >
      <motion.div
        style={{
          width: isClicked ? "2.5rem" : "0.7rem",
          height: isClicked ? "2.5rem" : "0.7rem",
          transition: "width 0.2s, height 0.2s",
        }}
        className={styles.cursor_inner}
      />
    </motion.div>
  );
}
