import { ProjectCard } from "./ProjectCard";

interface Project {
	name: string;
	description: string;
	details: string;
	year: number;
	technologies: string[];
	link: string;
}

interface ProjectsProps {
	projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
	return (
		<section className="projects">
			<h2>Featured Projects</h2>
			<div className="projects-grid content">
				{projects.map((project) => (
					<ProjectCard key={project.name} {...project} />
				))}
			</div>
		</section>
	);
}
