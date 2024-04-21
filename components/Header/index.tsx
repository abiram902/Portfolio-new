import React from "react";
import Logo from "@/assets/icons/Logo";
import GithubLogo from "@/assets/icons/GithubLogo";
import LinkedInLogo from "@/assets/icons/LinkedinLogo";

function Header() {
	return (
		<div className="flex justify-between items-center max-w-screen-xl ml-auto mr-auto pt-11 pb-11 text-3xl font-medium">
			<div className="icon__container flex items-center gap-3">
				<Logo />
				<p>Portfolio</p>
			</div>
			<div className="flex gap-10">
				<p>Projects</p>
				<p>Technologies</p>
				<p>About me</p>
			</div>
			<div className="flex gap-4">
				<GithubLogo />
				<LinkedInLogo />
			</div>
		</div>
	);
}

export default Header;
