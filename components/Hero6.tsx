import React from 'react';
import { CTAButtonEffect, textToJustifyAlign } from '../utility/util';
import SmoothlyAppear from './SmoothlyAppear';

const Hero6 = ({
  data,
  HSM,
  HMD,
  IMGRR,
  ImageHeightMD,
  MBGCR3,
  TSBTBASM,
  TSBTBAMD2,
  titleWidth,
  TSVTL3,
  TSHTA3,
  T1TCC3,
  T1FSSM3,
  T1FSMD3,
  T1WT3,
  T2TC3,
  T2FSSM3,
  T2FSMD3,
  T2WT3,
  T3TCRR3,
  T3FSSM3,
  T3FSMD3,
  T3WT3,
  subtitleWidth,
  SBTC2,
  SBTFSSM2,
  SBFSMD,
  SBTWE2,
  B1EE3,
  B1TCR,
  BBGC,
  B1FSSM,
  B1FSMD,
  B1WE,
  B1HT,
  B1WT,
  B1RDC,
  B1OLC,
  B1HOLC,
  B1HVEFBG,
  B2EE3,
  B2TC,
  B2BGC,
  B2FSSM2,
  B2FSMD2,
  B2WE2,
  B2HT,
  B2WD,
  B2RDCS,
  B2OLC,
  B2HOLC,
  B2HEBB2,
  MVTTT,
}) => (
  <div className={`w-full ${MBGCR3} sm:${HSM} md:${HMD} md:flex`} ref={MVTTT}>
    <div className="max-w-7xl mx-auto grid grid-cols-1 items-center sm:px-6 md:px-8 md:grid-cols-2 md:space-x-5 content-center h-auto">
      <div className="sm:order-1 md:order-last md:w-auto">
        <SmoothlyAppear
          once={false}
        >
          <h1 className={`tracking-tight ${titleWidth} ${TSVTL3} sm:${TSBTBASM} md:${TSBTBAMD2}`}>
            <span className={`block ${T1TCC3} ${T1WT3} sm:${T1FSSM3} md:${T1FSMD3}`}>{data?.title1}</span>
            <div className={`flex flex-wrap ${TSHTA3}`}>
              <span className={`inline-block ${T2TC3} ${T2WT3} sm:${T2FSSM3} md:${T2FSMD3}`}>{data?.title2}</span>
              <span className={`inline-block ${T3TCRR3} ${T3WT3} sm:${T3FSSM3} md:${T3FSMD3}`}>{data?.title3}</span>
            </div>
          </h1>
          <p className={`sm:mt-6 flex ${subtitleWidth} ${SBTC2} ${SBTWE2} sm:${SBTFSSM2} sm:${TSBTBASM} md:mt-10 md:${SBFSMD} md:${TSBTBAMD2}`}>{data?.SBTT}</p>
          <div className={`mt-10 md:flex md:${textToJustifyAlign(TSBTBAMD2)}`}>
            {B1EE3 && (
              <CTAButtonEffect smWidth="full" className="flex items-center">
                <div className={`${B1RDC} sm:grow md:grow-0 sm:my-2 md:mr-4 md:mx-0 shadow`}>
                  <a
                    href={data?.B1L}
                    className={
                      `flex items-center justify-center outline outline-offset-none outline-2 ${B1OLC} ${B1RDC}
                    ${BBGC} ${B1FSSM} ${B1TCR} ${B1WE}
                    hover:${B1HVEFBG} hover:scale-105 hover:shadow-md hover:${B1HOLC}
                    md:${B1FSMD} sm:w-full md:w-auto ${B1HT} md:${B1WT}`
                    }
                  >
                    {data?.B1TT}
                  </a>
                </div>
              </CTAButtonEffect>
            )}
            {B2EE3 && (
              <CTAButtonEffect smWidth="full" className="flex items-center">
                <div className={`${B2RDCS} sm:grow md:grow-0 shadow sm:my-2 md:mx-0`}>
                  <a
                    href={data?.B2LK}
                    className={
                      `flex items-center justify-center outline outline-offset-none outline-2 ${B2OLC} ${B2RDCS}
                    ${B2BGC} ${B2FSSM2} ${B2TC} ${B2WE2} 
                    hover:${B2HEBB2} hover:scale-105 hover:shadow-md hover:${B2HOLC}
                    md:${B2FSMD2} sm:w-full md:w-auto ${B2HT} md:${B2WD}`
                    }
                  >
                    {data?.B2TT}
                  </a>
                </div>
              </CTAButtonEffect>
            )}
          </div>
        </SmoothlyAppear>
      </div>
      <div className={`sm:order-last md:order-1 md:max-w-full md:pr-16 md:self-center md:${ImageHeightMD}`}>
        <div className="sm:h-72 md:h-full md:inset-y-0 md:right-0">
          <img
            className="w-full h-full object-cover rounded-t-full"
            src={IMGRR}
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
);

export default Hero6;
