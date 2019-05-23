// require('es6-promise').polyfill();
require('nodelist-foreach-polyfill');
require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let mainSlider = require('./parts/mainSlider.js'),
        feedbackSlider = require('./parts/feedbackSlider.js'),
        modalDesign = require('./parts/modalDesign.js'),
        modalConsultation = require('./parts/modalConsultation.js'),
        modalGift = require('./parts/modalGift.js');

    mainSlider();
    feedbackSlider();
    modalDesign();
    modalConsultation();
    modalGift();

});