import "./FeaturedProjects.css";
import type { Layer, Project } from "../../data";
import { LayerChips } from "../LayerChips";

interface FeaturedProjectsProps {
	projects: Project[];
	layers: Layer[];
	onOpenProject: (project: Project) => void;
}

export function FeaturedProjects({
	projects,
	layers,
	onOpenProject,
}: FeaturedProjectsProps) {
	const featured = projects.filter((p) => p.featured);

	return (
		<section id="projects" className="section">
			<div className="section-header" data-reveal>
				<h2>Latest Projects</h2>
			</div>

			<div className="featured-grid">
				{featured.map((project) => (
					<button
						key={project.name}
						type="button"
						className="featured-card"
						data-reveal
						onClick={() => onOpenProject(project)}
					>
						<span className="featured-head">
							<span className="featured-title">
								{project.icon ? (
									<span
										className="featured-icon"
										style={{ backgroundImage: `url(${project.icon})` }}
										aria-hidden="true"
									/>
								) : null}
								<span className="featured-name">{project.name}</span>
							</span>
							<span
								className={`featured-status${project.workInProgress ? " is-wip" : ""}`}
							>
								{project.workInProgress ? "IN PROGRESS" : "SHIPPED"}
							</span>
						</span>

						<span className="featured-body">
							<span className="featured-headline">
								{project.headline ?? project.description}
							</span>
							<span className="featured-chips">
								<LayerChips keys={project.layers} layers={layers} />
							</span>
							<span className="featured-foot">
								<span>{project.role}</span>
								<span className="featured-open">OPEN →</span>
							</span>
						</span>
					</button>
				))}
			</div>
		</section>
	);
}
