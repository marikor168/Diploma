// require('es6-promise').polyfill();
require('nodelist-foreach-polyfill');
require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let mainSlider = require('./parts/mainSlider.js'),
        feedbackSlider = require('./parts/feedbackSlider.js'),
        modals = require('./parts/modal.js'),
        form = require('./parts/form.js');

    mainSlider();
    feedbackSlider();
    modals();
    form();
    
});