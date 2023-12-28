import { create } from "zustand";
import { IRow } from "../types";
import { addChildById, deleteRowById, updateRowById } from "../utils";
import { immer } from "zustand/middleware/immer";
import { InputsData } from "../components/CreateRow/CreateRow.types.ts";

export const MYID = 116505;

interface TableDataStore {
  rows: IRow[];
  isLoading: boolean;
  fetchRows: () => void;
  deleteRow: (id: number) => void;
  createRow: (parentId: number, data: InputsData, isFirstRow: boolean) => void;
  updateRow: (rowId: number, data: InputsData) => void;
  createRowInit: (parentId: number) => void;
}

export const useTableDataStore = create<TableDataStore>()(
  immer((set, getState) => ({
    rows: [],
    isLoading: false,
    fetchRows: async (): Promise<void> => {
      set({ isLoading: true });
      try {
        const res = await fetch(
          `http://185.244.172.108:8081/v1/outlay-rows/entity/${MYID}/row/list`,
        );
        if (!res.ok) throw res;
        set({ rows: await res.json() });
      } catch (err) {
        throw err;
      } finally {
        set({ isLoading: false });
      }
    },
    deleteRow: async (id: number): Promise<void> => {
      try {
        const res = await fetch(
          `http://185.244.172.108:8081/v1/outlay-rows/entity/${MYID}/row/${id}/delete`,
          {
            method: "DELETE",
          },
        );
        if (!res.ok) throw res;
        const updatedRows = deleteRowById(id, getState().rows);
        set({ rows: updatedRows });
      } catch (err) {
        throw err;
      }
    },
    createRowInit: (parentId: number): void => {
      const newRow: IRow = {
        id: 0,
        child: null,
        equipmentCosts: 0,
        estimatedProfit: 0,
        machineOperatorSalary: 0,
        mainCosts: 0,
        materials: 0,
        mimExploitation: 0,
        overheads: 0,
        rowName: parentId.toString(),
        salary: 0,
        supportCosts: 0,
        total: 0,
      };
      const updatedRows = addChildById(parentId, newRow, getState().rows);
      set({ rows: updatedRows });
    },
    createRow: async (
      parentId: number,
      data: InputsData,
      isFirstRow: boolean,
    ): Promise<void> => {
      try {
        const res = await fetch(
          `http://185.244.172.108:8081/v1/outlay-rows/entity/${MYID}/row/create`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({
              equipmentCosts: data.equipmentCosts,
              estimatedProfit: data.estimatedProfit,
              machineOperatorSalary: 0,
              mainCosts: 0,
              materials: 0,
              mimExploitation: 0,
              overheads: 0,
              parentId: isFirstRow ? null : parentId,
              rowName: data.rowName,
              salary: data.salary,
              supportCosts: data.supportCosts,
            }),
          },
        );
        if (!res.ok) throw res;
        if (isFirstRow) {
          getState().fetchRows();
          return;
        }
        const resJson = await res.json();
        const newRow = resJson.current;
        const updatedRows = deleteRowById(0, getState().rows);
        set({ rows: addChildById(parentId, newRow, updatedRows) });
      } catch (err) {
        throw err;
      }
    },
    updateRow: async (rowId: number, data: InputsData): Promise<void> => {
      try {
        const res = await fetch(
          `http://185.244.172.108:8081/v1/outlay-rows/entity/${MYID}/row/${rowId}/update`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({
              equipmentCosts: data.equipmentCosts,
              estimatedProfit: data.estimatedProfit,
              machineOperatorSalary: 0,
              mainCosts: 0,
              materials: 0,
              mimExploitation: 0,
              overheads: 0,
              rowName: data.rowName,
              salary: data.salary,
              supportCosts: data.supportCosts,
            }),
          },
        );
        if (!res.ok) throw res;
        const resJson = await res.json();
        const newRow = resJson.current;
        set({ rows: updateRowById(rowId, newRow, getState().rows) });
      } catch (err) {
        throw err;
      }
    },
  })),
);
