import * as React from "react";
import { Admin, Resource } from "react-admin";
import { TaskList } from "./views/tasks";
import Dashboard from "./views/dashboard";
import UserIcon from "@material-ui/icons/Group";
import authProvider from "./authProvider";
import jsonapiClient from "ra-jsonapi-client";

const settings = { total: "total-count" };

const dataProvider = jsonapiClient(
  "https://a7d6-141-226-11-244.ngrok.io", // this is not currently active
  settings
);
const App = () => (
  <Admin
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource name="task" list={TaskList} icon={UserIcon} />
  </Admin>
);

export default App;
