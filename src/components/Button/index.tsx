import React, { useEffect } from 'react';
import { TouchableOpacityProps, ActivityIndicator } from 'react-native';
import styled, { useTheme } from 'styled-components/native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
interface Props extends TouchableOpacityProps {
  title?: string;
  loading: boolean;
}

export function Button({ title, loading = true, ...rest }: Props) {
  const { colors } = useTheme();

  const width = useSharedValue(86);
  const height = useSharedValue(36);
  const textOpacity = useSharedValue(1);

  useEffect(() => {
    if (loading) {
      width.value = withTiming(36, {duration: 200 });
      textOpacity.value = withTiming(0, { duration: 200 });
    }else {
      width.value = withTiming(86, { duration: 200 });
      textOpacity.value = withTiming(1, { duration: 200 });
    }
  }, [loading]);

  const buttonStyles = useAnimatedStyle(() => {
    return {
      width: width.value,
      height: height.value,
    };
  });

  const textStyles = useAnimatedStyle(() => {
    return { opacity: textOpacity.value };
  });

  return (
    <Animated.View style={buttonStyles}>
     <StyledContainer style={buttonStyles} disabled={loading} {...rest}>
        {loading ? (
          <ActivityIndicator  size={24} color={colors.primary}/>
        ) : (
          <StyledButtonText style={textStyles}>{title}</StyledButtonText>
        )}
      </StyledContainer>
    </Animated.View>
  );
}

const StyledContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-radius: 44px;
  background: ${({ theme }) => theme.colors.shape};
`;

const StyledButtonText = styled(Animated.Text)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;
