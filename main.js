function obtenerId(id){
    const ids = document.getElementById(`${id}`)
    return ids
}

const formulario = obtenerId("formulary")
const contenedorPokemon = obtenerId("pokemon-container")
const eliminar = obtenerId("eliminar-pokemon")

formulario.addEventListener("submit", (event) =>{
    event.preventDefault()
    const nombrePokemon = obtenerId("poke-name").value
    const imagenPokemon = obtenerId("poke-img").value

    const divPokemon = document.createElement("div")
    divPokemon.classList.add("bg-white", "pokemon-information", "brd-radius", "cl-white")

    divPokemon.innerHTML= 
    `
    <div class="pokemon-card">
        <button class="button-delete" id="eliminar-pokemon">❌</button>
        <img src="${imagenPokemon}" alt="${nombrePokemon}" onerror="this.src='https://placehold.co/600x400?text=Not+found'" class="pokemon-image">
        <h3>${nombrePokemon}</h3>
    </div>
    `
    const btnEliminar = divPokemon.querySelector(".button-delete")
    btnEliminar.addEventListener("click", () => {
        divPokemon.remove()
    })
    contenedorPokemon.appendChild(divPokemon)
    
    formulario.reset()
    
})



