import React from "react";
import { NavBar } from "../components/common/NavBar";
import TramosPage from "../page/TramosPage";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import ErrorPage from "../components/common/ErrorPage";
import NotFound from "../components/common/NotFound";
import ClientesPage from "../page/ClientesPage";
import TramosClientesPage from "../page/TramosClientesPage";



const Root = () => {
  return (
    <div className="min-h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="/" element={<Navigate to="/tramos" />} />
            <Route
              path="tramos"
              element={<TramosPage />}
              errorElement={<ErrorPage />}
            />
            <Route
              path="clientes"
              element={<ClientesPage/>}
              errorElement={<ErrorPage />}
            />
            <Route
              path="tramos-clientes"
              element={<TramosClientesPage/>}
              errorElement={<ErrorPage />}
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Root;
