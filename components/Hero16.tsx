import React from 'react';
import Link from 'next/link';
import { CTAButtonEffect, textToJustifyAlign } from '../utility/util';
import CanvasScrollImages from './CanvasScrollImages';

const Hero16 = ({
  data,
  AMEFF,
  SCRPED,
  BGCR,
  BGHMSM,
  BGHMDD,
  ISCVTR,
  TFSSMS,
  TFSMDD,
  TECCT3,
  TFWWET,
  SBTFSSM2,
  SBFSMD,
  SBTC2,
  SBTFWQ,
  TSTBAQ,
  IMOP3,
  IB1EE,
  B1TCR,
  B1FSSM,
  B1FSMD,
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
  B2FSSM2,
  B2FSMD2,
  B2FWT,
  B2HT,
  B2WD,
  B2RDCS,
  B2OLC,
  B2HOLC,
  B2BGC,
  B2HVTC,
  B2HEBB2,
}) => (
  <div className={BGCR}>
    <div
      className={`absolute px-10 z-10 left-0 right-0 w-full flex flex-col justify-center items-center ${TSTBAQ} sm:${BGHMSM} md:${BGHMDD}`}
    >
      <div className="max-w-7xl mx-auto">
        <p className={`sm:pt-20 md:pt-0 ${TFWWET} ${TECCT3} sm:${TFSSMS} md:${TFSMDD}`}>
          {data?.title}
        </p>
        <p className={`pt-4 ${SBTFWQ} ${SBTC2} sm:${SBTFSSM2} md:${SBFSMD}`}>
          {data?.SBTT}
        </p>
        <div className={`max-w-7xl mt-8 w-full flex sm:flex-col md:flex-row justify-center md:${textToJustifyAlign(TSTBAQ)}`}>
          {IB1EE && (
            <CTAButtonEffect className="flex items-center">
              <div className={`my-2 sm:w-full md:w-auto ${IB2EE && 'md:mr-4'}`}>
                <Link
                  href={data?.B1L}
                  className={`flex shadow-md w-full justify-center border border-transparent outline outline-offset-none outline-2 ${B1OLC}
                      ${BBGC} ${B1HT} ${B1FSSM} ${B1TCR} ${B1FW} ${B1RDC} 
                      md:${B1FSMD} md:${B1WT} hover:${B1HOLC} hover:${B1HVEFBG} hover:${B1HTC} hover:scale-105 hover:shadow-xs`}
                >
                  {data?.B1TT}
                </Link>
              </div>
            </CTAButtonEffect>
          )}
          {IB2EE && (
            <CTAButtonEffect className="flex items-center">
              <div className="my-2 sm:w-full md:w-auto">
                <Link
                  href={data?.B2LK}
                  className={`flex shadow-md w-full justify-center border border-transparent outline outline-offset-none outline-2 ${B2OLC}
                      ${B2BGC} ${B2FSSM2} ${B2TC} ${B2FWT} ${B2HT} ${B2RDCS} hover:${B2HOLC}
                      sm:w-full md:w-auto md:${B2WD} md:${B2FSMD2} hover:${B2HEBB2} hover:${B2HVTC} hover:scale-105 hover:shadow-xs`}
                >
                  {data?.B2TT}
                </Link>
              </div>
            </CTAButtonEffect>
          )}
        </div>
      </div>
    </div>
    <div className={`w-full h-full overflow-hidden mx-auto ${IMOP3} sm:${BGHMSM} md:${BGHMDD}`}>
      <CanvasScrollImages data={data} SCRPED={SCRPED} ISCVTR={ISCVTR} />
    </div>
  </div>
);

export default Hero16;
