function showPreview(event){
    if(event.target.files.length > 0) {

        var src = URL.createObjectURL(event.target.files[0]);
        var preview = document.getElementById("file-ip-1-preview");
        preview.src = src;
        preview.style.display = "block";
        preview.style.width = "auto";
        preview.style.height = "150px";

        let point = document.querySelector("#image-point");
        point.classList.add("yes");
        point.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Imagen cargada`
    }
}