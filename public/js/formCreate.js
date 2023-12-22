window.addEventListener("load", function(){

    let form = document.querySelector("main form")

    form.addEventListener("submit", function(e){

        
        let inputTitle = document.querySelector("main form input.title");
        let CampoTitle = document.querySelector("main form p.title");

        let inputDescription = document.querySelector("main form input.description");
        let CampoDescription = document.querySelector("main form p.description");

        let inputPrice = document.querySelector("main form input.price");
        let CampoPrice = document.querySelector("main form p.price");

        let inputOff = document.querySelector("main form input.off");
        let CampoOff = document.querySelector("main form p.off");

        let inputStock = document.querySelector("main form input.stock");
        let CampoStock = document.querySelector("main form p.stock");

        let selectTrademark = document.querySelector("input.trademark");
        let campoTrademark = document.querySelector("p.trademark");

        let selectCategory = document.querySelector("select.category");
        let campoCategory = document.querySelector("p.category");


        if(inputTitle.value.length > 4){

            if(CampoTitle.classList.contains("waiting")){
                CampoTitle.classList.remove("waiting")
            }

            if(CampoTitle.classList.contains("no")){
                CampoTitle.classList.remove("no")
            }

            CampoTitle.classList.add("yes")
            CampoTitle.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Todo correcto`

        } else if(inputTitle.value.length > 0){

            if(CampoTitle.classList.contains("yes")){
                CampoTitle.classList.remove("yes")
            }

            if(CampoTitle.classList.contains("no")){
                CampoTitle.classList.remove("no")
            }
            
            CampoTitle.classList.add("waiting")
            CampoTitle.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Ingresa un Titulo mas largo`

            e.preventDefault()

        } else {
            
            if(CampoTitle.classList.contains("waiting")){
                CampoTitle.classList.remove("waiting")
            }

            if(CampoTitle.classList.contains("yes")){
                CampoTitle.classList.remove("yes")
            }

            CampoTitle.classList.add("no")
            CampoTitle.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> ingresa un Titulo`

            e.preventDefault()
        }

            
        if(inputDescription.value.length > 19){

            if(CampoDescription.classList.contains("waiting")){
                CampoDescription.classList.remove("waiting")
            }

            if(CampoDescription.classList.contains("no")){
                CampoDescription.classList.remove("no")
            }

            CampoDescription.classList.add("yes")
            CampoDescription.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Todo correcto`

        } else if(inputDescription.value.length > 0){

            if(CampoDescription.classList.contains("yes")){
                CampoDescription.classList.remove("yes")
            }

            if(CampoDescription.classList.contains("no")){
                CampoDescription.classList.remove("no")
            }
            
            CampoDescription.classList.add("waiting")
            CampoDescription.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Necesito una Descripción mas larga`

            e.preventDefault()

        } else {
            
            if(CampoDescription.classList.contains("waiting")){
                CampoDescription.classList.remove("waiting")
            }

            if(CampoDescription.classList.contains("yes")){
                CampoDescription.classList.remove("yes")
            }

            CampoDescription.classList.add("no")
            CampoDescription.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Ingresa una Descripción`

            e.preventDefault()
        }

        if(inputPrice.value.length > 0){

            if(CampoPrice.classList.contains("no")){
                CampoPrice.classList.remove("no")
            }

            CampoPrice.classList.add("yes")
            CampoPrice.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Todo correcto`

        } else {

            if(CampoPrice.classList.contains("yes")){
                CampoPrice.classList.remove("yes")
            }

            CampoPrice.classList.add("no")
            CampoPrice.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Ingresa un Precio`

            e.preventDefault()
        }

        if(inputOff.value > 0 && inputOff.value < 101){

            if(CampoOff.classList.contains("no")){
                CampoOff.classList.remove("no")
            }

            CampoOff.classList.add("yes")
            CampoOff.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Todo correcto`

        } else if( inputOff.value >= 100) {

            if(CampoOff.classList.contains("yes")){
                CampoOff.classList.remove("yes")
            }

            CampoOff.classList.add("waiting")
            CampoOff.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Ingresa un Descuento valido`

            e.preventDefault()
        } else {

            if(CampoOff.classList.contains("waiting")){
                CampoOff.classList.remove("waiting")
            }

            if(CampoOff.classList.contains("yes")){
                CampoOff.classList.remove("yes")
            }

            CampoOff.classList.add("no")
            CampoOff.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Ingresa un Descuento`

            e.preventDefault()
        }

        if(inputStock.value.length > 0){

            if(CampoStock.classList.contains("no")){
                CampoStock.classList.remove("no")
            }

            CampoStock.classList.add("yes")
            CampoStock.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Todo correcto`

        } else {

            if(CampoStock.classList.contains("yes")){
                CampoStock.classList.remove("yes")
            }

            CampoStock.classList.add("no")
            CampoStock.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Ingresa un Descuento`

            e.preventDefault()
        }

        if(selectTrademark.value.length > 0){

            if(campoTrademark.classList.contains("no")){
                campoTrademark.classList.remove("no")
            }

            campoTrademark.classList.add("yes")
            campoTrademark.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Todo correcto`

        } else {

            if(campoTrademark.classList.contains("yes")){
                campoTrademark.classList.remove("yes")
            }

            campoTrademark.classList.add("no")
            campoTrademark.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Ingresa una Marca`

            e.preventDefault()
        }

        if(selectCategory.value != ""){

            campoCategory.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Categoria N°${selectCategory.value}`

        }
        
    })

    form.addEventListener("change", function(e){

        
        let inputTitle = document.querySelector("main form input.title");
        let CampoTitle = document.querySelector("main form p.title");

        let inputDescription = document.querySelector("main form input.description");
        let CampoDescription = document.querySelector("main form p.description");

        let inputPrice = document.querySelector("main form input.price");
        let CampoPrice = document.querySelector("main form p.price");

        let inputOff = document.querySelector("main form input.off");
        let CampoOff = document.querySelector("main form p.off");

        let inputStock = document.querySelector("main form input.stock");
        let CampoStock = document.querySelector("main form p.stock");

        let selectTrademark = document.querySelector("input.trademark");
        let campoTrademark = document.querySelector("p.trademark");

        let selectCategory = document.querySelector("select.category");
        let campoCategory = document.querySelector("p.category");


        if(inputTitle.value.length > 4){

            if(CampoTitle.classList.contains("waiting")){
                CampoTitle.classList.remove("waiting")
            }

            if(CampoTitle.classList.contains("no")){
                CampoTitle.classList.remove("no")
            }

            CampoTitle.classList.add("yes")
            CampoTitle.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Todo correcto`

        } else if(inputTitle.value.length > 0){

            if(CampoTitle.classList.contains("yes")){
                CampoTitle.classList.remove("yes")
            }

            if(CampoTitle.classList.contains("no")){
                CampoTitle.classList.remove("no")
            }
            
            CampoTitle.classList.add("waiting")
            CampoTitle.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Ingresa un Titulo mas largo`

            e.preventDefault()

        } else {
            
            if(CampoTitle.classList.contains("waiting")){
                CampoTitle.classList.remove("waiting")
            }

            if(CampoTitle.classList.contains("yes")){
                CampoTitle.classList.remove("yes")
            }

            CampoTitle.classList.add("no")
            CampoTitle.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> ingresa un Titulo`

            e.preventDefault()
        }

            
        if(inputDescription.value.length > 19){

            if(CampoDescription.classList.contains("waiting")){
                CampoDescription.classList.remove("waiting")
            }

            if(CampoDescription.classList.contains("no")){
                CampoDescription.classList.remove("no")
            }

            CampoDescription.classList.add("yes")
            CampoDescription.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Todo correcto`

        } else if(inputDescription.value.length > 0){

            if(CampoDescription.classList.contains("yes")){
                CampoDescription.classList.remove("yes")
            }

            if(CampoDescription.classList.contains("no")){
                CampoDescription.classList.remove("no")
            }
            
            CampoDescription.classList.add("waiting")
            CampoDescription.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Necesito una Descripción mas larga`

            e.preventDefault()

        } else {
            
            if(CampoDescription.classList.contains("waiting")){
                CampoDescription.classList.remove("waiting")
            }

            if(CampoDescription.classList.contains("yes")){
                CampoDescription.classList.remove("yes")
            }

            CampoDescription.classList.add("no")
            CampoDescription.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Ingresa una Descripción`

            e.preventDefault()
        }

        if(inputPrice.value.length > 0){

            if(CampoPrice.classList.contains("no")){
                CampoPrice.classList.remove("no")
            }

            CampoPrice.classList.add("yes")
            CampoPrice.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Todo correcto`

        } else {

            if(CampoPrice.classList.contains("yes")){
                CampoPrice.classList.remove("yes")
            }

            CampoPrice.classList.add("no")
            CampoPrice.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Ingresa un Precio`

            e.preventDefault()
        }

        if(inputOff.value > 0 && inputOff.value < 101){

            if(CampoOff.classList.contains("no")){
                CampoOff.classList.remove("no")
            }

            CampoOff.classList.add("yes")
            CampoOff.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Todo correcto`

        } else if( inputOff.value >= 100) {

            if(CampoOff.classList.contains("yes")){
                CampoOff.classList.remove("yes")
            }

            CampoOff.classList.add("waiting")
            CampoOff.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Ingresa un Descuento valido`

            e.preventDefault()
        } else {

            if(CampoOff.classList.contains("waiting")){
                CampoOff.classList.remove("waiting")
            }

            if(CampoOff.classList.contains("yes")){
                CampoOff.classList.remove("yes")
            }

            CampoOff.classList.add("no")
            CampoOff.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Ingresa un Descuento`

            e.preventDefault()
        }

        if(inputStock.value.length > 0){

            if(CampoStock.classList.contains("no")){
                CampoStock.classList.remove("no")
            }

            CampoStock.classList.add("yes")
            CampoStock.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Todo correcto`

        } else {

            if(CampoStock.classList.contains("yes")){
                CampoStock.classList.remove("yes")
            }

            CampoStock.classList.add("no")
            CampoStock.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Ingresa un Descuento`

            e.preventDefault()
        }

        if(selectTrademark.value.length > 0){

            if(campoTrademark.classList.contains("no")){
                campoTrademark.classList.remove("no")
            }

            campoTrademark.classList.add("yes")
            campoTrademark.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Todo correcto`

        } else {

            if(campoTrademark.classList.contains("yes")){
                campoTrademark.classList.remove("yes")
            }

            campoTrademark.classList.add("no")
            campoTrademark.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Ingresa una Marca`

            e.preventDefault()
        }

        if(selectCategory.value != ""){

            campoCategory.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Categoria N°${selectCategory.value}`

        }
        
    })
  
  })