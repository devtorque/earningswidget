import { createRoot } from "react-dom/client";
import App from "./App";

(window as unknown as Record<string, unknown>).renderEarningsWidget = (selector: string, config: Record<string, unknown>) => {
  const container = document.querySelector(selector);
  if (!container) {
    console.error("EarningsWidget: container not found:", selector);
    return;
  }

  const root = createRoot(container);
  root.render(<App config={config} />);
};