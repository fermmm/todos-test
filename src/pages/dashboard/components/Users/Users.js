import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import GridContainer from "../../../../utils/components/GridContainer/GridContainer";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "userName", headerName: "Username", width: 130 },
  { field: "website", headerName: "Website", width: 130 },
  { field: "catchPhrase", headerName: "Catch Phrase", width: 130 },
];

const Users = ({ users, onSelectionChange }) => {
  return (
    <GridContainer>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={10}
        checkboxSelection
        onSelectionChange={(selection) => {
          onSelectionChange(selection.rows);
        }}
      />
    </GridContainer>
  );
};

export default Users;
