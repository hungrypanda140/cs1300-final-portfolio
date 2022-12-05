import React from "react";
import { Image, Navbar } from "@nextui-org/react";

function Header(props) {
	return (
		<Navbar>
			<Navbar.Brand>
				<Image src="images/panda.png" height={52} />
			</Navbar.Brand>
			<Navbar.Content
				enableCursorHighlight
				variant="highlight-rounded"
				css={{ padding: "$2" }}
			>
				<Navbar.Link href="#">About</Navbar.Link>
				<Navbar.Link href="#">Projects</Navbar.Link>
			</Navbar.Content>
		</Navbar>
	);
}

export default Header;
