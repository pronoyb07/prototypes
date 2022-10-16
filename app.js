// const checkbox = document.getElementById("checkbox")
// checkbox.addEventListener("change", () => {
//     document.body.classList.toggle("dark")
// })

let toggler = document.querySelector(".toggler");
let fullscreen = document.querySelector(".fullscreen");

toggler.addEventListener('click', () => {
    fullscreen.classList.toggle("light");
})