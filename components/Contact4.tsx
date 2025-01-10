import React from 'react';
import { ToastContainer } from 'react-toastify';
import { CTAButtonEffect, ifNullThenNotify, ReplaceingColor, textToJustifyAlign } from '../utility/util';
import IconZip from './IconZip';

/**
 * Button1 should be used for submitting.
 * TODO
 * We need to decide later which button would be used for submitting.
 */
const Contact4 = ({
  data,
  AMEFF,
  HSM,
  HMD,
  BGMHEBGCED,
  CTRQ,
  TSBIPALSM,
  TSBIPALMD,
  TECCT3,
  TFWWET,
  TFSSMS,
  TFSMDD,
  SBTC2,
  SBTFWQ,
  SBTFSSM2,
  SBFSMD,
  IFRNDCR,
  IFRNDCRR,
  IFRNDW,
  IFRNDSM,
  IFRNDMD,
  IFRNDC,
  PMRTFSWTCC,
  PMRTFSW,
  PMRTFSD,
  PMRTFSM,
  PMRTFSWTC,
  PMRTFSWFW,
  PMRTFSWSM,
  PMRTFSWMD,
  PMRTFSWTCCRE,
  QTPLINABRR,
  QTPLINABR,
  CTRE,
  BTCEDD,
  CTRW,
  CTRR,
  BFWE,
  BFWET,
  EGEW,
  BXTTCCRS,
  BXTTCCR,
  BXTTC,
  BXTTCC,
  BXT,
  onSubmit,
  MVTTT,
}) => {
  const onSubmitForm = (event) => {
    event.preventDefault();
    const {
      fullName, email, phone, message,
    } = event.target;

    if (ifNullThenNotify(fullName.value, 'bottom-left', 'Please fill full name')) return;
    if (ifNullThenNotify(email.value, 'bottom-left', 'Please fill the email')) return;
    if (ifNullThenNotify(phone.value, 'bottom-left', 'Please fill the phone number')) return;
    if (ifNullThenNotify(message.value, 'bottom-left', 'Please fill the message')) return;

    onSubmit(event);
  };

  const questionPlace = (question, type, id, autoComplete) => (
    <>
      <label htmlFor={id} className="sr-only">{question}</label>
      <input
        type={type}
        name={id}
        id={id}
        autoComplete={autoComplete}
        className={`block w-full shadow-sm py-3 px-4 ${PMRTFSWTCCRE} focus:${ReplaceingColor(QTPLINABR)} focus:${QTPLINABR} ${QTPLINABRR} rounded-md`}
        placeholder={question}
      />
    </>
  );

  return (
    <>
      <div className={`relative ${CTRQ}`} ref={MVTTT}>
        <div className={`absolute inset-y-0 left-0 w-1/2 ${BGMHEBGCED}`} />
        <div className="relative max-w-7xl mx-auto md:grid md:grid-cols-5">
          <div className={`${BGMHEBGCED} sm:${HSM} px-4 sm:px-6 md:col-span-2 md:px-8 md:${HMD}`}>
            <div className={`max-w-lg mx-auto sm:${TSBIPALSM} md:${TSBIPALMD}`}>
              <h2 className={`tracking-tight ${TECCT3} ${TFWWET} sm:${TFSSMS} md:${TFSMDD}`}>{data?.title}</h2>
              <p className={`mt-3 leading-6 ${SBTC2} ${SBTFWQ} sm:${SBTFSSM2} md:${SBFSMD}`}>{data?.SBTT}</p>
              <div className={`flex sm:${textToJustifyAlign(TSBIPALSM)} md:${textToJustifyAlign(TSBIPALMD)}`}>
                <div className={`mt-6 ${IFRNDCRR} ${IFRNDW} sm:${IFRNDSM} md:${IFRNDMD}`}>
                  {data?.contacts?.map((contact) => (
                    <div className="mt-6" key={contact?.info?.replace(/ /g, '')}>
                      <div className="sr-only">{contact?.info}</div>
                      <div className={`flex group hover:${IFRNDC} flex sm:${textToJustifyAlign(TSBIPALSM)} md:${textToJustifyAlign(TSBIPALMD)}`}>
                        <div className={`flex-shrink-0 h-6 w-6 ${IFRNDCR} group-hover:${IFRNDC}`} aria-hidden="true">
                          <IconZip type={contact?.iconType} value={contact?.icon} style={undefined} />
                        </div>
                        <a className="ml-3" href={contact?.link}>{contact?.info}</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className={`mt-6 ${PMRTFSWTCC} ${PMRTFSW} sm:${PMRTFSD} md:${PMRTFSM}`}>
                {/* 의도된 space */}
                {`${data?.promotionText} `}
                <a href={data?.promotionNavLink} className={`underline ${PMRTFSWTC} ${PMRTFSWFW} sm:${PMRTFSWSM} md:${PMRTFSWMD}`}>{data?.promotionNavText}</a>
                .
              </p>
            </div>
          </div>
          <div className={`${CTRQ} sm:${HSM} px-4 sm:px-6 md:col-span-3 md:${HMD} md:px-8`}>
            <div className="max-w-lg mx-auto md:max-w-none">
              <form onSubmit={onSubmitForm} className="grid grid-cols-1 gap-y-6">
                {questionPlace('Full name', 'text', 'fullName', 'name')}
                {questionPlace('Email', 'email', 'email', 'email')}
                {questionPlace('Phone', 'text', 'phone', 'tel')}
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={`block w-full shadow-sm py-3 px-4 ${PMRTFSWTCCRE} focus:${ReplaceingColor(QTPLINABR)} focus:${QTPLINABR} ${QTPLINABRR} rounded-md`}
                    placeholder="Message"
                    defaultValue=""
                  />
                </div>
                {CTRE && (
                  <CTAButtonEffect>
                    <button
                      type="submit"
                      className={`inline-flex justify-center border border-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-full md:w-auto ${BFWET} md:${EGEW}
                      ${CTRR} ${BFWE} ${BTCEDD} ${CTRW} hover:${BXT} hover:${BXTTCC} hover:scale-105 hover:shadow-xs ${BXTTCCRS}
                      outline outline-offset-none outline-2 ${BXTTCCR} hover:${BXTTC}`}
                    >
                      {data?.buttonText}
                    </button>
                  </CTAButtonEffect>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Contact4;
