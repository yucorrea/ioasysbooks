import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 44px 40px 12px 16px;
  background: #f6f5ef;
`;

export const Book = styled.Image`
  height: 240px;
  height: 351px;
  margin-top: 12px;
  margin-bottom: 24px; ;
`;

export const Wrapper = styled.View`
  padding: 12px 40px 40px 40px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
`;

export const AuthorsContainer = styled.View`
  flex-direction: row;
`;

export const Author = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary_light};
`;

export const InformationContainer = styled.View`
  margin-top: 32px;
`;

export const InformationTitle = styled.Text`
  font-size: 16px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 14px;
`;

export const Detail = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 4px 0px;
`;

export const Left = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
`;

export const Right = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;

export const ReviewContainer = styled.View`
  width: 100%;
  margin-top: 16px;
`;

export const AbsoluteWrapper = styled.View`
  width: 95%;
  flex-direction: row;
`;

export const Description = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  align-items: baseline;
  text-align: justify;
`;

export const Mark = styled.Image`
  margin-bottom: 4px;
`;
