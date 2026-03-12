import "./TechCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface TechCardProps {
	name: string;
	icon: IconDefinition;
	color: string;
	startYear: number;
	experienceAreas: string[];
	index?: number;
}

export function TechCard({ name, icon, color, startYear, experienceAreas, index = 0 }: TechCardProps) {
	const yearsOfExperience = new Date().getFullYear() - startYear;

	return (
		<div
			className="tech-card"
			data-reveal
			style={{ '--stagger': index, '--tech-color': color } as React.CSSProperties}
		>
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
