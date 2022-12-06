import React from "react";
import "./App.scss";
import { Container } from "@nextui-org/react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./routes/Home";
import Iterative from "./routes/Iterative";

function App() {
	return (
		<div className="App">
			<Header />
			<Container
				as="main"
				css={{
					position: "relative",
					minWidth: "100%",
					minHeight: "100vh",
					px: 0,
					pb: "$20",
					ox: "hidden",
				}}
			>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/iterative" element={<Iterative />} />
				</Routes>
			</Container>
		</div>
	);
}

export default App;
