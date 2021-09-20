import React, { useState, useCallback } from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import theme from '../../global/theme';

import { Modal } from '../Modal';

import { years, categories } from '../../mock';

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

export function Filter() {
  const [search, setSearch] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<string[]>([]);

  const [modal, setModal] = useState(false);

  const handleInputSearch = useCallback(() => {}, []);

  const handleApplyFilters = useCallback(() => {}, []);

  const handleSelectedCategory = useCallback(
    (category: string) => {
      const alreadyExists = selectedCategories.includes(category);

      if (alreadyExists) {
        setSelectedCategories(
          selectedCategories.filter(item => item !== category),
        );
      } else {
        setSelectedCategories(state => [...state, category]);
      }
    },
    [selectedCategories],
  );

  const handleSelectedYear = useCallback(
    (year: string) => {
      const alreadyExists = selectedYears.includes(year);

      if (alreadyExists) {
        setSelectedYears(selectedYears.filter(item => item !== year));
      } else {
        setSelectedYears(state => [...state, year]);
      }
    },
    [selectedYears],
  );

  return (
    <>
      <Container>
        <InputContainer>
          <Input
            placeholder="Procure um livro"
            placeholderTextColor={theme.colors.text}
            value={search}
            onChangeText={e => setSearch(e)}
            onSubmitEditing={handleInputSearch}
          />
          <SearchButton onPress={handleInputSearch}>
            <Icon name="search-outline" size={24} color={theme.colors.title} />
          </SearchButton>
        </InputContainer>

        <OptionButton onPress={() => setModal(true)}>
          <Icon color={theme.colors.title} name="options-outline" size={24} />
        </OptionButton>
      </Container>

      {modal ? (
        <Modal show={modal} close={() => setModal(false)}>
          <Title>Selecione a categoria</Title>
          <OptionsFilter>
            {categories.map(option => (
              <FilterButton
                key={option.id.toString()}
                selected={selectedCategories.includes(option.value)}
                onPress={() => handleSelectedCategory(option.value)}
              >
                <FilterButtonText
                  selected={selectedCategories.includes(option.value)}
                >
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
                selected={selectedYears.includes(option.value)}
                onPress={() => handleSelectedYear(option.value)}
              >
                <FilterButtonText
                  selected={selectedYears.includes(option.value)}
                >
                  {option.value}
                </FilterButtonText>
              </FilterButton>
            ))}
          </OptionsFilter>

          <ButtonFilter onPress={handleApplyFilters} title="Filtar" />
        </Modal>
      ) : null}
    </>
  );
}
