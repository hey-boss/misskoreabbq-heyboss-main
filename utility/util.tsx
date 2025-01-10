import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
const classNames = (...classes) => classes.filter(Boolean).join(' ');
const replaceingColor = (borderColor) => borderColor?.replace('ring', 'border');
const ReplaceingColor = (borderColor) => borderColor?.replace('ring', 'border');

/**
 * @param {string} textAlignInput - Tailwind textAlign attribute (e.g. 'text-left', 'text-center')
 * @returns Tailwind justifyContent attribute (e.g. 'justify-start', 'justify-center')
 * Horizontal flex align.
 * Which justifyContent attribute gets returned depends on the textAlign attribute input.
 * Ex. If input is 'text-left',
 * then return 'justify-start' to align everything (text & flex) to the left.
 * Vice versa for other aligns.
 */
const textToJustifyAlign = (textAlignInput) => {
  switch (textAlignInput) {
    case 'text-left':
      return 'justify-start';
    case 'text-right':
      return 'justify-end';
    default:
      return 'justify-center';
  }
};


const CTAButtonEffect = ({
  children, y = 0, smWidth = 'auto', mdWidth = 'auto', className = '',
}) => (
  <motion.div
    whileHover={{ y: -3, opacity: 0.9 }}
    className={`${className} sm:w-${smWidth} md:w-${mdWidth}`}
    initial={{ y, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, type: 'tween' }}
  >
    {children}
  </motion.div>
);

const gridColsByBreakPoint = (
  base, sm = null, md = null, lg = null, xl = null, xxl = null,
) => {
  const inputParameter = {
    base, sm, md, lg, xl, xxl,
  };
  const value = (input) => {
    switch (input) {
      case 'xxl': return 'xl';
      case 'xl': return 'lg';
      case 'lg': return 'md';
      case 'md': return 'sm';
      case 'sm': return 'base';
      default: return 'base';
    }
  };

  const previousWindowSizeIfNull = (size, number) => {
    if (inputParameter[size] != null) return number;
    return previousWindowSizeIfNull(value(size), inputParameter[value(size)]);
  };

  return (

    `grid-cols-${base}
  sm:grid-cols-${previousWindowSizeIfNull('sm', sm)}
  md:grid-cols-${previousWindowSizeIfNull('md', md)}
  lg:grid-cols-${previousWindowSizeIfNull('lg', lg)}
  xl:grid-cols-${previousWindowSizeIfNull('xl', xl)}
  2xl:grid-cols-${previousWindowSizeIfNull('xxl', xxl)}
  `
  );
};
const transformWidthToHeight = (widthInput) => `${widthInput?.replace('w', 'h')}`;


const textToItemsAlign = (textAlignInput) => {
  switch (textAlignInput) {
    case 'text-left':
      return 'items-start';
    case 'text-right':
      return 'items-end';
    default:
      return 'items-center';
  }
};

/**
 * If value is null, then send notification + return true
 */
const ifNullThenNotify = (key, notificationPosition, message) => {
  if (key == null || key?.trim() === '') {
    toast.warn(message, { position: notificationPosition });
    return true;
  }
  return false;
};

export {
  replaceingColor,
  ReplaceingColor,
  ifNullThenNotify,
  textToItemsAlign,
  transformWidthToHeight,
  classNames,
  textToJustifyAlign,
  CTAButtonEffect,
  gridColsByBreakPoint
};
