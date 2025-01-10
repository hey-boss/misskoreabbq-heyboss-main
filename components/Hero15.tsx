import React, { useEffect, useState } from 'react';
import Hero15SVG1 from './Hero15SVG1';
import { CTAButtonEffect } from '../utility/util';
import RotatingEffectMid from './RotatingEffectMid';
import Link from 'next/link';
import SmoothlyAppear from './SmoothlyAppear';

const Hero15 = ({
  data,
  BGHMDD,
  BGCR,
  isCircularExist = true,
  circularFontSize,
  circularTextFill,
  isGraphicExist = true,
  graphicHeightMD,
  graphicHeightSM,
  TMW3,
  T1FSSM3,
  T1FSMD3,
  T1WT3,
  T1TCC3,
  T2FSSM3,
  T2FSMD3,
  T2WT3,
  T2TC3,
  T3FSSM3,
  T3FSMD3,
  T3WT3,
  T3TCRR3,
  SBMW2,
  SBTFSSM2,
  SBFSMD,
  SBTFWQ,
  SBTC2,
  IB1EE,
  B1TCR,
  B1FS,
  B1FW,
  B1HT,
  B1WT,
  B1RDC,
  B1OLC,
  B1HOLC,
  BBGC,
  B1HTC,
  B1HVEFBG,
  IB2EE,
  B2TC,
  B2FS,
  B2FWT,
  B2HT,
  B2WD,
  B2RDCS,
  B2OLC,
  B2HOLC,
  B2BGC,
  B2HVTC,
  B2HEBB2,
  VOOPURL,
  isAutoplay = true,
  isMuted = true,
  isPlayLoop = true,
  VOOP,
}) => {

  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    setIsRender(true);
  }, []);

  if (VOOPURL == null || isRender === false) {
    return <div />;
  }

  return (
    <div className="relative mx-auto h-full w-full ">
      {isCircularExist && (
        <RotatingEffectMid>
          <Hero15SVG1 circularTextFill={circularTextFill} circularFontSize={circularFontSize} circularText={data?.circularText} />
        </RotatingEffectMid>
      )}
      {isGraphicExist && (
        <div className="absolute md:-translate-x-1/2 md:top-1/2 md:left-1/2 md:right-auto sm:bottom-0 sm:right-0 sm:top-auto sm:left-auto">
          <img src={data?.graphicURL} alt={data?.graphicAlt} loading="lazy" className={`w-auto md:${graphicHeightMD} sm:${graphicHeightSM}`} />
        </div>
      )}
      <main className={`grid sm:grid-cols-1 md:grid-cols-2 ${BGCR}`}>
        <div className={`h-full flex items-center justify-center px-10 max-w-7xl md:${BGHMDD} sm:justify-start`}>
          <div className={`py-8 text-left md:mx-auto lg:px-12 ${TMW3}`}>
            <SmoothlyAppear
              once={false}
            >
              <h1 className="py-3 flex w-full flex-col tracking-tight">
                <span className={`block ${T1TCC3} ${T1WT3} sm:${T1FSSM3} md:inline md:${T1FSMD3}`}>
                  {/* intended space */}
                  {` ${data?.title1}`}
                </span>
                <div>
                  <span className={`inline ${T2TC3} ${T2WT3} sm:${T2FSSM3} md:${T2FSMD3}`}>
                    {/* intended space */}
                    {` ${data?.title2}`}
                  </span>
                  <span className={`inline ${T3TCRR3} ${T3WT3} sm:${T3FSSM3} md:${T3FSMD3}`}>
                    {/* intended space */}
                    {` ${data?.title3}`}
                  </span>
                </div>
              </h1>
              <p className={`mb-6 ${SBMW2} ${SBTFWQ} ${SBTC2} sm:${SBTFSSM2} md:${SBFSMD}`}>
                {data?.SBTT}
              </p>
            </SmoothlyAppear>
            <div className="flex md:space-x-5 sm:space-y-5 md:space-y-0 just mt-10 sm:flex-col md:flex-row">
              {IB1EE && (
                <CTAButtonEffect
                  className="flex"
                >
                  <a
                    href={data?.B1L}
                    className={
                      `${BBGC} ${B1TCR} ${B1FS} ${B1FW} hover:${B1HOLC}
                    hover:${B1HVEFBG} hover:scale-105 hover:shadow-xs hover:${B1HTC}
                    shadow-md md:space-x-4 outline outline-offset-none outline-2 ${B1OLC} ${B1RDC}
                    sm:w-full md:w-auto ${B2HT} md:${B2WD} text-center`
                    }
                  >
                    {data?.B1TT}
                  </a>
                </CTAButtonEffect>
              )}
              {IB2EE && (
                <CTAButtonEffect
                  className="flex"
                >
                  <Link
                    href={data?.B2LK}
                    className={
                      `${B2BGC} ${B2TC} ${B2FS} ${B2FWT} hover:${B2HOLC}
                    hover:${B2HEBB2} hover:scale-105 hover:shadow-xs hover:${B2HVTC}
                    shadow-md md:space-x-4 outline outline-offset-none outline-2 ${B2OLC} ${B2RDCS}
                    sm:w-full md:w-auto ${B1HT} md:${B1WT} text-center`
                    }
                  >
                    {data?.B2TT}
                  </Link>
                </CTAButtonEffect>
              )}
            </div>
          </div>
        </div>
        <div className="w-full items-center justify-center">
          <video
            className={`h-40vh right-0 top-0 w-full object-cover md:${BGHMDD}`}
            autoPlay={isAutoplay}
            loop={isPlayLoop}
            muted={isMuted}
            poster={VOOP}
          >
            <track kind="captions" srcLang="en" label="English" />
            <source src={VOOPURL} type="video/mp4" />
          </video>
        </div>
      </main>
    </div>
  )
};
export default Hero15;
