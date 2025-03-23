import React from "react";
import ReactDOM from "react-dom/client"; // Use "react-dom" if React version < 18
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // Ensure there's a div with id="root" in your HTML
root.render(<App />);