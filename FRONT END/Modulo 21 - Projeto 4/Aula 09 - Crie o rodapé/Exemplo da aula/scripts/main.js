document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

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

    // Seção FAQ, accordion
    for(let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', openOrCloseAnswer);
    }
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

const openOrCloseAnswer = (element) => {
    const classItem = 'faq__questions__item--is-open';
    const parentElement = element.target.parentNode;
    parentElement.classList.toggle(classItem);
} 
