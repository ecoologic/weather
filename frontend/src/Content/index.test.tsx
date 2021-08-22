import Content from '.';
import { render } from '@testing-library/react';

describe('Content', () => {
  it(`renders "Submit"`, async () => {
    const { container, findByText } = render(<Content />);

    expect(await findByText('Submit')).toBeTruthy();
  });
});
