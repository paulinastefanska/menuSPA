import React from "react";
import { Route, Redirect } from "react-router-dom";

const permission = false;

const AdminPage = () => {
  return (
    <Route
      render={() =>
        permission ? (
          <h3>Welcome! In Your Admin Panel</h3>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default AdminPage;
