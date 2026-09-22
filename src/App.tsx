import { useCallback, useState } from "react";
import "./App.css";
import { data, type LayerKey, type Project } from "./data";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { StackTimeline } from "./components/StackTimeline";
import { CareerGantt } from "./components/CareerGantt";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { ProjectIndex } from "./components/ProjectIndex";
import { ProjectSheet } from "./components/ProjectSheet";
import { Footer } from "./components/Footer";

function App() {
	const [filter, setFilter] = useState<LayerKey | null>(null);
	const [openProject, setOpenProject] = useState<Project | null>(null);

	const selectLayer = useCallback((key: LayerKey | null) => {
		setFilter((current) => (current === key ? null : key));
		const target = document.getElementById("index");
		if (!target) return;
		window.scrollTo({
			top: target.getBoundingClientRect().top + window.scrollY - 64,
			behavior: "smooth",
		});
	}, []);

	useScrollReveal();

	return (
		<div className="page">
			<Nav
				name={data.name}
				links={data.links}
				resume={data.resume}
			/>
			<main id="top" className="content">
				<Hero
					name={data.name}
					tagline={data.tagline}
					image={data.image}
					imageCaption={data.imageCaption}
					layerCount={data.layers.length}
					projectCount={data.projects.length}
					employerCount={data.employers.length}
				/>
				<StackTimeline
					layers={data.layers}
					projects={data.projects}
					activeLayer={filter}
					onSelectLayer={selectLayer}
				/>
				<CareerGantt employers={data.employers} />
				<FeaturedProjects
					projects={data.projects}
					layers={data.layers}
					onOpenProject={setOpenProject}
				/>
				<ProjectIndex
					projects={data.projects}
					layers={data.layers}
					activeLayer={filter}
					onSelectLayer={setFilter}
					onOpenProject={setOpenProject}
				/>
			</main>
			<ProjectSheet
				project={openProject}
				layers={data.layers}
				onClose={() => setOpenProject(null)}
			/>
			<Footer
				headline={data.footerHeadline}
				resume={data.resume}
				links={data.links}
				sourceUrl={data.footer.source}
			/>
		</div>
	);
}

export default App;
