const pokemonsContainer = document.querySelector("#pokemons-container");

function fetchPokeon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => createpokemon(data))
}


function createpokemon(pokemon){
    //primero se crea la tarjeta del pokemon 
    const tarjeta = document.createElement("div");
    //se añade clases para darle estilos
    tarjeta.classList.add("tarjeta");


    //se crea el contenedor de la imagen que tiene la tarjeta
    const contenedorImagen = document.createElement("div");
     //se añade clases para darle estilos
    contenedorImagen.classList.add("contenedorImagen");


    //creas la imagen
    const imagen = document.createElement("img");
    //se le da el atributo src de sprite frontal por defecto
    imagen.src = pokemon.sprites.front_default;
    //se añade la imagen dentro de su respectivo contenedor
    contenedorImagen.appendChild(imagen);


    //se crea el elento del numero del pokemon 
    const numero = document.createElement("p");
    numero.classList.add("numero");
    numero.textContent = `#${pokemon.id}`
    //crea el elemento del nombre del pokemon 
    const nombre = document.createElement("p");
    nombre.classList.add("nombre")
    nombre.textContent = pokemon.name

    tarjeta.appendChild(nombre);
    tarjeta.appendChild(contenedorImagen);
    tarjeta.appendChild(numero);

    


    pokemonsContainer.appendChild(tarjeta)

    console.log(pokemon)
}

let num = parseInt(prompt("ingrese cant pokemon"))

for( i=1 ; i <= num ; i++){
    fetchPokeon(i)
}