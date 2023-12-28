import React from "react";
import styles from "./TableList.module.scss";
import TitleRow from "../TitleRow/TitleRow.tsx";
import Rows from "../Rows/Rows.tsx";
import { IRow } from "../../types";
import CreateRow from "../CreateRow/CreateRow.tsx";
import { ITableListProps } from "./TableList.types.ts";

const firstRow: IRow = {
  child: null,
  id: 0,
  equipmentCosts: 0,
  estimatedProfit: 0,
  machineOperatorSalary: 0,
  mainCosts: 0,
  materials: 0,
  mimExploitation: 0,
  overheads: 0,
  rowName: "",
  salary: 0,
  supportCosts: 0,
  total: 0,
};

const TableList: React.FC<ITableListProps> = ({ rows }) => {
  return (
    <div className={styles.tableinfo}>
      <TitleRow />
      {rows.length > 0 ? (
        <Rows rows={rows} />
      ) : (
        <CreateRow row={firstRow} nestedLevel={0} isFirstRow={true} />
      )}
    </div>
  );
};

export default TableList;
