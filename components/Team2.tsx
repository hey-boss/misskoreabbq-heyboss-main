import React from 'react';
import { textToJustifyAlign, textToItemsAlign, transformWidthToHeight, gridColsByBreakPoint } from '../utility/util';
import SNSIcon from './SNSIcon';
import FlyingEffect from './FlyingEffect';

const Team2 = ({
  data,
  AMEFF,
  ANLEFEF,
  HSM,
  HMD,
  BGCR,
  TSBAAMDSM,
  TSBAAMDE,
  TMW3,
  TFSSMS,
  TFSMDD,
  TFWWET,
  TECCT3,
  TFFSP,
  SBMW2,
  SBTFSSM2,
  SBFSMD,
  SBTFWQ,
  SBTC2,
  SBTFS2,
  OSNEFWSM,
  OSNEFWMD,
  ICSEEQ,
  PSNFSSM,
  PSNFSMD,
  OSNEFW,
  OSNEFWSMT,
  PSNFSSP,
  OSNEFWSMTSM,
  OSNEFWSMTMD,
  OSNEFWSMTFSDW,
  OSNEFWSMTFSDWC,
  OSNEFWSMTFSD,
  ILKEE,
  LFSSSM,
  LFSSMD,
  LFSSSSE,
  TLFSSSSETCX,
  LFSSSSETCX,
  LFSSSS,
  ISEEWS,
  SNSIW,
  SNCIOC,
  SNSIhC2,
  BPDF,
  BPSMM,
  BPMDD,
  BPLGG,
  BPXXLL,
  BPXXXLE,
  MVTTT,
}) => (
  <div className={BGCR} ref={MVTTT}>
    <div className={`max-w-7xl mx-auto sm:px-6 sm:${HSM} md:px-8 md:${HMD}`}>
      {(data?.title || data?.SBTT) && (
        <div className={`px-6 flex flex-col justify-center sm:mb-12 sm:${textToItemsAlign(TSBAAMDSM)} md:mb-20 md:${textToItemsAlign(TSBAAMDE)}`}>
          <h1 className={`mb-4 w-full ${TMW3} ${TFWWET} ${TECCT3} sm:${TFSSMS} sm:${TSBAAMDSM} md:${TFSMDD} md:${TSBAAMDE} ${TFFSP}`}>{data?.title}</h1>
          <p className={`w-full ${SBMW2} ${SBTFWQ} ${SBTC2} sm:${SBTFSSM2} sm:${TSBAAMDSM} md:${SBFSMD} md:${TSBAAMDE} ${SBTFS2}`}>{data?.SBTT}</p>
        </div>
      )}
      <div className={`relative grid gap-x-6 gap-y-12 md:gap-x-8
            ${gridColsByBreakPoint(
        BPDF,
        BPSMM,
        BPMDD,
        BPLGG,
        BPXXLL,
        BPXXXLE,
      )}`}
      >
        {data?.people?.map((person) => (
          <FlyingEffect once={false} style={undefined} flyingEffectClassName={undefined}            >
            <div className="flex flex-col">
              <div className="mb-8 aspect-w-3 aspect-h-2">
                <img className={`object-cover ${ICSEEQ && 'shadow-lg'} rounded-lg`} src={person?.IMGRR} alt="" />
              </div>
              <div className="flex flex-col">
                <div>
                  <h3 className={`mb-2 ${OSNEFW} ${OSNEFWSMT} sm:${PSNFSSM} sm:${OSNEFWSM} md:${PSNFSMD} md:${OSNEFWMD} ${PSNFSSP}`}>{person?.name}</h3>
                  <p className={`${OSNEFWSMTFSDW} ${OSNEFWSMTFSDWC} sm:${OSNEFWSMTSM} sm:${OSNEFWSM} md:${OSNEFWSMTMD} md:${OSNEFWMD} ${OSNEFWSMTFSD}`}>{person?.role}</p>
                </div>
                {ILKEE && (
                  <div className={`mt-3 grow flex items-end sm:${textToJustifyAlign(OSNEFWSM)} md:${textToJustifyAlign(OSNEFWMD)}`}>
                    <a href={person?.linkURL} className={`inline-flex items-center ${LFSSSSE} ${TLFSSSSETCX} hover:${LFSSSSETCX} sm:${LFSSSM} md:${LFSSMD} ${LFSSSS}`}>
                      {person?.linkText && (
                        <>
                          {person?.linkText}
                          <span className="ml-2" aria-hidden="true">&rarr;</span>
                        </>
                      )}
                    </a>
                  </div>
                )}
                {ISEEWS && (
                  <div className={`mt-4 flex flex-wrap space-x-3 sm:${textToJustifyAlign(OSNEFWSM)} md:${textToJustifyAlign(OSNEFWMD)}`}>
                    {person?.SNS?.map((item) => (
                      <a key={item?.name} href={item?.href} className={`${SNCIOC} hover:${SNSIhC2}`}>
                        <span className="sr-only">{item?.name}</span>
                        <div className={`${SNSIW} ${transformWidthToHeight(SNSIW)}`} aria-hidden="true">{SNSIcon(item?.name)}</div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </FlyingEffect>
        ))}
      </div>
    </div>
  </div>
);

export default Team2;
