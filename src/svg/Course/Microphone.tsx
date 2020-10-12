import * as React from 'react';
import Svg, { G, Path, Defs } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    // @ts-ignore
    <Svg width={16} height={17} viewBox="0 0 16 17" fill="none" {...props}>
      <G
        // @ts-ignore
        filter="url(#prefix__filter0_d)"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M10 3.333a2 2 0 10-4 0v3.334a2 2 0 104 0V3.333zM3.333 6.667a4.667 4.667 0 109.334 0M5.333 14h5.334M8 11.333V14" />
      </G>
      <Defs />
    </Svg>
  );
}

export default SvgComponent;
