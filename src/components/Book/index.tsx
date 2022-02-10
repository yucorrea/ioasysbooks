import React from 'react';
import { useNavigation } from '@react-navigation/core';
import styled from 'styled-components/native';
import { TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps {
  data: any;
}

export function Book({ data, ...rest }: Props) {
  const { navigate } = useNavigation();

  return (
    <StyledContainer {...rest} onPress={() => navigate('BookDetail', { book: data })}>
      <StyledImage source={{ uri: data.imageUrl }} />
      <StyledWrapper>
        <StyledTitle>{data.title}</StyledTitle>
        <StyledSubTitle>{data.authors[0]}</StyledSubTitle>

        <StyledFooter>
          <StyledDetail>{data.pageCount} páginas</StyledDetail>
          <StyledDetail>Editora {data.publisher}</StyledDetail>
          <StyledDetail>Publicado em {data.published}</StyledDetail>
        </StyledFooter>
      </StyledWrapper>
    </StyledContainer>
  );
}

export const StyledContainer = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  height: 160px;
  margin: 16px 0px;
  padding: 19px 16px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.background};
`;

export const StyledImage = styled.Image`
  width: 81px;
  height: 112px;
  margin-right: 16px;
`;

export const StyledWrapper = styled.View``;

export const StyledTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const StyledSubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.primary_light};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const StyledFooter = styled.View`
  margin-top: 25px;
`;

export const StyledDetail = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
