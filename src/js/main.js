'use strict';

import './slider';
import modalShow from './modules/modals';
import tabs from './modules/tabs';


document.addEventListener('DOMContentLoaded', () => {
    modalShow({
        modalSelector: '.popup_engineer',
        triggerSelector: '.popup_engineer_btn',
        closeSelector: '.popup_close'
    });

    modalShow({
        modalSelector: '.popup',
        triggerSelector: '.phone_link',
        closeSelector: '.popup_close',
        timer: 60000
    });

    modalShow({
        modalSelector: '.popup_calc',
        triggerSelector: '.popup_calc_btn',
        closeSelector: '.popup_calc_close'
    });

    tabs({
        wrapperSelector: '.glazing_slider ',
        tabSelector: '.glazing_block',
        contentSelector: '.glazing_content',
        activeAttribute: '.glazing_block > a',
        activeSelector: 'active'
    });

    tabs({
        wrapperSelector: '.decoration_slider',
        tabSelector: '.no_click',
        contentSelector: '.decoration_content > div > div',
        activeAttribute: '.no_click',
        activeSelector: 'after_click'
    });

    tabs({
        wrapperSelector: '.balcon_icons',
        tabSelector: '.balcon_icons_img',
        contentSelector: '.big_img > img',
        activeAttribute: '.balcon_icons_img',
        activeSelector: 'do_image_more'
    });
});