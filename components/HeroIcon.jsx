import React from 'react';
import * as OutlineIcons from '@heroicons/react/outline';
import * as SolidIcons from '@heroicons/react/solid';

const heroiconsOutlineKeyList = Object.keys(OutlineIcons);
const heroiconsSolidKeyList = Object.keys(SolidIcons);

const iconComponents = {
  ...heroiconsOutlineKeyList.reduce((o, key) => ({ ...o, [key]: OutlineIcons[key] }), {}),
  ...heroiconsSolidKeyList.reduce((o, key) => ({ ...o, [`solid/${key}`]: SolidIcons[key] }), {})
};

const HeroIcon = ({ compName, height = 'h-6', width = 'w-6', style }) => {
  const SpecificIcon = iconComponents[compName];

  if (!SpecificIcon) return null;

  return (
    <div className={`flex-shrink-0 ${height} ${width} ${style}`}>
      <SpecificIcon />
    </div>
  );
};

export default HeroIcon;
export { OutlineIcons, SolidIcons, iconComponents, heroiconsOutlineKeyList, heroiconsSolidKeyList };
