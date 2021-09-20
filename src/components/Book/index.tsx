import { useNavigation } from '@react-navigation/core';
import React from 'react';

import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Image,
  Wrapper,
  Title,
  SubTitle,
  Footer,
  Detail,
} from './styles';

interface Props extends TouchableOpacityProps {
  data: any;
}

export function Book({ data, ...rest }: Props) {
  const { navigate } = useNavigation();

  return (
    <Container {...rest} onPress={() => navigate('BookDetail', { book: data })}>
      <Image source={{ uri: data.imageUrl }} />
      <Wrapper>
        <Title>{data.title}</Title>
        <SubTitle>{data.authors[0]}</SubTitle>

        <Footer>
          <Detail>{data.pageCount} páginas</Detail>
          <Detail>Editora {data.publisher}</Detail>
          <Detail>Publicado em {data.published}</Detail>
        </Footer>
      </Wrapper>
    </Container>
  );
}
