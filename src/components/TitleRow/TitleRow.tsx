import React from "react";
import styles from "./TitleRow.module.scss";

const TitleRow: React.FC = () => {
  return (
    <div className={styles.namerow}>
      <div className={`${styles.namecolumn} ${styles.columnlevel}`}>
        Уровень
      </div>
      <div className={`${styles.namecolumn} ${styles.columnname}`}>
        Наименование работ
      </div>
      <div className={styles.namecolumn}>Основная з/п</div>
      <div className={styles.namecolumn}>Оборудование</div>
      <div className={styles.namecolumn}>Накладные расходы</div>
      <div className={styles.namecolumn}>Сметная прибыль</div>
    </div>
  );
};

export default TitleRow;
