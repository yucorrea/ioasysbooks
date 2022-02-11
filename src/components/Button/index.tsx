import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

interface Props extends TouchableOpacityProps {
  title?: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <StyledContainer {...rest}>
      <StyledButtonText>{title}</StyledButtonText>
    </StyledContainer>
  );
}

const StyledContainer = styled.TouchableOpacity`
  width: 85px;
  height: 36px;
  background: ${({ theme }) => theme.colors.background};

  border-radius: 44px;
  justify-content: center;
  align-items: center;
`;

const StyledButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;
