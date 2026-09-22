import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { SocialLink } from "../../data";

const SECTIONS = ["stack", "career", "projects"] as const;

interface NavProps {
	name: string;
	links: SocialLink[];
	resume: string;
}

export function Nav({ name, links, resume }: NavProps) {
	return (
		<header className="nav">
			<a href="#top" className="nav-brand">
				<span className="nav-name">{name}</span>
			</a>
			<nav className="nav-links" aria-label="Sections">
				{SECTIONS.map((section) => (
					<a key={section} href={`#${section}`} className="nav-link">
						{section.toUpperCase()}
					</a>
				))}
			</nav>
			<div className="nav-actions">
				{links.map((link) => (
					<a
						key={link.name}
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={link.name}
						className="nav-icon"
					>
						<FontAwesomeIcon icon={link.icon} />
					</a>
				))}
				<a href={resume} download className="button-primary nav-resume">
					RÉSUMÉ ↓
				</a>
			</div>
		</header>
	);
}
