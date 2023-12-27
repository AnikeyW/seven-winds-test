import { IRow } from "../types";

export function deleteRowById(
  idToDelete: number,
  currentRows: IRow[] | null = null,
): IRow[] {
  if (!currentRows) {
    return [];
  }

  const updatedRows: IRow[] = [];

  for (const row of currentRows) {
    // Рекурсивно вызываем функцию для удаления элемента внутри вложенного массива
    if (row.child) {
      row.child = deleteRowById(idToDelete, row.child);
    }

    // Добавляем элемент в обновленный массив, если его id не совпадает с idToDelete
    if (row.id !== idToDelete) {
      updatedRows.push(row);
    }
  }

  return updatedRows;
}

export function addChildById(
  idToAddTo: number,
  newChild: IRow,
  rows: IRow[] | null,
): IRow[] {
  if (!rows) {
    return [];
  }

  const updatedRows: IRow[] = [];

  for (const row of rows) {
    if (row.id === idToAddTo) {
      // Нашли элемент по id, добавляем новый элемент в его child
      if (!row.child) {
        row.child = [];
      }
      row.child.push(newChild);
    } else {
      // Рекурсивно вызываем функцию для обновления вложенных элементов
      const updatedChild = addChildById(idToAddTo, newChild, row.child);
      row.child = updatedChild;
    }

    updatedRows.push(row);
  }

  return updatedRows;
}

export function updateRowById(
  idToUpdate: number,
  updatedRow: IRow,
  rows: IRow[] | null,
): IRow[] {
  if (!rows) {
    return [];
  }

  const updatedRows: IRow[] = [];

  for (const row of rows) {
    if (row.id === idToUpdate) {
      // Нашли элемент по id, заменяем его обновленным элементом
      updatedRows.push(updatedRow);
    } else if (row.child) {
      // Рекурсивно вызываем функцию для обновления вложенных элементов
      const updatedChild = updateRowById(idToUpdate, updatedRow, row.child);
      row.child = updatedChild;
      updatedRows.push(row);
    } else {
      updatedRows.push(row);
    }
  }

  return updatedRows;
}
