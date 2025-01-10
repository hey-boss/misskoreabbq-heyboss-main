import React from 'react';
import { classNames } from '../utility/util';
import IconZip from './IconZip';
import DotGraphicSvgReusable from './DotGraphicReusable';
import SmoothlyAppear from './SmoothlyAppear';
import FadeInEffect from './FadeInEffect';

const Feature1 = ({
  data,
  AMEFF,
  ANLEFEF,
  HSM,
  HMD,
  BGCR,
  GR1EE,
  G2EEQ,
  GCR1R,
  G2CRRE,
  TSBAAMDSM,
  TSBAAMDE,
  TECCT3,
  TWW32,
  TFSSMS,
  TFSMDD,
  SBTC2,
  SBTWE2,
  SBTFSSM2,
  SBFSMD,
  FTTTCR,
  FTTTCRWE,
  FDDRFESSMMDDMS,
  FDDRFESSMMDD,
  FDDRFESSMDZ,
  FDDRFESSMDX,
  FDDRFESSMD,
  FDDRFESMD,
  ICEEEA,
  ICC,
  IBCCGC,
  SFDFSMDDSMDSC,
  SFDFSMDDSMW,
  SFDFSMDDSMDS,
  SFDFSMDDSMDD,
  SFDFSMDDSMC,
  SFDFSMDDSMCW,
  SFDFSMDDSM,
  SFDFSMDD,
  MVTTT,
}) => (
  <FadeInEffect once={false} AMEFF={undefined}  >
    <div className={`overflow-hidden ${BGCR} sm:${HSM} md:${HMD}`} ref={MVTTT}>
      <div className="relative max-w-xl mx-auto sm:px-6 md:px-8 md:max-w-7xl">
        {GR1EE && (
          <DotGraphicSvgReusable
            classNames="hidden md:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
            width={404}
            height={784}
            graphicColor={GCR1R}
            id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
          />
        )}
        {G2EEQ && (
          <DotGraphicSvgReusable
            classNames="hidden md:block absolute top-full right-full transform translate-x-1/2 -translate-y-96"
            width={404}
            height={784}
            graphicColor={G2CRRE}
            id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
          />
        )}
        {(data?.title || data?.SBTT) && (
          <div className="relative sm:mb-20 md:mb-32">
            {data?.title && (
              <h2 className={`leading-8 tracking-tight ${TWW32} ${TECCT3} sm:${TSBAAMDSM} sm:${TFSSMS} md:${TSBAAMDE} md:${TFSMDD}`}>{data?.title}</h2>
            )}
            {data?.SBTT && (
              <p className={`mt-4 mx-auto text-center ${SBTWE2} ${SBTC2} sm:${TSBAAMDSM} sm:${SBTFSSM2} md:${TSBAAMDE} md:${SBFSMD}`}>{data?.SBTT}</p>
            )}
          </div>
        )}
        <div className="sm:space-y-20 md:space-y-32">
          {data?.feature?.map((feature) => (
            <SmoothlyAppear
              once={false}
            >
              <div key={feature?.featureDescription} className="relative">
                <div className="md:grid md:grid-flow-row-dense md:grid-cols-2 md:gap-8 md:items-center">
                  <div className={feature?.imagePos === 'left' ? 'md:col-start-1' : 'md:col-start-2'}>
                    <h3 className={`${FTTTCRWE} ${FTTTCR} sm:${FDDRFESSMMDDMS} md:${FDDRFESSMMDD}`}>{feature?.featureTitle}</h3>
                    <p className={`mt-3 ${FDDRFESSMDX} ${FDDRFESSMDZ} sm:${FDDRFESSMD} md:${FDDRFESMD}`}>{feature?.featureDescription}</p>
                    {(feature?.subFeature && feature?.subFeature?.length > 0) && (
                      <ul className="mt-10 space-y-10">
                        {feature?.subFeature?.map((subfeature) => (
                          <li key={subfeature?.subfeatureTitle} className="relative">
                            {ICEEEA && (
                              <div className={`absolute flex items-center justify-center w-12 h-12 rounded-md ${IBCCGC} ${ICC}`}>
                                <IconZip type={subfeature.iconType} value={subfeature?.icon} style={undefined} />
                              </div>
                            )}
                            <p className={classNames(ICEEEA ? 'ml-16' : 'ml-0', `text-lg leading-6 ${SFDFSMDDSMW} ${SFDFSMDDSMDSC} sm:${SFDFSMDDSMDS} md:${SFDFSMDDSMDD}`)}>{subfeature?.subfeatureTitle}</p>
                            <p className={classNames(ICEEEA ? 'ml-16' : 'ml-0', `mt-2 ${SFDFSMDDSMCW} ${SFDFSMDDSMC} sm:${SFDFSMDDSM} md:${SFDFSMDD}`)}>{subfeature?.subfeatureDescription}</p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="relative sm:mt-10 md:mt-0">
                    {feature?.imagePos === 'left' && (
                      GR1EE && (
                        <DotGraphicSvgReusable
                          classNames="absolute left-1/2 transform -translate-x-1/2 translate-y-16 md:hidden"
                          width={784}
                          height={404}
                          graphicColor={GCR1R}
                          id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                        />
                      ))}
                    {feature?.imagePos === 'right' && (
                      G2EEQ && (
                        <DotGraphicSvgReusable
                          classNames="absolute left-1/2 transform -translate-x-1/2 translate-y-16 md:hidden"
                          width={784}
                          height={404}
                          graphicColor={G2CRRE}
                          id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                        />
                      ))}
                    <img
                      className="relative mx-auto"
                      width={490}
                      src={feature?.featureImageUrl}
                      alt={feature?.alt}
                    />
                  </div>
                </div>
              </div>
            </SmoothlyAppear>
          ))}
        </div>
      </div>
    </div>
  </FadeInEffect>
);
export default Feature1;
