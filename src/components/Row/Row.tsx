import React, { useEffect, useState } from "react";
import styles from "./Row.module.scss";
import LevelColumn from "../LevelColumn/LevelColumn.tsx";
import CreateRow from "../CreateRow/CreateRow.tsx";
import UpdateRow from "../UpdateRow/UpdateRow.tsx";
import { IRowProps, Mode } from "./Row.types.ts";

const Row: React.FC<IRowProps> = ({ nestedLevel, row }) => {
  const [mode, setMode] = useState<Mode>(Mode.VIEW);

  useEffect(() => {
    if (row.id === 0) setMode(Mode.CREATE);
  });

  const doubleClickHandler = () => {
    setMode(Mode.UPDATE);
  };

  const resetMode = () => {
    setMode(Mode.VIEW);
  };

  return (
    <div onDoubleClick={doubleClickHandler}>
      {mode === Mode.UPDATE && (
        <UpdateRow row={row} nestedLevel={nestedLevel} resetMode={resetMode} />
      )}
      {mode === Mode.CREATE && <CreateRow row={row} nestedLevel={nestedLevel} />}
      {mode === Mode.VIEW && (
        <div className={styles.row}>
          <div className={`${styles.column} ${styles.columnlevel}`}>
            <LevelColumn row={row} nestedLevel={nestedLevel} />
          </div>
          <div className={`${styles.column} ${styles.projectname}`}>{row.rowName}</div>
          <div className={styles.column}>{row.salary}</div>
          <div className={styles.column}>{row.equipmentCosts}</div>
          <div className={styles.column}>{row.supportCosts}</div>
          <div className={styles.column}>{row.estimatedProfit}</div>
        </div>
      )}
    </div>
  );
};

export default Row;
