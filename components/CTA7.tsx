import React from 'react';
import { ExternalLinkIcon } from '@heroicons/react/solid';
import { CTAButtonEffect, textToItemsAlign, textToJustifyAlign } from '../utility/util';
import Link from 'next/link';

const CTA7 = ({
  data,
  AMEFF,
  HSM,
  HMD,
  IMGRR,
  imhHDSM,
  imhHDMD,
  IMGOVLAC,
  IMGOVLACOP,
  B1HVICOCFEE,
  LATCBTALMMS,
  LATCBTALMD,
  LATECR,
  LbFSSM,
  LFSMDD,
  LBFWEA,
  TECCT3,
  TFSSMS,
  TFSMDD,
  TFWWET,
  CTECRX,
  CTFSSM3,
  CTFSMDD,
  CTFWE,
  IB1EE,
  B1TCR,
  B1FS,
  B1FW,
  B1HT,
  B1WT,
  B1RDC,
  B1OLC,
  B1HOLC,
  BBGC,
  B1HTC,
  B1HVEFBG,
  IB1UCIE,
  B1HVICOC,
  B1HVICO,
  IB2EE,
  B2TC,
  B2FS,
  B2FWT,
  B2HT,
  B2WD,
  B2RDCS,
  B2OLC,
  B2HOLC,
  B2BGC,
  B2HVTC,
  B2HEBB2,
  MVTTT,
}) => (
  <div className={`relative ${B1HVICOCFEE} sm:${HSM} md:${HMD}`} ref={MVTTT}>
    <div className="grid grid-cols-1 max-w-7xl mx-auto px-4 py-12 sm:px-6 md:grid-cols-2 md:px-8 md:py-16">
      <div className="flex justify-center items-center">
        <div className={`relative w-full sm:${imhHDSM} md:left-0 md:${imhHDMD}`}>
          <img
            className="h-full w-full object-cover"
            src={IMGRR}
            alt={data?.alt}
          />
          <div className={`absolute inset-0 h-full w-full ${IMGOVLAC} ${IMGOVLACOP}`} />
        </div>
      </div>
      <div className="sm:pt-10 md:p-10 md:flex md:flex-col md:justify-center">
        {data?.label && (
          <h2 className={`uppercase tracking-wider ${LATECR} ${LBFWEA} sm:${LbFSSM} sm:${LATCBTALMMS} md:${LFSMDD} md:${LATCBTALMD}`}>{data?.label}</h2>
        )}
        {data?.title && (
          <p className={`mt-4 tracking-tight ${TECCT3} ${TFWWET} sm:${TFSSMS} sm:${LATCBTALMMS} md:${TFSMDD} md:${LATCBTALMD}`}>{data?.title}</p>
        )}
        {data?.content && (
          <p className={`mt-4 ${CTECRX} ${CTFWE} sm:${CTFSSM3} sm:${LATCBTALMMS} md:${CTFSMDD} md:${LATCBTALMD}`}>{data?.content}</p>
        )}
        {(IB1EE || IB2EE) && (
          <div className={`mt-8 flex sm:flex-col sm:justify-center sm:${textToItemsAlign(LATCBTALMMS)} md:flex-row md:${textToJustifyAlign(LATCBTALMD)}`}>
            {IB1EE && (
              <CTAButtonEffect className="sm:w-full md:w-auto">
                <Link
                  href={data?.B1L}
                  className={
                    `group inline-flex items-center justify-center border border-transparent shadow ${B1HT} ${B1WT} ${B1RDC}
                      ${B1TCR} ${B1FS} ${B1FW} ${BBGC} outline outline-offset-none outline-2 ${B1OLC}
                      hover:${B1HTC} hover:${B1HVEFBG} hover:scale-105 hover:shadow-xs hover:${B1HOLC}
                      sm:w-full sm:mb-4 md:w-auto md:mb-0 md:mr-4`
                  }
                >
                  {data?.B1TT}
                  {IB1UCIE && (
                    <ExternalLinkIcon className={`-mr-1 ml-3 h-5 w-5 ${B1HVICOC} group-hover:${B1HVICO}`} aria-hidden="true" />
                  )}
                </Link>
              </CTAButtonEffect>
            )}
            {IB2EE && (
              <CTAButtonEffect className="sm:w-full md:w-auto">
                <Link
                  href={data?.B2LK}
                  className={
                    `group inline-flex items-center justify-center border border-transparent shadow ${B2HT} ${B2WD} ${B2RDCS}
                      ${B2TC} ${B2FS} ${B2FWT} ${B2BGC} outline outline-offset-none outline-2 ${B2OLC}
                      hover:${B2HVTC} hover:${B2HEBB2} hover:scale-105 hover:shadow-xs hover:${B2HOLC}
                      sm:w-full md:w-auto`
                  }
                >
                  {data?.B2TT}
                </Link>
              </CTAButtonEffect>
            )}
          </div>
        )}
      </div>
    </div>
  </div>
);

export default CTA7;
