function showPreview(event){
    if(event.target.files.length > 0) {

        var src = URL.createObjectURL(event.target.files[0]);
        var preview = document.getElementById("file-ip-1-preview");
        preview.src = src;
        preview.style.display = "block";
        preview.style.width = "auto";
        preview.style.height = "150px";

        var src2 = URL.createObjectURL(event.target.files[0]);
        var preview2 = document.getElementById("file-ip-2-preview");
        preview2.src = src2;
        preview2.style.display = "block";
        preview2.style.width = "auto";
        preview2.style.height = "150px";
    }
}