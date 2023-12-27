import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./UpdateRow.module.scss";
import LevelColumn from "../LevelColumn/LevelColumn.tsx";
import { IRow } from "../../types";
import { useTableDataStore } from "../../stores/tableDataStore.ts";

interface IEditRowProps {
  row: IRow;
  nestedLevel: number;
  resetMode: () => void;
}

export interface Inputs {
  equipmentCosts: number;
  estimatedProfit: number;
  salary: number;
  rowName: string;
  supportCosts: number;
}

const UpdateRow: React.FC<IEditRowProps> = ({ row, nestedLevel, resetMode }) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const updateRow = useTableDataStore((state) => state.updateRow);
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    updateRow(row.id, data);
    resetMode();
  };

  return (
    <form className={styles.row} onSubmit={handleSubmit(onSubmit)}>
      <div className={`${styles.column} ${styles.columnlevel}`}>
        <LevelColumn row={row} nestedLevel={nestedLevel} isEditRow={true} />
      </div>
      <div className={`${styles.column} ${styles.projectname}`}>
        <input autoFocus={true} {...register("rowName")} defaultValue={row.rowName} />
      </div>
      <div className={styles.column}>
        <input
          type={"number"}
          {...register("salary", {
            valueAsNumber: true,
          })}
          defaultValue={row.salary}
        />
      </div>
      <div className={styles.column}>
        <input
          type={"number"}
          {...register("equipmentCosts", {
            valueAsNumber: true,
          })}
          defaultValue={row.equipmentCosts}
        />
      </div>
      <div className={styles.column}>
        <input
          type={"number"}
          {...register("supportCosts", {
            valueAsNumber: true,
          })}
          defaultValue={row.supportCosts}
        />
      </div>
      <div className={styles.column}>
        <input
          type={"number"}
          {...register("estimatedProfit", {
            valueAsNumber: true,
          })}
          defaultValue={row.estimatedProfit}
        />
      </div>
      <input type="submit" style={{ display: "none" }} />
    </form>
  );
};

export default UpdateRow;
