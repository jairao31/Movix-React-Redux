import React from "react";
import {
	FaFacebookF,
	FaInstagram,
	FaTwitter,
	FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
	return (
		<footer className="footer">
			<ContentWrapper>
				<ul className="menuItems">
					<li className="menuItem">Terms Of Use</li>
					<li className="menuItem">Privacy-Policy</li>
					<li className="menuItem">About</li>
					<li className="menuItem">Blog</li>
					<li className="menuItem">FAQ</li>
				</ul>
				<div className="infoText">
					Movix is top of free streaming website, where to watch
					movies online free without registration required. With a big
					database and great features, we're confident Movix is the
					best free movies online website in the space that you can't
					simply miss!
				</div>
				<div className="socialIcons">
					<span className="icon">
						<FaFacebookF />
					</span>
					<span className="icon">
						<FaInstagram />
					</span>
					<span className="icon">
						<FaTwitter />
					</span>
					<span className="icon">
						<FaLinkedin />
					</span>
				</div>
			</ContentWrapper>
		</footer>
	);
};

export default Footer;
