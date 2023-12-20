window.onload = function() {
    //console.log("CUI CUI");
    let button = document.querySelector(".hiddenButton");
    let aside = document.querySelector(".aside");
    let div = document.querySelector(".hidden")
    let minusButton = document.querySelector(".minus-boton")
    // console.log(button);
    // console.log(aside);
    button.addEventListener("click", function(e) {
        aside.classList.add("hidden")
        div.classList.remove("hidden")
        div.classList.add("visible");
    })

    minusButton.addEventListener("click", function(e) {
        console.log(aside);
        aside.classList.remove("hidden")
        div.classList.remove("visible")
        div.classList.add("hidden")
    })
}