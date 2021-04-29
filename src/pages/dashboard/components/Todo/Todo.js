import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import GridContainer from "../../../../utils/components/GridContainer/GridContainer";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Title", width: 130 },
  { field: "completed", headerName: "Completed", width: 130 },
];

const Todo = ({ todos }) => {
  console.log(todos);

  return (
    <GridContainer>
      <DataGrid
        rows={todos}
        columns={columns}
        pageSize={10}
        checkboxSelection
        onSelectionChange={(selection) => {}}
      />
    </GridContainer>
  );
};

export default Todo;
