import Content from '.';
import { render } from '@testing-library/react';

describe('Content', () => {
  it(`renders a test `, async () => {
    const { container, findByText } = render(<Content />);

    expect(await findByText('TEST!')).toBeTruthy();
  });
});
