import { useEffect, useRef, type RefObject } from 'react';

export function useScrollReveal<T extends HTMLElement>(): RefObject<T | null> {
	const ref = useRef<T>(null);

	useEffect(() => {
		const container = ref.current;
		if (!container) return;

		const elements = container.querySelectorAll<HTMLElement>('[data-reveal]');

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('revealed');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.2, rootMargin: '0px 0px -40px 0px' }
		);

		elements.forEach((el) => observer.observe(el));

		return () => observer.disconnect();
	}, []);

	return ref;
}
