import React from 'react';

const Banner1 = ({
  data,
  AMEFF,
  HSM,
  HMD,
  BGCR,
  CTNAALA,
  TALEE,
  TFSSMS,
  TFSMDD,
  TFWWET,
  TECCT3,
  LAC,
  LbFSSM,
  LFSMDD,
  LBFWEA,
  LATECR,
  CTALLA,
  CTEMWD3,
  CTFSSM3,
  CTFSMDD,
  CTFWE,
  CTECRX,
  MVTTT,
}) => (
  <div className={BGCR} ref={MVTTT}>
    <div className={`flex ${CTNAALA} mx-auto sm:px-6 sm:${HSM} md:px-8 md:${HMD}`}>

      {data?.map((datum) => (
        <div key={datum?.content?.replace(/ /g, '')}>
          <h2 className={`${LAC} ${LBFWEA} ${LATECR} tracking-wide uppercase sm:${LbFSSM} md:${LFSMDD}`}>{datum?.label}</h2>
          <p className={`${TALEE} ${TFWWET} ${TECCT3} mt-5 sm:tracking-tight sm:${TFSSMS} md:${TFSMDD}`}>{datum?.title}</p>
          <p className={`${CTALLA} ${CTFWE} ${CTECRX} ${CTEMWD3} mt-5 mx-auto sm:${CTFSSM3} md:${CTFSMDD}`}>{datum?.content}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Banner1;
