'use strict';

require('babel-core/register')({
  presets: ['es2015', 'stage-0', 'stage-1'],
  plugins: ['transform-class-properties']
});
require('./app');
