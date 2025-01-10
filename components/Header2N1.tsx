import React, { Fragment, useState, useEffect } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { classNames } from '../utility/util';
import IconZip from './IconZip';
import Anchor from './Anchor';

const Header2N1 = ({
  overA,
  data,
  HSM,
  HMD,
  LGIUSM,
  LGIUMD,
  LGSSM,
  LGSMD,
  ISHEE,
  BCSM,
  BCMD,
  SMNBGC,
  MNG,
  MNTCSM,
  MNTCMD,
  MFWSM,
  MNFWMD,
  MNFSSM,
  MNFSMD,
  MNHCR,
  IAEE,
  ISMNSEE,
  SMNTCSM,
  SMNTCMD,
  SMNFWSM,
  SMNFWMD,
  SMNFSSM,
  SMNFSMD,
  SMNBHVCMD,
  SMBHCSM,
  SMNDTC,
  SMNDFW,
  SMNDFS,
  ICEE,
  ICC,
  IBBGC,
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
  BGIC,
  HBGIBGC,
  HBIHC,
  BGIHBGC,
  XBIBGC,
  XBIHBGC,
  XBICR,
  XBIHC,
  MNBTSM
}) => {
  /*
   * Set stickyHeader depends on a number of scrollY
   */
  const [isShowing, setIsShowing] = useState([]);

  /**
   * Toggle only specific index value of isShowing
   * when the mouse enters the element that uses this function
   *
   * @param {number} index - Number of menus
   */
  const onMouseEnter = (index) => {
    setIsShowing((prev) => prev?.map((item, idx) => true));
  };

  /**
   * Toggle only specific index value of isShowing
   * when the mouse leaves the element that uses this function
   *
   * @param {number} index - Number of menus
   */
  const onMouseLeave = (index) => {
    setIsShowing((prev) => prev?.map((item, idx) => false));
  };

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

  useEffect(() => {
    setIsShowing(new Array(data?.menu?.length).fill(false, 0, data?.menu?.length ?? 0 + 1));
  }, [data?.menu]);

  /**
   *
   * 해더 position을 조정할 때 사용할 함수
   * 나중에, ISHEE,isHeaderOverlap을 하나의 프롭스로 바꾸고 스트링으로 값을 인풋받아야할듯.
   */
  const headerPosition = () => {
    if (ISHEE) {
      return 'md:sticky top-0';
    }
    if (overA) {
      return 'absolute';
    }
    return 'relative';
  };

  const [submenuVisible, setSubmenuVisible] = useState({});

  const toggleSubmenu = (index) => {
    setSubmenuVisible((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <Popover className={classNames(headerPosition(), 'z-50 left-0 right-0 px-3')}>
      <div className={`${BCMD} left-3 right-3`}>
        <div
          className={`flex items-center justify-between max-w-7xl mx-auto sm:px-6 sm:${HSM} md:px-8 md:${HMD} lg:px-8 lg:justify-start lg:space-x-10 `}>
          <div className="flex md:justify-start">
            <Anchor href={data?.LGLK} className="flex">
              <img className={`w-auto ${LGSMD}`} src={LGIUMD} alt="" />
            </Anchor>
          </div>
          <div className="-mr-2 -my-2 flex md:justify-end lg:hidden">
            <Popover.Button
              className={`rounded-md p-2 inline-flex items-center justify-center ${BGIC} ${HBGIBGC} hover:${HBIHC} hover:${BGIHBGC}`}>
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className={`${MNG} justify-center lg:flex sm:hidden`}>
            {data?.menu?.map((menu, index) => (
              <div key={menu?.title}>
                {menu?.submenu ? (
                  <>
                    <Popover className="relative">
                      <Popover.Button
                        className={`${MNTCMD} outline-none group rounded-md inline-flex items-center text-base font-medium ${BCMD} ${MNFSMD} hover:${MNHCR}`}
                        onMouseEnter={() => onMouseEnter(index)}
                        onMouseLeave={() => onMouseLeave(index)}>
                        <span className={`${BCMD} ${MNFWMD}`}>
                          {menu?.title}
                        </span>
                        {menu?.submenu && (
                          <>
                            {IAEE && (
                              <ChevronDownIcon
                                className={`${MNTCMD} ml-2 h-5 w-5 ${BCMD} group-hover:${MNHCR}`}
                                aria-hidden="true"
                              />
                            )}
                          </>
                        )}
                      </Popover.Button>
                      <Transition
                        show={isShowing[index]}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1">
                        <Popover.Panel
                          className="absolute z-10 w-auto mt-2"
                          onMouseEnter={() => onMouseEnter(index)}
                          onMouseLeave={() => onMouseLeave(index)}>
                          <div className="relative flex min-w-[110px] flex-col gap-4 py-4">
                            {menu?.submenu?.map((submenu) => (
                              <Anchor
                                key={submenu?.name}
                                href={submenu?.href}
                                className={`-my-3 pr-1 pl-0 py-3 flex items-center rounded-lg hover:${SMNBHVCMD}`}
                                customOnClick={() => buttonOnClick(submenu?.ref)}
                                customRef={submenu?.ref}>
                                <>
                                  {ICEE && (
                                    <div
                                      className={`flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md ${IBBGC} ${ICC}`}>
                                      <IconZip
                                        style={null}
                                        type={submenu.iconType}
                                        value={submenu?.icon}
                                      />
                                    </div>
                                  )}
                                  <div className="ml-4">
                                    <p
                                      className={`${SMNFSMD} ${SMNFWMD} ${SMNTCMD}`}>
                                      {submenu?.name}
                                    </p>
                                    <p
                                      className={`mt-1 ${SMNDFS} ${SMNDFW} ${SMNDTC}`}>
                                      {submenu?.description}
                                    </p>
                                  </div>
                                </>
                              </Anchor>
                            ))}
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                    <div
                      className={`absolute right-0 top-[90px] w-screen h-63 ${SMNBGC} 
                        ${isShowing[index]
                          ? 'opacity-70 translate-y-0 transition ease-out duration-200'
                          : 'opacity-0 translate-y-1 transition ease-in duration-150'
                        } `}
                      onMouseEnter={() => onMouseEnter(index)}
                      onMouseLeave={() => onMouseLeave(index)}
                    />
                  </>
                ) : (
                  <Anchor
                    href={menu?.link}
                    className={`${BCMD} ${MNFSMD} ${MNFWMD} ${MNTCMD} hover:${MNHCR}`}
                    customRef={menu?.ref}
                    customOnClick={() => buttonOnClick(menu?.ref)}>
                    {menu?.title}
                  </Anchor>
                )}
              </div>
            ))}
          </Popover.Group>
          <div className="hidden lg:flex items-center justify-end">
            {IB1EE && (
              <Anchor
                href={data?.B1L}
                className={`whitespace-nowrap inline-flex items-center justify-center border border-transparent ${B1FS} ${B1FW} ${B1HT} md:${B1WT} hover:${B1HOLC}
                  ${BBGC} ${B1TCR} hover:scale-105 hover:${B1HTC} hover:${B1HBGC}
                  sm:${MNFSSM} sm:${MFWSM} md:${MNFSMD} md:${MNFWMD} sm:w-full md:w-auto outline outline-offset-none outline-2 ${B1OLC} ${B1RDC}`}>
                {data?.B1TT}
              </Anchor>
            )}
            {IB2EE && (
              <Anchor
                href={data?.B2LK}
                className={`ml-8 whitespace-nowrap inline-flex items-center justify-center border border-transparent ${B2FS} ${B2FWT} ${B2HT} md:${B2WD} hover:${B2HOLC}
                  ${B2BGC} ${B2TC} hover:scale-105 hover:${B2HVTC} hover:${B2HBGC}
                  sm:${MNFSSM} sm:${MFWSM} md:${MNFSMD} md:${MNFWMD} sm:w-full md:w-auto outline outline-offset-none outline-2 ${B2OLC} ${B2RDCS}`}>
                {data?.B2TT}
              </Anchor>
            )}
          </div>
        </div>
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95">
          <Popover.Panel className="absolute inset-x-0 top-0 z-30 p-2 transition transform origin-top-right lg:hidden">
            <div
              className={`rounded-lg ${ISMNSEE ? 'shadow-lg' : ''
                } ${BCSM}`}>
              <div className="divide-y-2 divide-gray-100">
                <div className="flex items-center justify-between p-4">
                  <div>
                    <img className={`w-auto ${LGSSM}`} src={LGIUSM} alt="Workflow" />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button
                      className={`rounded-md p-2 inline-flex items-center justify-center ${XBICR} ${XBIBGC} hover:${XBIHC} hover:${XBIHBGC}`}>
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                {data?.menu?.map((hambugerIconMenu, index) => (
                  <div className="pt-5 pb-6 px-5" key={hambugerIconMenu.title}>
                    {hambugerIconMenu?.submenu ? (
                      <>
                        <div
                          className="flex items-center justify-between cursor-pointer"
                          onClick={() => toggleSubmenu(index)}
                        >
                          <Anchor
                            href={hambugerIconMenu?.link}
                            className={`${MNFSSM} ${MFWSM} ${MNTCSM}`}
                            customOnClick={() => buttonOnClick(hambugerIconMenu?.ref)}
                            customRef={hambugerIconMenu?.ref}
                          >
                            {hambugerIconMenu?.title}
                          </Anchor>
                          <>
                            {IAEE && (
                              <ChevronDownIcon
                                className={`${MNTCSM} ml-2 h-5 w-5 ${BCSM} ${submenuVisible[index] ? 'transform rotate-180' : ''}`}
                              />
                            )}
                          </>
                        </div>
                        {submenuVisible[index] && (
                          <div className="pt-6">
                            <nav className="grid grid-cols-1 gap-7">
                              {hambugerIconMenu?.submenu?.map((hambugerIconSubmenu) => (
                                <Anchor
                                  key={hambugerIconSubmenu.name}
                                  href={hambugerIconSubmenu.href}
                                  className={`-m-3 p-3 flex items-center rounded-lg hover:${SMBHCSM}`}
                                  customOnClick={() => buttonOnClick(hambugerIconSubmenu?.ref)}
                                  customRef={hambugerIconSubmenu?.ref}
                                >
                                  <>
                                    {ICEE && (
                                      <div className={`flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md ${IBBGC} ${ICC}`}>
                                        <IconZip
                                          type={hambugerIconSubmenu.iconType}
                                          value={hambugerIconSubmenu?.icon}
                                          style={undefined} />
                                      </div>
                                    )}
                                    <div className={`${SMNFSSM} ${SMNFWSM} ${SMNTCSM} ${MNBTSM === hambugerIconSubmenu?.name && 'font-bold'}`}>
                                      {hambugerIconSubmenu.name}
                                    </div>
                                  </>
                                </Anchor>
                              ))}
                            </nav>
                          </div>
                        )}
                      </>
                    ) : (
                      <Anchor
                        href={hambugerIconMenu?.link}
                        className={`${MNFSSM} ${MFWSM} ${MNTCSM} hover:${MNHCR}`}
                        customOnClick={() => buttonOnClick(hambugerIconMenu?.ref)}
                        customRef={hambugerIconMenu?.ref}
                      >
                        {hambugerIconMenu.title}
                      </Anchor>
                    )}
                  </div>
                ))}
              </div>
              <div
                className={classNames(
                  IB1EE || IB2EE ? 'border-t-2 border-gray-100' : '',
                  'flex flex-col items-center p-4'
                )}>
                {IB1EE && (
                  <Anchor
                    href={data?.B1L}
                    className={`${BBGC} hover:${B1HBGC} hover:scale-105 hover:${B1HTC} ${B1TCR} ${B1FS} ${B1FW} ${B1HT} md:${B1WT} hover:${B1HOLC}
                    flex items-center justify-center border border-transparent sm:w-full md:w-auto outline outline-offset-none outline-2 ${B1OLC} ${B1RDC}`}>
                    {data?.B1TT}
                  </Anchor>
                )}
                {IB2EE && (
                  <Anchor
                    href={data?.B2LK}
                    className={`mt-4 ${B2BGC} hover:${B2HBGC} hover:scale-105 hover:${B2HVTC} ${B2TC} ${B2FS} ${B2FWT} ${B2HT} md:${B2WD} hover:${B2HOLC}
                    flex items-center justify-center border border-transparent sm:w-full md:w-auto outline outline-offset-none outline-2 ${B2OLC} ${B2RDCS}`}>
                    {data?.B2TT}
                  </Anchor>
                )}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </div>
    </Popover>
  );
};
export default Header2N1;
