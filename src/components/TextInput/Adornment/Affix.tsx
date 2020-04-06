import React from 'react';
import color from 'color';
import {
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  LayoutChangeEvent,
  Animated,
} from 'react-native';

import { withTheme } from '../../../core/theming';
import { Theme } from '../../../types';

const AFFIX_OFFSET = 12;

type Props = {
  text: string;
  onLayout?: (event: LayoutChangeEvent) => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  visible?: Animated.Value;
  /**
   * @optional
   */
  theme: Theme;
};

export function renderAffix({
  affix,
  side,
  textStyle,
  affixTopPosition,
  onLayout,
  visible,
}: {
  affix: React.ReactNode;
  side: 'left' | 'right';
  textStyle: StyleProp<TextStyle>;
  affixTopPosition: number | null;
  onLayout?: (event: LayoutChangeEvent) => void;
  visible?: Animated.Value;
}): React.ReactNode {
  return React.cloneElement(
    //@ts-ignore
    affix,
    {
      style: {
        top: affixTopPosition,
        [side]: AFFIX_OFFSET,
      },
      textStyle,
      onLayout,
      visible,
    }
  );
}

const TextInputAffix = ({
  text,
  style,
  textStyle,
  onLayout,
  theme,
  visible,
}: Props) => {
  const textColor = color(theme.colors.text)
    .alpha(theme.dark ? 0.7 : 0.54)
    .rgb()
    .string();

  return (
    <Animated.View
      style={[
        styles.container,
        style,
        {
          opacity:
            visible?.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }) || 1,
        },
      ]}
      onLayout={onLayout}
    >
      <Text style={[{ color: textColor }, textStyle]}>{text}</Text>
    </Animated.View>
  );
};
TextInputAffix.displayName = 'TextInput.Affix';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default withTheme(TextInputAffix);

// @component-docs ignore-next-line
export { TextInputAffix };
