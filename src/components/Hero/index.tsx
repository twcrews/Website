import "./Hero.css";
import { AXIS_START } from "../../lib/timeline";

interface HeroProps {
	name: string;
	tagline: string;
	image: string;
	imageCaption: string;
	layerCount: number;
	projectCount: number;
	employerCount: number;
}

export function Hero({
	name,
	tagline,
	image,
	imageCaption,
	layerCount,
	projectCount,
	employerCount,
}: HeroProps) {
	const stats = [
		{
			value: String(new Date().getFullYear() - AXIS_START),
			label: "YEARS SHIPPING",
		},
		{ value: String(layerCount), label: "STACKS/PLATFORMS" },
		{ value: String(projectCount), label: "PROJECTS" },
		{ value: String(employerCount), label: "PROFESSIONAL ROLES" },
	];

	return (
		<section className="hero">
			<div className="hero-copy">
				<h1 className="hero-headline">
					<span className="hero-headline-line">
						Hello, world! I'm a full&#8209;<em>stacks</em> engineer.
					</span>
				</h1>
				<p className="hero-tagline">{tagline}</p>
				<dl className="hero-stats">
					{stats.map((stat) => (
						<div key={stat.label} className="hero-stat">
							<dd className="hero-stat-value">{stat.value}</dd>
							<dt className="hero-stat-label">{stat.label}</dt>
						</div>
					))}
				</dl>
			</div>

			<div className="hero-plate-wrap">
				<div className="hero-plate">
					<img src={image} alt={`${name} and family`} className="hero-image" />
					<div className="hero-plate-meta">
						<span className="hero-plate-caption">
							{imageCaption.toUpperCase()}
						</span>
					</div>
					<span className="hero-corner hero-corner-tl" aria-hidden="true" />
					<span className="hero-corner hero-corner-tr" aria-hidden="true" />
					<span className="hero-corner hero-corner-bl" aria-hidden="true" />
					<span className="hero-corner hero-corner-br" aria-hidden="true" />
				</div>
			</div>
		</section>
	);
}
