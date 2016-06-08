module.exports = {
  styleLoader: require('extract-text-webpack-plugin').extract('style-loader', 'css-loader!postcss-loader!less-loader'),
  scripts: {
  },
  styles: {
    buttons: true,
    glyphicons: true,
    grid: true,
    mixins: true,
    normalize: true,
    print: true,
    scaffolding: true,
    type: true,
    utilities: true
  }
};
