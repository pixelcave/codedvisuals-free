import { useId } from "react";
import type { SVGAttributes } from "react";

import { cn } from "@/lib/utils";

interface Edge {
  d: string;
  hidden?: boolean;
}

interface Face {
  d: string;
  opacity: number;
}

// The wireframe cube: lid and right face are solid, the left side is still line
// work. Hidden edges render first for correct occlusion. True isometric cube
// spanning 1..47 so the 2px stroke fills the 48 viewBox edge to edge, centered
// on (24, 24).
const EDGES: Edge[] = [
  { d: "M24 1 L24 24", hidden: true },
  { d: "M24 24 L1 35.5", hidden: true },
  { d: "M24 24 L47 35.5", hidden: true },
  { d: "M24 1 L47 12.5 L24 24 L1 12.5 Z" },
  { d: "M1 12.5 L1 35.5" },
  { d: "M47 12.5 L47 35.5" },
  { d: "M24 24 L24 47" },
  { d: "M1 35.5 L24 47 L47 35.5" },
];

const FACES: Face[] = [
  { d: "M24 1 L47 12.5 L24 24 L1 12.5 Z", opacity: 0.75 },
  { d: "M24 24 L47 12.5 L47 35.5 L24 47 Z", opacity: 0.45 },
];

export type LogoMarkProps = SVGAttributes<SVGSVGElement>;

export default function LogoMark({ className, ...props }: LogoMarkProps) {
  const uid = useId();
  const gradId = `${uid}-cube`;

  const paint = `url(#${gradId})`;

  const renderEdge = (edge: Edge) => (
    <path
      key={edge.d}
      d={edge.d}
      stroke={paint}
      strokeOpacity={edge.hidden ? 0.25 : 1}
    />
  );

  return (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-foreground", className)}
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable={false}
      {...props}
    >
      <defs>
        <linearGradient
          id={gradId}
          gradientUnits="userSpaceOnUse"
          x1="1"
          y1="1"
          x2="47"
          y2="47"
        >
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>

      <g>
        {EDGES.filter((edge) => edge.hidden).map(renderEdge)}
        {FACES.map((face) => (
          <path
            key={face.d}
            d={face.d}
            fill={paint}
            fillOpacity={face.opacity}
            stroke="none"
          />
        ))}
        {EDGES.filter((edge) => !edge.hidden).map(renderEdge)}
      </g>
    </svg>
  );
}
