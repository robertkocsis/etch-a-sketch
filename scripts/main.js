
function containerBuilder(){
    let body = document.getElementsByTagName("BODY")[0];

    let container = document.createElement("div");
    container.id = "container";

    body.appendChild(container);

}

function gridBuilder(size) {
    let container = document.getElementById("container");

    if(container === null) {
        containerBuilder();
        container = document.getElementById("container");
    }


    for(let i = 0; i < size; i++){

        for(let j = 0; j < size; j++){

            let square = document.createElement("div");
            square.classList.add("square");

            container.appendChild(square);

        }
    }

}

function gridDestroyer(){
    let container = document.getElementById("container");

    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

}

function main() {
    containerBuilder();
    gridBuilder(16);
}

window.onload = main();

