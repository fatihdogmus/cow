import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { ListUsersApi, User } from "./api/ListUsersApi";

const columns: GridColDef[] = [
  { field: "username", headerName: "User name", flex: 1, headerClassName: "bg-slate-100" },
  { field: "name", headerName: "Name", flex: 1, headerClassName: "bg-slate-100" },
  { field: "surname", headerName: "Surname", flex: 1, headerClassName: "bg-slate-100" },
  { field: "role", headerName: "Role", flex: 1, headerClassName: "bg-slate-100" }
];

interface Props {
  listUsersApi: ListUsersApi;
}

export function ListUsers({ listUsersApi }: Props): JSX.Element {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const allUsers = await listUsersApi.getAllUsers();
      setUsers(allUsers);
    };
    getUsers();
  }, []);

  return (
    <div className="h-96 flex">
      <div className="flex-grow">
        <DataGrid
          disableSelectionOnClick={true}
          rows={users}
          columns={columns}
          disableColumnMenu={true}
          rowsPerPageOptions={[10, 25, 50, 100]}
          pageSize={10}
        />
      </div>
    </div>
  );
}
