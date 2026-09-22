import { useEffect } from "react";

/**
 * Adds `.revealed` to every `[data-reveal]` element as it scrolls into view.
 * Re-runs on each render so elements added by filtering are picked up.
 */
export function useScrollReveal() {
	useEffect(() => {
		if (!("IntersectionObserver" in window)) {
			document
				.querySelectorAll("[data-reveal]")
				.forEach((el) => el.classList.add("revealed"));
			return;
		}

		const io = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue;
					entry.target.classList.add("revealed");
					io.unobserve(entry.target);
				}
			},
			{ rootMargin: "-6% 0px -8% 0px" },
		);

		const observe = () =>
			document
				.querySelectorAll("[data-reveal]:not(.revealed)")
				.forEach((el) => io.observe(el));

		observe();
		const mo = new MutationObserver(observe);
		mo.observe(document.body, { childList: true, subtree: true });

		return () => {
			mo.disconnect();
			io.disconnect();
		};
	}, []);
}
