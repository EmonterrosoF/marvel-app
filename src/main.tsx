import "atropos/css";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <NextUIProvider>
      <main className=" bg-background main">
        <App />
      </main>
    </NextUIProvider>
  </QueryClientProvider>
);
