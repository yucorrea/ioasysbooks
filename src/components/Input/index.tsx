import React from 'react';
import { GestureResponderEvent, TextInputProps } from 'react-native';
import styled from 'styled-components/native';
import { Button } from '../Button';

interface Props extends TextInputProps {
  label: string;
  enableButton?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}

export function Input({ label, enableButton, onPress, ...rest }: Props) {
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledLabel>{label}</StyledLabel>
        <StyledTextInput underlineColorAndroid="transparent" {...rest} />
      </StyledWrapper>

      {enableButton && <StyledButtonInput title="Entrar" onPress={onPress} />}
    </StyledContainer>
  );
}


export const StyledContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
  padding: 8px 16px 8px 13px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.32);
`;

export const StyledWrapper = styled.View`
  flex: 1;
`;

export const StyledLabel = styled.Text`
  width: 100%;
  color: ${({ theme }) => theme.colors.text_light};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const StyledTextInput = styled.TextInput`
  width: 100%;
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.background};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const StyledButtonInput = styled(Button)`
  width: 85px;
`;
