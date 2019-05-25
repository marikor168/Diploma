// require('es6-promise').polyfill();
require('nodelist-foreach-polyfill');
require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let mainSlider = require('./parts/mainSlider.js'),
        feedbackSlider = require('./parts/feedbackSlider.js'),
        modals = require('./parts/modal.js'),
        formDesign = require('./parts/formDesign.js');

    mainSlider();
    feedbackSlider();
    modals();
    formDesign();
    
});