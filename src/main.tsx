import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

/**
 * 🚀 Application Entry Point
 * ------------------------------------
 * HomeEase React application base
 *
 * Responsibilities:
 * - Mount the root `<App />` component into the DOM
 * - Wrap the app in React’s StrictMode for highlighting potential issues
 * - Provide routing context using BrowserRouter for navigation
 * - Load global Tailwind and base styles via `index.css`
 */

// Create the root and render the application inside the #root div
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		{/* Enables client-side routing throughout the app */}
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
