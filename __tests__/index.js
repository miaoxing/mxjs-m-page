import Page, {PageContext} from '..';
import {render} from '@testing-library/react';
import {View} from '@fower/taro';
import {useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Ret} from 'miaoxing';

describe('Page', () => {
  test('basic', () => {
    const result = render(<Page>test</Page>);
    expect(result.container).toMatchSnapshot();
  });

  test('ret empty', () => {
    const result = render(<Page ret={{}}>test</Page>);
    expect(result.container).toMatchSnapshot();
  });

  test('ret suc', () => {
    const result = render(<Page ret={Ret.suc()}>suc</Page>);
    expect(result.container).toMatchSnapshot();
  });

  test('ret err', () => {
    const result = render(<Page ret={Ret.err('my err')}>err</Page>);
    expect(result.container).toMatchSnapshot();
  });

  test('PageContext', () => {
    const Child = ({height}) => {
      const {setCss} = useContext(PageContext);

      useEffect(() => {
        setCss({pb: height});
      }, []);

      return (
        <View/>
      );
    };

    Child.propTypes = {
      height: PropTypes.number,
    };

    const result = render(<Page><Child height={2}/></Page>);
    expect(result.container.firstChild.className).toMatchSnapshot();

    const result2 = render(<Page><Child height={3}/></Page>);
    expect(result2.container.firstChild.className).toMatchSnapshot();

    // Generate different class names
    expect(result.container.firstChild.className).not.toEqual(result2.container.firstChild.className);
  });
});
