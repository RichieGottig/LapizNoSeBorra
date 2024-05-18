
const formRegister = document.querySelector("#formRegister");

const validarFormulario = (event) => {

        event.preventDefault();

    const firstname = document.querySelector("#firstname");
    const lastname = document.querySelector("#lastname");
    const email = document.querySelector("#email");
    const birthday = document.querySelector("#birthday");
    const know = document.querySelector("#know");
    let validation = true;

    if(firstname.value.trim() ===""){
        firstname.classList.add("error");
        document.querySelector("#error-firstname").textContent ="Debe completar el campo Nombre";
        validation = false;
    }
    if(lastname.value.trim()===""){
        document.querySelector("#error-lastname").textContent="Debe completar el campo apellido";
        lastname.classList.add("error");
        validation= false;
    }
    if(email.value.trim()===""){
        document.querySelector("#error-email").textContent='Debe completar el campo Email';
        email.classList.add('error')
        validation=false;
    }
    if(birthday.value.trim()===""){
        document.querySelector("#error-birthday").textContent='Debe completar el campo Fecha de nacimiento';
        birthday.classList.add('error');
        validation=false;
    }
    if(know.value.trim()===""){
        document.querySelector("#error-know").textContent='Debe seleccionar una opción de como nos conociste';
        know.classList.add('error');
        validation=false;
    }

    if(validation){
        formRegister.submit()
    } else{
        return false;
    }

}

formRegister.addEventListener("submit",validarFormulario)
