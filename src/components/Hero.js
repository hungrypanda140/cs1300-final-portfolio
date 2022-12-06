import React from "react";
import { Container, Image, Spacer, Text } from "@nextui-org/react";

function Hero(props) {
	return (
		<Container
			as="section"
			css={{
				position: "relative",
				d: "flex",
				fw: "nowrap",
				ai: "center",
				jc: "space-between",
				h: "calc(100vh - 76px)",
				px: 0,
				mw: "100%",
			}}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
				className="wave-bg"
			>
				<path
					fill="url(#paint0_linear_430_478)"
					d="M0,32L48,58.7C96,85,192,139,288,160C384,181,480,171,576,138.7C672,107,768,53,864,80C960,107,1056,213,1152,218.7C1248,224,1344,128,1392,80L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
					mask="url(#fade)"
				></path>
				<linearGradient
					id="paint0_linear_430_478"
					x1="900"
					y1="0"
					x2="900"
					y2="320"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#99c9ff" />
					<stop offset="1" stop-color="#0077ff" />
				</linearGradient>
				<linearGradient id="fadeGrad" y1="1" x2="0">
					<stop offset="0" stop-color="white" stop-opacity="0" />
					<stop offset="1" stop-color="white" stop-opacity="1" />
				</linearGradient>
				<mask id="fade" maskContentUnits="objectBoundingBox">
					<rect width="1" height="1" fill="url(#fadeGrad)" />
				</mask>
			</svg>
			<Container
				css={{
					d: "flex",
					fw: "nowrap",
					ai: "center",
					jc: "space-between",
					mb: "$15",
				}}
			>
				<Text h1 css={{ d: "inline", lh: "$sm", zIndex: 100 }}>
					Hey! I'm{" "}
					<Text
						h1
						css={{
							d: "inline",
							textGradient:
								"rgb(94, 162, 239) 25%, $blue600 100%",
							pr: "$1",
							lh: "$sm",
						}}
					>
						@hungrypanda140
					</Text>
					<Text h1 css={{ d: "inline", lh: "$sm" }}>
						, a frontend developer with a passion for creating
						pixel-perfect UI.
					</Text>
				</Text>
				<Spacer x={1} />
				<Image src="images/panda.png" width={500} />
			</Container>
		</Container>
	);
}

export default Hero;
