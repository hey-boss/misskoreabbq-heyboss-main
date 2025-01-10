import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as All from '@fortawesome/free-regular-svg-icons';
import * as All2 from '@fortawesome/free-solid-svg-icons';

const IconSearch = (userInput) => {
  const inputAsList = userInput.split('-');
  const inputAsListFirstLetterCapital = inputAsList?.map(
    (element) => element.charAt(0).toUpperCase() + element.slice(1)
  );

  return `fa${inputAsListFirstLetterCapital?.join('')}`;
};
const FontAwesome = ({ compName, height = 'h-6', width = 'w-6', style }) => {
  const convertToComponentName = IconSearch(compName);

  if (convertToComponentName === 'fa') return null;

  let result = All[convertToComponentName];

  if (result == null) {
    result = All2[convertToComponentName];
  }

  if (result == null) return null;

  return (
    <>
      <div className="flex-shrink-0 flex justify-center p-0.5">
        <FontAwesomeIcon
          icon={result}
          className={`${height} ${width} ${style}`}
          style={{ transform: 'scale(80%)' }}
        />
      </div>
    </>
  );
};

export default FontAwesome;
