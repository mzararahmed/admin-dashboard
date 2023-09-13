import { createRoot } from 'react-dom/client';
import { ContextProvider } from "./contexts/ContextProvider";
import React from 'react'
import App from "./App";
import "./index.css";

const container = document.getElementById('root');
// @ts-ignore
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <ContextProvider>
        <App />
    </ContextProvider>);