import "./Footer.css";

interface FooterProps {
	name: string;
	sourceUrl: string;
}

export function Footer({ name, sourceUrl }: FooterProps) {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
			<p>&copy; {currentYear} {name}. Built with React and Vite.</p>
			<a href={sourceUrl} className="footer-button">
				View Source
			</a>
		</footer>
	);
}
