import React from 'react';
import { textToJustifyAlign } from '../utility/util';

const CTA1 = ({
  data,
  AMEFF,
  HSM,
  HMD,
  IMGRR,
  MBGCR3,
  SBGCCR,
  TSBTBASM,
  TSBTBAMD2,
  TECCT3,
  TFSSMS,
  TFSMDD,
  TFWWET,
  TFFSP,
  SBTC2,
  SBTFSSM2,
  SBFSMD,
  SBTFWQ,
  SBTFS2,
  CTRE,
  BTCEDD,
  CTRR,
  BFWE,
  EGEW,
  BFWET,
  CTRW,
  BXTTCCRS,
  BXTTCCR,
  BXTTC,
  BXTTCC,
  BGHMSME,
  BTAWWFXS,
  MVTTT,
}) => (
  <div className={`${MBGCR3} sm:${HSM} md:${HMD}`} ref={MVTTT}>
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 md:px-8">
      <div className={`${SBGCCR} rounded-lg shadow-xl overflow-hidden md:grid md:grid-cols-2 md:gap-4`}>
        <div className="pt-10 pb-12 px-8 sm:pt-16 md:px-16 md:py-16">
          <div className="md:self-center">
            <h2 className={`${TECCT3} ${TFWWET} sm:${TFSSMS} sm:${TSBTBASM} md:${TFSMDD} md:${TSBTBAMD2}`}>
              <span className={`block ${TFFSP}`}>{data?.title1}</span>
              <span className={`block ${TFFSP}`}>{data?.title2}</span>
            </h2>
            <p className={`mt-4 leading-6 ${SBTC2} ${SBTFWQ} sm:${SBTFSSM2} sm:${TSBTBASM} md:${SBFSMD} md:${TSBTBAMD2} ${SBTFS2}`}>{data?.SBTT}</p>
            <div className={`flex md:${textToJustifyAlign(TSBTBAMD2)}`}>
              {CTRE && (
                <a
                  href={data?.buttonLink}
                  className={
                    `mt-8 border border-transparent shadow flex justify-center sm:w-full md:w-auto outline outline-offset-none outline-2 ${BXTTCCR} ${BXTTCCRS}
                    ${CTRW} ${CTRR} ${BFWE} ${BTCEDD} ${BFWET} md:${EGEW} hover:${BXTTC}
                    hover:${BXTTCC} hover:${BGHMSME} hover:scale-105 hover:shadow-xs ${BTAWWFXS}`
                  }
                >
                  {data?.buttonText}
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
          <img
            className="transform rounded-md object-cover object-left-top sm:translate-x-16 md:translate-y-20"
            src={`${IMGRR}`}
            alt={data?.alt}
          />
        </div>
      </div>
    </div>
  </div>
);

export default CTA1;
