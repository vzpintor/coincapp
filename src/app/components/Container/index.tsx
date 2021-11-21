import * as React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ContainerProps} from '@components/Container/props';
import {isNonScrolling, offsets, presets} from '@components/Container/preset';

const isIos = Platform.OS === 'ios';

function ContainerWithoutScrolling(props: ContainerProps) {
  const insets = useSafeAreaInsets();
  const preset = presets.fixed;
  const style = props.style || {};
  const backgroundStyle = props.backgroundColor
    ? {backgroundColor: props.backgroundColor}
    : {backgroundColor: 'transparent'};
  const insetStyle = {paddingTop: props.unsafe ? 0 : insets.top};

  return (
    <KeyboardAvoidingView
      style={[preset.outer, backgroundStyle]}
      behavior={isIos ? 'padding' : undefined}
      keyboardVerticalOffset={offsets[props.keyboardOffset || 'none']}>
      <StatusBar
        barStyle={props.statusBar || 'light-content'}
        backgroundColor={'white'}
      />
      <View style={[preset.inner, style, insetStyle]}>{props.children}</View>
    </KeyboardAvoidingView>
  );
}

function ContainerWithScrolling(props: ContainerProps) {
  const insets = useSafeAreaInsets();
  const preset = presets.scroll;
  const style = props.style || {};
  const backgroundStyle = props.backgroundColor
    ? {backgroundColor: props.backgroundColor}
    : {backgroundColor: 'transparent'};
  const insetStyle = {paddingTop: props.unsafe ? 0 : insets.top};

  return (
    <KeyboardAvoidingView
      style={[preset.outer, backgroundStyle]}
      behavior={isIos ? 'padding' : undefined}
      keyboardVerticalOffset={offsets[props.keyboardOffset || 'none']}>
      <StatusBar
        barStyle={props.statusBar || 'light-content'}
        backgroundColor={'white'}
      />
      <View style={[preset.outer, backgroundStyle, insetStyle]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={[preset.outer, backgroundStyle]}
          contentContainerStyle={[preset.inner, style]}
          keyboardShouldPersistTaps={
            props.keyboardShouldPersistTaps || 'handled'
          }>
          {props.children}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

export function Container(props: ContainerProps) {
  if (isNonScrolling(props.preset)) {
    return <ContainerWithoutScrolling {...props} />;
  } else {
    return <ContainerWithScrolling {...props} />;
  }
}
