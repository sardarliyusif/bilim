import React from "react";
import { useLocation } from "react-router-dom";

export const Breadcrumb = () => {
  const location = useLocation();

  return location.pathname !== "/" ? (
    <div>Breadcrumb {location.pathname}</div>
  ) : (
    ""
  );
};
