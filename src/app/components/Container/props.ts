import {ReactNode} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {KeyboardOffsets, ScreenPresets} from '@components/Container/preset';

export interface ContainerProps {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  preset?: ScreenPresets;
  backgroundColor?: string;
  statusBar?: 'light-content' | 'dark-content';
  unsafe?: boolean;
  keyboardOffset?: KeyboardOffsets;
  keyboardShouldPersistTaps?: 'handled' | 'always' | 'never';
}
