import React, { memo } from 'react';
import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

interface Props extends TouchableOpacityProps {
  title?: string;
}

function ButtonComponent({ title, ...rest }: Props) {
  return (
    <StyledContainer {...rest}>
      <StyledButtonText>{title}</StyledButtonText>
    </StyledContainer>
  );
}

const StyledContainer = styled.TouchableOpacity`
  width: 85px;
  height: 36px;
  background: ${({ theme }) => theme.colors.shape};

  border-radius: 44px;
  justify-content: center;
  align-items: center;
`;

const StyledButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Button = memo(ButtonComponent);
