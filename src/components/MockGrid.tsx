/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  ReactGrid,
  Column,
  Row,
  CellChange,
  TextCell,
} from "@silevis/reactgrid";
import "@silevis/reactgrid/styles.css";
import { useState } from "react";

interface CarOrder {
  date: string;
  car: string;
  time: string;
  place: string;
}

const getCarOrders = (): CarOrder[] => [];

const getColumns = (): Column[] => [
  { columnId: "date", width: 150 },
  { columnId: "car", width: 150 },
  { columnId: "time", width: 150 },
  { columnId: "place", width: 150 },
];

const headerRow: Row = {
  rowId: "header",
  cells: [
    { type: "header", text: "날짜" },
    { type: "header", text: "차량" },
    { type: "header", text: "집합시간" },
    { type: "header", text: "집합장소" },
  ],
};

const getRows = (carOrders: CarOrder[]): Row[] => [
  headerRow,
  ...carOrders.map<Row>((carOrder, idx) => ({
    rowId: idx,
    cells: [
      { type: "text", text: carOrder.date },
      { type: "text", text: carOrder.car },
      { type: "text", text: carOrder.time },
      { type: "text", text: carOrder.place },
    ],
  })),
];

const applyChanges = (
  changes: CellChange<TextCell>[],
  prev: CarOrder[]
): CarOrder[] => {
  console.log("changes", changes);
  console.log("prev", prev);

  const next = structuredClone(prev);

  changes.forEach((change) => {
    const index = change.rowId;
    const fieldName = change.columnId;
    // @ts-ignore
    next[index][fieldName] = change.newCell.text || "";
  });

  console.log("next", next);
  return [...next];
};

export const MockGrid = () => {
  const [carOrders, setCarOrders] = useState<CarOrder[]>(getCarOrders());

  const rows = getRows(carOrders);
  const columns = getColumns();

  function handleChanges(changes: CellChange<TextCell>[]) {
    setCarOrders((prev) => applyChanges(changes, prev));
  }

  function addNewCarOrder() {
    setCarOrders((prev) => [
      ...prev,
      {
        date: "",
        car: "",
        time: "",
        place: "",
      },
    ]);
  }

  return (
    <>
      <button onClick={addNewCarOrder}>+ 추가</button>
      <ReactGrid
        rows={rows}
        columns={columns}
        // @ts-ignore
        onCellsChanged={handleChanges}
        enableRangeSelection
      />
    </>
  );
};
