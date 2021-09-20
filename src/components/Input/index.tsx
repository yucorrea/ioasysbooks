import React from 'react';

import { GestureResponderEvent, TextInputProps } from 'react-native';

import { Container, Wrapper, Label, TextInput, ButtonInput } from './styles';

interface Props extends TextInputProps {
  label: string;
  enableButton?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}

export function Input({ label, enableButton, onPress, ...rest }: Props) {
  return (
    <Container>
      <Wrapper>
        <Label>{label}</Label>
        <TextInput underlineColorAndroid="transparent" {...rest} />
      </Wrapper>

      {enableButton && <ButtonInput title="Entrar" onPress={onPress} />}
    </Container>
  );
}
