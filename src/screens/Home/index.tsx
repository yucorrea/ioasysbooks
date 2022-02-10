import React, { useCallback, useEffect } from 'react';
import { useTheme } from 'styled-components/native';

import { Container, Header, Wrapper, Logo, Title } from './styles';

import logo from './../../assets/LogoDark.png';
import { Filter } from '../../components/Filter';
import { IconButton } from '../../components/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/auth/actions';
import { allBooks } from '../../store/books/actions';
import { ActivityIndicator, FlatList } from 'react-native';
import { Book } from '../../components/Book';

export function Home() {

  const { colors } = useTheme();
  const dispatch = useDispatch();

  const { books, page, totalPages, isLoading } = useSelector(
    state => state.allBooks,
  );

  useEffect(() => {
    dispatch(allBooks());
  }, [dispatch]);

  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  const loadMore = useCallback(() => {
    if (page <= totalPages) {
      dispatch(allBooks());
    }
  }, [totalPages, page, dispatch]);

  const renderFooter = useCallback(() => {
    return isLoading ? (
      <ActivityIndicator size="large" color={colors.primary} />
    ) : null;
  }, [isLoading]);

  return (
    <Container>
      <Header>
        <Wrapper>
          <Logo source={logo} />
          <Title>Books</Title>
        </Wrapper>

        <IconButton onPress={handleLogout} icon="log-out-outline" />
      </Header>
      <Filter />

      <FlatList
        data={books}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Book data={item} />}
        onEndReached={loadMore}
        ListFooterComponent={renderFooter}
      />
    </Container>
  );
}
