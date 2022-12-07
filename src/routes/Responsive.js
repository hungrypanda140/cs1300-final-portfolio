import React from "react";
import { Container, Text, Table, Grid, Col, Image } from "@nextui-org/react";

// Context/Problem - What problem does this solve? Why should we care?
// Research/Feedback - What precedent work is out there? Who is our audience? What do they want/think?
// Design Iterations (with justification) - What are the tradeoffs? Explain your design decisions.
// Conclusion - What are your lessons learned, insights, takeaways, etc.?

function Responsive(props) {
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
					textGradient: "$yellow800 25%, $yellow600 100%",
				}}
			>
				Responsive Redesign
			</Text>
			<Text h3 color="$accents9" css={{ textAlign: "center" }}>
				A redesign of the New England Club Baseball Association's
				website with a focus on responsiveness.
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
							<Table.Cell>Fall 2022: Oct</Table.Cell>
							<Table.Cell>
								Responsive Web Development, Lo-fi & Hi-fi
								Prototyping
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
						css={{ color: "$yellow700", fontWeight: "bolder" }}
					>
						redesigning a website to improve its usability and
						responsiveness
					</Text>
					. In terms of usability, I focused on addressing issues with
					the interface's accessibility, learnability, memorability,
					and affordances. In terms of responsiveness, I focused on
					creating well-designed layouts for mobile, tablet, and
					desktop breakpoints.
				</Text>
				<Text h3>Problem</Text>
				<Text p css={{ mb: "$6" }}>
					I chose to redesign the New England Club Baseball
					Association (NECBA){" "}
					<a href="http://www.necba.com/">website</a> because I
					frequently have to use it to view Brown club baseball's
					schedule and standings in the league and{" "}
					<Text
						span
						css={{ color: "$yellow700", fontWeight: "bolder" }}
					>
						it is extremely unresponsive and violates many key
						usability principles
					</Text>
					.
				</Text>
				<Grid.Container justify="center" css={{ marginBottom: "$6" }}>
					<Grid xs={12}>
						<Col css={{ d: "flex", fd: "column", ai: "center" }}>
							<Text h4>Original Website</Text>
							<Image
								src="images/responsive/original-website.png"
								alt="Lo-fi prototype"
							/>
						</Col>
					</Grid>
				</Grid.Container>
				<Text
					h3
					css={{
						alignSelf: "center",
						width: "80%",
						textAlign: "center",
						fontStyle: "italic",
					}}
				>
					"How might we redesign the NECBA website so it is responsive
					for different device types and has high usability?"
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
					Research
				</Text>
				<Text h3>Usability Problems</Text>
				<Text p css={{ mb: "$6" }}>
					To begin the redesign process, I wrote down some of my
					observations about the main usability problems the website
					has:
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
									color: "$yellow700",
									fontWeight: "bolder",
									alignSelf: "center",
									textAlign: "center",
								}}
							>
								Visual Inconsistency
							</Text>
							<ul
								style={{
									listStyleType: "disclosure-closed",
									letterSpacing:
										"var(--nextui-letterSpacings-tighter)",
								}}
							>
								<li>
									Some of the team logo images have
									backgrounds behind them while others are
									cut-out PNGs. This muddles the mappings
									between these images and any potential
									functions they serve.
								</li>
								<li>
									There is variation in image label
									positioning. The labels for the commissioner
									headshots are aligned with the baseline and
									on the right side while the team logo labels
									are centered along the top side.
								</li>
								<li>
									The text for all of the main page links is
									capitalized in standard title case and bold
									font while the text for the “Application to
									Join” link is in all caps and not bolded.
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
									color: "$yellow700",
									fontWeight: "bolder",
									alignSelf: "center",
									textAlign: "center",
								}}
							>
								Poor Mappings and Adherence to Mental Models
							</Text>
							<ul
								style={{
									listStyleType: "disclosure-closed",
									letterSpacing:
										"var(--nextui-letterSpacings-tighter)",
								}}
							>
								<li>
									There is no affordance to signal to users
									that the email GIF is actually a link to the
									website’s “Contact Us Form”. Also, a
									low-quality animated element does not fit a
									user’s mental model of what a link looks
									like.
								</li>
								<li>
									Colors don't have strong mappings to
									specific functions. Besides most links being
									a standard blue, orange is used sporadically
									around the page for some image labels, but
									not others, and individual occurrences of
									black, red, and green are used for plain
									text without a clear reason why.
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
									color: "$yellow700",
									fontWeight: "bolder",
									alignSelf: "center",
									textAlign: "center",
								}}
							>
								Disjointed Layout
							</Text>
							<ul
								style={{
									listStyleType: "disclosure-closed",
									letterSpacing:
										"var(--nextui-letterSpacings-tighter)",
								}}
							>
								<li>
									The layout of the page is not conducive to
									scanning and violates our natural
									left-to-right reading path. This is because
									it is somewhat broken down into three main
									columns of elements, but these columns bleed
									into each other and have no visual
									demarcations.
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
									color: "$yellow700",
									fontWeight: "bolder",
									alignSelf: "center",
									textAlign: "center",
								}}
							>
								Unresponsiveness
							</Text>
							<ul
								style={{
									listStyleType: "disclosure-closed",
									letterSpacing:
										"var(--nextui-letterSpacings-tighter)",
								}}
							>
								<li>
									There is no responsiveness to changes in
									browser size and device type. Most of the
									page elements are absolutely positioned and
									don’t use any relative units. This harms the
									usability by forcing mobile users and users
									with small browser widths to zoom in and
									scroll horizontally to see content.
								</li>
							</ul>
						</Col>
					</Grid>
				</Grid.Container>
				<Text h3>Accessibility</Text>
				<Text p css={{ mb: "$6" }}>
					The next step of the process was to investigate the site's
					accessibility using the{" "}
					<a href="https://wave.webaim.org/">WebAIM WAVE tool</a>.
					Overall, I agreed with all of the WAVE tool’s findings. It
					found the following:
				</Text>
				<ul
					style={{
						listStyleType: "disclosure-closed",
						letterSpacing: "var(--nextui-letterSpacings-tighter)",
					}}
				>
					<li>
						<Text
							span
							css={{
								color: "$yellow700",
								fontWeight: "bolder",
								alignSelf: "center",
								textAlign: "center",
							}}
						>
							36 "very low-contrast errors"
						</Text>{" "}
						for most of the text on the page. This low-contrast is
						mostly a by-product of the gray background, which
						renders even medium blue colors such as the ones used
						for “Tufts University” and “University of Massachusetts
						Boston” quite difficult to read.
					</li>
					<li>
						<Text
							span
							css={{
								color: "$yellow700",
								fontWeight: "bolder",
								alignSelf: "center",
								textAlign: "center",
							}}
						>
							22 "very small text errors"
						</Text>{" "}
						for most of the text on the page. All of the team name
						labels are 10px, while the majority of other text is in
						the 12-14px range. This makes it challenging for the
						average user, let alone a visually impaired user, to
						read the text.
					</li>
					<li>
						<Text
							span
							css={{
								color: "$yellow700",
								fontWeight: "bolder",
								alignSelf: "center",
								textAlign: "center",
							}}
						>
							31 "empty alternative text errors"
						</Text>{" "}
						for almost all of the images on the screen. This poses
						obvious issues for users with screen readers who can’t
						see the images well and need them to be described out
						loud.
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
					Lo-fi Prototypes
				</Text>
				<Text p>
					Moving on to the redesigning portion, I started by creating
					3 lo-fi prototypes (mobile, tablet, and desktop) using
					Balsamiq to address the main usability problems. I annotated
					the prototypes to{" "}
					<Text
						span
						css={{ color: "$yellow700", fontWeight: "bolder" }}
					>
						highlight design decisions that address the
						aforementioned issues
					</Text>{" "}
					with the existing version of the website.
				</Text>
				<Text p css={{ mb: "$6" }}>
					I've embedded the Figma file with all three prototypes and
					annotations. Please zoom in, pan around, and expand the file
					to fullscreen to get a closer look!
				</Text>
				<Grid.Container justify="center" css={{ marginBottom: "$6" }}>
					<Grid xs={12} justify="center">
						<iframe
							title="Annotated Lo-fi Prototype"
							style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
							width="100%"
							height="600"
							src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FJU4G5Ks277HgriVgH6zlnF%2FNECBA-Hi-fi-Prototypes-%2526-Visual-Design-Guide%3Fnode-id%3D44%253A21%26t%3DhF8P78L7mfKHbac0-1"
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
					Visual Design Guide
				</Text>
				<Text p css={{ marginBottom: "$6" }}>
					Before starting my hi-fi prototypes in Figma, I made a UI
					design guide showing my{" "}
					<Text
						span
						css={{ color: "$yellow700", fontWeight: "bolder" }}
					>
						redesigned site's key interactive components, colors,
						and typography
					</Text>
					.
				</Text>
				<Grid.Container justify="center" css={{ marginBottom: "$6" }}>
					<Grid xs={8}>
						<Col css={{ d: "flex", fd: "column", ai: "center" }}>
							<Image
								src="images/responsive/design_guide.png"
								alt="Design Guide"
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
					Hi-fi Prototype
				</Text>
				<Text p css={{ marginBottom: "$6" }}>
					Using the UI design guide, I created 3 hi-fi prototypes
					(mobile, tablet, desktop) in Figma. I've embedded the Figma
					file with all three prototypes and annotations that outline{" "}
					<Text
						span
						css={{ color: "$yellow700", fontWeight: "bolder" }}
					>
						how to recreate the key components and responsive
						behavior
					</Text>
					. Please zoom in, pan around, and expand the file to
					fullscreen to get a closer look!
				</Text>
				<Grid.Container justify="center" css={{ marginBottom: "$6" }}>
					<Grid xs={12} justify="center">
						<iframe
							title="Annotated Hi-fi Prototype"
							style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
							width="100%"
							height="600"
							src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FJU4G5Ks277HgriVgH6zlnF%2FNECBA-Hi-fi-Prototypes-%2526-Visual-Design-Guide%3Fnode-id%3D0%253A1%26t%3DEpMBf9KiL5H605cF-1"
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
					Redesigned Website
				</Text>
				<Text p css={{ marginBottom: "$6" }}>
					Finally, I created the actual responsively redesigned
					website. I've embedded the site —{" "}
					<Text
						span
						css={{ color: "$yellow700", fontWeight: "bolder" }}
					>
						adjust your browser width to see the responsiveness!
					</Text>{" "}
					— but it can also be found at this{" "}
					<a href="https://hungrypanda140.github.io/cs1300-necba-redesign/">
						link
					</a>
					.
				</Text>
				<Grid.Container justify="center" css={{ marginBottom: "$6" }}>
					<Grid xs={12} justify="center">
						<iframe
							title="Redesigned Website"
							style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
							width="100%"
							height="600"
							src="https://hungrypanda140.github.io/cs1300-necba-redesign/"
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
					Takeaways
				</Text>
				<Text p>
					After redesigning the NECBA website, I came away with an
					increased awareness of the{" "}
					<Text
						span
						css={{ color: "$yellow700", fontWeight: "bolder" }}
					>
						importance of well-designed responsive behavior
					</Text>
					. Even one poorly-developed interface breakpoint can exclude
					an entire population of potential users. I also realized{" "}
					<Text
						span
						css={{ color: "$yellow700", fontWeight: "bolder" }}
					>
						the value of visual design guides
					</Text>{" "}
					as a means of quickly creating consistent UX, since the
					presence of pre-defined states for key UI components speeds
					up development. Finally, I was reminded of some{" "}
					<Text
						span
						css={{ color: "$yellow700", fontWeight: "bolder" }}
					>
						critical accessibility standards
					</Text>{" "}
					such as preserving high-contrast and reasonably-sized text.
				</Text>
			</Container>
		</Container>
	);
}

export default Responsive;
