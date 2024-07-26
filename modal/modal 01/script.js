const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");


function addAtribute() {
    modal.setAttribute("open", "");
}


function removeAtribute() {
    modal.removeAttribute("open");
}


btn.addEventListener("click", function () {

    if (!modal.hasAttribute("open")) {
        addAtribute();

    } else {
        removeAtribute();
    }

});
