import React from "react";
import { Redirect, Route } from "react-router";

function PublicRoute({ component: Component, layout: Layout, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          {!JSON.parse(localStorage.getItem('auth')) ? <Component {...props}></Component> : <Redirect to="/" />}
        </Layout>
      )}
    ></Route>
  );
}

export default PublicRoute;
