// want to generate project section with a card, title, description,
// and technology tags
// the card has onhover animations and listeners that swap
// the img src

function hoverswap(querySelectors){
    const elements = document.querySelectorAll(querySelectors)
    elements.forEach(element => {
        const id = element.item.id
        if(id === "card-3"){
            loadStatic(element, "gameplay_static")
            loadAnimated(element, "gameplay_animation")
        }
    });
}

function loadStatic(element, src){
    element.addEventListener("mouseout", ()=> {
        element.src=src
    })
}

function loadAnimated(element, src){
    element.addEventListener("mouseover", ()=> {
        element.src=src
    })
}