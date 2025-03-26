import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <script src="https://cdn.tailwindcss.com"></script>
    <App />
  </StrictMode>
);
