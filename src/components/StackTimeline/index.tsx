import "./StackTimeline.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Layer, LayerKey, Project } from "../../data";
import { alpha, axisPct } from "../../lib/timeline";

interface StackTimelineProps {
	layers: Layer[];
	projects: Project[];
	activeLayer: LayerKey | null;
	onSelectLayer: (key: LayerKey) => void;
}

export function StackTimeline({
	layers,
	projects,
	activeLayer,
	onSelectLayer,
}: StackTimelineProps) {
	const thisYear = new Date().getFullYear();

	return (
		<section id="stack" className="section">
			<div className="section-header" data-reveal>
				<h2>Stack Experience</h2>
				<span className="section-note">
					CLICK A LAYER TO VIEW RELEVANT PROJECTS ↓
				</span>
			</div>

			<div className="stack">
				<div className="stack-axis-header">
					<span>LAYER</span>
					<span className="stack-axis-ticks">
						<span>2010</span>
						<span>2018</span>
						<span>2026</span>
					</span>
				</div>

				{layers.sort((a, b) => a.since - b.since).map((layer) => {
					const active = activeLayer === layer.key;
					const left = axisPct(layer.since);
					const count = projects.filter((p) =>
						p.layers.includes(layer.key),
					).length;

					return (
						<button
							key={layer.key}
							type="button"
							className={`stack-row${active ? " is-active" : ""}`}
							style={{ "--layer-color": layer.color } as React.CSSProperties}
							aria-pressed={active}
							title={`Show the ${count} projects touching ${layer.name}`}
							onClick={() => onSelectLayer(layer.key)}
						>
							<span className="stack-label">
								<span className="stack-label-name">
									<FontAwesomeIcon
										icon={layer.icon}
										className="stack-label-icon"
									/>
									{layer.name}
								</span>
								<span className="stack-label-meta">
									SINCE {layer.since} · {thisYear - layer.since} YRS ·{" "}
									{layer.meta}
								</span>
							</span>

							<span className="stack-track-wrap">
								<span className="stack-track">
									<span
										className="stack-bar"
										style={{
											left: `${left.toFixed(2)}%`,
											width: `${(100 - left).toFixed(2)}%`,
											background: `linear-gradient(90deg, ${alpha(layer.color, 0.45)}, ${layer.color})`,
										}}
									/>
								</span>
								<span className="stack-chips">
									{layer.chips.map((chip) => (
										<span key={chip} className="chip">
											{chip}
										</span>
									))}
								</span>
							</span>
						</button>
					);
				})}
			</div>
		</section>
	);
}
