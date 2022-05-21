import React from "react";
import { DataGrid, GridColDef, GridRowId } from "@mui/x-data-grid";
import { AppBar } from "@mui/material";

type Props = {
  data: any[];
  columns: GridColDef[];
  tableActions?: JSX.Element[];
  selectable?: boolean;
};

export function Table({ data, columns, tableActions, selectable = true }: Props): JSX.Element {
  const modifiedColumns: GridColDef[] = columns.map(column => ({
    ...column,
    flex: 1,
    headerClassName: "bg-slate-100"
  }));

  const [selectionModel, setSelectionModel] = React.useState<GridRowId[]>([]);

  return (
    <div className="h-96 flex">
      <div className="flex-grow">
        {tableActions ? (
          <AppBar
            sx={{
              backgroundColor: "rgb(241 245 249)",
              boxShadow: "none"
            }}
            position="static">
            <div className="flex justify-end">
              {tableActions.map(button => (
                <div key={button.key} className="m-3">
                  {button}
                </div>
              ))}
            </div>
          </AppBar>
        ) : null}
        <DataGrid
          disableSelectionOnClick={true}
          rows={data}
          columns={modifiedColumns}
          disableColumnMenu={true}
          checkboxSelection={true}
          selectionModel={selectionModel}
          onSelectionModelChange={selection => {
            if (selection.length > 1) {
              const selectionSet = new Set(selectionModel);
              const result = selection.filter(s => !selectionSet.has(s));

              setSelectionModel(result);
            } else {
              setSelectionModel(selection);
            }
          }}
          initialState={{
            pagination: {
              pageSize: 10
            }
          }}
          rowsPerPageOptions={[10, 25, 50, 100]}
        />
      </div>
    </div>
  );
}
