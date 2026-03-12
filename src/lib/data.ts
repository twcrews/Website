import {
	faAndroid,
	faAngular,
	faApple,
	faDocker,
	faGithub,
	faLinkedin,
	faMicrosoft,
	faPhp,
	faPython,
	faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
	faCloud,
	faDatabase,
	faPalette,
	faScroll,
} from "@fortawesome/free-solid-svg-icons";

export const data = {
	name: "Tommy Crews",
	image: "/family.png",
	tagline:
		"I'm a software engineer who's passionate about design and user experience.",
	technologies: [
		{
			name: ".NET",
			icon: faMicrosoft,
			color: "#b283ff",
			startYear: 2010,
			experienceAreas: [
				"ASP.NET Core",
				"Blazor WebAssembly",
				".NET MAUI",
				".NET Framework",
				"WPF",
				"VB.NET",
			],
		},
		{
			name: "Scripting",
			icon: faScroll,
			color: "#67d13a",
			startYear: 2010,
			experienceAreas: ["PowerShell", "sh/bash/zsh", "VBScript", "DOS/batch"],
		},
		{
			name: "Python",
			icon: faPython,
			color: "#4facf8",
			startYear: 2016,
			experienceAreas: ["NumPy", "Cython"],
		},
		{
			name: "React",
			icon: faReact,
			color: "#61DAFB",
			startYear: 2019,
			experienceAreas: ["Router", "Context", "TypeScript", "Material", "Chakra", "Redux"],
		},
		{
			name: "Databases",
			icon: faDatabase,
			color: "#f6ff46",
			startYear: 2019,
			experienceAreas: ["SQL Server", "Cosmos DB", "MySQL", "SQLite", "FoxPro"],
		},
		{
			name: "PHP",
			icon: faPhp,
			color: "#bcb6ff",
			startYear: 2019,
			experienceAreas: ["Composer", "WordPress", "Session Management"],
		},
		{
			name: "Containers",
			icon: faDocker,
			color: "#35a7ff",
			startYear: 2019,
			experienceAreas: ["Docker", "Kubernetes", "Helm", "Load balancing"],
		},
		{
			name: "Design",
			icon: faPalette,
			color: "#ff96ec",
			startYear: 2019,
			experienceAreas: ["Figma", "XD", "Illustrator", "Photoshop", "GIMP", "Inkscape"]
		},
		{
			name: "Angular",
			icon: faAngular,
			color: "#ff567a",
			startYear: 2023,
			experienceAreas: ["AngularJS interop", "Signals", "RxJS", "Router"],
		},
		{
			name: "iOS",
			icon: faApple,
			color: "#c0c0c0",
			startYear: 2023,
			experienceAreas: [
				"Swift",
				"SwiftUI",
				"Storyboards",
				"Cocoapods",
				"RxSwift",
			],
		},
		{
			name: "Android",
			icon: faAndroid,
			color: "#3DDC84",
			startYear: 2023,
			experienceAreas: [
				"Kotlin",
				"Compose",
				"XML/Fragments",
				"ObjectBox",
				"RxKotlin",
			],
		},
		{
			name: "Cloud",
			icon: faCloud,
			color: "#ffc233",
			startYear: 2023,
			experienceAreas: ["Azure", "Azure DevOps", "AWS", "Modal", "Cloudflare"],
		},
	],
	projects: [
		{
			name: "NASA MAPSS",
			description: "Modular Aero-Propulsion System Simulation",
			year: 2016,
			technologies: ["Python", "C"],
			link: "https://software.nasa.gov/software/LEW-17674-1",
			details:
				"I contributed to this software as a summer intern, porting the software from older C-based languages into Python using the Cython compiler.",
		},
		{
			name: "NASA MAESTRO",
			description:
				"Managed Automation Environment for Simulation, Test, and Real-Time Operations",
			year: 2017,
			technologies: ["Python"],
			link: "https://www.nasa.gov/wp-content/uploads/2022/07/flightsoftware.pdf",
			details:
				"I contributed to this software as a summer intern. Specifically, I worked on translating analog launch data from real SLS instrument hardware into human-readable formats during simulation streaming and playback.",
		},
		{
			name: "PDF2IMG",
			description: "Convert PDF files to one or more images",
			year: 2020,
			technologies: [".NET", "C#"],
			link: "https://github.com/twcrews/PDF2IMG",
			details:
				"This handy drag-and-drop desktop app was created for a friend who needed an easy way to convert multi-page PDF documents into images for use in slideshows.",
		},
		{
			name: "bCards",
			description: "Offline-ready client-side flash cards PWA",
			year: 2020,
			technologies: ["React"],
			link: "https://github.com/twcrews/b-cards",
			details:
				"I created this app for my wife Bri to help her study for her pharmacy school exams. It was my first personal project that used React.",
		},
		{
			name: "TgaSharp",
			description: "Library for reading and writing TGA files",
			year: 2020,
			technologies: [".NET", "C#"],
			link: "https://github.com/twcrews/TgaSharp",
			details:
				"I ported this forked project into .NET Core for use in modern applications.",
		},
		{
			name: "SightWordCards",
			description: "Flash card WPF app",
			year: 2020,
			technologies: [".NET", "C#", "WPF"],
			link: "https://github.com/twcrews/SightWordCards",
			details:
				"I created this app for my mother, who was a school teacher at the time, to help children learn to read.",
		},
		{
			name: "Paycom AIMS",
			description: "Application Information Management System",
			year: 2021,
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
			details:
				"I was the lead developer for the internal AIMS tool at Paycom. This web application helped manage data and infrastructure at the company.",
		},
		{
			name: "Rotato Chip",
			description: "Display rotation hotkeys for Windows 10",
			year: 2021,
			technologies: [".NET", "C#", "WPF"],
			link: "https://github.com/twcrews/RotatoChip",
			details:
				"Rotato Chip is a lightweight Windows app that reintroduces display rotation keyboard shortcuts, allowing users to customize key combinations.",
		},
		{
			name: "bricrews.com",
			description: "A website for my wife",
			year: 2021,
			technologies: ["React", "TypeScript"],
			link: "https://www.bricrews.com/",
			details:
				"I created this website for my wife after she graduated from Pharmacy School. It was a portfolio site designed to accompany her résumé.",
		},
		{
			name: "Elaborate",
			description: "String formatting library",
			year: 2022,
			technologies: ["TypeScript", "Node"],
			link: "https://www.npmjs.com/package/elaborate",
			details:
				"I created Elaborate to serve as a general-purpose string formatter, alleviating the need to add several dependencies for simple formatting cases.",
		},
		{
			name: "Cipher",
			description: "Easy server-side rendering library for .NET",
			year: 2022,
			technologies: [".NET", "C#", "HTML", "CSS"],
			link: "https://github.com/twcrews/cipher",
			details:
				"Cipher was an SSR library for .NET, intended to allow users to write their entire web app in one language. It has been rendered obsolete with the arrival of hybrid SSR/interactive frameworks like Blazor.",
		},
		{
			name: "COS Dashboard",
			description: "Internal dashboard for Planning Center data",
			year: 2023,
			technologies: ["Angular", "TypeScript", "Azure Functions", ".NET", "C#"],
			link: "https://github.com/twcrews/cos-internal-dashboard",
			details:
				"I created this app for the staff at my church. It displays near-real-time data from Planning Center on a TV screen using a Raspberry Pi.",
		},
		{
			name: "Planning Center API",
			description: ".NET Client library for Planning Center",
			year: 2024,
			technologies: [".NET", "C#"],
			link: "https://github.com/twcrews/planningcenter-api",
			details:
				"This is a statically-typed and fluent API client library for all Planning Center products. I created this library to accelerate future Planning Center application development.",
		},
	],
	links: [
		{
			name: "GitHub",
			url: "https://github.com/twcrews",
			icon: faGithub,
		},
		{
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/crewst/",
			icon: faLinkedin,
		},
	],
	footer: {
		copyright: "&copy; 2025 Tommy Crews. Built with Reat and Vite.",
		source: "https://github.com/twcrews/Website",
	},
};
