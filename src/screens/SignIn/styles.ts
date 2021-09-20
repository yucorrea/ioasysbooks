import styled from 'styled-components/native';

import background from '../../assets/background.png';

export const Container = styled.ImageBackground.attrs({
  source: background,
})`
  width: 100%;
  height: 100%;

  justify-content: center;
  padding: 16px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 48px;
`;

export const Logo = styled.Image``;

export const Title = styled.Text`
  font-size: 28px;
  margin-left: 16px;
  font-family: ${({ theme }) => theme.fonts.light};
  color: ${({ theme }) => theme.colors.background};
`;

export const Form = styled.View`
  height: 224px;
`;
