import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { RootState } from '../../store/store';

import background from './../../assets/images/background.png';
import logo from './../../assets/images/Logo.png';

import  Input  from '@components/Input';
import { LOGIN } from '../../store/slices/userSlice';

const schema = yup.object({
  email: yup.string().email('Formato de e-mail inválido')
    .required('E-mail é obrigatório'),
  password: yup.string().required('Senha é obrigatória')
});

type FormData = {
  email: string;
  password: string;
}

const SignIn  = () => {
  const { loading } = useSelector(( state : RootState) => state.user);

  const dispatch = useDispatch();
  const { control, handleSubmit, /* formState: { errors } */ } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const handleLogin = useCallback(({email, password} : FormData) => {
    dispatch(LOGIN({email, password}));
  }, [dispatch]);

  return (
    <StyledContainer>
      <StyledForm>
        <StyledWrapper>
          <StyledLogo source={logo} />
          <StyledTitle>Books</StyledTitle>
        </StyledWrapper>

        <Controller
          control={control}
          name="email"
          render={({field: {onChange, value}}) => (
            <Input
              label="Email"
              value={value}
              // error={errors?.email?.message}
              onChangeText={onChange}
              placeholder="Seu e-mail"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({field: {onChange, value}}) => (
            <Input
              label="Senha"
              value={value}
               // error={errors?.password?.message}
              onChangeText={onChange}
              onPress={handleSubmit(handleLogin)}
              placeholder="********"
              secureTextEntry
              enableButton
              loading={loading}
            />
          )}
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
  color: ${({ theme }) => theme.colors.shape};
`;

const StyledForm = styled.View`
  height: 224px;
`;

export default SignIn;
