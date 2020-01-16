/* 
    1. querría añadir nombres a la lista de invitados para saber quien asistirá.
    2. querría poder confirmar invitados al evento para saber quien finalmente irá
    3. poder editar el nombre de cada asistente al evento para corregir errores
    4. querría poder filtrar los invitados para mostrar solo los que tienen confirmada la asistencia para visualizarlo mejor
    5. querría poder eliminar invitados al evento que se hayan dado de baja
    6. me confirme antes de borrar un invitado al evento para evitar cometer un error
    7. querría que no se pudiera repetir el nombre de un invitado al evento ni añadir nombres vacios para evitar errores
*/

/* Hay que crear cada elemento uno por uno (el 'li', el 'span', etc...) */

function borrarNombre(num) {
    var elementoLista = document.getElementById("nombre"+num+"");
    var elementoBoton = document.getElementbyId("boton-borrar"+num+"");
    elementoBoton.addEventListener("click", function () {
        var confirma = confirm("¿Seguro que quieres borrar este nombre?");
        if (confirma) {
            document.removeChild(elementoLista);
        }
    });
}

borrarNombre("1");