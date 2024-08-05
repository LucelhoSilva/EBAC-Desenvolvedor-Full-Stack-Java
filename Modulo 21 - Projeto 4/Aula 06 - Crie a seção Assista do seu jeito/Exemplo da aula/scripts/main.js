document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('[data-tab-button]');

    // Seção de atrações, abas
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', (btn) => {
            const targetTab = btn.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${targetTab}]`);
            removeActiveTabs();
            tab.classList.add('shows__list--is-active');
            removeActiveButtons();
            btn.target.classList.add('shows__tabs__button--is-active');
        });
    };

});


const removeActiveButtons = () => {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    };
};

const removeActiveTabs = () => {
    const tabs = document.querySelectorAll('[data-tab-id]');
    for(let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('shows__list--is-active');
    };
};
