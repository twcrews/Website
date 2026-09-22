import { useState } from "react";
import "./CareerGantt.css";
import type { Employer } from "../../data";
import { alpha, axisPct, nowYear } from "../../lib/timeline";

interface CareerGanttProps {
	employers: Employer[];
}

const ACCENT = "#8ab4ff";

export function CareerGantt({ employers }: CareerGanttProps) {
	const [open, setOpen] = useState<string | null>(employers[0]?.name ?? null);

	return (
		<section id="career" className="section">
			<div className="section-header" data-reveal>
				<h2>Professional Experience</h2>
				<span className="section-note">2010 — PRESENT</span>
			</div>

			<div className="panel career">
				{employers.map((employer) => {
					const isOpen = open === employer.name;
					const current = employer.end === undefined;
					const end = employer.end ?? nowYear();
					const left = axisPct(employer.start);
					const width = Math.max(axisPct(end) - left, 7);

					return (
						<div key={employer.name} className="career-row">
							<button
								type="button"
								className={`career-head${isOpen ? " is-open" : ""}`}
								aria-expanded={isOpen}
								onClick={() => setOpen(isOpen ? null : employer.name)}
							>
								<span className="career-identity">
									<span className="career-name">{employer.name}</span>
									<span className="career-position">{employer.position}</span>
								</span>

								<span className="career-track">
									<span className="career-baseline" />
									<span
										className="career-bar"
										style={{
											left: `${left.toFixed(2)}%`,
											width: `${width.toFixed(2)}%`,
											background: current
												? alpha(ACCENT, 0.24)
												: "rgba(255,255,255,0.10)",
											borderColor: current
												? alpha(ACCENT, 0.6)
												: "rgba(255,255,255,0.26)",
										}}
									/>
									<span
										className="career-range"
										style={{
											left: `min(${(axisPct(end) + 0.6).toFixed(2)}%, calc(100% - 118px))`,
											color: current ? "var(--accent)" : "var(--ink-mute)",
										}}
									>
										{Math.floor(employer.start)} —{" "}
										{employer.end ? Math.floor(employer.end) : "PRESENT"}
									</span>
								</span>

								<span className="career-caret" aria-hidden="true">
									{isOpen ? "−" : "+"}
								</span>
							</button>

							{isOpen ? (
								<div className="career-body">
									<span className="career-locations">
										{employer.locations.join("\n")}
									</span>
									<div className="career-detail">
										<ul className="career-duties">
											{employer.duties.map((duty) => (
												<li key={duty}>
													<span className="career-dash" aria-hidden="true">
														—
													</span>
													<span>{duty}</span>
												</li>
											))}
										</ul>
										<div className="career-tech">
											{employer.technologies.map((tech) => (
												<span key={tech} className="chip-outline">
													{tech}
												</span>
											))}
										</div>
									</div>
								</div>
							) : null}
						</div>
					);
				})}
			</div>
		</section>
	);
}
