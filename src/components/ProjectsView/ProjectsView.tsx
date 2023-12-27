import React from "react";
import ProjectsList from "../ProjectsList/ProjectsList.tsx";
import ProjectInfo from "../ProjectInfo/ProjectInfo.tsx";
import styles from "./ProjectsView.module.scss";

const ProjectsView: React.FC = () => {
  return (
    <div className={styles.container}>
      <ProjectsList />
      <ProjectInfo />
    </div>
  );
};

export default ProjectsView;
