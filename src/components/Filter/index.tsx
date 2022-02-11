import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useTheme } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import styled, { css } from 'styled-components/native';

import { Button } from './../Button';
import { ModalComponent } from '../Modal';

import { years, categories } from './../../../__mocks__';

import { GET_BOOKS } from '../../store/slices/booksSlice';

export function Filter() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [modal, setModal] = useState(false);

  const { colors } = useTheme();
  const dispatch = useDispatch();

  const handleInputSearch = useCallback(() => {
    dispatch(GET_BOOKS({ search, page: 1 }));
  }, [dispatch, search]);

  const handleApplyFilters = useCallback(() => {
    console.log({ selectedCategory, selectedYear })
    setModal(false);
  }, [dispatch, selectedCategory, selectedYear]);

  return (
    <>
      <StyledContainer>
        <StyledInputContainer>
          <StyledInput
            placeholder="Procure um livro"
            placeholderTextColor={colors.text}
            value={search}
            onChangeText={e => setSearch(e)}
            onSubmitEditing={handleInputSearch}
          />
          <StyledSearchButton onPress={handleInputSearch}>
            <Icon name="search-outline" size={24} color={colors.title} />
          </StyledSearchButton>
        </StyledInputContainer>

        <StyledOptionButton onPress={() => setModal(true)}>
          <Icon color={colors.title} name="options-outline" size={24} />
        </StyledOptionButton>
      </StyledContainer>

      <ModalComponent show={modal} close={() => setModal(false)}>
        <StyledTitle>Selecione a categoria</StyledTitle>
        <StyledOptionsFilter>
          {categories.map(option => (
            <StyledFilterButton
              key={option.id.toString()}
              selected={option.value === selectedCategory}
              onPress={() => setSelectedCategory(option.value)}
            >
              <StyledFilterButtonText selected={option.value === selectedCategory}>
                {option.value}
              </StyledFilterButtonText>
            </StyledFilterButton>
          ))}
        </StyledOptionsFilter>

        <StyledTitle>Selecione o ano</StyledTitle>
        <StyledOptionsFilter>
          {years.map(option => (
            <StyledFilterButton
              key={option.id.toString()}
              selected={option.value === selectedYear}
              onPress={() => setSelectedYear(option.value)}
            >
              <StyledFilterButtonText selected={option.value === selectedYear}>
                {option.value}
              </StyledFilterButtonText>
            </StyledFilterButton>
          ))}
        </StyledOptionsFilter>

        <StyledButtonFilter onPress={handleApplyFilters} title="Filtar" />
      </ModalComponent>
    </>
  );
}

interface FilterButtonProps {
  selected?: boolean;
}

const StyledContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 32px 0px;
`;

const StyledInputContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 22px;
  border-radius: 2px;
  height: 48px;
  border: 1px solid rgba(51, 51, 51, 0.2);
`;

const StyledInput = styled.TextInput`
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: rgba(153, 153, 153, 0.7);
  height: 48px;
  font-size: 12px;
  margin-left: 11px;
`;

const StyledSearchButton = styled.TouchableOpacity`
  margin-right: 20px;
`;

const StyledOptionButton = styled.TouchableOpacity``;

const StyledButtonFilter = styled(Button)`
  align-self: center;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

const StyledOptionsFilter = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 36px;
`;

const StyledFilterButton = styled.TouchableOpacity<FilterButtonProps>`
  border: 1px solid
    ${({ selected, theme }) =>
      selected ? theme.colors.title : 'rgba(51, 51, 51, 0.3)'};

  border-radius: 44px;
  justify-content: center;
  align-items: center;

  ${({ selected, theme }) =>
    selected &&
    css`
      background: ${theme.colors.title};
    `}

  margin: 8px 8px 8px 0px;
`;

const StyledFilterButtonText = styled.Text<FilterButtonProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;
  padding: 6px 16px;

  color: ${({ selected, theme }) =>
    selected ? theme.colors.background : theme.colors.title};
`;

const StyledTitle = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
`;
