
import { useSelector, useDispatch } from 'react-redux';

import { globalState } from '@store/slices';

jest.mock('@react-navigation/core', () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
    useRoute: () => ({
        params: {
          book: {
            id: '',
            imageUrl: '',
            title: '',
            pageCount: 1,
            publisher: '',
            published: 0,
            isbn10: '',
            isbn13: '',
            category: '',
            authors: [],
            language: '',
            description: '',
          }
      }
    })
  }
})

jest.mock('react-redux');
useSelector.mockImplementation(fn => fn(globalState));
useDispatch.mockReturnValue(jest.fn);
