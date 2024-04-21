import GithubLogo from "@/assets/icons/GithubLogo";
import LinkedInLogo from "@/assets/icons/LinkedinLogo";
import React from "react";

function Footer() {
	return (
		<div className="flex justify-around mb-20">
			<div className="contact flex items-center gap-20 text-3xl font-medium">
				<div>
					<h6 className="header mb-4">Call Me:</h6>
					<p>+91 9790440471</p>
				</div>
				<div>
					<h6 className="header mb-4">Email:</h6>
					<p>abiram902@gmail.com</p>
				</div>
			</div>
			<div className="flex items-center gap-9">
				<GithubLogo />
				<LinkedInLogo />
			</div>
		</div>
	);
}

export default Footer;
