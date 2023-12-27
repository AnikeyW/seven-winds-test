import styles from "./App.module.scss";
import Header from "../Header/Header.tsx";
import ProjectsView from "../ProjectsView/ProjectsView.tsx";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <ProjectsView />
    </div>
  );
}

export default App;
