import { useEffect } from "react";
import "./ProjectSheet.css";
import type { Layer, Project } from "../../data";
import { LayerChips } from "../LayerChips";

interface ProjectSheetProps {
	project: Project | null;
	layers: Layer[];
	onClose: () => void;
}

export function ProjectSheet({ project, layers, onClose }: ProjectSheetProps) {
	useEffect(() => {
		if (!project) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", onKey);
		document.body.style.overflow = "hidden";
		return () => {
			window.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [project, onClose]);

	if (!project) return null;

	const rows = [
		{ key: "YEAR", value: String(project.year) },
		{ key: "ROLE", value: project.role },
		{
			key: "STATUS",
			value: project.workInProgress ? "In active development" : "Shipped",
		},
	];

	return (
		<div
			className="sheet-layer"
			role="dialog"
			aria-modal="true"
			aria-label={project.name}
		>
			<div className="sheet-scrim" onClick={onClose} />
			<div className="sheet">
				<div className="sheet-head">
					<span className="sheet-eyebrow">PROJECT / {project.year}</span>
					<button
						type="button"
						className="sheet-close"
						aria-label="Close"
						onClick={onClose}
					>
						✕
					</button>
				</div>

				<div className="sheet-body">
					<div className="sheet-title">
						{project.icon ? (
							<div
								className="sheet-icon"
								style={{ backgroundImage: `url(${project.icon})` }}
								aria-hidden="true"
							/>
						) : null}
						<div className="sheet-title-copy">
							<h3>{project.name}</h3>
							<p>{project.description}</p>
						</div>
					</div>

					<div className="sheet-rows">
						{rows.map((row) => (
							<div key={row.key} className="sheet-row">
								<span className="sheet-row-key">{row.key}</span>
								<span className="sheet-row-value">{row.value}</span>
							</div>
						))}
					</div>

					<div className="sheet-block">
						<span className="sheet-block-label">WHAT I BUILT</span>
						<p className="sheet-prose">{project.details}</p>
					</div>

					<div className="sheet-block">
						<span className="sheet-block-label">LAYERS TOUCHED</span>
						<div className="sheet-chips">
							<LayerChips
								keys={project.layers}
								layers={layers}
								className="chip-layer-lg"
							/>
						</div>
					</div>

					<div className="sheet-block">
						<span className="sheet-block-label">TECHNOLOGY</span>
						<div className="sheet-chips">
							{project.technologies.map((tech) => (
								<span key={tech} className="chip-outline chip-outline-lg">
									{tech}
								</span>
							))}
						</div>
					</div>
					{project.link && (
						<a
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="sheet-link"
						>
							<span>{project.linkLabel}</span>
							<span aria-hidden="true">↗</span>
						</a>
					)}
					{project.sourceLink && (
						<a
							href={project.sourceLink}
							target="_blank"
							rel="noopener noreferrer"
							className="sheet-source-link"
						>
							<span>VIEW SOURCE</span>
							<span aria-hidden="true">↗</span>
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
