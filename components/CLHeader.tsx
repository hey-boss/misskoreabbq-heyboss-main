import Head from 'next/head';
import { useEffect } from 'react';

type OGDefault = {
  url: string;
  title: string;
  image: string;
  description: string;
  siteName: string;
};

type OGTwitter = {
  card: string;
  title: string;
  image: string;
  description: string;
};

export type OG = {
  default: OGDefault;
  twitter?: OGTwitter;
  ios?: OGDefault;
  android?: OGDefault;
};
type CLHeaderProps = {
  title: string;
  metaTag: {
    description: string;
    keywords: string;
    author: string;
    og?: OG;
  };
  favicon: string;
  bodyStyle?: Array<string>;
};
type IValidateMetaContent = {
  name: string;
  property: string;
  content: string;
};
const ValidateMetaContent = ({ name, property, content }: IValidateMetaContent) => {
  if (!content) {
    return null;
  }
  return <meta name={name} property={property} content={content} />;
};
const CLHeader = ({ title, metaTag, favicon, bodyStyle }: CLHeaderProps) => {
  useEffect(() => {
    if (bodyStyle == null || bodyStyle?.length === 0) {
      document.body.classList.remove('overflow-hidden');
    }

    bodyStyle?.map((style) => {
      document.body.classList.add(style);
    });
  }, [bodyStyle?.length]);

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon} />
      <ValidateMetaContent name="description" content={metaTag?.description} property={undefined} />
      <ValidateMetaContent name="keywords" content={metaTag?.keywords} property={undefined} />
      <ValidateMetaContent name="author" content={metaTag?.author} property={undefined} />
      <ValidateMetaContent
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        property={undefined}
      />

      {/* Naver Blog, Kakao */}
      <ValidateMetaContent property="og:type" content="website" name={undefined} />
      <ValidateMetaContent property="og:locale" content="en_US" name={undefined} />
      <ValidateMetaContent property="og:image:width" content="1200" name={undefined} />
      <ValidateMetaContent property="og:image:height" content="630" name={undefined} />

      <ValidateMetaContent property="og:url" content={metaTag?.og?.default?.url} name={undefined} />
      <ValidateMetaContent
        property="og:title"
        content={metaTag?.og?.default?.title}
        name={undefined}
      />
      <ValidateMetaContent
        property="og:image"
        content={metaTag?.og?.default?.image}
        name={undefined}
      />
      <ValidateMetaContent
        property="og:description"
        content={metaTag?.og?.default?.description}
        name={undefined}
      />
      <ValidateMetaContent
        property="og:site_name"
        content={metaTag?.og?.default?.siteName}
        name={undefined}
      />

      {/* Twitter */}
      <ValidateMetaContent
        name="twitter:card"
        content={metaTag?.og?.twitter?.card}
        property={undefined}
      />
      <ValidateMetaContent
        name="twitter:title"
        content={metaTag?.og?.twitter?.title}
        property={undefined}
      />
      <ValidateMetaContent
        name="twitter:description"
        content={metaTag?.og?.twitter?.description}
        property={undefined}
      />
      <ValidateMetaContent
        name="twitter:image"
        content={metaTag?.og?.twitter?.image}
        property={undefined}
      />

      {/* <--iOS--> */}
      {/* <ValidateMetaContent property="al:ios:url" content=" ios app URL" name={undefined} />
      <ValidateMetaContent property="al:ios:app_store_id" content="ios app store ID" name={undefined} /> 
      <ValidateMetaContent property="al:ios:app_name" content="ios app name" name={undefined} />  */}

      {/* <--Android--> */}
      {/* <ValidateMetaContent property="al:android:url" content="Android App URL" name={undefined} />
      <ValidateMetaContent property="al:android:app_name" content="Android App name" name={undefined} />
      <ValidateMetaContent property="al:android:package" content="Android package name" name={undefined} /> 
      <ValidateMetaContent property="al:web:url" content="Android App URL" name={undefined} /> */}
    </Head>
  );
};

export default CLHeader;
