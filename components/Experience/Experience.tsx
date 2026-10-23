"use client";

import { experienceData } from "@/db/main";
import { motion } from "framer-motion";
import styles from "@/styles/components/Experience.module.scss";

export default function Experience() {
  return (
    <div className={styles.experience} id="experience">
      <h2 className={styles.experience_title}>{experienceData.title}</h2>
      <div className={styles.experience_container}>
        {experienceData.jobs.map((job, i) => (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
            viewport={{ amount: 0.3, once: true }}
            className={styles.experience_container_job}
            key={i}
          >
            <div className={styles.experience_container_job_header}>
              <div>
                <h3 className={styles.experience_container_job_header_role}>
                  {job.role}
                </h3>
                <span className={styles.experience_container_job_header_company}>
                  {job.company}
                </span>
              </div>
              <div className={styles.experience_container_job_header_meta}>
                <span>{job.dates}</span>
                <span>{job.location}</span>
              </div>
            </div>
            <div className={styles.experience_container_job_techContainer}>
              {job.technologies.map((tech, j) => (
                <span
                  className={styles.experience_container_job_techContainer_tech}
                  key={j}
                >
                  {tech}
                </span>
              ))}
            </div>
            <ul className={styles.experience_container_job_bullets}>
              {job.bullets.map((bullet, j) => (
                <li className={styles.experience_container_job_bullets_bullet} key={j}>
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <div className={styles.experience_circle1} />
    </div>
  );
}
