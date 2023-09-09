// Import stylesheets
import './style.css';

//Variables globales
let lista = [19, 37, 29, 18, 19, 34, 24, 16, 17, 37];
let listaUnicos = [];

// Write Javascript code!

/**
 * Filtra el array para obtener elementos unicos
 * @returns {void}
 */
function filter() {
  //Recorre el array
  for(let i = 0; i < lista.length; i++) {
    const num = lista[i];

    //Valida que el array de unicos no contenga numeros duplicados
    if(!listaUnicos.includes(num)) {
      listaUnicos.push(num);
    }
  }
}

/**
 * Función para mostrar etiqueta de montos
 * @return {void}
 */
 function setAlert() {
  let alert = document.getElementById('alert');
  alert.removeAttribute('hidden');
  alert.innerHTML = `
  <div class="text-break">
    <p>Lista original: ${lista.toString()}</p>
    <p>lista de numeros unicos: ${listaUnicos.toString()}</p>
  </div>
  `;
}



function onInit() {
  filter();
  setAlert();
}

onInit();