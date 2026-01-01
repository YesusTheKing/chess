import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {Chess} from "./src/components/chess";
import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import './public/assets/style.css';
const root = document.getElementById('root');

createRoot(root!).render(
    <StrictMode>
        <Chess />
    </StrictMode>
);