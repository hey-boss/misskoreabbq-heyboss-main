import React from 'react';
import FacebookIcon from './FacebookIcon';
import InstagramIcon from './InstagramIcon';
import YoutubeIcon from './YoutubeIcon';

const SNSIcon = (snsName) => {
  switch (snsName) {
    case 'Facebook':
      return <FacebookIcon />;
    case 'Instagram':
      return <InstagramIcon />;
    case 'Youtube':
      return <YoutubeIcon />;
    default:
      return <></>;
  }
};

export default SNSIcon;
export { SNSIcon };
