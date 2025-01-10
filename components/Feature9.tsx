import React from 'react';
import { CTAButtonEffect, textToJustifyAlign } from '../utility/util';
import Link from 'next/link';
import FadeInEffect from './FadeInEffect';

const Feature9 = ({
  data,
  isScrollable = false,
  AMEFF,
  HSM,
  HMD,
  IMGRR,
  ICSEEQ,
  BGCR,
  LTSASM,
  LTSAMD,
  BTALMD,
  LATECR,
  LBFWEA,
  LFSS,
  TECCT3,
  TFWWET,
  TFSSMS,
  TFSMDD,
  SBTC2,
  SBTFWQ,
  SBMW2,
  SBTFSSM2,
  SBFSMD,
  B1EE3,
  BBGC,
  B1BGCH,
  B1FSSM,
  B1FSMD,
  B1WE,
  B1HT,
  B1WT,
  B1RDC,
  B1OLC,
  B1HOLC,
  B1TCR,
  B1TCHH,
  B1FSS,
  B2EE3,
  B2BGC,
  B2BGCH,
  B2FSSM2,
  B2FSMD2,
  B2WE2,
  B2HT,
  B2WD,
  B2RDCS,
  B2OLC,
  B2HOLC,
  B2TC,
  B2TCHH2,
  B2FSS2,
  MVTTT,
}) => (
  <FadeInEffect once={false} AMEFF={undefined} >
    <div className={`${isScrollable ? 'h-screen-dvh' : ''} ${BGCR} overflow-hidden sm:${HSM} md:${HMD}`} ref={MVTTT}>
      <div className="mx-auto text-center sm:max-w-3xl md:max-w-7xl">
        {(data?.label || data?.title || data?.SBTT) && (
          <div className="sm:px-6  md:px-8">
            <h2 className={`tracking-wider uppercase ${LFSS} ${LBFWEA} ${LATECR} sm:${LTSASM} md:${LTSAMD}`}>{data?.label}</h2>
            <p className={`mt-4 tracking-tight sm:${TFSSMS} md:${TFSMDD} ${TFWWET} ${TECCT3} sm:${LTSASM} md:${LTSAMD}`}>{data?.title}</p>
            <div className={`flex sm:${textToJustifyAlign(LTSASM)} md:${textToJustifyAlign(LTSAMD)}`}>
              <p className={`mt-10 ${SBMW2} ${SBTC2} ${SBTFWQ} sm:${LTSASM} sm:${SBTFSSM2} md:${LTSAMD} md:${SBFSMD}`}>{data?.SBTT}</p>
            </div>
            <div className={`flex flex-col mt-12 space-y-4 space-x-0 md:items-center 
            md:flex-row md:mt-8 md:space-y-0 md:space-x-4 md:${textToJustifyAlign(BTALMD)}`}
            >
              {B1EE3 && (
                <CTAButtonEffect
                  className="flex items-center"
                >
                  <Link
                    href={data?.B1L}
                    className={`shadow-md border border-transparent outline outline-offset-none outline-2 ${B1OLC} ${B1RDC}
                      ${BBGC} ${B1FSSM} ${B1WE} ${B1TCR} hover:${B1HOLC}
                      hover:${B1BGCH} hover:${B1TCHH} hover:scale-105 hover:shadow-md
                      md:${B1FSMD} sm:w-full md:w-auto ${B1HT} md:${B1WT} ${B1FSS}`}
                  >
                    {data?.B1TT}
                  </Link>
                </CTAButtonEffect>
              )}
              {B2EE3 && (
                <CTAButtonEffect
                  className="flex items-center"
                >
                  <Link
                    href={data?.B2LK}
                    className={`shadow-md border border-transparent outline outline-offset-none outline-2 ${B2OLC} ${B2RDCS}
                      ${B2BGC} ${B2FSSM2} ${B2WE2} ${B2TC} hover:${B2HOLC}
                      hover:${B2BGCH} hover:${B2TCHH2} hover:scale-105 hover:shadow-md
                      md:${B2FSMD2} sm:w-full md:w-auto ${B2HT} md:${B2WD} ${B2FSS2}`}
                  >
                    {data?.B2TT}
                  </Link>
                </CTAButtonEffect>
              )}
            </div>
          </div>
        )}

        <div className={`mt-12 mx-auto ${isScrollable ? '' : 'sm:px-6  md:px-8 md:max-w-7xl'}`}>
          <img
            className={`h-full w-full object-cover rounded-lg ${ICSEEQ && 'shadow-xl ring-1'} ring-black ring-opacity-5`}
            src={IMGRR}
            alt=""
          />
        </div>
      </div>
    </div>
  </FadeInEffect>
);

export default Feature9;
