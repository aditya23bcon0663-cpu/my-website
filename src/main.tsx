import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Respect system preference by default — theme toggling is handled by ThemeToggle component.

createRoot(document.getElementById("root")!).render(
	<App />
);
