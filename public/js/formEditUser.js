window.addEventListener("load", function(){

    let form = document.querySelector("main form")

    form.addEventListener("submit", function(e){

        
        let inputName = document.querySelector("main form input.name");
        let CampoName = document.querySelector("main form p.name");

        let inputSurname = document.querySelector("main form input.surname");
        let CampoSurname = document.querySelector("main form p.surname");

        let inputUsername = document.querySelector("main form input.username");
        let CampoUsername = document.querySelector("main form p.username");

        let inputEmail = document.querySelector("main form input.email");
        let CampoEmail = document.querySelector("main form p.email");

        let inputPass = document.querySelector("main form input.pass");
        let CampoPass = document.querySelector("main form p.pass");

        let selectClass = document.querySelector("main form select.class");
        let campoClass = document.querySelector("main form p.class");


        if(inputName.value.length > 2){

            if(CampoName.classList.contains("waiting")){
                CampoName.classList.remove("waiting")
            }

            if(CampoName.classList.contains("no")){
                CampoName.classList.remove("no")
            }

            CampoName.classList.add("yes")
            CampoName.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Todo correcto`

        } else if(inputName.value.length > 0){

            if(CampoName.classList.contains("yes")){
                CampoName.classList.remove("yes")
            }

            if(CampoName.classList.contains("no")){
                CampoName.classList.remove("no")
            }
            
            CampoName.classList.add("waiting")
            CampoName.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Ingresa tu Nombre`

            e.preventDefault()

        } else {
            
            if(CampoName.classList.contains("waiting")){
                CampoName.classList.remove("waiting")
            }

            if(CampoName.classList.contains("yes")){
                CampoName.classList.remove("yes")
            }

            CampoName.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> ingresa tu nombre`

            e.preventDefault()
        }

            
        if(inputSurname.value.length > 2){

            if(CampoSurname.classList.contains("waiting")){
                CampoSurname.classList.remove("waiting")
            }

            if(CampoSurname.classList.contains("no")){
                CampoSurname.classList.remove("no")
            }

            CampoSurname.classList.add("yes")
            CampoSurname.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Todo correcto`

        } else if(inputSurname.value.length > 0){

            if(CampoSurname.classList.contains("yes")){
                CampoSurname.classList.remove("yes")
            }

            if(CampoSurname.classList.contains("no")){
                CampoSurname.classList.remove("no")
            }
            
            CampoSurname.classList.add("waiting")
            CampoSurname.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Necesito un Apellido mas largo`

            e.preventDefault()

        } else {
            
            if(CampoSurname.classList.contains("waiting")){
                CampoSurname.classList.remove("waiting")
            }

            if(CampoSurname.classList.contains("yes")){
                CampoSurname.classList.remove("yes")
            }

            CampoSurname.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Ingresa tu Apellido`

            e.preventDefault()
        }

        if(inputUsername.value.length > 2){

            if(CampoUsername.classList.contains("waiting")){
                CampoUsername.classList.remove("waiting")
            }

            if(CampoUsername.classList.contains("no")){
                CampoUsername.classList.remove("no")
            }

            CampoUsername.classList.add("yes")
            CampoUsername.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Todo correcto`

        } else if(inputUsername.value.length > 0){

            if(CampoUsername.classList.contains("yes")){
                CampoUsername.classList.remove("yes")
            }

            if(CampoUsername.classList.contains("no")){
                CampoUsername.classList.remove("no")
            }
            
            CampoUsername.classList.add("waiting")
            CampoUsername.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Necesito un usuario mas largo`

            e.preventDefault()

        } else {
            
            if(CampoUsername.classList.contains("waiting")){
                CampoUsername.classList.remove("waiting")
            }

            if(CampoUsername.classList.contains("yes")){
                CampoUsername.classList.remove("yes")
            }

            CampoUsername.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Ingresa tu Usuario`

            e.preventDefault()
        }

        if(selectClass.value == "Vendedor"){

            campoClass.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> ${selectClass.value}`

        } else if(selectClass.value == "Comprador"){

            campoClass.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> ${selectClass.value}`

        }
        
    })

    form.addEventListener("change", function(e){

        
        let inputName = document.querySelector("main form input.name");
        let CampoName = document.querySelector("main form p.name");

        let inputSurname = document.querySelector("main form input.surname");
        let CampoSurname = document.querySelector("main form p.surname");

        let inputUsername = document.querySelector("main form input.username");
        let CampoUsername = document.querySelector("main form p.username");

        let inputEmail = document.querySelector("main form input.email");
        let CampoEmail = document.querySelector("main form p.email");

        let inputPass = document.querySelector("main form input.pass");
        let CampoPass = document.querySelector("main form p.pass");

        let selectClass = document.querySelector("main form select.class");
        let campoClass = document.querySelector("main form p.class");


        if(inputName.value.length > 2){

            if(CampoName.classList.contains("waiting")){
                CampoName.classList.remove("waiting")
            }

            if(CampoName.classList.contains("no")){
                CampoName.classList.remove("no")
            }

            CampoName.classList.add("yes")
            CampoName.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Todo correcto`

        } else if(inputName.value.length > 0){

            if(CampoName.classList.contains("yes")){
                CampoName.classList.remove("yes")
            }

            if(CampoName.classList.contains("no")){
                CampoName.classList.remove("no")
            }
            
            CampoName.classList.add("waiting")
            CampoName.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Ingresa tu Nombre`

            e.preventDefault()

        } else {
            
            if(CampoName.classList.contains("waiting")){
                CampoName.classList.remove("waiting")
            }

            if(CampoName.classList.contains("yes")){
                CampoName.classList.remove("yes")
            }

            CampoName.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> ingresa tu nombre`

            e.preventDefault()
        }

            
        if(inputSurname.value.length > 2){

            if(CampoSurname.classList.contains("waiting")){
                CampoSurname.classList.remove("waiting")
            }

            if(CampoSurname.classList.contains("no")){
                CampoSurname.classList.remove("no")
            }

            CampoSurname.classList.add("yes")
            CampoSurname.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Todo correcto`

        } else if(inputSurname.value.length > 0){

            if(CampoSurname.classList.contains("yes")){
                CampoSurname.classList.remove("yes")
            }

            if(CampoSurname.classList.contains("no")){
                CampoSurname.classList.remove("no")
            }
            
            CampoSurname.classList.add("waiting")
            CampoSurname.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Necesito un Apellido mas largo`

            e.preventDefault()

        } else {
            
            if(CampoSurname.classList.contains("waiting")){
                CampoSurname.classList.remove("waiting")
            }

            if(CampoSurname.classList.contains("yes")){
                CampoSurname.classList.remove("yes")
            }

            CampoSurname.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Ingresa tu Apellido`

            e.preventDefault()
        }

        if(inputUsername.value.length > 2){

            if(CampoUsername.classList.contains("waiting")){
                CampoUsername.classList.remove("waiting")
            }

            if(CampoUsername.classList.contains("no")){
                CampoUsername.classList.remove("no")
            }

            CampoUsername.classList.add("yes")
            CampoUsername.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Todo correcto`

        } else if(inputUsername.value.length > 0){

            if(CampoUsername.classList.contains("yes")){
                CampoUsername.classList.remove("yes")
            }

            if(CampoUsername.classList.contains("no")){
                CampoUsername.classList.remove("no")
            }
            
            CampoUsername.classList.add("waiting")
            CampoUsername.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Necesito un usuario mas largo`

            e.preventDefault()

        } else {
            
            if(CampoUsername.classList.contains("waiting")){
                CampoUsername.classList.remove("waiting")
            }

            if(CampoUsername.classList.contains("yes")){
                CampoUsername.classList.remove("yes")
            }

            CampoUsername.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Ingresa tu Usuario`

            e.preventDefault()
        }

        if(selectClass.value == "Vendedor"){

            campoClass.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> ${selectClass.value}`

        } else if(selectClass.value == "Comprador"){

            campoClass.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> ${selectClass.value}`

        }
        
    })
  
  })