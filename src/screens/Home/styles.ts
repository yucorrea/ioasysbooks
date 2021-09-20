import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  padding: 16px;
  background: #f6f5ef;
`;

export const Header = styled.View`
  width: 100%;
  margin-top: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.Image``;

export const Title = styled.Text`
  font-size: 28px;
  margin-left: 16px;
  font-family: ${({ theme }) => theme.fonts.light};
  color: ${({ theme }) => theme.colors.title};
`;

export const LogoutButton = styled.TouchableOpacity``;
