import Content from '.';
import { fireEvent, render } from '@testing-library/react';

describe('Content', () => {
  it(`renders "Search"`, async () => {
    const { findByText } = render(<Content />);

    expect(await findByText('Search')).toBeTruthy();
  });

  // FIXME: src/setupTests.ts Mock Service Workers are not called
  // it(`renders the weather for Brisbane`, async () => {
  //   const { getByText, getByLabelText, findByText } = render(<Content />);

  //   const input = getByLabelText(/Search locations/);
  //   fireEvent.change(input, { target: { value: 'Brisbane' } });
  //   fireEvent.click(getByText('Search'));

  //   expect(await findByText('Light Cloud')).toBeTruthy();
  // });
});
