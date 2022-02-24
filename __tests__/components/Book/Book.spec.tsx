import React from 'react';
import { fireEvent } from '@testing-library/react-native';

import Book from '../../../src/components/Book';
import {
  matchSnapshotWithTheme,
  renderWithTheme,
} from '../../../src/helpers/functions/testing';

describe('Buttom Component', () => {

  const data = {
    id: 'book-id',
    imageUrl: 'image.png',
    title: 'Book Title',
    pageCount: 1,
    publisher: '',
    published: 0,
    isbn10: '',
    isbn13: '',
    category: '',
    authors: [],
    language: '',
    description: 'An book description',
  }

  it('matches snapshots', () => {
    const mockFunction = jest.fn();
    const snap = matchSnapshotWithTheme(<Book data={data} onPress={mockFunction} />);
    expect(snap).toMatchSnapshot();
  });

  it('render correctly', () => {
    const mockFunction = jest.fn();
    renderWithTheme(<Book testID="button-id" data={data} onPress={mockFunction}  />);
  });

  it('callback is called when book is pressed', () => {
    const mockFunction = jest.fn();
    const { getByTestId } = renderWithTheme(
      <Book testID="button-id" data={data} onPress={mockFunction}  />,
    );
    const book = getByTestId('button-id');
    fireEvent.press(book);
    expect(mockFunction).toHaveBeenCalled();
  });

});
