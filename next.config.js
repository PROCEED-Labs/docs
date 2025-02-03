const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  staticImage: true,
  showHiddenPages: true,
});

module.exports = withNextra({
  images: { unoptimized: true },
  basePath: '',
});
