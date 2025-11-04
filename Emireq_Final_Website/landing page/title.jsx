// import React from "react";
// import "./title.css"; // Ensure the filename case matches exactly

// /**
//  * Props:
//  * - title: string (defaults to provided title)
//  * - subtitle: string (optional second line text)
//  * - className: extra wrapper classes
//  */
// export default function Title({
//   title = "Tokenize real-world opportunities",
//   subtitle = "Emireq empowers entrepreneurs to tokenize equity, revenue, and project shares — connecting them with investors across the globe.",
//   className = "",
// }) {
//   return (
//     <div className={`hero-wrapper ${className}`}>
//       <h1 className="hero-title">{title}</h1>
//       <span></span>
//       <p className="hero-subtitle">{subtitle}</p>
//     </div>
//   );
// }
import React from "react";
import "./title.css";

/**
 * Props:
 * - title: string
 * - subtitle: string
 * - className: string
 * - designWidth: number (optional) — the intended desktop width of the title block in px (default 958)
 * - artboardWidth: number (optional) — your Figma/artboard width to compute proportional offsets if needed (default 1440)
 *
 * Note: This component keeps the same visual placement (centered) but scales fluidly.
 */
export default function Title({
  title = "Tokenize real-world opportunities",
  subtitle = "Emireq empowers entrepreneurs to tokenize equity, revenue, and project shares — connecting them with investors across the globe.",
  className = "",
  designWidth = 958,
  artboardWidth = 1440,
}) {
  // Build a CSS-safe clamp string for the container width (keeps desktop fidelity but scales down)
  const containerWidth = `clamp(320px, calc((${designWidth} / ${artboardWidth}) * 100vw), ${designWidth}px)`;

  return (
    <div className={`hero-wrapper ${className}`} style={{ width: containerWidth }}>
      <h1 className="hero-title">{title}</h1>
      <span aria-hidden="true" className="hero-decor" />
      <p className="hero-subtitle">{subtitle}</p>
    </div>
  );
}
