import "./Projects.css";
import { ProjectCard } from "../ProjectCard";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface Project {
	name: string;
	icon?: string;
	description: string;
	details: string;
	year: number;
	technologies: string[];
	link: string;
	workInProgress?: boolean;
}

interface ProjectsProps {
	projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
	const containerRef = useScrollReveal<HTMLDivElement>();

	return (
		<section className="projects">
			<div className="content" ref={containerRef}>
				<div className="section-header" data-reveal>
					<h2>Featured Projects</h2>
				</div>
				<div className="projects-grid">
					{[...projects].sort((a, b) => b.year - a.year).map((project, i) => (
						<ProjectCard key={project.name} {...project} index={i} />
					))}
				</div>
			</div>
		</section>
	);
}
