import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import "./index.css";
import App from "./App";

const darkTheme = createTheme({
	type: "dark",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<NextUIProvider theme={darkTheme}>
			<App />
		</NextUIProvider>
	</React.StrictMode>
);
