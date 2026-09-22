/** Shared horizontal time axis for the stack and career timelines. */
export const AXIS_START = 2010;
export const AXIS_END = 2027.2;

/** Decimal year -> percentage position along the axis. */
export function axisPct(year: number): number {
	return ((year - AXIS_START) / (AXIS_END - AXIS_START)) * 100;
}

/** Decimal year for "now", used as the end cap for current roles. */
export function nowYear(): number {
	const d = new Date();
	return d.getFullYear() + d.getMonth() / 12;
}

/** Hex color -> rgba() string at the given alpha. */
export function alpha(hex: string, a: number): string {
	const n = parseInt(hex.slice(1), 16);
	return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
}
