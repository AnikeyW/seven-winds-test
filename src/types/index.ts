export interface IRow {
  child: IRow[] | null;
  id: number;
  equipmentCosts: number;
  estimatedProfit: number;
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  overheads: number;
  rowName: string;
  salary: number;
  supportCosts: number;
  total: number;
}
