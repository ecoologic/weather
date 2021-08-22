import { FC } from 'react';
import { fireEvent, render } from '@testing-library/react';
import SearchForm from './SearchForm';

describe(SearchForm, () => {
  it(`calls onSubmit when pressed`, () => {
    const onSubmit = jest.fn();
    const { getByText, getByLabelText } = render(
      <SearchForm onSubmit={onSubmit} />
    );

    const input = getByLabelText(/Search locations/);
    fireEvent.change(input, { target: { value: 'Brisbane' } });
    fireEvent.click(getByText('Search'));
    expect(onSubmit.mock.calls).toEqual([[{ query: 'Brisbane' }]]);
  });
});
