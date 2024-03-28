let openIcon = document.querySelector(".header__open-icon");
let closeIcon = document.querySelector(".header__close-icon")
let menu = document.querySelector(".header__menu")

openIcon.addEventListener("click", function () {
    openIcon.classList.add("d-none")
    closeIcon.classList.remove("d-none")
    menu.classList.remove("d-none")

})

closeIcon.addEventListener("click", function () {
    openIcon.classList.remove("d-none")
    closeIcon.classList.add("d-none")
    menu.classList.add("d-none")


})