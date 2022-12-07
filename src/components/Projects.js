import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Container, Text, Row } from "@nextui-org/react";

const projects = [
	{
		name: "Development",
		subtitle:
			"A React app aimed at streamlining the process of creating playlists from a set of songs that fit the user's criteria.",
		gradient: {
			start: "$red800",
			stop: "$red600",
		},
		image: "development.png",
		organization: "CS 1300: UI/UX",
		time: "Fall 2022",
		link: "/development",
	},
	{
		name: "Iterative Design",
		subtitle:
			"An interactive hi-fi prototype for Hokali, a YCombinator startup creating a sports lessons marketplace.",
		gradient: {
			start: "$green700",
			stop: "$green500",
		},
		image: "iterative.png",
		organization: "CS 1300: UI/UX",
		time: "Fall 2022",
		link: "/iterative",
	},
	{
		name: "Responsive Redesign",
		subtitle:
			"A redesign of the New England Club Baseball Association's website with a focus on responsiveness.",
		gradient: {
			start: "$yellow800",
			stop: "$yellow600",
		},
		image: "responsive.png",
		organization: "CS 1300: UI/UX",
		time: "Fall 2022",
		link: "/responsive",
	},
	{
		name: "Personas & Storyboarding",
		subtitle:
			"A user research study into Brown University's Crestron AirMedia presentation system.",
		gradient: {
			start: "$cyan800",
			stop: "$cyan600",
		},
		image: "personas.png",
		organization: "CS 1300: UI/UX",
		time: "Fall 2022",
		link: "/personas",
	},
];

function Projects(props) {
	const navigate = useNavigate();

	return (
		<Container
			id="projects"
			as="section"
			css={{
				position: "relative",
				d: "flex",
				fd: "column",
				fw: "nowrap",
				ai: "center",
				px: 0,
				mw: "100%",
				rowGap: "$18",
				scrollMarginTop: "$20",
			}}
		>
			{projects.map((project) => {
				return (
					<Card
						isPressable
						variant="bordered"
						css={{ h: "400px", w: "65%" }}
						onPress={() => navigate(project.link)}
					>
						<Card.Body css={{ pb: "$0" }}>
							<Container
								css={{ d: "flex", fw: "nowrap", h: "100%" }}
							>
								<Card.Image
									width="100%"
									height="100%"
									src={`images/${project.image}`}
									objectFit="contain"
								/>
								<Container
									css={{
										d: "flex",
										fd: "column",
										jc: "center",
									}}
								>
									<div>
										{project.name.split(" ").map((word) => {
											return (
												<Text
													h2
													css={{
														d: "inline",
														my: 0,
														textGradient: `${project.gradient.start} 25%, ${project.gradient.stop} 100%`,
													}}
												>
													{word + " "}
												</Text>
											);
										})}
									</div>
									<Text h4 color="$gray800">
										{project.subtitle}
									</Text>
								</Container>
							</Container>
						</Card.Body>
						<Card.Footer
							css={{
								justifyItems: "flex-start",
								p: "$10 $12",
							}}
						>
							<Row
								wrap="wrap"
								justify="space-between"
								align="center"
							>
								<Text b>{project.organization}</Text>
								<Text
									css={{
										color: "$accents7",
										fontWeight: "$semibold",
										fontSize: "$sm",
									}}
								>
									{project.time}
								</Text>
							</Row>
						</Card.Footer>
					</Card>
				);
			})}
		</Container>
	);
}

export default Projects;
