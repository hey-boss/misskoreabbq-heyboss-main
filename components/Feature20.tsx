import React from 'react';
import { textToJustifyAlign } from '../utility/util';
import Link from 'next/link';

const Feature20 = ({
  data,
  AMEFF,
  ANLEFEF,
  BGCR,
  HSM,
  HMD,
  F1BGCR1,
  F2BGCR1,
  F2BGCR1H,
  TSBTBQAS,
  TFSSMS,
  TFSMDD,
  TFWWET,
  T1TCC3,
  T2TC3,
  TFFSP,
  SBTFSSM2,
  SBFSMD,
  SBTFWQ,
  Q2TCRMTC,
  Q22CRMTC,
  SBTFS2,
  BTCEDD,
  BXTTCCRS,
  EGEW,
  BFWET,
  CTRW,
  BXT,
  bTARRAC,
  BTAWW,
  BTAWWFXS,
  TSBTBQS,
  Q2TCRMSM,
  Q2TCRMD,
  Q2TCRMFW,
  Q1TCR,
  Q2TCR,
  Q2TCRMFS,
  MVTTT,
}) => (
  <div className={`overflow-hidden ${BGCR} sm:${HSM} md:${HMD}`} ref={MVTTT}>
    {data?.features?.map((feature, index) => {
      const isEven = index % 2 === 0;
      return (
        <section className={`${index !== 0 && 'mt-20'}`}>
          <div className="relative max-w-7xl mx-auto">
            {/* Bg */}
            <div className={`absolute inset-0 mb-24 md:mb-0 pointer-events-none touch-none ${isEven ? `rounded-tr-[100px] ${F1BGCR1}` : `rounded-tl-[100px] bg-gradient-to-b ${F2BGCR1} ${F2BGCR1H}`}`} aria-hidden="true" />
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className={`pt-20 ${isEven ? 'md:py-20' : 'pb-6'}`}>
                {/* Section content */}
                <div className={`relative max-w-xl mx-auto md:max-w-none text-center md:text-left ${isEven ? '' : 'flex flex-col md:flex-row items-center justify-end'}`}>
                  {/* Content */}
                  <div className={`${TSBTBQAS} ${isEven ? 'md:max-w-lg' : 'w-[512px] max-w-full shrink-0 md:order-1'}`}>
                    {/* Copy */}
                    <h2 className={`mb-4 sm:${TFSSMS} md:${TFSMDD} ${TFWWET} ${TFFSP} ${isEven ? T1TCC3 : T2TC3}`}>{feature?.title}</h2>
                    <p className={`mb-8 sm:${SBTFSSM2} md:${SBFSMD} ${SBTFWQ} ${SBTFS2} ${isEven ? Q2TCRMTC : Q22CRMTC}`}>{feature?.SBTT}</p>
                    {/* Button */}
                    <div className="max-w-xs mx-auto sm:max-w-none mb-8">
                      <div>
                        <Link className={`sm:flex md:inline-flex justify-center shadow-md sm:w-full md:w-auto items-center whitespace-nowrap transition duration-150 ease-in-out group ${BXTTCCRS} ${EGEW} ${BFWET} ${BTCEDD} ${CTRW} hover:${BXT} shadow-sm ${BTAWWFXS}`} href={feature?.buttonLink}>
                          {feature?.buttonText}
                          <span className={`ml-2 tracking-normal transition-transform duration-150 ease-in-out ${bTARRAC} ${BTAWW} group-hover:translate-x-0.5`} aria-hidden="true">&rarr;</span>
                        </Link>
                      </div>
                    </div>
                    {/* Quote */}
                    {TSBTBQS && (
                      <div className={`flex ${textToJustifyAlign(TSBTBQAS)}`}>
                        <div className={`flex max-w-md mx-auto md:mx-0 ${TSBTBQAS}`}>
                          <img
                            className="rounded-full self-start shrink-0 mr-3"
                            src={feature?.imageURLQuoteAuthor}
                            width="32"
                            height="32"
                            alt={feature?.quoteAuthorAlt}
                          />
                          <div>
                            <blockquote className={`sm:${Q2TCRMSM} md:${Q2TCRMD} ${Q2TCRMFW} ${isEven ? Q1TCR : Q2TCR} ${Q2TCRMFS}`}>{feature?.quote}</blockquote>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Image */}
                  {isEven ? (
                    <div className="md:absolute sm:scale-75 md:scale-100 md:sca md:left-[412px] md:top-0 -mb-12 mt-8 md:mt-36 md:mb-0 z-10 ">
                      <div className="relative -mx-16 md:mx-0">
                        <div>
                          <img src={feature?.imageURLFeatures} className="md:max-w-none md:rotate-[48deg]" width="775" height="450" alt={feature?.featureImageAlt} />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full max-w-sm md:max-w-none md:mr-8 mt-8 md:mt-0 z-10">
                      <div className="relative -mx-8 md:mx-0">
                        <img
                          src={feature?.imageURLFeatures}
                          className="md:max-w-none"
                          width="496"
                          height="496"
                          alt={feature?.featureImageAlt}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    })}
  </div>
);

export default Feature20;
