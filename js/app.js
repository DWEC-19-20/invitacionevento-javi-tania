/* 
    1. querría añadir nombres a la lista de invitados para saber quien asistirá.
    2. querría poder confirmar invitados al evento para saber quien finalmente irá
    3. poder editar el nombre de cada asistente al evento para corregir errores
    4. querría poder filtrar los invitados para mostrar solo los que tienen confirmada la asistencia para visualizarlo mejor
    5. querría poder eliminar invitados al evento que se hayan dado de baja
    6. me confirme antes de borrar un invitado al evento para evitar cometer un error
    7. querría que no se pudiera repetir el nombre de un invitado al evento ni añadir nombres vacios para evitar errores
*/
const enviar = document.getElementById("submit");
enviar.addEventListener("click", añadirInvitado);



function añadirInvitado(event) {

    inviteurLi = document.createElement("LI");
    inviteurLi.className = "notresponded";
    inviteurSpan = document.createElement("span");
    $nombre = document.getElementById("invitado").value;
    if (repes($nombre))
        var nombre = document.createTextNode($nombre);
    else {
        alert("No metas un nombre vacío o repetido");
        event.preventDefault();
    }

    document.getElementById("invitado").value = "";
    inviteurSpan.appendChild(nombre);
    document.getElementById("invitedList").appendChild(inviteurLi);
    inviteurLabel = document.createElement("label");
    nombreLabel = document.createTextNode("Confirmed");
    inviteurLabel.appendChild(nombreLabel);
    check = document.createElement("INPUT");
    check.setAttribute("type", "checkbox");
    check.setAttribute("id", "confirmation");
    inviteurLabel.appendChild(check);
    inviteurButt = document.createElement("button");
    inviteurButt2 = document.createElement("button");
    inviteurButt.textContent = "Edit";
    inviteurButt2.textContent = "Remove";

    inviteurLi.appendChild(inviteurSpan);
    inviteurLi.appendChild(inviteurLabel);
    inviteurLi.appendChild(inviteurButt);
    inviteurLi.appendChild(inviteurButt2);


    event.preventDefault();
}

/* Función para no poder introducir un nombre en blanco ni un repetido */



function repes($nombre) {

    const nombrecitos = document.querySelectorAll("#invitedList span");
    for (let i = 0; i < nombrecitos.length; i++) {
        if ($nombre == nombrecitos[i].textContent || ($nombre === ""))
            return false;
    } return true;
}


const listUl = document.querySelector("ul.invitedList");


/* Evento borrar */


listUl.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON' && event.target.textContent == "Remove") {
        let li = event.target.parentNode;
        let ul = li.parentNode;
        let confirmacion = confirm("¿Estás seguro que quieres borrar a esta persona?");
        if (confirmacion) {
            ul.removeChild(li);
        }
    }
});

/* Evento Editar */


listUl.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON' && event.target.textContent == "Edit") {
        let li = event.target.parentNode;
        let span = li.firstChild;
        span.textContent = "";
        span = document.createElement("INPUT");
        span.setAttribute("type", "text");
        span.setAttribute("placeholder", "Enter para guardar");
        li.prepend(span);
        event.target.textContent = "Save";

        var boton = listUl.querySelectorAll("BUTTON");

        span.addEventListener("keyup", function (event) {
            if (event.keyCode === 13) {
                let nombre = li.firstChild.value;
                if (repes(nombre)) {
                    span = document.createElement("SPAN"); 
                    for (let i = 0; i < boton.length; i++) {
                        if (boton[i].textContent == "Save") {
                            boton[i].textContent = "Edit";
                        }
                    }
                }
                else {
                    alert("No metas un nombre vacío o repetido");
                    event.preventDefault();
                }

                span.textContent = nombre;
                li.prepend(span);
                li.removeChild(span.nextSibling);

                document.querySelector('ul').className = "invitedList";
            }
        });
    }
});


/* Evento Confirmación */



const checkie = document.querySelector("#confirmation");

listUl.addEventListener('change', confirmarInvitado);


function confirmarInvitado(event) {
    if (event.target.tagName == 'INPUT') {
        let li = event.target.parentNode;
        let ul = li.parentNode;

        if (event.target.checked) {
            ul.setAttribute("class", "responded");
        }
        else {
            ul.setAttribute("class", "notresponded");
        }
    }
}

/* Evento/Función filtrar */

const filtro = document.getElementById("filtrar");

filtro.addEventListener("change", () => {
    let noChecados = document.querySelectorAll(".notresponded");

    if (noChecados != null && event.target.checked) {
        for (let i = 0; i < noChecados.length; i++) {
            noChecados[i].style.display = "none";
        }
    } else {
        for (let i = 0; i < noChecados.length; i++) {
            noChecados[i].style.display = "inline";
        }
    }
});