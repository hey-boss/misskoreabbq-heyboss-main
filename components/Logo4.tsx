import React, { useState, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { textToItemsAlign } from '../utility/util';
import FlyingEffect from './FlyingEffect';

const Logo4 = ({
  MVTTT,
  data,
  HSM,
  HMD,
  AMEFF,
  ANLEFEF,
  BGCR,
  TSBAAMDSM,
  TSBAAMDE,
  TTWSM,
  TTWMD,
  TFSSMS,
  TFSMDD,
  TFWWET,
  TECCT3,
  SBVMWSM,
  SBVMWMD,
  SBTFSSM2,
  SBFSMD,
  SBTFWQ,
  SBTC2,
  ATPD,
  isLoop,
  DISLOOT,
  SPVSM,
  SPVMSMM,
  SPVMD,
  SPVMDD,
}) => {
  const [loop, setLoop] = useState(0);

  const keyGenerator = () => {
    setLoop(loop + 1);
    return loop;
  };

  const keyValue = useMemo(() => keyGenerator(), [isLoop, SPVSM, SPVMSMM, SPVMD, SPVMDD, DISLOOT, ATPD]);

  return (
    <div className={`${BGCR} sm:${HSM} md:${HMD}`} ref={MVTTT}>
      <div className={`max-w-7xl mx-auto flex flex-col flex-none py-12 px-4 sm:px-6 md:px-8 sm:${textToItemsAlign(TSBAAMDSM)} sm:${TSBAAMDSM} md:${textToItemsAlign(TSBAAMDE)} md:${TSBAAMDE}`}>
        <h1 className={`${TFWWET} ${TECCT3} sm:${TTWSM} sm:${TFSSMS} md:${TTWMD} md:${TFSMDD}`}>
          {data?.title}
        </h1>
        <p className={`mt-4 ${SBTFWQ} ${SBTC2} sm:${SBTFSSM2} sm:${SBVMWSM} md:${SBFSMD} md:${SBVMWMD}`}>
          {data?.SBTT}
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 sm:py-1 md:py-6 md:px-8">
        <Swiper
          key={keyValue}
          enabled={isLoop}
          breakpoints={{
            0: {
              slidesPerView: SPVSM,
              spaceBetween: SPVMSMM,
            },
            1024: {
              slidesPerView: SPVMD,
              spaceBetween: SPVMD,
            },
          }}
          autoplay={{
            delay: ATPD,
            disableOnInteraction: DISLOOT,
          }}
          modules={[Autoplay]}
        >
          {data?.logoList?.map((logo) => (
            <FlyingEffect
              once={false} style={undefined} flyingEffectClassName={undefined}
            >
              <SwiperSlide key={logo?.imageAlt}>
                <div className="flex justify-center">
                  <img className="h-12" src={logo?.IMGRR} alt={logo?.imageAlt} />
                </div>
              </SwiperSlide>
            </FlyingEffect>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Logo4;
