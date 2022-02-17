import React, { useCallback, useEffect } from 'react';
import { ActivityIndicator, FlatList, ListRenderItem } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled, { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/core';

import { Book as BookData, BookDetailNavigationProp } from '../../routes/AppStack';
import logo from './../../assets/images/LogoDark.png';
import { Filter } from '../../components/Filter';
import { IconButton } from '../../components/IconButton';
import { Book } from '../../components/Book';

import { GET_BOOKS } from '../../store/slices/booksSlice';
import { LOGOUT } from '../../store/slices/userSlice';

import { RootState } from '../../store/store';

export function Home() {
  const { navigate } = useNavigation<BookDetailNavigationProp>();
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const {
    books,
    page,
    totalPages,
    loading,
    filter: { category, year, search },
  } = useSelector((state: RootState) => state.books);

  useEffect(() => {
    dispatch(
      GET_BOOKS({ category: undefined, search: '', year: undefined, page: 1 }),
    );
  }, [dispatch]);

  const handleLogout = useCallback(() => {
    dispatch(LOGOUT());
  }, []);

  const loadMore = useCallback(() => {
    if (page <= totalPages) {
      let currentPage = page + 1;
      dispatch(GET_BOOKS({ category, year, search, page: currentPage }));
    }
  }, [totalPages, page, dispatch]);

  const renderFooter = useCallback(() => {
    return loading ? (
      <ActivityIndicator size="large" color={colors.primary} />
    ) : null;
  }, [loading]);

  const renderItemBook: ListRenderItem<BookData> = useCallback(({ item }) => {
    return <Book data={item} onPress={() => navigate('BookDetail', {book: item})}/>
  },[]);

  return (
    <StyledContainer>
      <StyledHeaderContainer>

        <StyledHeader>
          <StyledLogoContainer>
            <StyledLogo source={logo} />
            <StyledTitle>Books</StyledTitle>
          </StyledLogoContainer>

          <IconButton onPress={handleLogout} icon="log-out-outline" />
        </StyledHeader>

        <Filter />
      </StyledHeaderContainer>

      <FlatList
        data={books}
        keyExtractor={item => item.id}
        renderItem={renderItemBook}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
    </StyledContainer>
  );
}

const StyledContainer = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

const StyledHeaderContainer = styled.View`
  margin-top: 40px;
  padding: 0px 16px;
`;

const StyledHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyledLogoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const StyledLogo = styled.Image``;

const StyledTitle = styled.Text`
  margin-left: 16px;
  font-size: 28px;
  font-family: ${({ theme }) => theme.fonts.light};
  color: ${({ theme }) => theme.colors.title};
`;

