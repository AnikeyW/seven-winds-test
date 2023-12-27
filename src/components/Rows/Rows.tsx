import React from "react";
import Row from "../Row/Row.tsx";
import { IRow } from "../../types";

interface IRowsProps {
  rows: IRow[];
  nestedLevel?: number;
}

const Rows: React.FC<IRowsProps> = ({ rows, nestedLevel = 0 }) => {
  return (
    <>
      {rows.map((row, index) => (
        <div key={`${row.id}${index}`}>
          <Row row={row} nestedLevel={nestedLevel} />
          {row.child && row.child.length > 0 && (
            <Rows rows={row.child} nestedLevel={nestedLevel + 1} />
          )}
        </div>
      ))}
    </>
  );
};

export default Rows;
