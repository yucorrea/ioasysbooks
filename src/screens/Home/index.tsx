import React from 'react';

import { Container, Header, Wrapper, Logo, Title } from './styles';

import logo from './../../assets/LogoDark.png';
import { Filter } from '../../components/Filter';
import { IconButton } from '../../components/IconButton';

export function Home() {
  return (
    <Container>
      <Header>
        <Wrapper>
          <Logo source={logo} />
          <Title>Books</Title>
        </Wrapper>

        <IconButton onPress={() => {}} icon="log-out-outline" />
      </Header>
      <Filter />
    </Container>
  );
}
