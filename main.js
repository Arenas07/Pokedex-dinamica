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

    const imagen = divPokemon.querySelector("img")
    
    imagen.addEventListener("dblclick", () => {
        const input = document.createElement("input")
        input.type = "text"
        input.value = imagen.src 
        input.placeholder = "Nueva URL"
        input.classList.add("brd-radius")
        input.style.width = "100%"
        input.style.marginTop = "10px"

        const parentCard = imagen.parentElement

        parentCard.replaceChild(input, imagen)

        input.focus()

        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                const nuevaImg = document.createElement("img")
                nuevaImg.src = input.value
                nuevaImg.alt = nombrePokemon
                nuevaImg.className = "pokemon-image"
                nuevaImg.onerror = () => {
                    nuevaImg.src = 'https://placehold.co/600x400?text=Not+found'
                }

                nuevaImg.addEventListener("dblclick", () => {
                    parentCard.replaceChild(input, nuevaImg)
                    input.value = nuevaImg.src
                    input.focus()
                })

                parentCard.replaceChild(nuevaImg, input)
            }
        })


    })
    contenedorPokemon.appendChild(divPokemon)
    
    formulario.reset()
    
})

