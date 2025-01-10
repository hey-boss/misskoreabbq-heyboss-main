module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    images: {
      domains: ['localhost', 'heyboss-component-library-images.s3.amazonaws.com'],
      dangerouslyAllowSVG: true
    }
  };
  return nextConfig;
};
