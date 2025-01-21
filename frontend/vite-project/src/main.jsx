import { createRoot } from "react-dom/client";
import "./index.css";
import FavoriteProvider from "./context/FavoriteContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <FavoriteProvider>
    <App />
  </FavoriteProvider>
);
