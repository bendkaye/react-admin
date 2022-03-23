import * as React from "react";
import { List, Datagrid, TextField, FunctionField } from "react-admin";

export const TaskList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <FunctionField label="name" />
      <TextField source="age" />
    </Datagrid>
  </List>
);
