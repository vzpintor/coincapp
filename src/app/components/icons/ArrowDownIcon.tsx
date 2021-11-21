import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function ArrowDownIcon(props: SvgProps) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill={props.color || '#24214e'}
      {...props}>
      <Path d="M6.984 9.984h10.031L11.999 15z" />
    </Svg>
  );
}

export default React.memo(ArrowDownIcon);
