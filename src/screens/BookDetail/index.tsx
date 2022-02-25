import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import type { RouteProp } from '@react-navigation/native';
import styled from 'styled-components/native';

import { AppStackParamList } from '@routes/AppStack';

import  IconButton  from '@components/IconButton';
import mark from '@assets/images/mark.png';

type BookDetailRouteProp = RouteProp<AppStackParamList, 'BookDetail'>;

const BookDetail = () => {
  const { goBack } = useNavigation();
  const route = useRoute<BookDetailRouteProp>();

  const { book } = route.params;
  return (
    <StyledContainer>
      <StyledScreen>
      <IconButton icon="arrow-back-outline" onPress={() => goBack()} />
        <StyledWrapper>
          <StyledBook source={{ uri: book.imageUrl }} resizeMode="contain" />
          <StyledTitle numberOfLines={2}>{book.title}</StyledTitle>
          <StyledAuthorsContainer>
            <StyledAuthor>{book.authors.toString()}</StyledAuthor>
          </StyledAuthorsContainer>

          <StyledInformationContainer>
            <StyledInformationTitle>Informações</StyledInformationTitle>
            <StyledDetail>
              <StyledLeft>Páginas</StyledLeft>
              <StyledRight>{book.pageCount} páginas</StyledRight>
            </StyledDetail>

            <StyledDetail>
              <StyledLeft>Editora</StyledLeft>
              <StyledRight>{book.publisher}</StyledRight>
            </StyledDetail>

            <StyledDetail>
              <StyledLeft>Publicação</StyledLeft>
              <StyledRight>{book.published}</StyledRight>
            </StyledDetail>

            <StyledDetail>
              <StyledLeft>Idioma</StyledLeft>
              <StyledRight>{book.language}</StyledRight>
            </StyledDetail>

            <StyledDetail>
              <StyledLeft>Título Original</StyledLeft>
              <StyledRight>{book.title} </StyledRight>
            </StyledDetail>

            <StyledDetail>
              <StyledLeft>ISBN-10</StyledLeft>
              <StyledRight>{book.isbn10} </StyledRight>
            </StyledDetail>

            <StyledDetail>
              <StyledLeft>ISBN-13</StyledLeft>
              <StyledRight>{book.isbn13} </StyledRight>
            </StyledDetail>

            <StyledDetail>
              <StyledLeft>Categoria</StyledLeft>
              <StyledRight>{book.category}</StyledRight>
            </StyledDetail>
          </StyledInformationContainer>

          <StyledReviewContainer>
            <StyledInformationTitle>Resenha da Editora</StyledInformationTitle>

            <StyledAbsoluteWrapper>
              <StyledMark source={mark} />
              <StyledDescription> {book.description}</StyledDescription>
            </StyledAbsoluteWrapper>
          </StyledReviewContainer>
        </StyledWrapper>
      </StyledScreen>
    </StyledContainer>
  );
}

const StyledContainer = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.shape};
`;
const StyledScreen = styled.ScrollView.attrs({
  showsVerticalScrollIndicator:false,
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingTop: 16
  }
})``;

const StyledBook = styled.Image`
  height: 351px;
  margin-top: 12px;
  margin-bottom: 24px; ;
`;

const StyledWrapper = styled.View`
  padding: 12px 40px 40px 40px;
`;

const StyledTitle = styled.Text`
  font-size: 28px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
`;

const StyledAuthorsContainer = styled.View`
  flex-direction: row;
`;

const StyledAuthor = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary_light};
`;

const StyledInformationContainer = styled.View`
  margin-top: 32px;
`;

const StyledInformationTitle = styled.Text`
  margin-bottom: 14px;
  font-size: 16px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
`;

const StyledDetail = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 4px 0px;
`;

const StyledLeft = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
`;

const StyledRight = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;

const StyledReviewContainer = styled.View`
  width: 100%;
  margin-top: 16px;
`;

const StyledAbsoluteWrapper = styled.View`
  width: 95%;
  flex-direction: row;
`;

const StyledDescription = styled.Text`
  align-items: baseline;
  text-align: justify;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;

const StyledMark = styled.Image`
  margin-bottom: 4px;
`;

export default BookDetail;
