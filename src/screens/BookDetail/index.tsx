import { useNavigation } from '@react-navigation/core';
import { ScrollView } from 'react-native';
import React from 'react';
import { IconButton } from '../../components/IconButton';

import mark from '../../assets/images/mark.png';

import {
  Container,
  Book,
  Wrapper,
  Title,
  AuthorsContainer,
  Author,
  InformationContainer,
  InformationTitle,
  Detail,
  Left,
  Right,
  ReviewContainer,
  Description,
  AbsoluteWrapper,
  Mark,
} from './styles';

interface Book {
  imageUrl: string;
  title: string;
  pageCount: number;
  publisher: string;
  published: number;
  isbn10: string;
  isbn13: string;
  category: string;
  authors: Array<string>;
  language: string;
  description: string;
}

export function BookDetail({ route }) {
  const { goBack } = useNavigation();

  const { book } = route.params;
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <IconButton icon="arrow-back-outline" onPress={() => goBack()} />

        <Wrapper>
          <Book source={{ uri: book.imageUrl }} resizeMode="contain" />
          <Title numberOfLines={2}>{book.title}</Title>
          <AuthorsContainer>
            <Author>{book.authors.toString()}</Author>
          </AuthorsContainer>

          <InformationContainer>
            <InformationTitle>Informações</InformationTitle>
            <Detail>
              <Left>Páginas</Left>
              <Right>{book.pageCount} páginas</Right>
            </Detail>

            <Detail>
              <Left>Editora</Left>
              <Right>{book.publisher}</Right>
            </Detail>

            <Detail>
              <Left>Publicação</Left>
              <Right>{book.published}</Right>
            </Detail>

            <Detail>
              <Left>Idioma</Left>
              <Right>{book.language}</Right>
            </Detail>

            <Detail>
              <Left>Título Original</Left>
              <Right>{book.title} </Right>
            </Detail>

            <Detail>
              <Left>ISBN-10</Left>
              <Right>{book.isbn10} </Right>
            </Detail>

            <Detail>
              <Left>ISBN-13</Left>
              <Right>{book.isbn13} </Right>
            </Detail>

            <Detail>
              <Left>Categoria</Left>
              <Right>{book.category}</Right>
            </Detail>
          </InformationContainer>

          <ReviewContainer>
            <InformationTitle>Resenha da Editora</InformationTitle>

            <AbsoluteWrapper>
              <Mark source={mark} />
              <Description> {book.description}</Description>
            </AbsoluteWrapper>
          </ReviewContainer>
        </Wrapper>
      </ScrollView>
    </Container>
  );
}
