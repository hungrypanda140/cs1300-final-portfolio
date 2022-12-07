import React from "react";
import { Container, Text, Table, Grid, Col, Image } from "@nextui-org/react";

function Development(props) {
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
					textGradient: "$red800 25%, $red600 100%",
				}}
			>
				Development
			</Text>
			<Text h3 color="$accents9" css={{ textAlign: "center" }}>
				A React app aimed at streamlining the process of creating
				playlists from a set of songs that fit the user's criteria.
			</Text>
			<Container css={{ mt: "$2" }}>
				<Table
					aria-label="Example table with static content"
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
							<Table.Cell>Fall 2022: Nov</Table.Cell>
							<Table.Cell>Web Dev, React</Table.Cell>
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
					<Text span css={{ color: "$red700", fontWeight: "bolder" }}>
						developing an interactive React app that uses a
						list-based interface
					</Text>
					. I settled on creating Playlist Pal, an app that allows
					users to create playlists from a set of 12 different songs.
					In the process of creating this interface, I aimed to
					leverage React components, internal data state, and
					filtering & sorting of that data.
				</Text>
				<Text h3>Problem</Text>
				<Text p css={{ mb: "$6" }}>
					When users create playlists on common streaming platforms
					like Spotify and Apple Music, they{" "}
					<Text span css={{ color: "$red700", fontWeight: "bolder" }}>
						devote unnecessary amounts of time to searching for the
						perfect song that fits their criteria
					</Text>
					. I chose to create Playlist Pal to streamline this process
					of creating playlists from a set of songs through filtering
					and sorting functionalities.
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
					"How might we develop a list-based React app that enables
					users to efficiently build playlists of songs that fit their
					requirements?"
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
					Usability Principles
				</Text>
				<Text p css={{ mb: "$6" }}>
					To begin the development process, I considered some{" "}
					<Text span css={{ color: "$red700", fontWeight: "bolder" }}>
						key usability principles
					</Text>{" "}
					that drove certain visual design decisions. To view the
					components themselves, check out the Component Organization
					section!
				</Text>
				<Grid.Container justify="center" gap={3}>
					<Grid xs={10} sm={6}>
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
								span
								css={{
									color: "$red700",
									fontWeight: "bolder",
									alignSelf: "center",
									textAlign: "center",
								}}
							>
								Visual Hierarchy
							</Text>
							<ul
								style={{
									listStyleType: "disclosure-closed",
									letterSpacing:
										"var(--nextui-letterSpacings-tighter)",
								}}
							>
								<li>
									I focused on establishing a hierarchy
									between the main section and the playlist
									section. This was achieved through a
									vertical divider line and the choice to give
									the sections equal height to establish their
									relative equality.
								</li>
								<li>
									I broke the main section into the header
									section, a distinct sorting and filtering
									menu on the left, and the songs card grid.
									The filtering menu was placed on the left so
									users are immediately shown that they have
									the ability to manipulate the songs card
									grid due to their natural left-to-right
									scanning order.
								</li>
							</ul>
						</Col>
					</Grid>
					<Grid xs={10} sm={6}>
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
								span
								css={{
									color: "$red700",
									fontWeight: "bolder",
									alignSelf: "center",
									textAlign: "center",
								}}
							>
								Adherence to Mental Models
							</Text>
							<ul
								style={{
									listStyleType: "disclosure-closed",
									letterSpacing:
										"var(--nextui-letterSpacings-tighter)",
								}}
							>
								<li>
									I placed the header section — containing the
									app name and logo — in the upper left corner
									to adhere to users' mental model of where a
									site's branding should go.
								</li>
								<li>
									I gave the playlist section a vertical
									layout and ensured that the songs are
									rendered as uniform numbered list items.
									These choices were made to adhere to users'
									mental model of a typical playlist
									interface.
								</li>
							</ul>
						</Col>
					</Grid>
					<Grid xs={10} sm={6}>
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
								span
								css={{
									color: "$red700",
									fontWeight: "bolder",
									alignSelf: "center",
									textAlign: "center",
								}}
							>
								Accessibility
							</Text>
							<ul
								style={{
									listStyleType: "disclosure-closed",
									letterSpacing:
										"var(--nextui-letterSpacings-tighter)",
								}}
							>
								<li>
									On the song card component, I made the
									button alternate between white and black
									color schemes to provide high contrast with
									the red background of the card's body.
								</li>
							</ul>
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
					Component Organization
				</Text>
				<Text p>
					One of the main advantages of React is its concept of
					components, which are{" "}
					<Text span css={{ color: "$red700", fontWeight: "bolder" }}>
						reusable UI elements
					</Text>{" "}
					that can be rendered all around the overall app. In this
					app, I created{" "}
					<Text span css={{ color: "$red700", fontWeight: "bolder" }}>
						5 main components
					</Text>
					.
				</Text>
				<Grid.Container justify="center" gap={2}>
					<Grid xs={10} sm={6}>
						<Col
							css={{
								d: "flex",
								fd: "column",
								rowGap: "$4",
								py: "$8",
								px: "$6",
								borderRadius: "10px",
								backgroundColor: "$gray100",
								border: "1px solid $accents5",
							}}
						>
							<Text
								span
								css={{
									fontWeight: "bolder",
									alignSelf: "center",
									textAlign: "center",
								}}
							>
								<code style={{ fontSize: "1.25rem" }}>
									App.js
								</code>
							</Text>
							<Image
								src="images/development/app.png"
								css={{
									border: "1px solid $accents5",
									borderRadius: "10px",
								}}
							/>
							<Text p>
								This is the overall component which contains all
								of the other main components (
								<code>HeaderSection.js</code>,
								<code>SortsAndFiltersSection.js</code>, songs
								card grid made up of <code>SongItem.js</code>,
								and <code>PlaylistSection.js</code>). It also
								contains all of the app's state and many helper
								functions that are passed down as props.
							</Text>
						</Col>
					</Grid>
					<Grid xs={10} sm={6}>
						<Col
							css={{
								d: "flex",
								fd: "column",
								rowGap: "$4",
								py: "$8",
								px: "$6",
								borderRadius: "10px",
								backgroundColor: "$gray100",
								border: "1px solid $accents5",
							}}
						>
							<Text
								span
								css={{
									fontWeight: "bolder",
									alignSelf: "center",
									textAlign: "center",
								}}
							>
								<code style={{ fontSize: "1.25rem" }}>
									HeaderSection.js
								</code>
							</Text>
							<Image
								src="images/development/header.png"
								css={{
									border: "1px solid $accents5",
									borderRadius: "10px",
								}}
							/>
							<Text p>
								This is the component that renders the top bar
								of the app that lies above the main section
								where the filtering, sorting, and card grid are
								located. This component only has the Playlist
								Pal logo and header text.
							</Text>
						</Col>
					</Grid>
					<Grid xs={10} sm={6}>
						<Col
							css={{
								d: "flex",
								fd: "column",
								rowGap: "$4",
								py: "$8",
								px: "$6",
								borderRadius: "10px",
								backgroundColor: "$gray100",
								border: "1px solid $accents5",
							}}
						>
							<Text
								span
								css={{
									fontWeight: "bolder",
									alignSelf: "center",
									textAlign: "center",
								}}
							>
								<code style={{ fontSize: "1.25rem" }}>
									SortsAndFiltersSection.js
								</code>
							</Text>
							<Image
								height={300}
								src="images/development/sort.png"
								css={{
									border: "1px solid $accents5",
									borderRadius: "10px",
								}}
							/>
							<Text p>
								This component renders the filtering and sorting
								menu with radio button and checkbox form inputs.
								These are all controlled components, meaning
								they are controlled by state values located in{" "}
								<code>App.js</code>.
							</Text>
						</Col>
					</Grid>
					<Grid xs={10} sm={6}>
						<Col
							css={{
								d: "flex",
								fd: "column",
								rowGap: "$4",
								py: "$8",
								px: "$6",
								borderRadius: "10px",
								backgroundColor: "$gray100",
								border: "1px solid $accents5",
							}}
						>
							<Text
								span
								css={{
									fontWeight: "bolder",
									alignSelf: "center",
									textAlign: "center",
								}}
							>
								<code style={{ fontSize: "1.25rem" }}>
									SongItem.js
								</code>
							</Text>
							<Image
								height={300}
								src="images/development/song.png"
								css={{
									border: "1px solid $accents5",
									borderRadius: "10px",
								}}
							/>
							<Text p>
								The songs card grid is made up of
								<code>SongItem.js</code>
								components, which display each song's cover art,
								title, artist, album, duration, genre, number of
								streams, and a button to add or remove it from
								the playlist
							</Text>
						</Col>
					</Grid>
					<Grid xs={10} sm={6}>
						<Col
							css={{
								d: "flex",
								fd: "column",
								rowGap: "$4",
								py: "$8",
								px: "$6",
								borderRadius: "10px",
								backgroundColor: "$gray100",
								border: "1px solid $accents5",
							}}
						>
							<Text
								span
								css={{
									fontWeight: "bolder",
									alignSelf: "center",
									textAlign: "center",
								}}
							>
								<code style={{ fontSize: "1.25rem" }}>
									PlaylistSection.js
								</code>
							</Text>
							<Image
								height={300}
								src="images/development/playlist.png"
								css={{
									border: "1px solid $accents5",
									borderRadius: "10px",
								}}
							/>
							<Text p>
								This component renders the section on the right
								side of the screen. It displays the total number
								of songs in the playlist, the total duration of
								the playlist, as well as Spotify embeds for each
								song that allow users to actually listen to the
								songs in the browser.
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
					State Changes & Data Flow
				</Text>
				<Text h3>State Changes</Text>
				<Text p css={{ marginBottom: "$6" }}>
					One of the key concepts of React components is their ability
					to store data as{" "}
					<Text span css={{ color: "$red700", fontWeight: "bolder" }}>
						state
					</Text>
					. State is data that belongs to that component or one of its
					children components. When a React component's state changes,{" "}
					<Text span css={{ color: "$red700", fontWeight: "bolder" }}>
						the component is re-rendered
					</Text>
					.
				</Text>
				<Text p>
					In this app, I use state to hold data for selected sort and
					filter options and the playlist. The primary state changes
					occur in <code>SortsAndFiltersSection.js</code> and{" "}
					<code>SongItem.js</code>:
				</Text>
				<ul
					style={{
						listStyleType: "disclosure-closed",
						letterSpacing: "var(--nextui-letterSpacings-tighter)",
					}}
				>
					<li>
						<code>SortsAndFiltersSection.js</code>
						fires various callback functions that it receives as
						props from <code>App.js</code>. These callback functions
						handle the logic of updating the state values for which
						sorts and filters are selected. There's some added
						complexity due to the inclusion of "All" as a filter
						category, which leads to some extra logic for unchecking
						"All" when any other individual checkbox is selected and
						unchecking all other checkboxes when "All" is clicked.
					</li>
					<li>
						<code>SongItem.js</code> triggers state changes to the
						<code>playlist</code> object whenever the user clicks
						the "Add to Playlist" or "Remove from Playlist" button
						to toggle the song's membership in the playlist.
					</li>
				</ul>
				<Text h3>Data Flow</Text>
				<Text p css={{ marginBottom: "$6" }}>
					React is defined by a{" "}
					<Text span css={{ color: "$red700", fontWeight: "bolder" }}>
						unidirectional data flow
					</Text>{" "}
					in which parent components pass data down to their children
					components via{" "}
					<Text span css={{ color: "$red700", fontWeight: "bolder" }}>
						props
					</Text>
					.
				</Text>
				<Text p>
					In Playlist Pal, <code>App.js</code> contains all of the
					state variables and data for the app and then passes it down
					as props to the different child components:
				</Text>
				<ul
					style={{
						listStyleType: "disclosure-closed",
						letterSpacing: "var(--nextui-letterSpacings-tighter)",
					}}
				>
					<li>
						<code>SortsAndFiltersSection.js</code> receives
						JavaScript Set objects <code>selectedSort</code>,{" "}
						<code>selectedGenres</code>, and
						<code>selectedReleaseTypes</code> as well as some
						callback functions for any changes to these sorts and
						filters.
					</li>
					<li>
						<code>SongItem.js</code> receives a JavaScript{" "}
						<code>song</code>
						object which is mapped from <code>
							songs-data.json
						</code>{" "}
						as well as the <code>playlist</code> JavaScript object
						and its corresponding <code>setPlaylist</code> setter
						function. The <code>song</code> object contains all of
						the necessary properties and info to display for each
						song and <code>playlist</code> +{" "}
						<code>setPlaylist</code> are used to handle adding songs
						to the playlist.
					</li>
					<li>
						<code>PlaylistSection.js</code> just takes in the
						<code>playlist</code> JavaScript object to use for
						rendering all of the songs via the song.embed property.
					</li>
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
					Deployed React App
				</Text>
				<Text p css={{ marginBottom: "$6" }}>
					The result of considering usability and accessibility
					principles, component organization, state changes, and data
					flow, was the following deployed React app. I've embedded
					the website, but it should ideally be viewed at this{" "}
					<a href="https://hungrypanda140.github.io/cs1300-development/">
						link
					</a>
					.
				</Text>
				<Grid.Container justify="center" css={{ marginBottom: "$6" }}>
					<Grid xs={12} justify="center">
						<iframe
							title="Deployed Website"
							style={{
								border: "1px solid rgba(0, 0, 0, 0.1)",
							}}
							width="769"
							height="600"
							src="https://hungrypanda140.github.io/cs1300-development/"
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
					While developing this React app, I learned some new
					usability concepts such as{" "}
					<Text span css={{ color: "$red700", fontWeight: "bolder" }}>
						when to use radio buttons vs. checkboxes
					</Text>
					. I also reaffirmed my appreciation for React and its{" "}
					<Text span css={{ color: "$red700", fontWeight: "bolder" }}>
						component-based approach to web development
					</Text>
					. Being able to modularize my app and reuse UI across a site
					is extremely helpful. The last major takeaway I had was how
					important it is to{" "}
					<Text span css={{ color: "$red700", fontWeight: "bolder" }}>
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

export default Development;
