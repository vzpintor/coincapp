import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SearchIcon(props: SvgProps) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill={props.color || '#24214e'}
      {...props}>
      <Path d="M9.516 14.016q1.875 0 3.188-1.313t1.313-3.188-1.313-3.188-3.188-1.313-3.188 1.313-1.313 3.188 1.313 3.188 3.188 1.313zm6 0l4.969 4.969-1.5 1.5-4.969-4.969v-.797l-.281-.281q-1.781 1.547-4.219 1.547-2.719 0-4.617-1.875T3.001 9.516t1.898-4.617 4.617-1.898 4.594 1.898 1.875 4.617q0 .984-.469 2.227t-1.078 1.992l.281.281h.797z" />
    </Svg>
  );
}

export default React.memo(SearchIcon);
