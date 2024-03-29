import ShowBox from "./show-box";
import { SendEmail } from "./send-msj";

export default function FormValidation(btnForm, input) {
    const inputForm = document.querySelector(input);
    const messageBtn= document.querySelector(btnForm);
    document.addEventListener("click", (e) => {
      if (e.target.matches(messageBtn)) {
        const camposRequeridos = inputForm.querySelectorAll("[required]"),
          email = inputForm.email;
  
        let formularioValido = true;
  
        for (const campo of camposRequeridos) {
          if (!campo.value) {
            formularioValido = false;
            break;
          }
        }
  
        // Enviar el formulario si es válido
        if (formularioValido) {
          e.preventDefault();
          if (
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
              email
            )
          ) {
            SendEmail();
          } else {
            const textInfo=document.querySelector(".modalbox_info");
            textInfo.innerHTML="Email incorrecto";
            document.querySelectorAll("[data-box]").classList.add(".modalbox")
            document.querySelectorAll("[data-box]").classList.add(".modalbox_container")
          }
        } else {
          ShowBox(".modalbox_info", "Por favor, completa todos los campos obligatorios.",".modalbox_btn");
        }
      }
    });
  }