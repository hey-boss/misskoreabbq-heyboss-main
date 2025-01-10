import React from 'react';
import { classNames } from '../utility/util';
import Link from 'next/link';

const MobileButton = ({
  data,
  BGCR,
  IB1EE,
  BBGC,
  B1TCR,
  B1WT,
  B1HT,
  B1FS,
  B1FW,
  B1RDC,
  B1OLC,
  B1HOLC,
  B1HBGC,
  B1HTC,
  IB2EE,
  B2BGC,
  B2TC,
  B2WD,
  B2HT,
  B2FS,
  B2FWT,
  B2RDCS,
  B2OLC,
  B2HOLC,
  B2HBGC,
  B2HVTC,
}) => (
  <div className={classNames((IB1EE || IB2EE) ? `${BGCR} border-gray-100 md:hidden sm:block` : '', 'flex flex-col items-center p-4')}>
    {IB1EE && (
      <Link
        href={data?.B1L}
        className={`${BBGC} hover:${B1HBGC} hover:scale-105 hover:${B1HTC} ${B1TCR} ${B1FS} ${B1FW} ${B1HT} md:${B1WT} hover:${B1HOLC}
        flex items-center justify-center border border-transparent sm:w-full md:w-auto outline outline-offset-none outline-2 ${B1OLC} ${B1RDC}`}
      >
        {data?.B1TT}
      </Link>
    )}
    {IB2EE && (
      <Link
        href={data?.B2LK}
        className={`mt-4 ${B2BGC} hover:${B2HBGC} hover:scale-105 hover:${B2HVTC} ${B2TC} ${B2FS} ${B2FWT} ${B2HT} md:${B2WD} hover:${B2HOLC}
        flex items-center justify-center border border-transparent sm:w-full md:w-auto outline outline-offset-none outline-2 ${B2OLC} ${B2RDCS}`}
      >
        {data?.B2TT}
      </Link>
    )}
  </div>
);
export default MobileButton;