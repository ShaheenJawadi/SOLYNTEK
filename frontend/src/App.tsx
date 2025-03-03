import React from "react";
import { BrowserRouter,  useRoutes } from "react-router-dom";

import { routes } from "./routes";

const AppRoutes = () => {
  const routeElements = useRoutes(routes);
  return routeElements;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
