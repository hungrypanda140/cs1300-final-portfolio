import React from "react";
import { Container, Text, Grid, Col, Image, Table } from "@nextui-org/react";

function Personas(props) {
	return (
		<Container
			as="section"
			css={{
				d: "flex",
				fd: "column",
				fw: "nowrap",
				ai: "center",
				px: "$28",
				mw: "100%",
				scrollMarginTop: "$20",
			}}
		>
			<Text
				h1
				css={{
					mb: 0,
					textGradient: "$cyan800 25%, $cyan600 100%",
					paddingRight: "$1",
				}}
			>
				Personas & Storyboarding
			</Text>
			<Text h3 color="$accents9" css={{ textAlign: "center" }}>
				A user research study into Brown University's Crestron AirMedia
				presentation system.
			</Text>
			<Container css={{ mt: "$2" }}>
				<Table
					css={{
						height: "auto",
						minWidth: "100%",
						ai: "center",
						jc: "center",
						fontWeight: "$semibold",
						px: 0,
					}}
				>
					<Table.Header>
						<Table.Column>TIMELINE</Table.Column>
						<Table.Column>SKILLS</Table.Column>
						<Table.Column>FOR</Table.Column>
					</Table.Header>
					<Table.Body>
						<Table.Row key="1" css={{ color: "$accents9" }}>
							<Table.Cell>Fall 2022: Sep</Table.Cell>
							<Table.Cell css={{ d: "flex", flexWrap: "wrap" }}>
								User Research, Personas, Storyboarding
							</Table.Cell>
							<Table.Cell>CS 1300: UI/UX</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>
			</Container>
			<Container
				css={{
					d: "flex",
					fd: "column",
					pb: "$4",
					px: 0,
				}}
			>
				<Text
					h2
					css={{
						borderBottom:
							"$borderWeights$light solid rgba(255, 255, 255, 0.2)",
					}}
				>
					Context
				</Text>
				<Text h3>Goal</Text>
				<Text p css={{ mb: "$6" }}>
					For this CS 1300 project, I was tasked with{" "}
					<Text
						span
						css={{ color: "$cyan700", fontWeight: "bolder" }}
					>
						conducting a user research study on a
						publicly-accessible interface
					</Text>{" "}
					and{" "}
					<Text
						span
						css={{ color: "$cyan700", fontWeight: "bolder" }}
					>
						creating personas and a storyboard based on my findings
					</Text>
					. The central aim of this exercise was to learn how to
					empathize with users and identify their pain points.
				</Text>
				<Text h3>Problem</Text>
				<Text p css={{ mb: "$6" }}>
					Users of Brown University conference rooms and classrooms
					want to present content such as videos and teaching slides
					to others in an accessible manner. However, the displays and
					speakers of the devices that they are presenting on are too
					small and quiet to be viewed and heard by the entire
					audience. This leads to{" "}
					<Text
						span
						css={{ color: "$cyan700", fontWeight: "bolder" }}
					>
						low-quality presentations that don’t effectively and
						efficiently transmit information
					</Text>
					. In an effort to solve this problem, the university
					installed Crestron AirMedia presentation systems into many
					rooms. Crestron markets their AirMedia system's ability to{" "}
					<Text
						span
						css={{ color: "$cyan700", fontWeight: "bolder" }}
					>
						transform any space into a dynamic presentation space
					</Text>{" "}
					by making it easy to present and share from any device. That
					being said, users still have many issues with the AirMedia
					system that need to be addressed.
				</Text>
				<Text
					h3
					css={{
						alignSelf: "center",
						width: "80%",
						textAlign: "center",
						fontStyle: "italic",
					}}
				>
					"How might we use interviews, persona building, and
					storyboarding to explore users' experiences and pain points
					with the AirMedia presentation system?"
				</Text>
			</Container>
			<Container
				css={{
					d: "flex",
					fd: "column",
					px: 0,
					boxSizing: "border-box",
				}}
			>
				<Text
					h2
					css={{
						borderBottom:
							"$borderWeights$light solid rgba(255, 255, 255, 0.2)",
					}}
				>
					Interface Components
				</Text>
				<Text p css={{ mb: "$6" }}>
					To begin the user research process, I devoted some time to
					fully understanding the{" "}
					<Text
						span
						css={{ color: "$cyan700", fontWeight: "bolder" }}
					>
						key interface components
					</Text>
					. There are three different screens that make up the
					AirMedia system's interface:
				</Text>
				<Grid.Container justify="center" gap={3}>
					<Grid xs={10} sm={6}>
						<Col
							css={{
								d: "flex",
								fd: "column",
								rowGap: "$2",
								p: "$10",
								borderRadius: "10px",
								backgroundColor: "$gray100",
								border: "1px solid $accents5",
							}}
						>
							<Text
								h3
								css={{
									color: "$cyan700",
									fontWeight: "bolder",
									alignSelf: "center",
									textAlign: "center",
									mb: "$4",
								}}
							>
								Presentation Display
							</Text>
							<Image
								src="images/personas/tv_sketch.jpg"
								css={{
									border: "1px solid $accents5",
									borderRadius: "10px",
								}}
							/>
							<Text p css={{ mt: "$6" }}>
								The presentation display (usually a TV or
								projector screen) contains written instructions
								for connecting to the system using different
								methods and devices.
							</Text>
						</Col>
					</Grid>
					<Grid xs={10} sm={6}>
						<Col
							css={{
								d: "flex",
								fd: "column",
								rowGap: "$2",
								p: "$10",
								borderRadius: "10px",
								backgroundColor: "$gray100",
								border: "1px solid $accents5",
							}}
						>
							<Text
								h3
								css={{
									color: "$cyan700",
									fontWeight: "bolder",
									alignSelf: "center",
									textAlign: "center",
									mb: "$4",
								}}
							>
								Wall-mounted Tablet
							</Text>
							<Image
								src="images/personas/tablet_sketch.jpg"
								css={{
									border: "1px solid $accents5",
									borderRadius: "10px",
								}}
							/>
							<Text p css={{ mt: "$6" }}>
								The tablet display contains the controls for
								actual presentation settings such as method of
								connection, camera positioning, system volume,
								microphones, etc.
							</Text>
						</Col>
					</Grid>
					<Grid xs={10} sm={6}>
						<Col
							css={{
								d: "flex",
								fd: "column",
								rowGap: "$2",
								p: "$10",
								borderRadius: "10px",
								backgroundColor: "$gray100",
								border: "1px solid $accents5",
							}}
						>
							<Text
								h3
								css={{
									color: "$cyan700",
									fontWeight: "bolder",
									alignSelf: "center",
									textAlign: "center",
									mb: "$4",
								}}
							>
								AirMedia Desktop & Mobile App
							</Text>
							<Image
								src="images/personas/airmedia_sketch.jpg"
								css={{
									border: "1px solid $accents5",
									borderRadius: "10px",
								}}
							/>
							<Text p css={{ mt: "$6" }}>
								The AirMedia desktop or mobile application
								enables wireless connection and presentation.
							</Text>
						</Col>
					</Grid>
				</Grid.Container>
			</Container>
			<Container
				css={{
					d: "flex",
					fd: "column",
					px: 0,
					boxSizing: "border-box",
				}}
			>
				<Text
					h2
					css={{
						borderBottom:
							"$borderWeights$light solid rgba(255, 255, 255, 0.2)",
					}}
				>
					User Research
				</Text>
				<Text h3>Observations</Text>
				<Text p>
					As part of this user research study into the Crestron
					AirMedia system, I observed 3 different users engaging with
					the system.
				</Text>
				<ul
					style={{
						listStyleType: "disc",
						letterSpacing: "var(--nextui-letterSpacings-tighter)",
					}}
				>
					<li>
						<Text
							span
							css={{ color: "$cyan700", fontWeight: "bolder" }}
						>
							Varying Confidence Levels When Navigating:{" "}
						</Text>
						<Text span>
							There was a clear correlation between observed
							confidence levels of users’ interaction with the
							system and the complexity of features that they
							used. One user made adjustments to various wireless
							microphones and the system’s volume output levels in
							a succinct and practiced manner while the other two
							users took extended periods of time and had to reset
							the system just to get their presentation up on the
							display.
						</Text>
					</li>
					<li>
						<Text
							span
							css={{ color: "$cyan700", fontWeight: "bolder" }}
						>
							Confusion and Frustration from Less Experienced
							Users:{" "}
						</Text>
						<Text span>
							The two seemingly less experienced users exhibited
							confused facial expressions while attempting to
							connect wirelessly via the Crestron AirMedia client
							app. One of them began continuously pressing a
							button on the tablet in an effort to get the
							presentation to show, while another clicked around
							aimlessly before finding the shutdown and reset
							button.
						</Text>
					</li>
				</ul>
				<Text h3>Interview Questions</Text>
				<Text p>
					After observing the 3 users, I conducted short interviews
					with them using the following questions:
				</Text>
				<ul
					style={{
						listStyleType: "disc",
						letterSpacing: "var(--nextui-letterSpacings-tighter)",
					}}
				>
					<li>
						How long do you expect it to take you to connect to and
						set up the system?
					</li>
					<li>
						What do you think someone who has never seen this system
						before would expect it to be used for?
					</li>
					<li>Why do you use this system?</li>
					<li>
						Which of the 2 main methods for connecting to the system
						(wireless vs. wired) do you use most often?
					</li>
					<li>Is the tablet screen easy to understand?</li>
					<li>
						Are the instructions on the presentation display easy to
						understand?
					</li>
					<li>
						What parts of this system are most important to you?
					</li>
					<li>
						What parts of this system are least important to you?
					</li>
					<li>Does this system consistently perform as expected?</li>
					<li>
						Is there anything missing from this system that would
						make it easier for you to present?
					</li>
					<li>What is the hardest part of using this system?</li>
				</ul>
				<Text h3>Interview Takeaways</Text>
				<Grid.Container justify="center" gap={3}>
					<Grid xs={10} sm={6}>
						<Col
							css={{
								d: "flex",
								fd: "column",
								rowGap: "$2",
								p: "$10",
								borderRadius: "10px",
								backgroundColor: "$gray100",
								border: "1px solid $accents5",
							}}
						>
							<Text
								span
								css={{
									color: "$cyan700",
									fontWeight: "bolder",
									alignSelf: "center",
									textAlign: "center",
									mb: "$4",
								}}
							>
								Strong Conceptual Model
							</Text>
							<Text p>
								All three interviewees appreciated the clarity
								of the control buttons on the tablet. In
								particular, the presence of icons alongside text
								descriptions of each button’s purpose provided
								cues to help the users understand how the system
								should work. This was reflected in users’
								acknowledgment of the majority of system
								functionalities, ranging from basic ones like
								wired vs. wireless presentation to advanced ones
								like adjusting the perspective of in-room
								recording cameras.
							</Text>
						</Col>
					</Grid>
					<Grid xs={10} sm={6}>
						<Col
							css={{
								d: "flex",
								fd: "column",
								rowGap: "$2",
								p: "$10",
								borderRadius: "10px",
								backgroundColor: "$gray100",
								border: "1px solid $accents5",
							}}
						>
							<Text
								span
								css={{
									color: "$cyan700",
									fontWeight: "bolder",
									alignSelf: "center",
									textAlign: "center",
									mb: "$4",
								}}
							>
								Poor Visibility Of Key Information
							</Text>
							<Text p>
								Two users complained that crucial information
								such as the system’s IP address and login code
								are too hidden in the bottom left corner of the
								presentation display. The IP address and login
								code are required to find and connect to the
								presentation display wirelessly. Users felt that
								this information could be given a more prominent
								location, possibly in the spot that is currently
								occupied by the instructions for troubleshooting
							</Text>
						</Col>
					</Grid>
					<Grid xs={10} sm={6}>
						<Col
							css={{
								d: "flex",
								fd: "column",
								rowGap: "$2",
								p: "$10",
								borderRadius: "10px",
								backgroundColor: "$gray100",
								border: "1px solid $accents5",
							}}
						>
							<Text
								span
								css={{
									color: "$cyan700",
									fontWeight: "bolder",
									alignSelf: "center",
									textAlign: "center",
									mb: "$4",
								}}
							>
								Catering to Different Experience Levels
							</Text>
							<Text p>
								All interviewees praised the system's
								inclusivity to users of all experience levels.
								They highlighted the interface’s separation of
								Basic Mode and Advanced Settings as a thoughtful
								design decision. For the two newer users who
								only wanted to present their content, the Basic
								Mode’s emphasis on toggling between presentation
								modes and adjusting volume was sufficient. For
								the advanced user with more complex use cases,
								the Advanced Settings’ focus on camera settings
								and audio-video routing provided more fine-tuned
								control.
							</Text>
						</Col>
					</Grid>
					<Grid xs={10} sm={6}>
						<Col
							css={{
								d: "flex",
								fd: "column",
								rowGap: "$2",
								p: "$10",
								borderRadius: "10px",
								backgroundColor: "$gray100",
								border: "1px solid $accents5",
							}}
						>
							<Text
								span
								css={{
									color: "$cyan700",
									fontWeight: "bolder",
									alignSelf: "center",
									textAlign: "center",
									mb: "$4",
								}}
							>
								Opaque Error States and Lack of Troubleshooting
								Options
							</Text>
							<Text p>
								Two users were unable to present wirelessly
								using the AirMedia client app. One user
								encountered an “Invalid certificate” error and
								the other could not find a macOS AirPlay menu
								that the AirMedia app instructed them to use. In
								both cases, the Crestron app only accounted for
								the ideal user experience and didn't provide any
								additional troubleshooting help. In addition,
								their error language was obscure and, as a
								result, made the users shift some of the blame
								onto themselves.
							</Text>
						</Col>
					</Grid>
				</Grid.Container>
			</Container>
			<Container
				css={{
					d: "flex",
					fd: "column",
					px: 0,
					boxSizing: "border-box",
				}}
			>
				<Text
					h2
					css={{
						borderBottom:
							"$borderWeights$light solid rgba(255, 255, 255, 0.2)",
					}}
				>
					Personas
				</Text>
				<Text p css={{ marginBottom: "$6" }}>
					I then distilled the information from the observations and
					interview responses into 2 personas that{" "}
					<Text
						span
						css={{ color: "$cyan700", fontWeight: "bolder" }}
					>
						represent archetypal users
					</Text>{" "}
					of the AirMedia system:
				</Text>
				<Grid.Container justify="center" gap={3}>
					<Grid xs={10} sm={6}>
						<Col
							css={{
								d: "flex",
								fd: "column",
							}}
						>
							<Image
								src="images/personas/cyrus.png"
								css={{
									borderRadius: "10px",
								}}
							/>
						</Col>
					</Grid>
					<Grid xs={10} sm={6}>
						<Col
							css={{
								d: "flex",
								fd: "column",
							}}
						>
							<Image
								src="images/personas/priscilla.png"
								css={{
									borderRadius: "10px",
								}}
							/>
						</Col>
					</Grid>
				</Grid.Container>
			</Container>
			<Container
				css={{
					d: "flex",
					fd: "column",
					px: 0,
					boxSizing: "border-box",
				}}
			>
				<Text
					h2
					css={{
						borderBottom:
							"$borderWeights$light solid rgba(255, 255, 255, 0.2)",
					}}
				>
					Storyboard
				</Text>
				<Text p css={{ marginBottom: "$6" }}>
					Finally, I created a storyboard for{" "}
					<Text
						span
						css={{ color: "$cyan700", fontWeight: "bolder" }}
					>
						Cinephile Cyrus's journey
					</Text>{" "}
					using the AirMedia system:
				</Text>
				<Grid.Container justify="center" css={{ marginBottom: "$6" }}>
					<Grid xs={12} justify="center">
						<Image
							src="images/personas/storyboard.png"
							css={{
								borderRadius: "10px",
							}}
						/>
					</Grid>
				</Grid.Container>
			</Container>
			<Container
				css={{
					d: "flex",
					fd: "column",
					px: 0,
					boxSizing: "border-box",
				}}
			>
				<Text
					h2
					css={{
						borderBottom:
							"$borderWeights$light solid rgba(255, 255, 255, 0.2)",
					}}
				>
					Takeaways
				</Text>
				<Text p>
					While engaging in this user research study, I learned some
					new usability concepts such as{" "}
					<Text
						span
						css={{ color: "$cyan700", fontWeight: "bolder" }}
					>
						when to use radio buttons vs. checkboxes
					</Text>
					. I also reaffirmed my appreciation for React and its{" "}
					<Text
						span
						css={{ color: "$cyan700", fontWeight: "bolder" }}
					>
						component-based approach to web development
					</Text>
					. Being able to modularize my app and reuse UI across a site
					is extremely helpful. The last major takeaway I had was how
					important it is to{" "}
					<Text
						span
						css={{ color: "$cyan700", fontWeight: "bolder" }}
					>
						familiarize yourself with the structure of data that you
						use
					</Text>
					. While building my static data file for my songs, it
					quickly became clear that a well-structured data source and
					a strong understanding of that source is critical for
					effective React development.
				</Text>
			</Container>
		</Container>
	);
}

export default Personas;
