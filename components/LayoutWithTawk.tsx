import React, { ReactNode, useEffect } from 'react';
import CLHeader, { OG } from './CLHeader';
import { NextFont } from '@next/font';

type Props = {
  children?: ReactNode;
  headerInfo: {
    title?: string;
    metaTag?: {
      description: string;
      keywords: string;
      author: string;
      og?: OG;
    };
    favicon?: string;
  };
  font?: NextFont;
  bodyStyle?: Array<string>;
};

const LayoutWithTawk = ({ children, headerInfo, font, bodyStyle }: Props) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://embed.tawk.to/67266e342480f5b4f597e5ce/1ibn1suts';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className={font?.className}>
      <CLHeader
        title={headerInfo?.title}
        metaTag={headerInfo?.metaTag}
        favicon={headerInfo?.favicon}
        bodyStyle={bodyStyle}
      />
      {children}
    </div>
  );
};
export default LayoutWithTawk;
