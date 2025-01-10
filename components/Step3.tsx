import React from 'react';
import { textToItemsAlign, textToJustifyAlign, transformWidthToHeight } from '../utility/util';
import FlyingEffect from './FlyingEffect';

const Step3 = ({
  data,
  AMEFF,
  ANLEFEF,
  BGCR,
  HSM,
  HMD,
  CLMNWMD,
  TSBAAMDSM,
  TSBAAMDE,
  TECCT3,
  TFWWET,
  TFSSMS,
  TFSMDD,
  SBTC2,
  SBTFWQ,
  SBTFSSM2,
  SBFSMD,
  STPWCL,
  STPWCCS,
  STPWCC,
  STPWCFS,
  STPWCFCT,
  STPWCFASM,
  STPWCFAMD,
  STPWCFSSSM,
  STPWCFSMD,
  STEMOWW,
  STEMOWWTC,
  STPSM,
  STPMD,
  STPWT,
  STPWTC,
  MVTTT,
}) => (
  <section className={`${STPWTC} ${BGCR} sm:${HSM} md:${HMD}`} ref={MVTTT}>
    <div className="max-w-7xl mx-auto px-5 relative flex justify-center sm:flex-col md:flex-row">
      <div className={`grid grid-cols-1 py-10 sm:mb-12 md:mb-0 md:${CLMNWMD}`}>
        {(data?.title || data?.SBTT) && (
          <div className={`mb-12 flex flex-col justify-center sm:${textToItemsAlign(TSBAAMDSM)} md:${textToItemsAlign(TSBAAMDE)}`}>
            <h2 className={`mb-4 w-full tracking-tight ${TFWWET} ${TECCT3} sm:${TFSSMS} sm:${TSBAAMDSM} md:${TFSMDD} md:${TSBAAMDE}`}>{data?.title}</h2>
            <p className={`w-full ${SBTFWQ} ${SBTC2} sm:${SBTFSSM2} sm:${TSBAAMDSM} md:${SBFSMD} md:${TSBAAMDE}`}>{data?.SBTT}</p>
          </div>
        )}
        <img
          className="h-full w-full object-cover rounded-lg "
          src={data?.IMGRR}
          alt=""
        />
      </div>
      <div className="flex">
        <div className="flex-shrink-0 grid grid-cols-1 sm:pr-6 md:pl-20 md:pr-10">
          {data?.steps?.map((step, index) => (
            <div
              key={step?.stepTitle}
              className="h-full relative flex items-center"
            >
              <div className={`h-full relative inset-0 flex items-center justify-center ${STPWCCS}`}>
                <div className={`h-full w-1 pointer-events-none touch-none ${STPWCL}`} />
              </div>
              <div className={`flex-shrink-0 rounded-full inline-flex items-center justify-center absolute z-10 font-medium ${STPWCCS} ${transformWidthToHeight(STPWCCS)} ${STPWCC} ${STPWCFS} ${STPWCFCT}`}>{index + 1}</div>
            </div>
          ))}
        </div>
        <div className={`grid grid-cols-1 items-center md:${CLMNWMD} `}>
          {data?.steps?.map((step) => (
            <FlyingEffect
              once="false"
              style={undefined}
              flyingEffectClassName={undefined}
            >
              <div
                key={step?.stepTitle}
                className={`h-full relative  items-center flex sm:py-10 sm:${textToJustifyAlign(STPWCFASM)}  sm:${STPWCFASM} md:py-10 md:${textToJustifyAlign(STPWCFAMD)} md:${STPWCFAMD}`}
              >
                <div className="h-full flex flex-col justify-center">
                  <h2 className={`mb-2 ${STEMOWWTC} ${STEMOWW} sm:${STPWCFSSSM} md:${STPWCFSMD}`}>{step?.stepTitle}</h2>
                  <p className={`leading-relaxed ${STPWT} sm:${STPSM} md:${STPMD}`}>{step?.stepDescription}</p>
                </div>
              </div>
            </FlyingEffect>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Step3;
