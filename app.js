(() => {
    const button = document.querySelector(".js-header__mobile-button");
    const menu = document.querySelector(".js-xxx__menu")

    const toggleClass = () => {
        menu.classList.toggle("xxx__menu--open");
    };

    button.addEventListener("click", toggleClass);
    menu.addEventListener("click", toggleClass);
})();