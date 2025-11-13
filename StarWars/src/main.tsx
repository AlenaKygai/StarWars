// Application entry point
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import App from "./App.tsx";

// Initialize React Query client for data fetching and caching
const queryClient = new QueryClient();

// Render the application to the DOM
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Provide React Query context to all components */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
