import React from 'react';

const IFrameHelper = ({ src, title, height }) => (
  <div
    style={{ height }}
  >
    <iframe
      src={src}
      title={title}
      width="100%"
      style={{ height: '100%' }}
    />
  </div>
);

export default IFrameHelper;
