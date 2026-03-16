import "./Employers.css";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface Employer {
	name: string;
	locations: string[];
	position: string;
	duties: string[];
	technologies: string[];
	startDate: string;
	endDate?: string;
}

interface EmployersProps {
	employers: Employer[];
}

function formatYear(dateStr: string) {
	return new Date(dateStr).getFullYear();
}

export function Employers({ employers }: EmployersProps) {
	const containerRef = useScrollReveal<HTMLDivElement>();

	return (
		<section className="employers">
			<div className="content" ref={containerRef}>
				<div className="section-header" data-reveal>
					<h2>Professional Career</h2>
				</div>
				<div className="timeline">
					{[...employers].reverse().map((employer, i) => (
						<div
							key={employer.name}
							className="timeline-item"
							data-reveal
							style={{ "--stagger": i } as React.CSSProperties}
						>
							<span className="years-text">
								{formatYear(employer.startDate)}-
								{employer.endDate ? formatYear(employer.endDate) : "Present"}
							</span>
							<div className="timeline-dot" />
							<div className="timeline-card">
								<div className="timeline-card-header">
									<span className="card-years-mobile">
										{formatYear(employer.startDate)}–
										{employer.endDate ? formatYear(employer.endDate) : "Present"}
									</span>
									<h3>{employer.name}</h3>
									<span className="employer-position">{employer.position}</span>
									<span className="employer-location">
										{employer.locations.join(" · ")}
									</span>
								</div>
								<ul className="employer-duties">
									{employer.duties.map((duty) => (
										<li key={duty}>{duty}</li>
									))}
								</ul>
								<div className="employer-technologies">
									{employer.technologies.map((tech) => (
										<span key={tech} className="employer-tech-tag">
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
