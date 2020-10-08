import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    // @ts-ignore
    <Svg width={24} height={21} viewBox="0 0 16 14" fill="none" {...props}>
      <Path
        d="M0 1a1 1 0 011-1h14a1 1 0 110 2H1a1 1 0 01-1-1zM0 13a1 1 0 011-1h14a1 1 0 010 2H1a1 1 0 01-1-1zM7 6a1 1 0 000 2h8a1 1 0 100-2H7z"
        fill="#fff"
      />
    </Svg>
  );
}

export default MenuIcon;
