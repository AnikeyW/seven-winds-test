import React, { useState } from "react";
import styles from "./LevelColumn.module.scss";
import rowIcon from "../../assets/row-icon.png";
import rowIconHover from "../../assets/row-icon-hover.png";
import deleteIcon from "../../assets/delete-icon.png";
import styled from "styled-components";
import { useTableDataStore } from "../../stores/tableDataStore.ts";
import { IRow } from "../../types";
import { ILevelColumnProps } from "./LevelColumn.types.ts";

const LevelIcon = styled.div<{ $nestedLevel: number; $countTotalDesc: number }>`
  left: ${(props) => props.$nestedLevel > 0 && `${props.$nestedLevel * 18}px`};
  &::before {
    height: ${(props) => `${43 + (props.$countTotalDesc - 1) * 50}px`};
  }
  &::after {
    left: ${(props) => props.$nestedLevel > 0 && `${-14}px`};
    width: ${(props) => (props.$nestedLevel > 0 ? `14px` : "0px")};
  }
`;

function countTotalDesc(data: IRow | null): number {
  if (!data || !data.child || data.child.length === 0) {
    return 0;
  }

  let totalDescendants = 0;

  data.child.forEach((child, index) => {
    if (data.child) {
      if (index === data.child.length - 1) {
        return;
      }
    }
    totalDescendants += countTotalDesc(child);
  });

  return totalDescendants + data.child.length;
}

const LevelColumn: React.FC<ILevelColumnProps> = ({
  row,
  nestedLevel,
  isEditRow = false,
}) => {
  const deleteRow = useTableDataStore((state) => state.deleteRow);
  const createRowInit = useTableDataStore((state) => state.createRowInit);
  const [isShowDeleteBtn, setIsShowDeleteBtn] = useState<boolean>(false);

  const addRowHandler = (id: number) => {
    if (isEditRow) return;
    createRowInit(id);
  };

  const deleteRowHandler = (id: number) => {
    deleteRow(id);
  };

  return (
    <>
      <LevelIcon
        className={styles.icon}
        $nestedLevel={nestedLevel}
        $countTotalDesc={countTotalDesc(row)}
      >
        <div
          onMouseEnter={() => setIsShowDeleteBtn(true)}
          onMouseLeave={() => setIsShowDeleteBtn(false)}
        >
          {!isShowDeleteBtn && <img src={rowIcon} alt="icon" />}
          {isShowDeleteBtn && (
            <div className={styles.addbutton}>
              <img src={rowIconHover} alt="icon" onClick={() => addRowHandler(row.id)} />
              <img src={deleteIcon} alt="icon" onClick={() => deleteRowHandler(row.id)} />
            </div>
          )}
        </div>
      </LevelIcon>
    </>
  );
};

export default LevelColumn;
