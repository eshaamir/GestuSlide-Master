// Filename - components/Footer.js

import React from "react";
import {
	Box,
	FooterContainer,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./FooterStyles";

const Footer = () => {
	return (
		<Box>
			{/* <h1
				style={{
					color: "green",
					textAlign: "center",
					marginTop: "-36px",
				}}
			>
				A Computer Science Portal for Geeks!
			</h1> */}
			<FooterContainer>
				<Row>
					<Column>
						<Heading><b>GestuSlide Master</b></Heading>
						<FooterLink href="#">
							Home
						</FooterLink>
						<FooterLink href="#Features">
							Features
						</FooterLink>
						<FooterLink href="#">
							FAQ
						</FooterLink>
					</Column>
					<Column>
						<Heading>Product</Heading>
						<FooterLink href="#">
							Ilove GestuMaster
						</FooterLink>
						
						
					</Column>
					<Column>
						<Heading>Company</Heading>
						<FooterLink href="#">
							Our Story
						</FooterLink>
						<FooterLink href="#">
							Blog
						</FooterLink>
						<FooterLink href="#">
							Legal & Privacy
						</FooterLink>
						<FooterLink href="#">
							Contact
						</FooterLink>
						<h3 style={{ color: 'white' }}>NE Creations|2024</h3>

					</Column>
					{/* <Column>
						<Heading>Social Media</Heading>
						<FooterLink href="#">
							<i className="fab fa-facebook-f">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Facebook
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-instagram">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Instagram
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-twitter">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Twitter
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-youtube">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Youtube
								</span>
							</i>
						</FooterLink>
					</Column> */}
				</Row>
			</FooterContainer>
		</Box>
	);
	
	  
};
export default Footer;
