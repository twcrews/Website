import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface SocialLink {
	name: string;
	url: string;
	icon: IconDefinition;
}

interface HeroProps {
	name: string;
	tagline: string;
	image: string;
	links: SocialLink[];
}

export function Hero({ name, tagline, image, links }: HeroProps) {
	return (
		<section className="hero">
			<div className="hero-content">
				<img src={image} alt={name} className="profile-image" />
				<h1>{name}</h1>
				<p className="tagline">{tagline}</p>
				<div className="social-links">
					{links.map((link) => (
						<a
							key={link.name}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							className="social-link"
						>
							<FontAwesomeIcon icon={link.icon} />
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
