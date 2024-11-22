"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function CalculateNVQUANGPage({ params }) {
  const [rows, setRows] = useState([{ id: 1, value: "" }]);
  const { toast, dismiss } = useToast();

  const addRow = () => {
    setRows([
      ...rows,
      { id: rows.length > 0 ? rows[rows.length - 1].id + 1 : 1, value: "" },
    ]);
  };

  const updateRow = (id, field, newValue) => {
    setRows(
      rows.map((row) => (row.id === id ? { ...row, [field]: newValue } : row))
    );
  };

  const deleteRow = (id) => {
    const rowToDelete = rows.find((row) => row.id === id);
    const filteredRows = rows.filter((row) => row.id !== id);
    const currrentToast = toast({
      variant: "success",
      title: "Delete success",
      description: `Row ${id} has been deleted.`,
      action: (
        <Button
          onClick={() => {
            currrentToast.dismiss();
            setRows((prevRows) => {
              const newRows = [...prevRows];
              const originalIndex = rows.indexOf(rowToDelete);
              newRows.splice(originalIndex, 0, rowToDelete);
              return newRows;
            });
          }}
        >
          Undo
        </Button>
      ),
    });

    setRows(filteredRows);
  };

  // Tính SUMPRODUCT cho cột `price` và `amount`
  const sumProduct = rows.reduce((sum, row) => sum + row.price * row.amount, 0);

  // Tính SUM của cột `amount`
  const sumAmount = rows.reduce((sum, row) => sum + row.amount * 1, 0);

  // Kết quả công thức
  const result = sumAmount !== 0 ? sumProduct / sumAmount : 0;

  return (
    <div className="p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center font-semibold">No</TableHead>
            <TableHead className="text-center font-semibold">Price</TableHead>
            <TableHead className="text-center font-semibold">Amount</TableHead>
            <TableHead className="text-center font-semibold">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>
                <Input
                  value={row.price}
                  onChange={(e) => updateRow(row.id, "price", e.target.value)}
                />
              </TableCell>
              <TableCell>
                <Input
                  value={row.amount}
                  onChange={(e) => updateRow(row.id, "amount", e.target.value)}
                />
              </TableCell>
              <TableCell>
                <div className="flex justify-center items-center">
                  <Trash2 color="#c10606" onClick={() => deleteRow(row.id)} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between my-4">
        <h3>Result: {result ? result : ""}</h3>
        <Button onClick={addRow}>+ Add Row</Button>
      </div>
    </div>
  );
}
