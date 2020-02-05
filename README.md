# Invitación Boda

Aplicación de invitación boda.

El objetivo es desarrollar una aplicación para controlar las invitaciones a una boda, que tendrá un aspecto final como el de la imagen

![AppBoda](images/appBoda.png)

Puedes moficiar el contexto a otro que quieras, un partido de futbol, una lan party para jugar partidas en red con amigos, etc. 
pero la funcionad pedida será la misma y debes respetar los nombres de las clases css

La estructura básica html y css ya está creada, pero eres libre para modificarla si así lo deseas.

Completa todas las historias utilizando DOM

1) Cómo Administrador del evento, querría añadir nombres a la lista de invitados para saber quien asistirá. => Tania. Se ha creado una función que añade todos los elementos cada vez que se se introduce un nombre en el campo input.

2) Cómo Administrador del evento, querría poder confirmar invitados al evento para saber quien finalmente irá => Tania. Mediante un evento se controla cada vez que cambia el checkbox de confirmación asociado al elemento padre.

3) Cómo Administrador del evento poder editar el nombre de cada asistente al evento para corregir errores => Tania. Se ha creado un evento que permite editar un elemento controlandolo desde el elemento padre. Se cambia el elemento SPAN por un INPUT para poder editarlo y después se vuelve a crear un SPAN con el valor del INPUT.

4) Cómo Administrador del evento querría poder filtrar los invitados para mostrar solo los que tienen confirmada la asistencia para visualizarlo mejor => Javier. Se ha creado un evento que recorre con un array todos los elementos que no tienen el check de respondido para poder controlarlos y filtrarlos mediante otro checkbox.

5) Cómo Administrador del evento, querría poder eliminar invitados al evento que se hayan dado de baja => Javier. Se ha creado un evento que controla el borrado de campos. Para controlar que sea el campo correcto se controla que el botón y su contenido coinncidan con el elemento padre.

6) Cómo Administrador del evento me confirme antes de borrar un invitado al evento para evitar cometer un error => Javier. Se ha creado una confirmación para el evento anterior.

7) Cómo Administrador del evento querría que no se pudiera repetir el nombre de un invitado al evento ni añadir nombres vacios para evitar errores => Tania. Se ha creado una función que se ejecuta al añadir o al editar que recorre un array que contiene todos los nombres y los comprueba para evitar repeticiones o nombres vacíos.

