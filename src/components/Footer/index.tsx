import "./Footer.css";
import type { SocialLink } from "../../data";

interface FooterProps {
	headline: string;
	resume: string;
	links: SocialLink[];
	sourceUrl: string;
}

export function Footer({
	headline,
	resume,
	links,
	sourceUrl,
}: FooterProps) {
	return (
		<footer className="footer">
			<div className="content footer-main">
				<div className="footer-identity">
					<span className="footer-headline">{headline}</span>
				</div>
				<div className="footer-actions">
					<a href={resume} download className="button-primary">
						DOWNLOAD RÉSUMÉ ↓
					</a>
					{links.map((link) => (
						<a
							key={link.name}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							className="button-ghost"
						>
							{link.name.toUpperCase()} ↗
						</a>
					))}
				</div>
			</div>
			<div className="footer-rule">
				<div className="content footer-legal">
					<span>© {new Date().getFullYear()} {"TOMMY CREWS"}</span>
					<a
						href={sourceUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="footer-source"
					>
						VIEW SOURCE ↗
					</a>
				</div>
			</div>
		</footer>
	);
}
