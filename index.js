import {useEffect} from 'react';
import {View} from '@fower/taro';
import Taro from '@tarojs/taro';
import {getConfig} from '@fower/core';
import clsx from 'clsx';
import './index.scss';
import PropTypes from 'prop-types';

const Page = ({bg, className, ...props}) => {
  useEffect(() => {
    bg && Taro.setBackgroundColor({
      backgroundColor: bg,
    });
  }, [bg]);

  let style = {};
  if (bg) {
    style.background = bg;
  }

  // TODO 根据 config 修改时间缓存
  const config = getConfig();

  // NOTE: 暂时只使用几个主要颜色
  const colors = ['primary', 'secondary', 'gray'];
  const levels = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
  colors.forEach(color => {
    levels.forEach(level => {
      style['--mx-colors-' + color + '-' + level] = config.theme.colors[color + level];
    });
  });

  // @experimental 可能更改为其他名称，如按业务命名
  style['--mx-colors-primary-fg-500'] = config.theme.colors.primaryFg500;
  style['--mx-colors-secondary-fg-500'] = config.theme.colors.secondaryFg500;

  return (
    <View className={clsx('mx-page', className)} style={style} {...props}/>
  );
};

Page.propTypes = {
  bg: PropTypes.string,
  className: PropTypes.string,
};

export default Page;
