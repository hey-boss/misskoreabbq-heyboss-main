
import { useEffect, useState } from 'react';
import isSmallScreen from './isSmallScreen';

const IsSmallViewHook = () => {
  const isSmallView = isSmallScreen();
  const [smView, setSmView] = useState(false);

  useEffect(() => {
    setSmView(isSmallView);
  }, [isSmallView]);

  return smView;
};

export default IsSmallViewHook;
