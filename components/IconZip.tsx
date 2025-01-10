import React from 'react';
import FontAwesome from './FontAwesome';
import HeroIcon from './HeroIcon';

const IconZip = ({ type, value, height = 'h-6', width = 'w-6', style }) => {
  if (type === 'HeroIcon') {
    return <HeroIcon compName={value} width={width} height={height} style={style} />;
  }

  if (type === 'FontAwesome') {
    return <FontAwesome compName={value} width={width} height={height} style={style} />;
  }
  return null;
};

export default IconZip;
