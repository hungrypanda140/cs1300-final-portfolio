import React from "react";
import { useNavigate } from "react-router-dom";
import { IoMdBaseball, IoIosMusicalNotes } from "react-icons/io";
import { MdSportsTennis, MdPerson } from "react-icons/md";
import { Image, Navbar, Dropdown, Container } from "@nextui-org/react";

function Header(props) {
	const navigate = useNavigate();

	return (
		<Navbar css={{ px: "$10" }}>
			<Navbar.Brand>
				<Image
					// CITATION: Image was found here, https://dribbble.com/shots/10716439-panda
					src="/images/panda.png"
					height={52}
					css={{ cursor: "pointer" }}
					onClick={() => navigate("/")}
				/>
			</Navbar.Brand>
			<Navbar.Content enableCursorHighlight variant="highlight-rounded">
				<Navbar.Link onClick={() => navigate("/")}>Home</Navbar.Link>
				<Dropdown isBordered>
					<Navbar.Item>
						<Dropdown.Button
							light
							css={{
								paddingRight: "0!important",
								dflex: "center",
								"&:hover": {
									color: "$blue600",
								},
								span: {
									paddingLeft: "0!important",
									paddingRight: "0!important",
									height: "50%!important",
								},
								svg: {
									marginLeft: "0!important",
									paddingLeft: "0!important",
								},
							}}
							ripple={false}
						>
							Projects
						</Dropdown.Button>
					</Navbar.Item>
					<Dropdown.Menu
						css={{
							$$dropdownMenuWidth: "340px",
							$$dropdownItemHeight: "70px",
							"& .nextui-dropdown-item": {
								py: "$4",
								svg: {
									mr: "$4",
								},
								// dropdown item title
								"& .nextui-dropdown-item-content": {
									w: "100%",
									fontWeight: "$semibold",
								},
							},
						}}
					>
						<Dropdown.Item
							key="development"
							icon={
								<IoIosMusicalNotes
									size={24}
									color="var(--nextui-colors-red700)"
								/>
							}
							showFullDescription
							description="React app that streamlines playlist creation from songs that fit users' criteria."
						>
							<Container
								css={{
									d: "flex",
									left: 0,
									top: 0,
									w: "100%",
									h: "100%",
									p: 0,
									position: "absolute",
								}}
								onClick={() => navigate("/development")}
							/>
							Development
						</Dropdown.Item>
						<Dropdown.Item
							key="iterative"
							icon={
								<MdSportsTennis
									size={24}
									color="var(--nextui-colors-green700)"
								/>
							}
							showFullDescription
							description="Hi-fi prototype for Hokali, a startup creating a sports lessons marketplace."
						>
							<Container
								css={{
									d: "flex",
									left: 0,
									top: 0,
									w: "100%",
									h: "100%",
									p: 0,
									position: "absolute",
								}}
								onClick={() => navigate("/iterative")}
							/>
							Iterative Design
						</Dropdown.Item>
						<Dropdown.Item
							key="responsive"
							icon={
								<IoMdBaseball
									size={24}
									color="var(--nextui-colors-yellow700)"
								/>
							}
							showFullDescription
							description="Redesign of the New England Club Baseball Association's website."
						>
							<Container
								css={{
									d: "flex",
									left: 0,
									top: 0,
									w: "100%",
									h: "100%",
									p: 0,
									position: "absolute",
								}}
								onClick={() => navigate("/responsive")}
							/>
							Responsive Redesign
						</Dropdown.Item>
						<Dropdown.Item
							key="personas"
							icon={
								<MdPerson
									size={24}
									color="var(--nextui-colors-cyan700)"
								/>
							}
							showFullDescription
							description="User research study on the Crestron AirMedia presentation system."
						>
							<Container
								css={{
									d: "flex",
									left: 0,
									top: 0,
									w: "100%",
									h: "100%",
									p: 0,
									position: "absolute",
								}}
								onClick={() => navigate("/personas")}
							/>
							Personas & Storyboarding
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Navbar.Content>
		</Navbar>
	);
}

export default Header;
