import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

function Home(props) {
	return (
		<React.Fragment>
			<Hero />
			<Projects />
		</React.Fragment>
	);
}

export default Home;
