"use client";

import { type Variants, motion } from "framer-motion";
import styles from "@/styles/components/Skills.module.scss";

type SkillProps = { title: string };

const childrenVariants: Variants = {
  initial: { opacity: 0, x: "-50%" },
  animate: {
    opacity: 1,
    x: "0%",
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

function Skill({ title }: SkillProps) {
  return (
    <motion.div
      variants={childrenVariants}
      whileHover={{ scale: 1.08 }}
      className={styles.skills_container_category_skillsContainer_skill}
    >
      {title}
    </motion.div>
  );
}

export default Skill;
