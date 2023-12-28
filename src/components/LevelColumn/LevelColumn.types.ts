import { IRow } from "../../types";

export interface ILevelColumnProps {
  row: IRow;
  nestedLevel: number;
  isEditRow?: boolean;
}
