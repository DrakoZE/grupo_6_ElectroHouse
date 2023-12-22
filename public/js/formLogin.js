window.addEventListener("load", function(){

    let form = document.querySelector("main form")

    form.addEventListener("submit", function(e){

        let inputEmail = document.querySelector("main form input.email");
        let CampoEmail = document.querySelector("main form p.email");

        let inputPass = document.querySelector("main form input.pass");
        let CampoPass = document.querySelector("main form p.pass");

        let inputCheck = document.querySelector("main form input.check");
        let CampoCheck = document.querySelector("main form p.check");

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(inputEmail.value)) {

            if(CampoEmail.classList.contains("waiting")){
                CampoEmail.classList.remove("waiting")
            }

            if(CampoEmail.classList.contains("no")){
                CampoEmail.classList.remove("no")
            }

            CampoEmail.classList.add("yes")
            CampoEmail.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Listo para verificar`

        } else if(inputEmail.value.length > 0){

            if(CampoEmail.classList.contains("yes")){
                CampoEmail.classList.remove("yes")
            }

            if(CampoEmail.classList.contains("no")){
                CampoEmail.classList.remove("no")
            }
            
            CampoEmail.classList.add("waiting")
            CampoEmail.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> No creo que eso sea un correo`

            e.preventDefault()

        } else {

            if(CampoEmail.classList.contains("waiting")){
                CampoEmail.classList.remove("waiting")
            }

            if(CampoEmail.classList.contains("yes")){
                CampoEmail.classList.remove("yes")
            }

            CampoEmail.classList.add("no")
            CampoEmail.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Ingresa tu Email`

            e.preventDefault()
        }

        if(inputPass.value.length > 7){

            if(CampoPass.classList.contains("waiting")){
                CampoPass.classList.remove("waiting")
            }

            if(CampoPass.classList.contains("no")){
                CampoPass.classList.remove("no")
            }

            CampoPass.classList.add("yes")
            CampoPass.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Listo para verificar`

        } else if(inputPass.value.length > 0){

            if(CampoPass.classList.contains("yes")){
                CampoPass.classList.remove("yes")
            }

            if(CampoPass.classList.contains("no")){
                CampoPass.classList.remove("no")
            }
            
            CampoPass.classList.add("waiting")
            CampoPass.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Clave invalida`

            e.preventDefault()

        } else {
            
            if(CampoPass.classList.contains("waiting")){
                CampoPass.classList.remove("waiting")
            }

            if(CampoPass.classList.contains("yes")){
                CampoPass.classList.remove("yes")
            }

            CampoPass.classList.add("no")
            CampoPass.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Ingresa la Clave`

            e.preventDefault()
        }
        
        if(inputCheck.checked){
            CampoCheck.classList.add("yes")

        } else if(!inputCheck.checked){

            if(CampoCheck.classList.contains("yes")){
                CampoCheck.classList.remove("yes")
            }
        }
    })

    form.addEventListener("change", function(e){

        let inputEmail = document.querySelector("main form input.email");
        let CampoEmail = document.querySelector("main form p.email");

        let inputPass = document.querySelector("main form input.pass");
        let CampoPass = document.querySelector("main form p.pass");

        let inputCheck = document.querySelector("main form input.check");
        let CampoCheck = document.querySelector("main form p.check");

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(inputEmail.value)) {

            if(CampoEmail.classList.contains("waiting")){
                CampoEmail.classList.remove("waiting")
            }

            if(CampoEmail.classList.contains("no")){
                CampoEmail.classList.remove("no")
            }

            CampoEmail.classList.add("yes")
            CampoEmail.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Listo para verificar`

        } else if(inputEmail.value.length > 0){

            if(CampoEmail.classList.contains("yes")){
                CampoEmail.classList.remove("yes")
            }

            if(CampoEmail.classList.contains("no")){
                CampoEmail.classList.remove("no")
            }
            
            CampoEmail.classList.add("waiting")
            CampoEmail.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> No creo que eso sea un correo`

            e.preventDefault()

        } else {

            if(CampoEmail.classList.contains("waiting")){
                CampoEmail.classList.remove("waiting")
            }

            if(CampoEmail.classList.contains("yes")){
                CampoEmail.classList.remove("yes")
            }

            CampoEmail.classList.add("no")
            CampoEmail.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Ingresa tu Email`

            e.preventDefault()
        }

        if(inputPass.value.length > 7){

            if(CampoPass.classList.contains("waiting")){
                CampoPass.classList.remove("waiting")
            }

            if(CampoPass.classList.contains("no")){
                CampoPass.classList.remove("no")
            }

            CampoPass.classList.add("yes")
            CampoPass.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Listo para verificar`

        } else if(inputPass.value.length > 0){

            if(CampoPass.classList.contains("yes")){
                CampoPass.classList.remove("yes")
            }

            if(CampoPass.classList.contains("no")){
                CampoPass.classList.remove("no")
            }
            
            CampoPass.classList.add("waiting")
            CampoPass.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Clave invalida`

            e.preventDefault()

        } else {
            
            if(CampoPass.classList.contains("waiting")){
                CampoPass.classList.remove("waiting")
            }

            if(CampoPass.classList.contains("yes")){
                CampoPass.classList.remove("yes")
            }

            CampoPass.classList.add("no")
            CampoPass.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i> Ingresa la Clave`

            e.preventDefault()
        }
        
        if(inputCheck.checked){
            CampoCheck.classList.add("yes")

        } else if(!inputCheck.checked){

            if(CampoCheck.classList.contains("yes")){
                CampoCheck.classList.remove("yes")
            }
        }
    })
    
  
  })