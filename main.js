const body = document.querySelector("body");
body.classList = "d-flex flex-column bg-black w-100 align-items-center justify-content-center";
body.style.minHeight = '100vh';


const pickRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)]

const generateRandomHexColor = () => {
    const hexValues = "ABCDEF0123456789";
    let newColor = '#';
    for (let i = 0; i < 6; i++) {
        newColor = newColor + pickRandomElement(hexValues);
    }
    return newColor;
}

const generateDivColor = () => {

    const divElement = document.createElement("div");
    divElement.style.width = '150px';
    divElement.style.height = '50px';
    const colorRandom = generateRandomHexColor();
    divElement.style.backgroundColor = colorRandom;
    divElement.innerText = colorRandom;
    divElement.style.textAlign = 'center';
    divElement.style.alignContent = 'center';
    divElement.style.fontSize = 'bold';
    divElement.style.color = 'white';
    body.appendChild(divElement);
    return divElement;
}

for (let i = 0; i < 10; i++) {
    generateDivColor()
}

const removeColorFromBody = () => {

    const colorsElements = []
    body.childNodes.forEach(element => {

        if (element.localName == 'div') {
            colorsElements.push(element);
        }
    });

    const colorAEleminar = pickRandomElement(colorsElements);
    colorAEleminar.remove();
}

body.addEventListener('click', (event) => {

    const ancho = body.offsetWidth; // element.offsetHeight
    if (event.offsetX > ancho / 2) {
        return removeColorFromBody()
    }
    generateDivColor();
});

