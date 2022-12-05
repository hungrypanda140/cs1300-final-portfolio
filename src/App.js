import "./App.scss";
import { Container } from "@nextui-org/react";
import Header from "./components/Header";
import Hero from "./components/Hero";

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
					ox: "hidden",
				}}
			>
				<Hero />
			</Container>
		</div>
	);
}

export default App;
