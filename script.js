container = document.querySelector(".container");
button = document.querySelector(".button");

function createDivs(number = 16) {
    for(let i = 0; i<number; i++) {
        for(let j = 0; j<number; j++) {
            const divGrid = document.createElement("div");
            divGrid.classList.toggle("cells");
            divGrid.style.width = (100/number)+"%";
            container.appendChild(divGrid);
        }
    }    
}

function deleteDivs() {
    while(container.firstChild) {
        container.removeChild(container.lastChild)
    }
}

document.addEventListener("onload", createDivs());
container.addEventListener("mouseover", (e) => {
    if(e.target.classList != "container"){
        e.target.classList.toggle("black");
    }
})
button.addEventListener("click", () => {
    let input = 101
    while(input > 100) {
        input = prompt("Sidelength (max 100):");
    }
    deleteDivs()
    createDivs(input)
})
