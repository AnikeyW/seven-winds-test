import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./UpdateRow.module.scss";
import LevelColumn from "../LevelColumn/LevelColumn.tsx";
import { useTableDataStore } from "../../stores/tableDataStore.ts";
import { InputsData } from "../CreateRow/CreateRow.types.ts";
import { IUpdateRowProps } from "./UpdateRow.types.ts";

const UpdateRow: React.FC<IUpdateRowProps> = ({ row, nestedLevel, resetMode }) => {
  const { register, handleSubmit } = useForm<InputsData>();
  const updateRow = useTableDataStore((state) => state.updateRow);
  const onSubmit: SubmitHandler<InputsData> = (data) => {
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
