/**
 * Renders a SVG component with a pattern of colored dots.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.classNames - Additional CSS classes for the SVG element.
 * @param {number} props.width - The width of the SVG element.
 * @param {number} props.height - The height of the SVG element.
 * @param {string} props.graphicColor - The CSS class for the color of the dots.
 * @param {string} props.id - The unique identifier for the pattern.
 * @returns {JSX.Element} - The rendered SVG component.
 */

import React from 'react';

const DotGraphicSvgReusable = ({
  classNames, width, height, graphicColor, id,
}) => (
  <svg
    className={classNames}
    width={width}
    height={height}
    fill="none"
    viewBox={`0 0 ${width} ${height}`}
    aria-hidden="true"
  >
    <defs>
      <pattern
        id={id}
        x={0}
        y={0}
        width={20}
        height={20}
        patternUnits="userSpaceOnUse"
      >
        <rect x={0} y={0} width={4} height={4} className={graphicColor} fill="currentColor" />
      </pattern>
    </defs>
    <rect width={width} height={height} fill={`url(#${id})`} />
  </svg>
);
export default DotGraphicSvgReusable;
