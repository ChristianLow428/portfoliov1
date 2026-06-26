"use client";

import { SkillsData } from "@/db/main";
import { type Variants, motion } from "framer-motion";
import Skill from "./Skill";
import styles from "@/styles/components/Skills.module.scss";

const containerVariants: Variants = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export default function Skills() {
  return (
    <div className={styles.skills} id="skills">
      <h2 className={styles.skills_title}>{SkillsData.title}</h2>
      <div className={styles.skills_container}>
        {SkillsData.categories.map((category, i) => (
          <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            className={styles.skills_container_category}
            key={i}
          >
            <h3 className={styles.skills_container_category_title}>
              {category.title}
            </h3>
            <div className={styles.skills_container_category_skillsContainer}>
              {category.skills.map((skill, j) => (
                <Skill key={j} title={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <div className={styles.skills_circle1} />
      <div className={styles.skills_circle2} />
    </div>
  );
}
