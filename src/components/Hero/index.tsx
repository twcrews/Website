import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faSun, faMoon, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

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
	theme: "light" | "dark";
	onThemeToggle: () => void;
}

export function Hero({ name, tagline, image, links, theme, onThemeToggle }: HeroProps) {
	return (
		<section className="hero">
			<button
				className="icon-btn theme-toggle"
				onClick={onThemeToggle}
				aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
			>
				<FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
			</button>
			<div className="hero-content">
				<div className="profile-image-ring">
					<img src={image} alt={name} className="profile-image" />
				</div>
				<h1>{name}</h1>
				<p className="tagline">{tagline}</p>
				<a href="/Resume.ThomasCrews.pdf" download className="resume-btn">
					<FontAwesomeIcon icon={faFileArrowDown} />
					Download Résumé
				</a>
				<div className="social-links">
					{links.map((link) => (
						<a
							key={link.name}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							className="icon-btn social-link"
							aria-label={link.name}
						>
							<FontAwesomeIcon icon={link.icon} />
						</a>
					))}
				</div>
			</div>
			<div className="hero-scroll-hint" aria-hidden="true">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<path d="M6 9l6 6 6-6" />
				</svg>
			</div>
		</section>
	);
}
