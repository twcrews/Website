import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface TechCardProps {
	name: string;
	icon: IconDefinition;
	startYear: number;
	experienceAreas: string[];
}

export function TechCard({ name, icon, startYear, experienceAreas }: TechCardProps) {
	const yearsOfExperience = new Date().getFullYear() - startYear;

	return (
		<div className="tech-card">
			<div className="tech-header">
				<div className="tech-title">
					<FontAwesomeIcon icon={icon} />
					<h3>{name}</h3>
				</div>
				<span className="experience-years">{yearsOfExperience} years</span>
			</div>
			<div className="tech-areas">
				{experienceAreas.map((area) => (
					<span key={area} className="tech-tag">
						{area}
					</span>
				))}
			</div>
		</div>
	);
}
