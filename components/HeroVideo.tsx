
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import 'swiper/swiper.min.css';
import { CTAButtonEffect, textToJustifyAlign } from '../utility/util';
import HeroVideoComponent from './HeroVideoComponent';
import FadeInEffect from './FadeInEffect';
import ListExitBeforeEnter from './ListExitBeforeEnter';

const HeroVideo = ({
  data,
  isScrollable = false,
  AMEFF,
  HSM,
  HMD,
  TMW3,
  TSVTL3,
  PDTBSM,
  PDTBMD,
  CBVTASMM2,
  CBVTAMDD,
  CBHTASM,
  CBHTAMD,
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
  ISSNG,
  SWNC2,
}) => (
    <FadeInEffect once={false} AMEFF={AMEFF}>
      <section ref={MVTTT} className={`relative flex flex-col items-center text-center text-white py-0 px-4 sm:${CBVTASMM2} sm:${isScrollable ? 'h-screen-dvh' : HSM} md:${CBVTAMDD} md:${isScrollable ? 'h-screen-dvh' : HMD}`}>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <Swiper
            style={{
              '--swiper-pagination-color': 'red',
              '--swiper-navigation-color': SWNC2,
              '--swiper-pagination-bottom': '50px',
              '--swiper-pagination-right': '30px',
            } as React.CSSProperties}
            // spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: data?.VDDD || 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={ISSNG}
            modules={[Autoplay, Pagination, Navigation]}
            className="h-full"
          >
            {data?.VDDTA?.map((VDDTA) => (
              <SwiperSlide>
                <HeroVideoComponent url={VDDTA?.url} poster={VDDTA?.poster} autoPlay={undefined} muted={undefined} loop={undefined} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <main className={`z-10 w-full sm:${PDTBSM} md:${PDTBMD}`}>
          <ListExitBeforeEnter key={undefined}>
            <div className={`flex flex-col max-w-7xl mx-auto p-5 sm:${CBHTASM} md:${CBHTAMD}`}>
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
              <p className={`flex flex-col ${SBMW2} ${SBTC2} ${SBTWE2} sm:${SBTFSSM2} sm:${TSBTBASM} md:${SBFSMD} md:${TSBTBAMD2} ${SBTFS2}`}>{data?.SBTT}</p>
              <div className={`flex flex-col mt-12 space-y-4 space-x-0 sm:w-full md:items-center
            md:flex-row md:mt-8 md:space-y-0 md:space-x-4 md:${textToJustifyAlign(TSBTBAMD2)}`}
              >
                {B1EE3 && (
                  <CTAButtonEffect
                    className="flex items-center"
                  >
                    <a
                      href={data?.B1L}
                      className={`shadow-md w-full flex justify-center border border-transparent outline outline-offset-none outline-2 ${B1OLC} ${B1RDC}
                    ${BBGC} ${B1FSSM} ${B1WE} ${B1TCR} hover:${B1HOLC}
                    hover:${B1BGCH} hover:${B1TCHH} hover:scale-105 hover:shadow-md
                    md:${B1FSMD} sm:w-full md:w-auto ${B1HT} md:${B1WT} ${B1FSS}`}
                    >
                      {data?.B1TT}
                    </a>
                  </CTAButtonEffect>
                )}
                {B2EE3 && (
                  <CTAButtonEffect
                    className="flex items-center"
                  >
                    <a
                      href={data?.B2LK}
                      className={`shadow-md w-full flex justify-center border border-transparent outline outline-offset-none outline-2 ${B2OLC} ${B2RDCS}
                    ${B2BGC} ${B2FSSM2} ${B2WE2} ${B2TC} hover:${B2HOLC}
                    hover:${B2BGCH} hover:${B2TCHH2} hover:scale-105 hover:shadow-md
                    md:${B2FSMD2} sm:w-full md:w-auto ${B2HT} md:${B2WD} ${B2FSS2}`}
                    >
                      {data?.B2TT}
                    </a>
                  </CTAButtonEffect>
                )}
              </div>
            </div>
          </ListExitBeforeEnter>
        </main>
      </section>
    </FadeInEffect>

    );

    export default HeroVideo;
