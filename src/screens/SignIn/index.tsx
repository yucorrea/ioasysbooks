import React from 'react';

import { Container, Wrapper, Logo, Title, Form } from './styles';

import logo from './../../assets/Logo.png';

import { Input } from '../../components/Input';

export function SignIn() {
  return (
    <Container>
      <Form>
        <Wrapper>
          <Logo source={logo} />
          <Title>Books</Title>
        </Wrapper>

        <Input
          label="Email"
          placeholder="Seu e-mail"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
        />
        <Input
          label="Senha"
          secureTextEntry
          placeholder="********"
          enableButton
          onPress={() => console.log('Entrou ...')}
        />
      </Form>
    </Container>
  );
}
