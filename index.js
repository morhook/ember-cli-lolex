/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-lolex',
  included: function included(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/lolex/lolex.js');
    app.import('vendor/shims.js', {
      exports: {
        lolex: ['default']
      }
    });
  }
};
