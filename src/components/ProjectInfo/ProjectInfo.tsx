import React, { useEffect } from "react";
import styles from "./ProjectInfo.module.scss";
import TableList from "../TableList/TableList.tsx";
import { useTableDataStore } from "../../stores/tableDataStore.ts";

const ProjectInfo: React.FC = () => {
  const fetchRows = useTableDataStore((state) => state.fetchRows);
  const rows = useTableDataStore((state) => state.rows);
  const isLoading = useTableDataStore((state) => state.isLoading);

  useEffect(() => {
    fetchRows();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.projectname}>Строительно-монтажные работы</div>
      </div>
      {!isLoading ? <TableList rows={rows} /> : <p>Загрузка...</p>}
    </div>
  );
};

export default ProjectInfo;
