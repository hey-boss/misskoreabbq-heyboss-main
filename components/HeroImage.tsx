import React from 'react';
import { CTAButtonEffect, textToJustifyAlign } from '../utility/util';
import Link from 'next/link';
import FadeInEffect from './FadeInEffect';
import ListExitBeforeEnter from './ListExitBeforeEnter';

const HeroImage = ({
  data,
  AMEFF,
  HSM,
  HMD,
  IMGRR,
  TMW3,
  TSVTL3,
  PDTBSM,
  PDTBMD,
  CBVTASMM2,
  CBVTAMDD,
  TSBTBASM,
  TSBTBAMD2,
  T1FSSM3,
  T1FSMD3,
  T1WT3,
  T1TCC3,
  T1FSS3,
  T2FSSM3,
  T2FSMD3,
  T2WT3,
  T2TC3,
  T2FS3,
  T3FSSM3,
  T3FSMD3,
  T3WT3,
  T3TCRR3,
  T3FSS3,
  SBMW2,
  SBTFSSM2,
  SBFSMD,
  SBTWE2,
  SBTC2,
  SBTFS2,
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
  <FadeInEffect
    once={false} AMEFF={undefined}  >
    <section className={`relative flex flex-col items-center text-center text-white py-0 px-4 sm:${CBVTASMM2} sm:${HSM} md:${CBVTAMDD} md:${HMD}`} ref={MVTTT}>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <img
          className="min-w-full min-h-full absolute object-cover"
          alt=""
          src={IMGRR}
        />
      </div>
      <main className={`z-10 w-full sm:${PDTBSM} md:${PDTBMD}`}>
        <ListExitBeforeEnter key={undefined}>
          <div className="max-w-7xl w-full mx-auto">
            <div className={`flex w-full sm:${textToJustifyAlign(TSBTBASM)} md:${textToJustifyAlign(TSBTBAMD2)}`}>
              <h1 className={`flex w-full flex-col tracking-tight ${TMW3} ${TSVTL3} sm:${TSBTBASM} md:${TSBTBAMD2}`}>
                <span className={`block ${T1TCC3} ${T1WT3} sm:${T1FSSM3} md:inline md:${T1FSMD3} ${T1FSS3}`}>
                  {/* intended space */}
                  {` ${data?.title1}`}
                </span>
                <div className={`${TSVTL3}`}>
                  <span className={`block ${T2TC3} ${T2WT3} sm:${T2FSSM3} md:inline md:${T2FSMD3} ${T2FS3}`}>
                    {/* intended space */}
                    {` ${data?.title2}`}
                  </span>
                  <span className={`block ${T3TCRR3} ${T3WT3} sm:${T3FSSM3} md:inline md:${T3FSMD3} ${T3FSS3}`}>
                    {/* intended space */}
                    {` ${data?.title3}`}
                  </span>
                </div>
              </h1>
            </div>
            <div className={`mt-8 flex w-full sm:${textToJustifyAlign(TSBTBASM)} md:${textToJustifyAlign(TSBTBAMD2)}`}>
              <p className={`w-full ${SBMW2} ${SBTC2} ${SBTWE2} sm:${SBTFSSM2} sm:${TSBTBASM} md:${SBFSMD} md:${TSBTBAMD2} ${SBTFS2}`}>{data?.SBTT}</p>
            </div>
            <div className={`flex flex-col mt-12 space-y-4 space-x-0 md:items-center 
            md:flex-row md:mt-8 md:space-y-0 md:space-x-4 md:${textToJustifyAlign(TSBTBAMD2)}`}
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
        </ListExitBeforeEnter>
      </main>
    </section>
  </FadeInEffect>
);

export default HeroImage;
