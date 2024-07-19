"use client";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { useMany } from "@refinedev/core";
import {
  DateField,
  DeleteButton,
  EditButton,
  List,
  MarkdownField,
  ShowButton,
  useDataGrid,
} from "@refinedev/mui";
import React from "react";

export default function Dashboard() {
  const { dataGridProps } = useDataGrid({
    syncWithLocation: true,
  });

  

  

  return (
    <List>
   
    </List>
  );
}
