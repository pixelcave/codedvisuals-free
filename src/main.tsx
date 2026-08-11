import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.tsx";
import Showcase from "./showcase.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";

/** The 1680x1080 marketing poster lives at /showcase, ?showcase or #showcase. */
function isShowcaseRoute() {
  const { pathname, search, hash } = window.location;

  return (
    pathname.replace(/\/+$/, "").endsWith("/showcase") ||
    new URLSearchParams(search).has("showcase") ||
    hash.replace(/^#\/?/, "").startsWith("showcase")
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {isShowcaseRoute() ? (
      <Showcase />
    ) : (
      <ThemeProvider>
        <App />
      </ThemeProvider>
    )}
  </StrictMode>,
);
