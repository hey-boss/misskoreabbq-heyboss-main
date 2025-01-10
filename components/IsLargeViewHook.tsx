import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const IsLargeViewHook = () => {
  const isLargeView = useMediaQuery({ query: '(min-width: 1024px)' });
  const [lgView, setLgView] = useState(false);

  useEffect(() => {
    setLgView(isLargeView);
  }, [isLargeView]);

  return lgView;
};

export default IsLargeViewHook;
