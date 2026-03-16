import "./App.css";
import { data } from "./lib/data";
import { useTheme } from "./hooks/useTheme";
import { Hero } from "./components/Hero";
import { Technologies } from "./components/Technologies";
import { Employers } from "./components/Employers";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

function App() {
	const { theme, toggleTheme } = useTheme();
	return (
		<>
			<Hero
				name={data.name}
				tagline={data.tagline}
				image={data.image}
				links={data.links}
				theme={theme}
				onThemeToggle={toggleTheme}
			/>
			<Technologies technologies={data.technologies} />
			<Employers employers={data.employers} />
			<Projects projects={data.projects} />
			<Footer name={data.name} sourceUrl={data.footer.source} />
		</>
	);
}

export default App;
