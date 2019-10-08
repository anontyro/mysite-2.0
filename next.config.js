const withMDX = require ('@next/mdx') ({
  extension: /\.(md|mdx)$/,
});

module.exports = withMDX ({
  distDir: 'dist',
});
