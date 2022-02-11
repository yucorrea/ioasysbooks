import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Container, Wrapper, Logo, Title, Form } from './styles';

import logo from './../../assets/images/Logo.png';

import { Input } from '../../components/Input';
import { LOGIN } from '../../store/slices/userSlice';

export function SignIn() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = useCallback(() => {
    dispatch(LOGIN({email, password}));
  }, [email, password, dispatch]);

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
          value={email}
          onChangeText={e => setEmail(e)}
        />
        <Input
          label="Senha"
          secureTextEntry
          placeholder="********"
          enableButton
          value={password}
          onChangeText={e => setPassword(e)}
          onPress={handleLogin}
        />
      </Form>
    </Container>
  );
}
