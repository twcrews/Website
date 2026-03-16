import "./Technologies.css";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { TechCard } from "../TechCard";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface Technology {
	name: string;
	icon: IconDefinition;
	color: string;
	startYear: number;
	experienceAreas: string[];
}

interface TechnologiesProps {
	technologies: Technology[];
}

export function Technologies({ technologies }: TechnologiesProps) {
	const containerRef = useScrollReveal<HTMLDivElement>();

	return (
		<section className="technologies">
			<div className="content" ref={containerRef}>
				<div className="section-header" data-reveal>
					<h2>Technologies & Experience</h2>
				</div>
				<div className="tech-grid">
					{technologies.map((tech, i) => (
						<TechCard key={tech.name} {...tech} index={i} />
					))}
				</div>
			</div>
		</section>
	);
}
