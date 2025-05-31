import { createRoot } from "react-dom/client";
import App from "./App";

type WidgetConfig = {
  apiKey: string;
  baseUrl: string;
};

(window as unknown as Record<string, unknown>).renderEarningsWidget = (selector: string, config: WidgetConfig) => {
  const container = document.querySelector(selector);
  if (!container) {
    console.error("EarningsWidget: container not found:", selector);
    return;
  }

  if (!config.apiKey || !config.baseUrl) {
    console.error("EarningsWidget: Missing required config - apiKey and baseUrl are required");
    return;
  }

  if (typeof config.apiKey !== 'string' || typeof config.baseUrl !== 'string') {
    console.error("EarningsWidget: Invalid config - apiKey and baseUrl must be strings");
    return;
  }

  const root = createRoot(container);
  root.render(<App config={config} />);
};
