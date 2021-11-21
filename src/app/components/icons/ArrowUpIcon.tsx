import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function ArrowUpIcon(props: SvgProps) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill={props.color || '#24214e'}
      {...props}>
      <Path d="M6.984 14.016L12 9l5.016 5.016H6.985z" />
    </Svg>
  );
}

export default React.memo(ArrowUpIcon);
