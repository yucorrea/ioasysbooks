import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 85px;
  height: 36px;
  background: ${({ theme }) => theme.colors.background};

  border-radius: 44px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;
