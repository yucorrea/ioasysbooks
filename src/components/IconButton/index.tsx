import React, { memo } from 'react';
import { TouchableOpacityProps } from 'react-native';
import styled, { useTheme } from 'styled-components/native';

import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends TouchableOpacityProps {
  onPress(): void;
  icon: string;
}

function IconButtonComponent({ onPress, icon, ...rest }: Props) {

  const { colors } = useTheme();

  return (
    <StyledContainer {...rest} onPress={onPress}>
      <Icon name={icon} size={16} color={colors.title} />
    </StyledContainer>
  );
}

const StyledContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
`;

export const IconButton = memo(IconButtonComponent);
