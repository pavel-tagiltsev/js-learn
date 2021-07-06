'use strict';

function modalShow({
    modalSelector: modalSelector,
    triggerSelector: triggerSelector,
    closeSelector: closeSelector,
    timer: timer
}) {
    const modal = document.querySelector(modalSelector),
        triggers = document.querySelectorAll(triggerSelector),
        close = modal.querySelector(closeSelector);

    function removeListeners() {
        window.removeEventListener('click', onCloseClick);
        window.removeEventListener('click', onBackgroundClick);
        window.removeEventListener('keydown', onEscapeDown);
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        removeListeners();
    }

    function showModal() {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        window.addEventListener('click', onBackgroundClick);
        window.addEventListener('keydown', onEscapeDown);
        close.addEventListener('click', onCloseClick);
    }

    function onBackgroundClick(evt) {
        if (evt.target === modal) {
            closeModal();
        }
    }

    function onEscapeDown(evt) {
        if (evt.code === 'Escape') {
            closeModal();
        }
    }

    function onCloseClick() {
        closeModal();
    }

    triggers.forEach(trigger => {
        trigger.addEventListener('click', evt => {
            if (evt.target) {
                evt.preventDefault();
            }

            showModal();
        });
    });

    function showModalByTime(timer) {
        setTimeout(() => {
            showModal();
        }, timer);
    }

    if (timer) {
        showModalByTime(timer);
    }
}

export default modalShow;