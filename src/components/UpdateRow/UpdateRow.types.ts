import { IRow } from "../../types";

export interface IUpdateRowProps {
  row: IRow;
  nestedLevel: number;
  resetMode: () => void;
}
