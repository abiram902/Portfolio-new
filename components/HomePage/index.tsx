import Image from "next/image";
import React from "react";
import "./homepage.scss";

function index() {
	return (
		<div className="flex items-center ">
			<div className="react-img-container mr-6">
				<Image
					src="/react-icon.png"
					width={300}
					height={300}
					alt="react"
					className="react__icon"
				/>
			</div>
			<div className="max-w-3xl ">
				<p className="text-5xl font-semibold mb-6">
					Hi there, I'm <span className="text-cyan-300">Abi Ram</span>
				</p>
				<p className="font-medium text-4xl sub__text">
					Crafting digital experiences with precision and passion for over 5
					years – let's build something extraordinary together.
				</p>
			</div>
		</div>
	);
}

export default index;
