/*
* File: app.js
* Author: Kovács F. Richárd
* Copyright: 2024, Kovács F. Richárd
* Group: Szoft I-2-N
* Date: 2024-04-03
* Github: https://github.com/
* Licenc: GNU GPL
*/
const sideInput = document.querySelector('#side')
const volumeInput = document.querySelector('#volume')
const calcButton = document.querySelector('#calcButton')

calcButton.addEventListener('click', () => {
    
    startCalc()
});

function startCalc(){
    const side = Number(sideInput.Value)
    const volume = calcVolume(side)
    volumeInput.value = volume
}

function calcVolume(side) {
    return (4 * Math.pow(side , 2)) * (cos(M_PI/16)/sin(M_PI/16))
}