import React from 'react';
import { gridColsByBreakPoint, textToItemsAlign, transformWidthToHeight } from '../utility/util';
import FlyingEffect from './FlyingEffect';

const Feature19 = ({
  data,
  HSM,
  HMD,
  BGCR,
  IMGTDESM,
  IMGTDEDM,
  ISMGEEE,
  IMSSE,
  FGSSMS,
  FGSSMMD,
  DBDD3MSM,
  DBDD3MD,
  FTTTCRWE,
  FGSSMSC,
  FDDRFESSMD,
  FDDRFESMD,
  FDDRFESSMDX,
  FDDRFESSMDZ,
  DBDD3WW,
  DBDD3HH,
  DBDD3,
  BPDF,
  BPSMM,
  BPMDD,
  BPLGG,
  MVTTT,
}) => {
  const { length } = data.features;
  const isBorderRightExist = (indexInput, breakpointInput) => {
    if (indexInput % breakpointInput === breakpointInput - 1
      || indexInput === length - 1) {
      return false;
    }
    return true;
  };
  return (
    <div className={`${BGCR}`} ref={MVTTT}>
      <div className="max-w-6xl mx-auto sm:px-6">
        <div className={`md:pb-20 sm:${HSM} md:${HMD}`}>
          {/* Items */}
          <div className={`grid sm:${FGSSMS} md:gap-0 md:-mx-9 md:max-w-none
          ${gridColsByBreakPoint(
            BPDF,
            BPSMM,
            BPMDD,
            BPLGG,
          )}`}
          >
            {data?.features?.map((feature, index) => (
              <div key={feature?.IMGRR} className={`relative text-center md:px-9 py-9 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:${DBDD3WW} after:${DBDD3HH} after:${DBDD3} ${!isBorderRightExist(index, BPLGG) && 'md:after:hidden'}`}>
                <FlyingEffect
                  once={false}
                  style={undefined}
                  flyingEffectClassName={undefined}
                >
                  <div className="flex justify-center">
                    <div
                      className={`flex flex-col items-center ${FGSSMMD} sm:${textToItemsAlign(IMGTDESM)} md:${textToItemsAlign(IMGTDEDM)}`}
                    >
                      {ISMGEEE && (
                        <div className="mb-3 flex">
                          <img className={`${transformWidthToHeight(IMSSE)}`} src={feature?.IMGRR} alt="" />
                        </div>
                      )}
                      <h4 className={`mb-1 ${FTTTCRWE} ${FGSSMSC} sm:${DBDD3MSM} md:${DBDD3MD} sm:${IMGTDESM} md:${IMGTDEDM}`}>{feature?.featureTitle}</h4>
                      <p className={`${FDDRFESSMDZ} ${FDDRFESSMDX} sm:${FDDRFESSMD} md:${FDDRFESMD} sm:${IMGTDESM} md:${IMGTDEDM}`}>{feature?.featureDescription}</p>
                    </div>
                  </div>
                </FlyingEffect>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature19;
