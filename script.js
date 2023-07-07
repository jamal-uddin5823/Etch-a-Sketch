const container = document.querySelector("#container");
let brushColor = 'black';
let pixelNum = 16

function getSize() {
    pixelNum = parseInt(document.querySelector('input[type=text]').value)||16;
    getCanvas(pixelNum);

    const pixels = container.getElementsByClassName('pixel');
    for(let pixel of pixels){
        pixel.addEventListener('mouseover',()=> {
            pixel.style.backgroundColor = brushColor;
        });
    }
}

function getColor() {
    const color = document.querySelector('input[type=color]');
    brushColor = color.value;

}


function getaRow(size) {
    let row = document.createElement('div');
    row.className = "row";
    for(let i=0;i<size;i++) {
        let pixel = document.createElement('div');
        pixel.className = "pixel";
        pixel.id = i;
        
        row.appendChild(pixel);
    }
    return row;
}

function getCanvas(size) {
    container.innerHTML='';
    for(let i=0;i<size;i++) {
        const row = getaRow(size);
        row.id = i;
        container.appendChild(row);
        
    }
}
