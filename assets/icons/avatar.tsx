import * as React from "react";
const AvatarIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		width={258}
		height={260}
		fill="none"
	>
		<ellipse cx={129} cy={130.462} fill="url(#a)" rx={129} ry={129.5} />
		<path fill="url(#b)" d="M48 6.68h165v223H48z" />
		<defs>
			<radialGradient
				id="a"
				cx={0}
				cy={0}
				r={1}
				gradientTransform="matrix(0 129.5 -129 0 129 130.462)"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset={0.177} stopColor="#fff" />
				<stop offset={1} stopColor="#434343" stopOpacity={0} />
			</radialGradient>
			<pattern
				id="b"
				width={1}
				height={1}
				patternContentUnits="objectBoundingBox"
			>
				<use xlinkHref="#c" transform="scale(.00088 .00065)" />
			</pattern>
			<image
				id="c"
				width={1132}
				height={1530}
			/>
		</defs>
	</svg>
);
export default AvatarIcon;