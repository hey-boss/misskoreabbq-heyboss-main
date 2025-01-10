import React, { useState, useEffect } from 'react';
import { CTAButtonEffect, gridColsByBreakPoint } from '../utility/util';
import IsSmallViewHook from './IsSmallViewHook';
import IsLargeViewHook from './IsLargeViewHook';
import Link from 'next/link';
import FlyingEffect from './FlyingEffect';

const Feature35 = ({
  data,
  INTRTS,
  AMEFF,
  ANLEFEF,
  HSM,
  HMD,
  BGCR,
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
  ARBBGC,
  ARBBGCC,
  ARTCA,
  ARTSMTC,
  ARTSMFW,
  ARTSM,
  ARTMD,
  ARBBGTC,
  ARBBGFW,
  ARBBGSM,
  ARBBGMD,
  ATCG,
  LALSM,
  LALMD,
  LFSSSM,
  LFSSMD,
  LFSSSSE,
  TLFSSSSETCX,
  BXTTCCRS,
  CTRR,
  BFWE,
  EGEW,
  BFWET,
  BTCEDD,
  CTRW,
  BXTTCCR,
  BXTTC,
  BXTTCC,
  BXT,
  BPDF,
  BPSMM,
  BPMDD,
  BPLGG,
  MVTTT,
  RDLNK,
}) => {
  const isSmallViewHook = IsSmallViewHook();
  const isLargeViewHook = IsLargeViewHook();

  /* **
  Thi calculates the number of articles to display based on
  the current viewport and initial number of rows.
  - If the viewport is small, it multiplies BPSMM by INTRTS.
  - If the viewport is large, it multiplies BPLGG by INTRTS.
  - For other cases (medium view), it multiplies BPMDD by INTRTS.
  ** */
  const getArticlesToShow = () => {
    if (isSmallViewHook) return BPSMM * INTRTS;
    if (isLargeViewHook) return BPLGG * INTRTS;
    return BPMDD * INTRTS;
  };
  const [showArticles, setShowArticles] = useState(getArticlesToShow());


  const viewMore = () => {
    setShowArticles(data?.articles?.length);
  };

  const viewLess = () => {
    setShowArticles(getArticlesToShow());
  };

  useEffect(() => {
    setShowArticles(getArticlesToShow());
  }, [INTRTS, isSmallViewHook, isLargeViewHook, BPSMM, BPMDD, BPLGG]);

  return (
    <div className={`sm:px-6 md:px-8 ${BGCR} sm:${HSM} md:${HMD}`} ref={MVTTT}>
      <div className={`max-w-7xl mx-auto sm:${TSBAAMDSM} md:${TSBAAMDE}`}>
        <div>
          <h2 className={`px-6 tracking-wide ${TFWWET} ${TECCT3} sm:${TFSSMS} md:${TFSMDD}`}>{data?.title}</h2>
          <p className={`px-6 mt-3 mx-auto sm:mt-4 ${SBTFWQ} ${SBTC2} sm:${SBTFSSM2} md:${SBFSMD}`}>{data?.SBTT}</p>
        </div>
        <div className={`mt-12 mx-auto grid ${ATCG} ${gridColsByBreakPoint(
          BPDF,
          BPSMM,
          BPMDD,
          BPLGG,
        )}`}
        >
          {data?.articles?.slice(0, showArticles).map((article) => (
            <FlyingEffect style={undefined} flyingEffectClassName={undefined} once={false}>
              <Link href={`${RDLNK}?id=${article?.linkURL}`}>
                <div key={article?.title} className={`h-full relative flex flex-col rounded-lg shadow-lg overflow-hidden group ${ARTCA} ${ARBBGC} hover:${ARBBGCC}`}>
                  <div className="relative flex-0 p-6 block mt-2">
                    <p className={`truncate ... tracking-normal ${ARTSMTC} ${ARTSMFW} sm:${ARTSM} md:${ARTMD}`}>{article?.title}</p>
                    <div className={`mt-3 truncate ... tracking-normal ${ARBBGFW} ${ARBBGTC} sm:${ARBBGSM} md:${ARBBGMD}`}
                      dangerouslySetInnerHTML={{ __html: article?.content || "" }} />
                    {article?.linkText && (
                      <p className={`mt-4 flex ${TLFSSSSETCX} ${LFSSSSE} sm:${LFSSSM} sm:${LALSM} md:${LFSSMD} md:${LALMD}`}>
                        {article?.linkText}
                        <span className={`ml-2 tracking-normal transition-transform duration-150 ease-in-out group-hover:translate-x-0.5 ${TLFSSSSETCX} ${LFSSSSE}`} aria-hidden="true">&rarr;</span>
                      </p>
                    )}
                  </div>
                  <div className="flex-none justify-center items-center">
                    <img
                      className="h-52 w-auto mx-auto object-contain px-8 py-8"
                      src={article?.IMGRR}
                      alt=""
                      style={{ maxHeight: 210 }}
                    />
                  </div>
                </div>
              </Link>
            </FlyingEffect>
          ))}
        </div>
        <CTAButtonEffect className="sm:grow md:grow-0">
          <button type="button" className="mt-10 sm:w-full md:flex justify-center" onClick={(showArticles < data.articles.length) ? viewMore : viewLess}>
            <div className={`${BTCEDD} ${CTRW} ${CTRR} ${BFWE} ${BXTTCCRS} ${BFWET} 
              hover:scale-105 hover:shadow-xs hover:${BXTTC} hover:${BXTTC} hover:${BXTTCC} hover:${BXT}
              outline outline-offset-none outline-2 ${BXTTCCR}  md:${EGEW}`}
            >
              {(showArticles < data?.articles?.length) ? <p> View More &darr; </p> : <p> View Less &uarr; </p>}
            </div>
          </button>
        </CTAButtonEffect>
      </div>
    </div>
  );
};

export default Feature35;
