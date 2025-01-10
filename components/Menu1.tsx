import React from 'react';
import { gridColsByBreakPoint } from '../utility/util';

const Menu1 = ({
  MVTTT,
  data,
  HSM,
  HMD,
  BGCR,
  TECCT3,
  TFSSMS,
  TFSMDD,
  TFWWET,
  TASMM,
  TAMDD,
  ITBREE,
  TBCRR,
  MNTC3,
  MEFW3,
  MNFSSM,
  MNFSMD,
  MNASMM,
  MNAMDD,
  MNDETEC,
  MNDFWE,
  MNDFSSMS,
  MNDFSMD,
  MNDEASM,
  MNDESAMD,
  PRCTC,
  PFWE,
  PFSSMS,
  PFSMD,
  HLBGCLR,
  HLBC1,
  HLTCC3,
  HLLFW3,
  HLFSSMM,
  HLFSMD,
  BPDF,
  BPSMM,
  BPMDD,
  BPLGG,
  BPXXLL,
  BPXXXLE,
}) => (
  <div className={`${BGCR} sm:${HSM} md:${HMD}`} ref={MVTTT}>
    <div className="max-w-7xl mx-auto sm:px-6 md:px-8">
      <div className={`grid gap-8 ${gridColsByBreakPoint(
        BPDF,
        BPSMM,
        BPMDD,
        BPLGG,
        BPXXLL,
        BPXXXLE,
      )}`}
      >
        {data?.menus?.map((menu) => (
          <div key={menu?.title} className="flex flex-col space-y-4">
            <div
              className={`py-2 ${ITBREE ? `border-t border-b border-solid ${TBCRR}` : ''} ${TECCT3} ${TFWWET} sm:${TFSSMS} sm:${TASMM} md:${TFSMDD} md:${TAMDD}`}
            >
              {menu?.title}
            </div>
            {menu?.subMenus?.map((subMenu) => (
              <div key={subMenu?.name} className={`pb-4 ${subMenu.isHighlightExist ? `border ${HLBC1}` : ''}`}>
                {subMenu.isHighlightExist && (
                  <div className={`${HLBGCLR} ${HLTCC3} ${HLLFW3} sm:${HLFSSMM} md:${HLFSMD} py-2 px-4`}>
                    {subMenu?.highlightTitle}
                  </div>
                )}
                <div className="flex justify-between items-center py-2 px-4">
                  <h2 className={`flex-1 ${MNTC3} ${MEFW3} sm:${MNFSSM} sm:${MNASMM} md:${MNFSMD} md:${MNAMDD}`}>{subMenu?.name}</h2>
                  <p className={`${PRCTC} ${PFWE} sm:${PFSSMS} md:${PFSMD}`}>{subMenu?.price}</p>
                </div>
                <p className={`py-2 px-4 leading-4 ${MNDETEC} ${MNDFWE} sm:${MNDFSSMS} sm:${MNDEASM} md:${MNDFSMD} md:${MNDESAMD}`}>{subMenu?.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Menu1;
