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
    inviteurSpan = document.createElement("span");
    inviteurLi.appendChild(inviteurSpan);
    nombre = document.createTextNode(document.getElementById("invitado").value);
    inviteurSpan.appendChild(nombre);
    document.getElementById("invitedList").appendChild(inviteurLi);
    inviteurLabel =document.createElement("label");
    nombreLabel=document.createTextNode("Confirmed");
    inviteurLabel.appendChild(nombreLabel);
    check=document.createElement("INPUT");
    check.setAttribute("type","checkbox");
    check.setAttribute("id","confirmation");
    inviteurLabel.appendChild(check);

    inviteurLi.appendChild(inviteurLabel);

    event.preventDefault();
}

