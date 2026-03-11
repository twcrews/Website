import "./App.css";
import { data } from "./lib/data";
import { Hero } from "./components/Hero";
import { Technologies } from "./components/Technologies";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

function App() {
	return (
		<>
			<Hero
				name={data.name}
				tagline={data.tagline}
				image={data.image}
				links={data.links}
			/>
			<Technologies technologies={data.technologies} />
			<Projects projects={data.projects} />
			<Footer name={data.name} sourceUrl={data.footer.source} />
		</>
	);
}

export default App;
