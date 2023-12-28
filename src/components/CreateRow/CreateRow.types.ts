import { IRow } from "../../types";

export interface IEditRowProps {
  row: IRow;
  nestedLevel: number;
  isFirstRow?: boolean;
}

export interface InputsData {
  equipmentCosts: number;
  estimatedProfit: number;
  salary: number;
  rowName: string;
  supportCosts: number;
}
