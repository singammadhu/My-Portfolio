import React from "react";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "UI/UX Design",
      skills: ["Responsive Design", "User Experience"]
    },
    {
      title: "Tools and Technologies",
      skills: ["Git", "VSCode","Version Control"]
    }
  ];

  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
        <ul className={styles.skillCategories}>
          {skillCategories.map((category, id) => (
            <li key={id} className={styles.skillCategory}>
              <h3>{category.title}</h3>
              <ul>
                {category.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
