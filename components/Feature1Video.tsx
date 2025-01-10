import React from 'react';
import DotGraphicSvgReusable from './DotGraphicReusable';
import { classNames } from '../utility/util';
import IconZip from './IconZip';
import VideoPlayer2 from './VideoPlayer2';
import SmoothlyAppear from './SmoothlyAppear';

const Feature1Video = ({
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
  TFFSP,
  SBTC2,
  SBTWE2,
  SBTFSSM2,
  SBFSMD,
  SBTFS2,
  FBWED,
  FTTTCR,
  FTTTCRWE,
  FDDRFESSMMDDMS,
  FDDRFESSMMDD,
  FTFSS,
  FDDRFESSMDZ,
  FDDRFESSMDX,
  FDDRFESSMD,
  FDDRFESMD,
  FDDFS,
  FTFSSFSC,
  FTFSSFS,
  FTFSSFSW,
  FTFSSFSP,
  ICEEEA,
  ICC,
  IBCCGC,
  SBFMDSWSMTC,
  SFEEWE,
  SBFMDSWSM,
  SBFMDSWMD,
  SBFMDSWSMFS,
  SBFMDSC,
  SBFMDSW,
  SBFMDS,
  SBFMD,
  SBFMDSS,
  VRHQ,
  VRHQD,
  MVTTT,
}) => (
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
          <h2 className={`leading-8 ${TWW32} ${TECCT3} sm:${TSBAAMDSM} sm:${TFSSMS} md:${TSBAAMDE} md:${TFSMDD} ${TFFSP}`}>{data?.title}</h2>
          <p className={`mt-4 mx-auto text-center ${SBTWE2} ${SBTC2} sm:${TSBAAMDSM} sm:${SBTFSSM2} md:${TSBAAMDE} md:${SBFSMD} ${SBTFS2}`}>{data?.SBTT}</p>
        </div>
      )}
      <div className="sm:space-y-20 md:space-y-32">
        {data?.feature?.map((feature) => (
          <SmoothlyAppear
            once={false}
          >
            <div key={feature?.featureDescription} className="relative">
              <div className={`md:flex md:items-center md:gap-16 ${feature?.videoPos === 'left' && 'md:flex-row-reverse'}`}>
                <div className={`md:${FBWED}`}>
                  <h3 className={`${FTTTCRWE} ${FTTTCR} sm:${FDDRFESSMMDDMS} md:${FDDRFESSMMDD} ${FTFSS}`}>{feature?.featureTitle}</h3>
                  <p className={`mt-3 ${FDDRFESSMDX} ${FDDRFESSMDZ} sm:${FDDRFESSMD} md:${FDDRFESMD} ${FDDFS}`}>{feature?.featureDescription}</p>
                  {(feature?.subFeature?.length > 0) && (
                    <ul className="mt-10 space-y-10">
                      {feature?.subFeature?.map((subFeature) => (
                        <div key={subFeature?.subFeatureTitle} className="relative">
                          <div>
                            {ICEEEA && (
                              <div className={`absolute flex items-center justify-center w-12 h-12 rounded-md ${IBCCGC} ${ICC}`}>
                                <IconZip type={subFeature.iconType} value={subFeature?.icon} style={undefined} />
                              </div>
                            )}
                            <p className={classNames(ICEEEA ? 'ml-16' : 'ml-0', `text-lg leading-6 ${SFEEWE} ${SBFMDSWSMTC} sm:${SBFMDSWSM} md:${SBFMDSWMD} ${SBFMDSWSMFS}`)}>{subFeature?.subFeatureTitle}</p>
                          </div>
                          <div className={classNames(ICEEEA ? 'ml-16' : 'ml-0', `mt-2 ${SBFMDSW} ${SBFMDSC} sm:${SBFMDS} md:${SBFMD} ${SBFMDSS}`)}>{subFeature?.subFeatureDescription}</div>
                        </div>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="w-full h-full sm:mt-10 md:mt-0">
                  {feature?.videoPos === 'left' && (
                    GR1EE && (
                      <DotGraphicSvgReusable
                        classNames="absolute left-1/2 transform -translate-x-1/2 translate-y-16 md:hidden"
                        width={784}
                        height={404}
                        graphicColor={GCR1R}
                        id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                      />
                    ))}
                  {feature?.videoPos === 'right' && (
                    G2EEQ && (
                      <DotGraphicSvgReusable
                        classNames="absolute left-1/2 transform -translate-x-1/2 translate-y-16 md:hidden"
                        width={784}
                        height={404}
                        graphicColor={G2CRRE}
                        id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                      />
                    ))}
                  {feature?.featureVideoURL && (
                    <VideoPlayer2
                      VOOPURL={feature?.featureVideoURL}
                      VOOP={feature?.VOOP}
                      hasControl={feature?.hasControl}
                      isPlayLoop={feature?.isPlayLoop}
                      isAutoplay={feature?.isVideoAutoplay}
                      VRHQ={VRHQ}
                      VRHQD={VRHQD}
                      videoStyle={undefined} />
                  )}
                  {feature?.videoCaption && (
                    <div className={`pt-4 ${FTFSSFSC} ${FTFSSFS} ${FTFSSFSW} ${FTFSSFSP}`}>
                      {feature?.videoCaption}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </SmoothlyAppear>
        ))}
      </div>
    </div>
  </div>
);

export default Feature1Video;
