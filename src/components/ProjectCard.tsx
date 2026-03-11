interface ProjectCardProps {
	name: string;
	description: string;
	details: string;
	year: number;
	technologies: string[];
	link: string;
}

export function ProjectCard({ name, description, details, year, technologies, link }: ProjectCardProps) {
	return (
		<a href={link} target="_blank" rel="noopener noreferrer" className="project-card">
			<div className="project-header">
				<h3>{name}</h3>
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
