import React from "react";
import styles from "./ProjectsList.module.scss";
import arrow from "../../assets/arrow.png";
import projIcon from "../../assets/proj-icon.png";
const ProjectsList: React.FC = () => {
  const projectsList = [
    { id: 1, name: "По проекту" },
    { id: 2, name: "Объекты" },
    { id: 3, name: "Рд" },
    { id: 4, name: "Мто" },
    { id: 5, name: "СМР" },
    { id: 6, name: "График" },
    { id: 7, name: "МиМ" },
  ];
  return (
    <div className={styles.projectsblock}>
      <div className={styles.select}>
        <div>
          <div>Название проекта</div>
          <div className={styles.shortname}>Аббревиатура</div>
        </div>
        <div className={styles.arrowicon}>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
      <div className={styles.list}>
        {projectsList &&
          projectsList.map((project) => (
            <div
              key={project.id}
              className={`${styles.item} ${project.id === 5 && styles.active}`}
            >
              <div className={styles.projicon}>
                <img src={projIcon} alt="project" />
              </div>
              <div className={styles.name}>{project.name}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectsList;
