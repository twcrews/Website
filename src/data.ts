import {
	faCloud,
	faCodeBranch,
	faDatabase,
	faGlobe,
	faMobileScreen,
	faServer,
	faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type LayerKey =
	| "web"
	| "desktop"
	| "mobile"
	| "backend"
	| "data"
	| "infra"
	| "tooling";

export interface Layer {
	key: LayerKey;
	name: string;
	short: string;
	icon: IconDefinition;
	color: string;
	since: number;
	meta: string;
	chips: string[];
}

export interface Project {
	name: string;
	icon?: string;
	year: number;
	workInProgress?: boolean;
	featured?: boolean;
	layers: LayerKey[];
	description: string;
	role: string;
	/** Long-form pitch shown only on featured cards. */
	headline?: string;
	technologies: string[];
	link?: string;
	sourceLink?: string;
	linkLabel?: string;
	details: string;
}

export interface Employer {
	name: string;
	position: string;
	locations: string[];
	/** Decimal years, e.g. 2019.25 === April 2019. */
	start: number;
	end?: number;
	duties: string[];
	technologies: string[];
}

export interface SocialLink {
	name: string;
	url: string;
	icon: IconDefinition;
}

const layers: Layer[] = [
	{
		key: "web",
		name: "Web",
		short: "WEB",
		icon: faGlobe,
		color: "#61DAFB",
		since: 2010,
		meta: "WASM · SPA · PWA",
		chips: ["React", "Angular", "Blazor", "TypeScript", "Figma"],
	},
	{
		key: "desktop",
		name: "Desktop",
		short: "DSK",
		icon: faWindowMaximize,
		color: "#fb6161",
		since: 2010,
		meta: "WINDOWS · MACOS · LINUX",
		chips: ["WPF", ".NET", "Swift", "Figma"],
	},
	{
		key: "mobile",
		name: "Mobile",
		short: "MOB",
		icon: faMobileScreen,
		color: "#3DDC84",
		since: 2023,
		meta: "IOS · ANDROID · REACT NATIVE",
		chips: [
			"Swift/SwiftUI",
			"Kotlin/Compose",
			"React Native",
			".NET MAUI",
			"RxSwift",
		],
	},
	{
		key: "backend",
		name: "Backend",
		short: "API",
		icon: faServer,
		color: "#b283ff",
		since: 2010,
		meta: "SERVICES · APIS · SCIENTIFIC COMPUTE",
		chips: [".NET / C#", "Python", "Node", "PHP", "Cython", "C"],
	},
	{
		key: "data",
		name: "Data",
		short: "DB",
		icon: faDatabase,
		color: "#cdd10d",
		since: 2018,
		meta: "RELATIONAL · DOCUMENT · EMBEDDED",
		chips: [
			"SQL Server",
			"Cosmos DB",
			"MySQL",
			"SQLite",
			"EF Core",
			"ObjectBox",
		],
	},
	{
		key: "infra",
		name: "Infrastructure",
		short: "OPS",
		icon: faCloud,
		color: "#ffb01e",
		since: 2019,
		meta: "CONTAINERS · CI/CD · NETWORKS",
		chips: ["Docker", "Kubernetes", "Helm", "Azure DevOps", "AWS", "Cloudflare"],
	},
	{
		key: "tooling",
		name: "Tooling & Libraries",
		short: "LIB",
		icon: faCodeBranch,
		color: "#67d13a",
		since: 2016,
		meta: "PUBLISHED PACKAGES · EXTENSIONS · SCRIPTING",
		chips: ["NuGet", "npm", "VS Code API", "PowerShell", "sh/bash/zsh"],
	},
];

const employers: Employer[] = [
	{
		name: "Phase 2",
		position: "Software Engineer",
		locations: ["Oklahoma City", "Remote"],
		start: 2023.17,
		duties: [
			"Architect full-stack mobile apps for clients",
			"Modernize and maintain legacy intranet apps and systems",
			"Serve as technical consultant and advisor for clients",
		],
		technologies: [
			"iOS (Swift)",
			"Android (Kotlin)",
			".NET",
			"AngularJS",
			"Angular",
			"TypeScript",
			"SQL",
		],
	},
	{
		name: "Paycom",
		position: "Software Development Team Lead",
		locations: ["Oklahoma City"],
		start: 2019.25,
		end: 2023.17,
		duties: [
			"Redesign, modernize, and consolidate internal legacy apps",
			"Implement CI/CD pipelines and load-balanced containers",
			"Contribute to React UI library and design system",
		],
		technologies: ["React", "TypeScript", ".NET", "PHP", "SQL", "Kubernetes"],
	},
	{
		name: "SWOSU Residence Life",
		position: "Marketing & Communications Manager",
		locations: ["Southwestern Oklahoma State University"],
		start: 2018.58,
		end: 2019.25,
		duties: [
			"Create websites and digital marketing materials",
			"Design and maintain residential databases",
		],
		technologies: [
			"Core web (HTML/CSS/JS)",
			".NET",
			"SQL",
			"Graphic design software",
		],
	},
	{
		name: "NASA",
		position: "Dev Intern → Technical Lead",
		locations: [
			"Southwestern Oklahoma State University",
			"Marshall Space Flight Center",
		],
		start: 2016.33,
		end: 2017.58,
		duties: [
			"Reconstruct and modernize legacy aerosol mapping software",
			"Establish HPC contracts and connections",
			"Build launch simulation software for Space Launch System",
		],
		technologies: ["Python", "Cython", "C"],
	},
	{
		name: "Darlington Public School",
		position: "Software Engineer",
		locations: ["El Reno, OK"],
		start: 2010.0,
		end: 2020.33,
		duties: [
			"Develop custom educational software and integrations",
			"Manage systems, domains, and policies",
			"Design and manage network infrastructure",
		],
		technologies: [".NET", "React", "TypeScript", "VB"],
	},
];

const projects: Project[] = [
	{
		name: "QuikTrip Mobile App",
		icon: "res/qt.png",
		year: 2023,
		layers: ["mobile", "backend", "data", "infra"],
		description: "Mobile apps for the QuikTrip convenience store chain",
		role: "CONTRIBUTOR · CONSULTANT",
		headline: "Native iOS and Android apps for the QuikTrip convenience store chain",
		technologies: ["Swift", "Kotlin", ".NET", "SQL", "Cloud"],
		link: "https://apps.apple.com/us/app/quiktrip-coupons-fuel-food/id1044651221",
		linkLabel: "VIEW ON APP STORE",
		details: "I contributed to the development of the QuikTrip mobile apps, which provide users with mobile food ordering and pickup, fuel prices and store locations, and more. The apps are available on both iOS and Android."
	},
	{
		name: "G915 Fix",
		icon: "res/g915-fix.png",
		year: 2026,
		workInProgress: true,
		featured: true,
		layers: ["desktop"],
		description: "Cross-platform low-level Logitech peripheral fix",
		role: "FORK AUTHOR",
		headline: "A hardware-level filter service for Logitech's G915-model keyboards for Windows, macOS, and Linux.",
		technologies: ["C#", ".NET"],
		sourceLink: "https://github.com/twcrews/g915-fix-universal",
		details: "G915 Fix is a cross-platform low-level filter service for Logitech's G915-model keyboards. It addresses issues with the keyboard's firmware and provides a more stable and reliable experience for users across Windows, macOS, and Linux.",
	},
	{
		name: "Chapters",
		icon: "res/chapters.svg",
		year: 2026,
		workInProgress: true,
		featured: true,
		layers: ["web", "mobile", "backend", "data", "infra"],
		description: "Book club social network",
		role: "AUTHOR",
		headline:
			"A social network for readers and book clubs, available for iOS, Android, and web.",
		technologies: ["React Native", "TypeScript", "Node", "SQL", "Cloud"],
		link: "https://readchapters.app",
		linkLabel: "OPEN APP",
		details:
			"Chapters is a book club social network that allows users to create and join book clubs, track their friends' reading progress, and share spoiler-free thoughts with other members of their clubs.",
	},
	{
		name: "Skope",
		icon: "res/skope.svg",
		year: 2026,
		workInProgress: true,
		featured: true,
		layers: ["web", "backend", "data", "infra"],
		description: "Dashboard builder for Planning Center data",
		role: "AUTHOR",
		headline:
			"Drag-and-drop dashboard builder with a live data layer — the productized successor to a one-off I shipped in 2023.",
		technologies: [".NET", "C#", "Blazor", "JS", "CSS", "Cloud", "SQL"],
		sourceLink: "https://github.com/twcrews/skope",
		details:
			"Skope is a dashboard builder for Planning Center data. It allows users to create custom dashboards with drag-and-drop widgets, providing insights and analytics on their Planning Center data. Skope is the successor to the COS dashboard project.",
	},
	{
		name: "Paycom AIMS",
		icon: "res/paycom.png",
		year: 2021,
		layers: ["web", "backend", "data", "infra"],
		description: "Application Information Management System",
		role: "TEAM LEAD · ARCHITECT",
		headline:
			"Internal platform managing application data and infrastructure at Paycom. I led it from UI library to Helm charts.",
		technologies: [
			"React",
			"Material-UI",
			".NET",
			"C#",
			"EF Core",
			"MySQL",
			"Docker",
			"Kubernetes",
			"Helm",
		],
		link: "https://docs.google.com/presentation/d/1glnrmdE4a-Eedi9zEFxvxet49Lz9agno",
		linkLabel: "VIEW PRESENTATION",
		details:
			"I was the lead developer for the internal AIMS tool at Paycom. This web application helped manage data and infrastructure at the company.",
	},
	{
		name: "Planning Center API",
		icon: "res/pcapi.png",
		year: 2024,
		featured: true,
		layers: ["backend", "tooling"],
		description: ".NET client library for Planning Center",
		role: "AUTHOR",
		headline:
			"A statically-typed, fluent .NET client covering every Planning Center product — published and documented.",
		technologies: [".NET", "C#"],
		link: "https://pcapi.crews.dev",
		linkLabel: "VIEW DETAILS",
		sourceLink: "https://github.com/twcrews/planningcenter-api",
		details:
			"This is a statically-typed and fluent API client library for all Planning Center products. I created this library to accelerate future Planning Center application development.",
	},
	{
		name: "Nexus",
		icon: "res/nexus.svg",
		year: 2026,
		workInProgress: true,
		layers: ["web", "backend", "tooling"],
		description: "Unified software engineering dashboard",
		role: "AUTHOR",
		technologies: [".NET", "C#", "Blazor", "JS", "CSS"],
		link: "https://nexus.crews.dev",
		linkLabel: "OPEN APP",
		sourceLink: "https://github.com/twcrews/nexus",
		details:
			"Nexus is a unified dashboard for software engineers, aggregating data from various sources like GitHub and Azure DevOps. I created Nexus to streamline the workflow of software engineers by providing a single pane of glass for all their essential information.",
	},
	{
		name: "Crust",
		icon: "res/crust.svg",
		year: 2026,
		workInProgress: true,
		layers: ["desktop", "tooling"],
		description: "VS Code extension for the Pi Coding Agent",
		role: "AUTHOR",
		technologies: ["TypeScript", "Node"],
		link: "https://marketplace.visualstudio.com/items?itemName=crews.crust",
		linkLabel: "VIEW ON MARKETPLACE",
		sourceLink: "https://github.com/twcrews/crust",
		details:
			"Crust is an extension for Visual Studio Code that acts as a UI for the Pi Coding Agent. It aims for feature parity with similar extensions like Claude Code, offering features like IDE file/selection context.",
	},
	{
		name: "Sequence Decks",
		year: 2025,
		layers: ["web", "backend", "infra"],
		description: "Blazor WASM app replacing a 2020 WPF app",
		role: "AUTHOR",
		technologies: ["Blazor", ".NET", "JS"],
		sourceLink: "https://github.com/twcrews/sequence-decks",
		link: "https://decks.crews.dev",
		linkLabel: "OPEN APP",
		details:
			'This is a WebAssembly static files app meant to replace the old "SightWordCards" application. I created it to teach myself the Blazor framework.',
	},
	{
		name: "COS Dashboard",
		icon: "res/cos.svg",
		year: 2023,
		layers: ["web", "backend", "infra"],
		description: "Internal dashboard for Planning Center data",
		role: "AUTHOR",
		technologies: ["Angular", "TypeScript", "Azure Functions", ".NET", "C#"],
		sourceLink: "https://github.com/twcrews/cos-internal-dashboard",
		details:
			"I created this app for the staff at my church. It displays near-real-time data from Planning Center on a TV screen using a Raspberry Pi.",
	},
	{
		name: "Cipher",
		year: 2022,
		layers: ["backend", "tooling"],
		description: "Server-side rendering library for .NET",
		role: "AUTHOR",
		technologies: [".NET", "C#", "HTML", "CSS"],
		sourceLink: "https://github.com/twcrews/cipher",
		details:
			"Cipher was an SSR library for .NET, intended to allow users to write their entire web app in one language. It has been rendered obsolete with the arrival of hybrid SSR/interactive frameworks like Blazor.",
	},
	{
		name: "Elaborate",
		year: 2022,
		layers: ["tooling"],
		description: "String formatting library",
		role: "AUTHOR",
		technologies: ["TypeScript", "Node"],
		sourceLink: "https://github.com/twcrews/elaborate",
		details:
			"I created Elaborate to serve as a general-purpose string formatter, alleviating the need to add several dependencies for simple formatting cases.",
	},
	{
		name: "Rotato Chip",
		icon: "res/rotato-chip.png",
		year: 2021,
		layers: ["desktop", "tooling"],
		description: "Display rotation hotkeys for Windows 10",
		role: "AUTHOR",
		technologies: [".NET", "C#", "WPF"],
		sourceLink: "https://github.com/twcrews/RotatoChip",
		details:
			"Rotato Chip is a lightweight Windows app that reintroduces display rotation keyboard shortcuts, allowing users to customize key combinations.",
	},
	{
		name: "bricrews.com",
		year: 2021,
		layers: ["web"],
		description: "A portfolio website for my wife",
		role: "AUTHOR",
		technologies: ["React", "TypeScript"],
		link: "https://www.bricrews.com/",
		linkLabel: "VIEW SITE",
		sourceLink: "https://github.com/twcrews/BriCrews",
		details:
			"I created this website for my wife after she graduated from Pharmacy School. It was a portfolio site designed to accompany her résumé.",
	},
	{
		name: "bCards",
		icon: "res/b-cards.png",
		year: 2020,
		layers: ["web", "mobile"],
		description: "Offline-ready client-side flash cards PWA",
		role: "AUTHOR",
		technologies: ["React"],
		sourceLink: "https://github.com/twcrews/b-cards",
		details:
			"I created this app for my wife Bri to help her study for her pharmacy school exams. It was my first personal project that used React.",
	},
	{
		name: "PDF2IMG",
		year: 2020,
		layers: ["desktop", "tooling"],
		description: "Convert PDF files to one or more images",
		role: "AUTHOR",
		technologies: [".NET", "C#"],
		sourceLink: "https://github.com/twcrews/PDF2IMG",
		details:
			"This handy drag-and-drop desktop app was created for a friend who needed an easy way to convert multi-page PDF documents into images for use in slideshows.",
	},
	{
		name: "TgaSharp",
		year: 2020,
		layers: ["tooling"],
		description: "Library for reading and writing TGA files",
		role: "FORK AUTHOR",
		technologies: [".NET", "C#"],
		sourceLink: "https://github.com/twcrews/TgaSharp",
		details:
			"I ported this forked project into .NET Core for use in modern applications.",
	},
	{
		name: "SightWordCards",
		year: 2020,
		layers: ["desktop"],
		description: "Flash card WPF app",
		role: "AUTHOR",
		technologies: [".NET", "C#", "WPF"],
		sourceLink: "https://github.com/twcrews/SightWordCards",
		details:
			"I created this app for my mother, who was a school teacher at the time, to help children learn to read.",
	},
	{
		name: "NASA MAESTRO",
		icon: "res/nasa.svg",
		year: 2017,
		layers: ["backend", "data"],
		description: "Simulation, test & real-time ops environment",
		role: "DEV INTERN",
		technologies: ["Python"],
		link: "https://www.nasa.gov/wp-content/uploads/2022/07/flightsoftware.pdf",
		linkLabel: "VIEW PDF",
		details:
			"I contributed to this software as a summer intern. Specifically, I worked on translating analog launch data from real SLS instrument hardware into human-readable formats during simulation streaming and playback.",
	},
	{
		name: "NASA MAPSS",
		icon: "res/nasa.svg",
		year: 2016,
		layers: ["backend", "tooling"],
		description: "Modular Aero-Propulsion System Simulation",
		role: "TECHNICAL LEAD",
		technologies: ["Python", "C"],
		link: "https://software.nasa.gov/software/LEW-17674-1",
		linkLabel: "VIEW CATALOG",
		details:
			"I contributed to this software as a summer intern, porting the software from older C-based languages into Python using the Cython compiler.",
	},
];

const links: SocialLink[] = [
	{ name: "GitHub", url: "https://github.com/twcrews", icon: faGithub },
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/crewst/",
		icon: faLinkedin,
	},
];

export const data = {
	name: "Tommy Crews",
	location: "Grove, OK",
	image: "res/family.jpeg",
	imageCaption: "The Crews family",
	resume: "res/Resume.ThomasCrews.pdf",
	tagline:
		"I've built the app, the API, the database, and the pipeline that deploys them all—usually on the same project. Sixteen years of developing software end to end, from NASA launch simulations to retail mobile apps.",
	footerHeadline: "Thanks for visiting.",
	layers,
	employers,
	projects,
	links,
	footer: { source: "https://github.com/twcrews/Website" },
};
