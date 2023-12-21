// Variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear(); //lista los años
const min = max -10;


// Eventos
document.addEventListener('DOMContentLoaded', () => {
  mostrarAutos(); //Muestra los autos al cargar

  //Llena las opciones de años
  llenarSelect();
})


// Funciones
function mostrarAutos() {

  autos.forEach(auto => {

    const { marca, modelo, year, puertas, transmision, precio, color } = auto;
    const autoHTML = document.createElement('p');
    autoHTML.textContent = `
    ${marca} ${modelo} - ${year} - ${puertas} Puertas - Trasmisión: ${transmision} - Precio: ${precio} - Color: ${color}

    `
  
    // Insertar html
    resultado.appendChild(autoHTML)
  });
}

// Genera los años del select
function llenarSelect() {
  for (let i = max; i >= min; i--) {
    const opcion = document.createElement('option');
    opcion.value = i;
    opcion.textContent = i;

    year.appendChild(opcion); //Agregar las opciones de año al select.
    
  }
}