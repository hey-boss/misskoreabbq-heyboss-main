import React from 'react';
import { gridColsByBreakPoint, textToJustifyAlign, transformWidthToHeight } from '../utility/util';
import Link from 'next/link';
import SNSIcon from './SNSIcon';
import FlyingEffect from './FlyingEffect';

const Footer1 = ({
  data,
  HSM,
  HMD,
  MBGCR3,
  LGMLUR,
  LGGAN,
  LGSSM,
  LGSMD,
  SLGWDSM,
  SLGWDED,
  SLGTTEA,
  SGFWEW,
  SLGFSMS,
  SLGFSMSD,
  SLGTECC,
  SNSICALG,
  SNCIOC,
  SNSIhC2,
  SNSMSMSM = 'w-8',
  SNSISSMD = 'w-8',
  NTTALQ,
  NTFFSMS,
  NVTFSMDD,
  NTFWEQ,
  NTTCOR,
  NAMVMTEA,
  NAMEFSMSM,
  NAMEFSMDD,
  NVMFWEE,
  NVMTEC,
  NMELINGRE,
  CPRTEASMQ,
  CPRTALMDD,
  CPFSSMS,
  CPRFSMD,
  CPRFWEQ,
  CPRTEC,
  DSBLHTCQ,
  DIVDLC,
  BPDF,
  BPSMM,
  BPMDD,
  BPLGG,
  BPXXLL,
  BPXXXLE,
  MVTTT,
}) => {
  /**
 * Scrolls the specified ref into view with smooth behavior.
 *
 * @param {React.RefObject} moveRef - The ref to scroll into view.
 */
  const buttonOnClick = (moveRef) => {
    if (moveRef.current) {
      moveRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <footer className={MBGCR3} aria-labelledby="footer-heading" ref={MVTTT}>
      <div className={`max-w-7xl mx-auto flex flex-col gap-8 sm:px-6 sm:${HSM} md:px-8 md:${HMD}`}>
        <div className="md:grid md:grid-cols-3 md:gap-8">
          <div className="space-y-8 md:col-span-1">
            <div className={`flex ${LGGAN}`}>
              <Link href={data?.LGLK}>
                <img
                  className={`w-auto hover:scale-105 sm:${LGSSM} md:${LGSMD}`}
                  src={LGMLUR}
                  alt=""
                />
              </Link>
            </div>
            <div className={`flex items-center ${textToJustifyAlign(SLGTTEA)}`}>
              <p className={`${SLGTECC} ${SGFWEW} ${SLGTTEA} sm:${SLGFSMS} sm:${SLGWDSM} md:${SLGFSMSD} md:${SLGWDED}`}>{data?.slogan}</p>
            </div>
            <div className={`flex flex-wrap ${SNSICALG}`}>
              {data?.socialNetworkServiceList?.map((item) => (
                <div className={`w-12 h-12 flex items-center ${SNSICALG}`}>
                  <Link key={item?.name} href={item?.href} className={`${SNCIOC} hover:${SNSIhC2}`} rel="noreferrer" target="_blank">
                    <>
                      <span className="sr-only">{item?.name}</span>
                      <div className={`sm:${SNSMSMSM} sm:${transformWidthToHeight(SNSMSMSM)} md:${SNSISSMD} md:${transformWidthToHeight(SNSISSMD)}`} aria-hidden="true">
                        {SNSIcon(item?.name)}
                      </div>
                    </>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className={`mt-12 grid gap-8 md:mt-0 md:col-span-2
          ${gridColsByBreakPoint(
            BPDF,
            BPSMM,
            BPMDD,
            BPLGG,
            BPXXLL,
            BPXXXLE,
          )}`}
          >
            {data?.navigation?.map((navigation) => (
              <FlyingEffect
                once={undefined}
                style={undefined}
                flyingEffectClassName={undefined}>
                <div key={navigation?.navTitle}>
                  <h3 className={`mb-4 tracking-wider uppercase ${NTTCOR} ${NTFWEQ} ${NTTALQ} sm:${NTFFSMS} md:${NVTFSMDD}`}>{navigation?.navTitle}</h3>
                  <ul role="list" className="space-y-4">
                    {navigation?.navMenu?.map((menu) => (
                      <li key={menu?.menuText}>
                        <Link
                          href={menu?.menuLink}
                          className={`${NVMTEC} ${NVMFWEE} ${NAMVMTEA} hover:${NMELINGRE} sm:${NAMEFSMSM} md:${NAMEFSMDD}`}
                          // customOnClick={() => { buttonOnClick(menu?.ref); }}
                          // customRef={menu?.ref}
                        >
                          {menu?.menuText}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </FlyingEffect>
            ))}
          </div>
        </div>
        <div className={`flex border-t ${DIVDLC} ${CPRTALMDD}`}>
          <p className={`pt-8 inline ${CPRTEC} ${CPRFWEQ} ${CPRTEASMQ} sm:${CPFSSMS} md:${CPRFSMD}`}>
            &copy;
            {/* intended space */}
            {` ${new Date().getFullYear()} ${data?.copyright} Designed By `}
            <Link href="https://www.heyboss.us/" className={`hover:${DSBLHTCQ}`}>
              HeyBoss
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
