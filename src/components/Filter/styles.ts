import styled, { css } from 'styled-components/native';

interface FilterButtonProps {
  selected?: boolean;
}

import { Button } from './../Button';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 32px 0px;
`;

export const InputContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 22px;
  border-radius: 2px;
  height: 48px;
  border: 1px solid rgba(51, 51, 51, 0.2);
`;

export const Input = styled.TextInput`
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: rgba(153, 153, 153, 0.7);
  height: 48px;
  font-size: 12px;
  margin-left: 11px;
`;

export const SearchButton = styled.TouchableOpacity`
  margin-right: 20px;
`;

export const OptionButton = styled.TouchableOpacity``;

export const ButtonFilter = styled(Button)`
  align-self: center;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const OptionsFilter = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 36px;
`;

export const FilterButton = styled.TouchableOpacity<FilterButtonProps>`
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

export const FilterButtonText = styled.Text<FilterButtonProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;
  padding: 6px 16px;

  color: ${({ selected, theme }) =>
    selected ? theme.colors.background : theme.colors.title};
`;

export const Title = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
`;

export const Icon = styled.Image``;
