import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./CreateRow.module.scss";
import LevelColumn from "../LevelColumn/LevelColumn.tsx";
import { useTableDataStore } from "../../stores/tableDataStore.ts";
import { IEditRowProps, InputsData } from "./CreateRow.types.ts";

const CreateRow: React.FC<IEditRowProps> = ({ row, nestedLevel, isFirstRow = false }) => {
  const { register, handleSubmit } = useForm<InputsData>();
  const createRow = useTableDataStore((state) => state.createRow);

  const onSubmit: SubmitHandler<InputsData> = (data) => {
    createRow(+row.rowName, data, isFirstRow);
  };

  return (
    <form className={styles.row} onSubmit={handleSubmit(onSubmit)}>
      <div className={`${styles.column} ${styles.columnlevel}`}>
        <LevelColumn row={row} nestedLevel={nestedLevel} isEditRow={true} />
      </div>
      <div className={`${styles.column} ${styles.projectname}`}>
        <input autoFocus={true} {...register("rowName")} defaultValue={""} />
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

export default CreateRow;
