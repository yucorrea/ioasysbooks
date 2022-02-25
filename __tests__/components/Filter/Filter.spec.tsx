import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import Filter from '@components/Filter';
import { matchSnapshotWithTheme, renderWithTheme } from '@helpers/functions/testing';

describe('Filter component', () => {
  it('matches snapshots', () => {
    const snap = matchSnapshotWithTheme(<Filter />);
    expect(snap).toMatchSnapshot();
  });

  it('render correctly', () => {
    renderWithTheme(<Filter />);
  });

  it('value change input filter', () => {
    const { getByTestId } = renderWithTheme(<Filter />);

    const inputSearch = getByTestId('input-search');
    fireEvent.changeText(inputSearch, 'Ab');
    expect(inputSearch.props.value).toEqual('Ab');
  });

  it('filter when click search button', () => {
    const { getByTestId } = renderWithTheme(<Filter />);

    const buttonSearch = getByTestId('button-search');
    const inputSearch = getByTestId('input-search');

    fireEvent.changeText(inputSearch, 'Book');
    fireEvent.press(buttonSearch);

    expect(inputSearch.props.value).toHaveLength(4);
  })


  it('check if has open modal when click icon', () => {
    const { getByTestId } = renderWithTheme(<Filter />);

    const buttonShowModal = getByTestId('button-show-modal');
    const filterModal = getByTestId('modal-component');

    fireEvent.press(buttonShowModal);
    expect(filterModal.props.visible).toBeTruthy();
  })
})
