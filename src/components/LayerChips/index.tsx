import type { Layer, LayerKey } from "../../data";

interface LayerChipsProps {
	keys: LayerKey[];
	layers: Layer[];
	/** "short" renders the 2-3 char code used in the dense index. */
	variant?: "full" | "short";
	className?: string;
}

export function LayerChips({
	keys,
	layers,
	variant = "full",
	className,
}: LayerChipsProps) {
	return (
		<>
			{keys.map((key) => {
				const layer = layers.find((l) => l.key === key);
				if (!layer) return null;
				return (
					<span
						key={key}
						className={`chip-layer${className ? ` ${className}` : ""}`}
						style={{ "--layer-color": layer.color } as React.CSSProperties}
						title={variant === "short" ? layer.name : undefined}
					>
						{variant === "short" ? layer.short : layer.name.toUpperCase()}
					</span>
				);
			})}
		</>
	);
}
