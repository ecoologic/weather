import Content from '.';
import { render } from '@testing-library/react';

describe('Content', () => {
  it(`renders "Search"`, async () => {
    const { container, findByText } = render(<Content />);

    expect(await findByText('Search')).toBeTruthy();
  });
});
