import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    // @ts-ignore
    <Svg width={17} height={18} viewBox="0 0 17 18" fill="none" {...props}>
      <G
        clipPath="url(#prefix__clip0)"
        // @ts-ignore
        filter="url(#prefix__filter0_d)"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M6.333 11.333h.007M9.667 11.333h.006M6.333 14a2.333 2.333 0 003.334 0" />
        <Path d="M4.667 7.333h.666V6h5.334v1.333h.666a2 2 0 012 2v6a2 2 0 01-2 2V18H4.667v-.667a2 2 0 01-2-2v-6a2 2 0 012-2" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h16v16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
