import { IRow } from "../../types";

export interface IRowProps {
  nestedLevel: number;
  row: IRow;
}
export enum Mode {
  VIEW = "view",
  CREATE = "create",
  UPDATE = "update",
}
