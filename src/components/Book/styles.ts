import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 160px;
  background: ${({ theme }) => theme.colors.background};

  flex-direction: row;
  padding: 19px 16px;
  margin: 16px 0px;

  border-radius: 4px;
`;

export const Image = styled.Image`
  width: 81px;
  height: 112px;
  margin-right: 16px;
`;

export const Wrapper = styled.View``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.primary_light};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Footer = styled.View`
  margin-top: 25px;
`;

export const Detail = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
