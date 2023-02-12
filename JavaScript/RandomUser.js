//variables
const boton = document.querySelector("#boton");
const foto =document.querySelector("#foto");
const nombre =document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const telefono = document.querySelector("#telefono")
const correo = document.querySelector("#correo");
const direccion = document.querySelector("#direccion")
const ciudad = document.querySelector("#ciudad")


//Funciones
const Persona = async() => {
    try{
        const url ='https://randomuser.me/api/'
        const respuesta = await fetch(url);
        const { results } = await respuesta.json();
        const datos =results[0];
        console.log(datos);
        //Insertamos los datos de las personas
        foto.src = datos.picture.large;
        nombre.textContent = datos.name.first;
        apellido.textContent = datos.name.last;
        telefono.textContent = datos.cell;
        correo.textContent = datos.email;
        direccion.textContent = datos.location.street.name + ' '+datos.location.street.number+'.';
        ciudad.textContent=datos.location.city + ' ,' + datos.location.state;
    } catch(error){
        console.log(error);}
}

boton.addEventListener('click', Persona);
document.addEventListener('DOMContentLoaded',Persona);
