import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { AuthService } from "src/api/authService/AuthService";
import { Paths } from "src/paths";

export function PrivateRoute(props: RouteProps) {
  if (AuthService.getAuthToken()) {
    return <Route {...props} />;
  }
  return <Redirect to={Paths.Root} />;
}
