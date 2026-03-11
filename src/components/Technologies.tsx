import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { TechCard } from "./TechCard";

interface Technology {
	name: string;
	icon: IconDefinition;
	startYear: number;
	experienceAreas: string[];
}

interface TechnologiesProps {
	technologies: Technology[];
}

export function Technologies({ technologies }: TechnologiesProps) {
	return (
		<section className="technologies">
			<div className="content">
				<h2>Technologies & Experience</h2>
				<div className="tech-grid">
					{technologies.map((tech) => (
						<TechCard key={tech.name} {...tech} />
					))}
				</div>
			</div>
		</section>
	);
}
