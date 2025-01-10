import React from 'react';
import PropTypes from 'prop-types';

const Anchor = ({ className, href, children, key, customRef, customOnClick }) => {
  if (typeof href === 'function') {
    return (
      <button type="button" key={key} className={className} onClick={href}>
        {children}
      </button>
    );
  }

  if (href?.startsWith('http') || href?.startsWith('https')) {
    return (
      <a key={key} className={className} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  if (customRef != null) {
    return (
      <button type="button" key={key} className={className} onClick={() => customOnClick()}>
        {children}
      </button>
    );
  }

  return (
    <a key={key} className={className} href={href}>
      {children}
    </a>
  );
};
Anchor.propTypes = {
  className: PropTypes.string,
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  children: PropTypes.node,
  key: PropTypes.string,
  customRef: PropTypes.any,
  customOnClick: PropTypes.func
};

export default Anchor;
