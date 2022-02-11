import React, { useState, useCallback } from 'react';
import { useTheme } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { GET_BOOKS } from '../../store/slices/booksSlice';

import { ModalComponent } from '../Modal';

import { years, categories } from './../../../__mocks__';

import {
  Container,
  InputContainer,
  Input,
  SearchButton,
  OptionButton,
  OptionsFilter,
  FilterButton,
  FilterButtonText,
  Title,
  ButtonFilter,
} from './styles';

import { useDispatch } from 'react-redux';

export function Filter() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<number>(null);

  const [modal, setModal] = useState(false);

  const { colors } = useTheme();
  const dispatch = useDispatch();

  const handleInputSearch = useCallback(() => {
    dispatch(GET_BOOKS({ search, page: 1 }));
  }, [dispatch, search]);

  const handleApplyFilters = useCallback(() => {
    // dispatch(setFilters({ year: selectedYear, category: selectedCategory }));
    setModal(false);
  }, [dispatch, selectedCategory, selectedYear]);

  return (
    <>
      <Container>
        <InputContainer>
          <Input
            placeholder="Procure um livro"
            placeholderTextColor={colors.text}
            value={search}
            onChangeText={e => setSearch(e)}
            onSubmitEditing={handleInputSearch}
          />
          <SearchButton onPress={handleInputSearch}>
            <Icon name="search-outline" size={24} color={colors.title} />
          </SearchButton>
        </InputContainer>

        <OptionButton onPress={() => setModal(true)}>
          <Icon color={colors.title} name="options-outline" size={24} />
        </OptionButton>
      </Container>

      <ModalComponent show={modal} close={() => setModal(false)}>
        <Title>Selecione a categoria</Title>
        <OptionsFilter>
          {categories.map(option => (
            <FilterButton
              key={option.id.toString()}
              selected={option.value === selectedCategory}
              onPress={() =>
                selectedCategory
                  ? setSelectedCategory('')
                  : setSelectedCategory(option.value)
              }
            >
              <FilterButtonText selected={option.value === selectedCategory}>
                {option.value}
              </FilterButtonText>
            </FilterButton>
          ))}
        </OptionsFilter>

        <Title>Selecione o ano</Title>
        <OptionsFilter>
          {years.map(option => (
            <FilterButton
              key={option.id.toString()}
              selected={option.value === selectedYear}
              onPress={() =>
                selectedYear
                  ? setSelectedYear('')
                  : setSelectedYear(option.value)
              }
            >
              <FilterButtonText selected={option.value === selectedYear}>
                {option.value}
              </FilterButtonText>
            </FilterButton>
          ))}
        </OptionsFilter>

        <ButtonFilter onPress={handleApplyFilters} title="Filtar" />
      </ModalComponent>
    </>
  );
}
