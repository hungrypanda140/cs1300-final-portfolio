import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import "./index.css";
import ScrollToTop from "./components/ScrollToTop";
import App from "./App";

const darkTheme = createTheme({
	type: "dark",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<NextUIProvider theme={darkTheme}>
			<BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
				<ScrollToTop />
				<App />
			</BrowserRouter>
		</NextUIProvider>
	</React.StrictMode>
);
