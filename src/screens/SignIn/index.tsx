import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';

import background from '../../assets/background.png';
import logo from './../../assets/Logo.png';

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
    <StyledContainer>
      <StyledForm>
        <StyledWrapper>
          <StyledLogo source={logo} />
          <StyledTitle>Books</StyledTitle>
        </StyledWrapper>

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
      </StyledForm>
    </StyledContainer>
  );
}

const StyledContainer = styled.ImageBackground.attrs({
  source: background,
})`
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 16px;
`;

const StyledWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 48px;
`;

const StyledLogo = styled.Image``;

const StyledTitle = styled.Text`
  margin-left: 16px;
  font-size: 28px;
  font-family: ${({ theme }) => theme.fonts.light};
  color: ${({ theme }) => theme.colors.background};
`;

const StyledForm = styled.View`
  height: 224px;
`;
