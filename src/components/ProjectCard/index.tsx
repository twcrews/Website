import "./ProjectCard.css";

interface ProjectCardProps {
	name: string;
	icon?: string;
	description: string;
	details: string;
	year: number;
	technologies: string[];
	link: string;
	index?: number;
}

export function ProjectCard({ name, icon, description, details, year, technologies, link, index = 0 }: ProjectCardProps) {
	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className="project-card"
			data-reveal
			style={{ '--stagger': index } as React.CSSProperties}
		>
			<div className="project-header">
				<span className="project-title">
					{icon && <img src={icon} alt={name} className="project-icon" />}
					<h3>{name}</h3>
				</span>
				<span className="project-year">{year}</span>
			</div>
			<p className="project-description">{description}</p>
			<p className="project-details">{details}</p>
			<div className="project-technologies">
				{technologies.map((tech) => (
					<span key={tech} className="project-tech-tag">
						{tech}
					</span>
				))}
			</div>
		</a>
	);
}
