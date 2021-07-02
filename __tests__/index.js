import Page from '..';
import {render} from '@testing-library/react';

describe('Page', () => {
  test('basic', () => {
    const result = render(<Page>test</Page>);
    expect(result.container).toMatchSnapshot();
  });
});
