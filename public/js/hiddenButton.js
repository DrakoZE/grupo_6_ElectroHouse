window.onload = function() {
    //console.log("CUI CUI");
    let button = document.querySelector(".hiddenButton");
    let aside = document.querySelector(".aside");
    //console.log(button);
    //console.log(aside);
    button.addEventListener("click", function(e) {
        aside.style.display = "none"
        console.log("no way");
    })
}