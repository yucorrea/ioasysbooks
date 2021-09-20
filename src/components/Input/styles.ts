import styled from 'styled-components/native';
import { Button } from '../Button';

export const Container = styled.View`
  width: 100%;
  background: rgba(0, 0, 0, 0.32);
  border-radius: 4px;
  padding: 8px 16px 8px 13px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
`;

export const Wrapper = styled.View`
  flex: 1;
`;

export const Label = styled.Text`
  width: 100%;
  color: ${({ theme }) => theme.colors.text_light};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const TextInput = styled.TextInput`
  width: 100%;
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.background};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const ButtonInput = styled(Button)`
  width: 85px;
`;
