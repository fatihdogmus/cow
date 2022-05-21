import React, { useEffect, useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import { ListUsersApi, User } from "./api/ListUsersApi";
import { Button } from "@mui/material";
import { Table } from "@cow/front-end/common-components";
import { useRouter } from "next/router";

const columns: GridColDef[] = [
  { field: "username", headerName: "User name" },
  { field: "name", headerName: "Name" },
  { field: "surname", headerName: "Surname" },
  { field: "role", headerName: "Role" }
];

interface Props {
  listUsersApi: ListUsersApi;
}

export function ListUsers({ listUsersApi }: Props): JSX.Element {
  const [users, setUsers] = useState<User[]>([]);

  const router = useRouter();

  useEffect(() => {
    const getUsers = async () => {
      const allUsers = await listUsersApi.getAllUsers();
      setUsers(allUsers);
    };
    getUsers();
  }, []);

  return (
    <Table
      columns={columns}
      data={users}
      tableActions={[
        <Button variant="contained" onClick={() => router.push(`${router.asPath}/add`)}>
          Add User
        </Button>
      ]}
    />
  );
}
