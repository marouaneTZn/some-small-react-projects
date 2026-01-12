import { createRoot } from "react-dom/client"
import App from "./app";
import "./card.css";

const root = createRoot(document.getElementById('root'));
root.render(<App />)