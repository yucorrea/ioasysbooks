import React, { useCallback, useEffect } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';

import { Container, Header, Wrapper, Logo, Title } from './styles';

import logo from './../../assets/LogoDark.png';
import { Filter } from '../../components/Filter';
import { IconButton } from '../../components/IconButton';
import { useDispatch, useSelector } from 'react-redux';

import { GET_BOOKS } from '../../store/slices/booksSlice';
import { LOGOUT } from '../../store/slices/userSlice';

import { Book } from '../../components/Book';
import theme from '../../global/theme';
import { RootState } from '../../store/store';

export function Home() {
  const dispatch = useDispatch();

  const { books, page, totalPages, loading, filter: { category, year, search } } = useSelector((state: RootState) => state.books);

  useEffect(() => {
    dispatch(GET_BOOKS({category: undefined, search: '', year: undefined, page: 1}));
  }, [dispatch]);

  const handleLogout = useCallback(() => {
    dispatch(LOGOUT())
  }, []);

  const loadMore = useCallback(() => {
    if (page <= totalPages) {
      let currentPage = page + 1;
      dispatch(GET_BOOKS({category, year, search, page: currentPage}));
    }
  }, [totalPages, page, dispatch]);

  const renderFooter = useCallback(() => {
    return loading ? (
      <ActivityIndicator size="large" color={theme.colors.primary} />
    ) : null;
  }, [loading]);

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
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
      />
    </Container>
  );
}
