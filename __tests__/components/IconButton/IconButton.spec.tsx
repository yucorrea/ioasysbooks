import React from 'react';

import IconButton from '../../../src/components/IconButton';
import {
  matchSnapshotWithTheme,
  renderWithTheme,
} from '../../../src/helpers/functions/testing';

describe('IconButton Component', () => {

  it('matches snapshots', () => {
    const mockFunction = jest.fn();
    const snap = matchSnapshotWithTheme(<IconButton icon='arrow-back-outline' onPress={mockFunction}/>);
    expect(snap).toMatchSnapshot();
  });

  it('render correctly', () => {
    const mockFunction = jest.fn();
    renderWithTheme( <IconButton icon="arrow-back-outline" onPress={mockFunction} /> );
  });

});
