import { useMediaQuery } from 'react-responsive';

const isSmallScreen = () => {
  const checkScreen = useMediaQuery({ query: '(max-width: 767px)' });
  return checkScreen;
};

export default isSmallScreen;
