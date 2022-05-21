import { ListUsers, ListUsersApi } from "@cow/front-end/users";

function Index() {
  return <ListUsers listUsersApi={new ListUsersApi()}></ListUsers>;
}

export default Index;
