const { join } = require('path');

module.exports = {
  plugins: {
    tailwindcss: {
      config: join(__dirname, 'tailwind.config.js'),
      // config: './tailwind.config.js'
    },
    autoprefixer: {},
  },
};
