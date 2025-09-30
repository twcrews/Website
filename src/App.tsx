import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { data } from "./lib/data";

function App() {
	const currentYear = new Date().getFullYear();

	return (
    <>
			<section className="hero">
				<div className="hero-content">
					<img src={data.image} alt={data.name} className="profile-image" />
					<h1>{data.name}</h1>
					<p className="tagline">{data.tagline}</p>
					<div className="social-links">
						{data.links.map((link) => (
							<a
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								className="social-link"
							>
								<FontAwesomeIcon icon={link.icon} />
							</a>
						))}
					</div>
				</div>
			</section>

			<section className="technologies">
				<div className="content">
					<h2>Technologies & Experience</h2>
					<div className="tech-grid">
						{data.technologies.map((tech) => (
							<div key={tech.name} className="tech-card">
								<div className="tech-header">
									<div className="tech-title">
										<FontAwesomeIcon icon={tech.icon} />
										<h3>{tech.name}</h3>
									</div>
									<span className="experience-years">
										{currentYear - tech.startYear} years
									</span>
								</div>
								<div className="tech-areas">
									{tech.experienceAreas.map((area) => (
										<span key={area} className="tech-tag">
											{area}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="projects">
					<h2>Featured Projects</h2>
					<div className="projects-grid content">
						{data.projects.map((project) => (
							<a
								href={project.link}
								key={project.name}
								className="project-card"
							>
								<div className="project-header">
									<h3>
										<a
											href={project.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											{project.name}
										</a>
									</h3>
									<span className="project-year">{project.year}</span>
								</div>
								<p className="project-description">{project.description}</p>
								<p className="project-details">{project.details}</p>
								<div className="project-technologies">
									{project.technologies.map((tech) => (
										<span key={tech} className="project-tech-tag">
											{tech}
										</span>
									))}
								</div>
							</a>
						))}
					</div>
			</section>

			<footer className="footer">
				<p>
					&copy; {currentYear} {data.name}. Built with React and Vite.
				</p>
				<a href={data.footer.source} className="footer-button">
					View Source
				</a>
			</footer>
    </>
	);
}

export default App;
