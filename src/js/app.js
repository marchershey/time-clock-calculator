// import 'jquery';
// import 'bootstrap';
// import '../js/main.js';
// import '../scss/app.scss';

window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
    require('../../node_modules/jquery-timepicker/jquery.timepicker.js');
    require('../js/main');
    require('../scss/app.scss');

} catch (e) { }
