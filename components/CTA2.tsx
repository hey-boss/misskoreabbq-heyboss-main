import React from 'react';
import { CTAButtonEffect } from '../utility/util';

const CTA2 = ({
  data,
  AMEFF,
  HSM,
  HMD,
  BGCR,
  TSBTBASM,
  TSBTBAMD2,
  MWW,
  TECCT3,
  TWW32,
  TFSSMS,
  TFSMDD,
  SBTC2,
  SBTWE2,
  SBTFSSM2,
  SBFSMD,
  CTRE,
  BTCEDD,
  CTRW,
  BFWET,
  EGEW,
  BXTTCCRS,
  BXTTCCR,
  BXTTC,
  BTSSE,
  BTWWE,
  BXTTCC,
  BGHMSME,
  MVTTT,
}) => (
  <div className={`${BGCR} sm:${HSM} md:${HMD}`} ref={MVTTT}>
    <div className={`mx-auto ${MWW} sm:px-6 sm:${TSBTBASM} md:px-8 md:${TSBTBAMD2}`}>
      <h2 className={`${TWW32} ${TECCT3} sm:${TFSSMS} md:${TFSMDD}`}>
        <span className="block">{data?.title1}</span>
        <span className="block">{data?.title2}</span>
      </h2>
      <p className={`mt-4 leading-6 ${SBTWE2} ${SBTC2} sm:${SBTFSSM2} md:${SBFSMD}`}>{data?.SBTT}</p>
      {CTRE && (
        <CTAButtonEffect className="flex justify-center ">
          <a
            href={data?.buttonLInk}
            className={`mt-8 w-full flex justify-center border border-transparent ${BTSSE} ${BTWWE} ${BTCEDD} ${CTRW} hover:${BXTTC} ${BXTTCCRS}
            sm:w-full md:w-auto ${BFWET} md:${EGEW} outline outline-offset-none outline-2 ${BXTTCCR} hover:scale-105 hover:${BXTTCC} hover:shadow-lg hover:${BGHMSME}`}
          >
            {data?.buttonText}
          </a>
        </CTAButtonEffect>
      )}
    </div>
  </div>
);
export default CTA2;
