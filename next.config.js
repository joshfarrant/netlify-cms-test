module.exports = {
  webpack: (cfg) => {
    cfg.module.rules.push(
      {
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: { mode: ['react-component'] },
      }, {
        test: /\.ya?ml$/,
        type: 'json',
        use: 'yaml-loader'
      },
    );
    return cfg;
  },
};
