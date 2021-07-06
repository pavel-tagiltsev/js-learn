'use strict';

function tabs({
    wrapperSelector: wrapperSelector,
    tabSelector: tabSelector,
    contentSelector: contentSelector,
    activeAttribute: activeAttribute,
    activeSelector: activeSelector
}) {
    const wrapper = document.querySelector(wrapperSelector),
        tabs = wrapper.querySelectorAll(tabSelector),
        actives = wrapper.querySelectorAll(activeAttribute),
        content = document.querySelectorAll(contentSelector);

    function removeActiveClass() {
        actives.forEach(elem => {
            if (elem.classList.contains(activeSelector)) {
                elem.classList.remove(activeSelector);
            }
        });
    }

    function addActiveClass(i = 0) {
        actives[i].classList.add(activeSelector);
    }

    function hideContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });
    }

    function showContent(i = 0) {
        content[i].style.display = 'block';
    }

    wrapper.addEventListener('click', evt => {
        const target = evt.target;

        if (target) {
            evt.preventDefault();
        }

        tabs.forEach((tab, i) => {
            if (target === tab || target.parentElement === tab) {
                hideContent();
                showContent(i);
                removeActiveClass();
                addActiveClass(i);
            }
        });
    });

    addActiveClass();
    showContent();
}

export default tabs;