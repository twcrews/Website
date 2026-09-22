import "./ProjectIndex.css";
import type { Layer, LayerKey, Project } from "../../data";
import { LayerChips } from "../LayerChips";

interface ProjectIndexProps {
	projects: Project[];
	layers: Layer[];
	activeLayer: LayerKey | null;
	onSelectLayer: (key: LayerKey | null) => void;
	onOpenProject: (project: Project) => void;
}

export function ProjectIndex({
	projects,
	layers,
	activeLayer,
	onSelectLayer,
	onOpenProject,
}: ProjectIndexProps) {
	const shown = activeLayer
		? projects.filter((p) => p.layers.includes(activeLayer))
		: projects;

	const years = projects.map((p) => p.year);
	const note = activeLayer
		? `${shown.length} OF ${projects.length} SHOWN`
		: `${projects.length} PROJECTS · ${Math.min(...years)} — ${Math.max(...years)}`;

	const filters: { key: LayerKey | null; label: string }[] = [
		{ key: null, label: `ALL ${projects.length}` },
		...layers.map((layer) => ({
			key: layer.key,
			label: `${layer.name.toUpperCase()} · ${
				projects.filter((p) => p.layers.includes(layer.key)).length
			}`,
		})),
	];

	return (
		<section id="index" className="section index-section">
			<div className="section-header" data-reveal>
				<h2>All Projects</h2>
				<span className="section-note">{note}</span>
			</div>

			<div className="index-filters">
				{filters.map((filter) => {
					const active = activeLayer === filter.key;
					return (
						<button
							key={filter.label}
							type="button"
							className={`index-filter${active ? " is-active" : ""}`}
							aria-pressed={active}
							onClick={() => onSelectLayer(filter.key)}
						>
							{filter.label}
						</button>
					);
				})}
			</div>

			<div className="index-table">
				{shown.sort((a, b) => b.year - a.year).map((project) => (
					<button
						key={project.name}
						type="button"
						className="index-row"
						onClick={() => onOpenProject(project)}
					>
						<span className="index-year">{project.year}</span>
						<span className="index-identity">
							{project.icon ? (
								<span
									className="index-icon"
									style={{ backgroundImage: `url(${project.icon})` }}
									aria-hidden="true"
								/>
							) : null}
							<span className="index-name">{project.name}</span>
							{project.workInProgress ? (
								<span
									className="index-wip"
									aria-label="In progress"
									title="In progress"
								/>
							) : null}
						</span>
						<span className="index-description">{project.description}</span>
						<span className="index-chips">
							<LayerChips
								keys={project.layers}
								layers={layers}
								variant="short"
							/>
						</span>
					</button>
				))}
			</div>
		</section>
	);
}
