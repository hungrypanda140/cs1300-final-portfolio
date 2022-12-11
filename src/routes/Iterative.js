import React from "react";
import { Container, Col, Grid, Text, Table, Image } from "@nextui-org/react";

function Iterative(props) {
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
				weight="bold"
				css={{
					mb: 0,
					textGradient: "$green700 25%, $green500 100%",
				}}
			>
				Iterative Design
			</Text>
			<Text h3 color="$accents9" css={{ textAlign: "center" }}>
				An interactive hi-fi prototype for{" "}
				<a href="https://www.hokali.co/">Hokali</a>, a YCombinator
				startup creating a sports lessons marketplace.
			</Text>
			<Container css={{ mt: "$2" }}>
				<Table
					css={{
						height: "auto",
						minWidth: "100%",
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
							<Table.Cell>Fall 2022: Oct-Nov</Table.Cell>
							<Table.Cell>
								Lo-fi & Hi-fi Prototyping, User Testing
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
					For this CS 1300 group project, we were tasked with{" "}
					<Text
						span
						css={{ color: "$green600", fontWeight: "bolder" }}
					>
						designing an interactive interface for an emerging
						startup
					</Text>{" "}
					by following an iterative/ design process. This design flow
					started with sketches & lo-fi prototyping and culminated in
					a hi-fi Figma prototype & user testing.
				</Text>
				<Text h3>Problem</Text>
				<Text p css={{ mb: "$6" }}>
					For our startup, we chose Hokali: a platform designed to
					facilitate booking sports lessons with local coaches. Hokali
					has a website through which users can book lessons,{" "}
					<Text
						span
						css={{ color: "$green600", fontWeight: "bolder" }}
					>
						but they lack a mobile application better suited for
						on-the-go booking and communicating with coaches
					</Text>
					. When we think about the users of this interface, they are
					predominantly athletes or people who are active and
					constantly on-the-go, meaning they would likely prefer to
					view and update their bookings directly on their mobile
					device rather than a PC or tablet.
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
					"How might we create an interactive mobile interface that
					effectively facilitates the booking of sports lessons with
					local coaches?"
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
					Sketches
				</Text>
				<Text p css={{ mb: "$6" }}>
					Before starting our lo-fi and hi-fi prototype work, each of
					our group members sketched their ideas for a few key screens
					of the Hokali mobile app. We intentionally did not
					collaborate on these sketches to try and produce a variety
					of designs. After examining all of our sketches, we decided
					that the{" "}
					<Text
						span
						css={{ color: "$green600", fontWeight: "bolder" }}
					>
						key screens
					</Text>{" "}
					for our prototypes would be:{" "}
					<Text
						span
						css={{ color: "$green600", fontWeight: "bolder" }}
					>
						home and search screens{" "}
					</Text>{" "}
					to explore lessons,{" "}
					<Text
						span
						css={{ color: "$green600", fontWeight: "bolder" }}
					>
						lessons and booking screens{" "}
					</Text>{" "}
					to schedule and manage lessons, and{" "}
					<Text
						span
						css={{ color: "$green600", fontWeight: "bolder" }}
					>
						coach profile and inbox screens
					</Text>{" "}
					to interact with coaches.
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
									color: "$green600",
									fontWeight: "bolder",
									alignSelf: "center",
									textAlign: "center",
									mb: "$4",
								}}
							>
								Sketch 1: Coach Page, Search, Checkout
							</Text>
							<Image
								src="images/iterative/sketch1.png"
								css={{
									border: "1px solid $accents5",
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
									color: "$green600",
									fontWeight: "bolder",
									alignSelf: "center",
									textAlign: "center",
									mb: "$4",
								}}
							>
								Sketch 2: Home, Search, Lessons
							</Text>
							<Image
								src="images/iterative/sketch2.jpg"
								css={{
									border: "1px solid $accents5",
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
									color: "$green600",
									fontWeight: "bolder",
									alignSelf: "center",
									textAlign: "center",
									mb: "$4",
								}}
							>
								Sketch 3: Login, Profile, Coach Page
							</Text>
							<Image
								src="images/iterative/sketch3.png"
								css={{
									border: "1px solid $accents5",
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
									color: "$green600",
									fontWeight: "bolder",
									alignSelf: "center",
									textAlign: "center",
									mb: "$4",
								}}
							>
								Sketch 4: Coach Page, Search, Home
							</Text>
							<Image
								src="images/iterative/sketch4.png"
								css={{
									border: "1px solid $accents5",
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
					Prototyping
				</Text>
				<Text h3>Lo-fi Prototypes</Text>
				<Text p css={{ mb: "$6" }}>
					The next step of our design process was to create lo-fi
					prototypes in Balsamiq for the key screens that we
					identified in the sketching stage. While creating these
					combined wireframes, we made the following design decisions:
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
							css={{ color: "$green600", fontWeight: "bolder" }}
						>
							Easy Access to Search:{" "}
						</Text>
						<Text span>
							To make lesson exploration and booking more
							efficient, we placed a search bar in a prominent
							location on the home screen.
						</Text>
					</li>
					<li>
						<Text
							span
							css={{ color: "$green600", fontWeight: "bolder" }}
						>
							Favoriting:{" "}
						</Text>
						<Text span>
							In the sports lesson market, users will often want
							to work with the same coach multiple times. We added
							favoriting functionality for specific lessons to
							enable quick rebooking.
						</Text>
					</li>
					<li>
						<Text
							span
							css={{ color: "$green600", fontWeight: "bolder" }}
						>
							Communication with Coaches:{" "}
						</Text>
						<Text span>
							We added an inbox screen so users can communicate
							with their coaches both before and after having a
							lesson with them.
						</Text>
					</li>
					<li>
						<Text
							span
							css={{ color: "$green600", fontWeight: "bolder" }}
						>
							Customized Searching:{" "}
						</Text>
						<Text span>
							Users are often very particular about the type of
							lesson they want so we added the ability to filter
							and sort by a variety of options when searching -
							rating, distance, price, etc.
						</Text>
					</li>
					<li>
						<Text
							span
							css={{ color: "$green600", fontWeight: "bolder" }}
						>
							Organized Lesson Management:{" "}
						</Text>
						<Text span>
							We created a lessons screen to ensure that users
							always know about upcoming lessons and can review
							past lessons.
						</Text>
					</li>
				</ul>
				<Grid.Container
					gap={3}
					justify="center"
					css={{ marginBottom: "$2" }}
				>
					<Grid xs={5} sm={4}>
						<Col
							css={{
								d: "flex",
								fd: "column",
								rowGap: "$2",
								p: "$8",
								borderRadius: "10px",
								backgroundColor: "$gray100",
								border: "1px solid $accents5",
							}}
						>
							<Text
								h3
								css={{
									color: "$green600",
									fontWeight: "bolder",
									alignSelf: "center",
									textAlign: "center",
									mb: "$4",
								}}
							>
								Home Screen
							</Text>
							<Image
								src="images/iterative/home-wireframe.png"
								alt="Home Wireframe"
							/>
						</Col>
					</Grid>
					<Grid xs={5} sm={4}>
						<Col
							css={{
								d: "flex",
								fd: "column",
								rowGap: "$2",
								p: "$8",
								borderRadius: "10px",
								backgroundColor: "$gray100",
								border: "1px solid $accents5",
							}}
						>
							<Text
								h3
								css={{
									color: "$green600",
									fontWeight: "bolder",
									alignSelf: "center",
									textAlign: "center",
									mb: "$4",
								}}
							>
								Lessons Screen
							</Text>
							<Image
								src="images/iterative/lessons-wireframe.png"
								alt="Lessons Wireframe"
							/>
						</Col>
					</Grid>
					<Grid xs={5} sm={4}>
						<Col
							css={{
								d: "flex",
								fd: "column",
								rowGap: "$2",
								p: "$8",
								borderRadius: "10px",
								backgroundColor: "$gray100",
								border: "1px solid $accents5",
							}}
						>
							<Text
								h3
								css={{
									color: "$green600",
									fontWeight: "bolder",
									alignSelf: "center",
									textAlign: "center",
									mb: "$4",
								}}
							>
								Search Screen
							</Text>
							<Image
								src="images/iterative/search-wireframe.png"
								alt="Search Wireframe"
							/>
						</Col>
					</Grid>
					<Grid xs={5} sm={4}>
						<Col
							css={{
								d: "flex",
								fd: "column",
								rowGap: "$2",
								p: "$8",
								borderRadius: "10px",
								backgroundColor: "$gray100",
								border: "1px solid $accents5",
							}}
						>
							<Text
								h3
								css={{
									color: "$green600",
									fontWeight: "bolder",
									alignSelf: "center",
									textAlign: "center",
									mb: "$4",
								}}
							>
								Profile Screen
							</Text>
							<Image
								src="images/iterative/profile-wireframe.png"
								alt="Profile Wireframe"
							/>
						</Col>
					</Grid>
					<Grid xs={6} sm={4}>
						<Col
							css={{
								d: "flex",
								fd: "column",
								rowGap: "$2",
								p: "$8",
								borderRadius: "10px",
								backgroundColor: "$gray100",
								border: "1px solid $accents5",
							}}
						>
							<Text
								h3
								css={{
									color: "$green600",
									fontWeight: "bolder",
									alignSelf: "center",
									textAlign: "center",
									mb: "$4",
								}}
							>
								Inbox Screen
							</Text>
							<Image
								src="images/iterative/inbox-wireframe.png"
								alt="Inbox Wireframe"
							/>
						</Col>
					</Grid>
				</Grid.Container>
				<Text h3>Hi-fi Prototype Crit Feedback</Text>
				<Text p css={{ mb: "$6" }}>
					Using our lo-fi prototypes, we created the first iteration
					of our hi-fi Figma prototype. We presented this iteration at
					a studio crit with other groups from the class to get
					feedback and identify issues and pain points with our
					interface. The main issues identified during our crit were:
				</Text>
				<Grid.Container justify="center" gap={3}>
					<Grid xs={8} sm={5}>
						<Col
							css={{
								d: "flex",
								fd: "column",
								jc: "center",
								rowGap: "$2",
								p: "$8",
								borderRadius: "10px",
								backgroundColor: "$gray100",
								border: "1px solid $accents5",
							}}
						>
							<Text
								span
								css={{
									color: "$green600",
									fontWeight: "bolder",
									alignSelf: "center",
								}}
							>
								Opaque Inbox
							</Text>
							<Text p>
								<b>Problem:</b> We did not include any UX for
								identifying whether a user had an unread message
								in their inbox.
							</Text>
							<Text p>
								<b>Solution:</b> We included an unread indicator
								icon on inbox conversations.
							</Text>
						</Col>
					</Grid>
					<Grid xs={8} sm={5}>
						<Col
							css={{
								d: "flex",
								fd: "column",
								jc: "center",
								rowGap: "$2",
								p: "$8",
								borderRadius: "10px",
								backgroundColor: "$gray100",
								border: "1px solid $accents5",
							}}
						>
							<Text
								span
								css={{
									color: "$green600",
									fontWeight: "bolder",
									alignSelf: "center",
								}}
							>
								Increased Branding
							</Text>
							<Text p>
								<b>Problem:</b> We did not have the Hokali logo
								or any other branding on any of our screens.
							</Text>
							<Text p>
								<b>Solution:</b> We added the Hokali logo in the
								upper right corner of every screen. This logo
								also served as another way to navigate back to
								the home screen.
							</Text>
						</Col>
					</Grid>
					<Grid xs={8} sm={5}>
						<Col
							css={{
								d: "flex",
								fd: "column",
								jc: "center",
								rowGap: "$2",
								p: "$8",
								borderRadius: "10px",
								backgroundColor: "$gray100",
								border: "1px solid $accents5",
							}}
						>
							<Text
								span
								css={{
									color: "$green600",
									fontWeight: "bolder",
									alignSelf: "center",
								}}
							>
								Unclear Filter Ranges
							</Text>
							<Text p>
								<b>Problem:</b> Users didn't know the range of
								possible values for our sliders on the filter
								screen.
							</Text>
							<Text p>
								<b>Solution:</b> We added minimum and maximum
								markers to the sliders to delineate a range.
							</Text>
						</Col>
					</Grid>
					<Grid xs={8} sm={5}>
						<Col
							css={{
								d: "flex",
								fd: "column",
								jc: "center",
								rowGap: "$2",
								p: "$8",
								borderRadius: "10px",
								backgroundColor: "$gray100",
								border: "1px solid $accents5",
							}}
						>
							<Text
								span
								css={{
									color: "$green600",
									fontWeight: "bolder",
									alignSelf: "center",
								}}
							>
								Poor Button Styling
							</Text>
							<Text p>
								<b>Problem:</b> Our back buttons had
								inconsistent labeling and our cancel buttons
								blended in with other buttons.
							</Text>
							<Text p>
								<b>Solution:</b> We changed all back buttons'
								labels to just be "Back" and made our cancel
								buttons red to differentiate them.
							</Text>
						</Col>
					</Grid>
				</Grid.Container>
				<Text h3>Interactive Hi-fi Prototype</Text>
				<Text p css={{ mb: "$6" }}>
					We engaged in one more iteration on our hi-fi Figma
					prototype that resulted in the following interface (please
					navigate around this embedded Figma prototype!)
				</Text>
				<Grid.Container justify="center" css={{ marginBottom: "$6" }}>
					<Grid xs={12} justify="center">
						<iframe
							title="Hi-fi Prototype"
							style={{
								alignSelf: "center",
								marginBottom: "12px",
							}}
							width="100%"
							height={600}
							src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FhiTTaTbtbeJTLH4ZzPXIdz%2FHokali%3Fnode-id%3D2%253A3%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D2%253A3%26"
							allowFullScreen={true}
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
					User Testing
				</Text>
				<Text h3>Methods</Text>
				<Text p css={{ mb: "$6" }}>
					The final step of our iterative design process was to engage
					in more formal user testing with anonymous testers from{" "}
					<a href="https://www.usertesting.com/">UserTesting.com</a>.
					To guide these testing sessions, we gave the users the
					following overall task and subtasks:
				</Text>
				<Grid.Container gap={3} justify="center">
					<Grid xs={10}>
						<Col
							css={{
								d: "flex",
								fd: "column",
								jc: "center",
								rowGap: "$2",
								p: "$8",
								borderRadius: "10px",
								backgroundColor: "$gray100",
								border: "1px solid $accents5",
							}}
						>
							<Text
								h4
								css={{
									color: "$green600",
									fontWeight: "bolder",
									alignSelf: "center",
								}}
							>
								Overall Task
							</Text>
							<Text p css={{ mb: "$6" }}>
								"Hokali allows you to book sports lessons with
								coaches online. Imagine you’re trying to improve
								your tennis skills and want to use Hokali. Think
								aloud as you navigate through the app!"
							</Text>
						</Col>
					</Grid>
					<Grid xs={6} sm={5}>
						<Col
							css={{
								d: "flex",
								fd: "column",
								rowGap: "$2",
								p: "$8",
								borderRadius: "10px",
								backgroundColor: "$gray100",
								border: "1px solid $accents5",
							}}
						>
							<Text
								h4
								css={{
									color: "$green600",
									fontWeight: "bolder",
									alignSelf: "center",
									mb: 0,
								}}
							>
								Subtasks
							</Text>
							<ol
								style={{
									letterSpacing:
										"var(--nextui-letterSpacings-tighter)",
								}}
							>
								<li>Check your unread messages</li>
								<li>View your upcoming and past lessons</li>
								<li>Search for a lesson</li>
								<li>
									Find out what options you can filter the
									results by
								</li>
								<li>
									Read Coach Serena’s bio and past reviews
								</li>
								<li>Book a 9am lesson today with her</li>
							</ol>
						</Col>
					</Grid>
					<Grid xs={6} sm={5}>
						<Col
							css={{
								d: "flex",
								fd: "column",
								jc: "center",
								rowGap: "$2",
								p: "$8",
								borderRadius: "10px",
								backgroundColor: "$gray100",
								border: "1px solid $accents5",
							}}
						>
							<Text
								h4
								css={{
									color: "$green600",
									fontWeight: "bolder",
									alignSelf: "center",
									mb: 0,
								}}
							>
								User's Expected Steps for Completion
							</Text>
							<ol
								style={{
									letterSpacing:
										"var(--nextui-letterSpacings-tighter)",
								}}
							>
								<li>Click Inbox in navbar</li>
								<li>Click My Lessons in navbar</li>
								<li>
									Click Explore in navbar and then search bar
									on Explore screen
								</li>
								<li>
									Click filter button on search results page
								</li>
								<li>
									Click Coach Serena’s profile and read Coach
									Serena’s reviews at bottom of page
								</li>
								<li>
									Click back button, click book button in
									Coach Serena’s result, and then select 9am
									lesson time
								</li>
							</ol>
						</Col>
					</Grid>
					<Grid xs={10}>
						<Col
							css={{
								d: "flex",
								fd: "column",
								jc: "center",
								rowGap: "$2",
								p: "$8",
								borderRadius: "10px",
								backgroundColor: "$gray100",
								border: "1px solid $accents5",
							}}
						>
							<Text
								h4
								css={{
									color: "$green600",
									fontWeight: "bolder",
									alignSelf: "center",
								}}
							>
								Post-test Questions
							</Text>
							<Text p>
								To keep it simple, we asked our users two
								questions after they completed our tasks:
							</Text>
							<ol
								style={{
									letterSpacing:
										"var(--nextui-letterSpacings-tighter)",
								}}
							>
								<li>
									What frustrated you most about this site?
								</li>
								<li>What did you like about this site?</li>
							</ol>
						</Col>
					</Grid>
				</Grid.Container>
				<Text h3>Results</Text>
				<Text p>
					We received user testing videos from three different users
				</Text>
				<Grid.Container justify="center" gap={2}>
					<Grid justify="center" xs={5} sm={4}>
						<Col
							css={{
								d: "flex",
								fd: "column",
								rowGap: "$2",
								p: "$6",
								borderRadius: "10px",
								backgroundColor: "$gray100",
								border: "1px solid $accents5",
							}}
						>
							<Text
								h4
								css={{
									color: "$green600",
									fontWeight: "bolder",
									alignSelf: "center",
								}}
							>
								User 1: @probablydead
							</Text>
							<Text p css={{ textAlign: "center", mb: "$6" }}>
								35 | Female | $100,000-$124,999 | United Kingdom
							</Text>
							<video
								src="images/iterative/user1.mp4"
								width="100%"
								height="250"
								controls
							/>
						</Col>
					</Grid>
					<Grid justify="center" xs={5} sm={4}>
						<Col
							css={{
								d: "flex",
								fd: "column",
								rowGap: "$2",
								p: "$6",
								borderRadius: "10px",
								backgroundColor: "$gray100",
								border: "1px solid $accents5",
							}}
						>
							<Text
								h4
								css={{
									color: "$green600",
									fontWeight: "bolder",
									alignSelf: "center",
								}}
							>
								User 2: @ChronicReader
							</Text>
							<Text p css={{ textAlign: "center" }}>
								36 | Male | $60,000-$79,999 | United States
							</Text>
							<video
								src="images/iterative/user2.mp4"
								width="100%"
								height="250"
								controls
							/>
						</Col>
					</Grid>
					<Grid justify="center" xs={5} sm={4}>
						<Col
							css={{
								d: "flex",
								fd: "column",
								rowGap: "$2",
								p: "$6",
								borderRadius: "10px",
								backgroundColor: "$gray100",
								border: "1px solid $accents5",
							}}
						>
							<Text
								h4
								css={{
									color: "$green600",
									fontWeight: "bolder",
									alignSelf: "center",
								}}
							>
								User 3: @BoBo2016
							</Text>
							<Text p css={{ textAlign: "center" }}>
								34 | Female | $175,000-$199,999 | United States
							</Text>
							<video
								src="images/iterative/user3.mp4"
								width="100%"
								height="250"
								controls
							/>
						</Col>
					</Grid>
				</Grid.Container>
				<Text h3>Analysis</Text>
				<Text p css={{ mb: "$6" }}>
					The UserTesting results confirmed our conceptual model of
					the prototype in the context of the task we gave. We asked
					the users to navigate through various pages of our app
					(inbox, history, search results) before finally arriving at
					a lesson booking confirmation with a specific coach at a
					specific time, mimicking what we believed a reasonable
					real-life usage of Hokali would look like. Because we
					discussed and experimented with the usability of our
					prototype extensively and since our feedback from the studio
					crit session was overall quite positive, we expected users
					to have a relatively smooth experience with our prototype
					and task.
				</Text>
				<Text p css={{ mb: "$6" }}>
					The results aligned with our expectations. Users made no
					errors when navigating through different pages, were not
					surprised by any strange features or design choices, and all
					successfully booked a tennis lesson with Coach Serena. They
					commented that the interface was very familiar, intuitive,
					and streamlined and also protected the user from errors
					("all roads lead to Rome"). For example, one reviewer
					commented that they appreciated the fact that even if they
					happened to misclick (i.e. on the profile page), there were
					multiple ways to get to their intended destination (i.e.
					lessons page).
				</Text>
				<Text h3>Potential Interface Changes</Text>
				<Text p>
					Using our UserTesting results, we created a list of
					additional interface changes we could make in the future:
				</Text>
				<ul
					style={{
						listStyleType: "disc",
						letterSpacing: "var(--nextui-letterSpacings-tighter)",
					}}
				>
					<li>
						Labeling all of our buttons and ensuring we have aria
						labels for increased screen reader accessibility (the
						filter button was highlighted by one user)
					</li>
					<li>
						Adding more pages, specifically Receipt and Checkout
					</li>
					<li>Adding support for a coach-side perspective</li>
					<li>Adding a loading screen with the logo</li>
				</ul>
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
					Through this iterative design process, our group learned to{" "}
					<Text span css={{ color: "$green600" }}>
						be flexible and consider any and all feedback
					</Text>{" "}
					that we received from our studio crit and user testing. Some
					of our best additions and changes to our interface were the
					result of this feedback. We also honed our{" "}
					<Text span css={{ color: "$green600" }}>
						collaborative design ideation skills
					</Text>{" "}
					since this was our main group design project for the class.
					Finally, we learned how to{" "}
					<Text span css={{ color: "$green600" }}>
						balance design aesthetics with functionality
					</Text>{" "}
					because we were constantly framing our decisions within
					Hokali's overall mission.
				</Text>
			</Container>
		</Container>
	);
}

export default Iterative;
