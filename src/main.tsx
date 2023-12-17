import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App.tsx";
import { ROUTES } from "./constants/routes.ts";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";
import { RecoilRoot } from "recoil";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter basename={ROUTES.BASE}>
          <QueryParamProvider adapter={ReactRouter6Adapter}>
            <App />
          </QueryParamProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
);
