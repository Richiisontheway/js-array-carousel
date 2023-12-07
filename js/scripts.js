

// CREO UN ARRAY

const listImg = [

    './consegna/img/01.webp',
    './consegna/img/02.webp',
    './consegna/img/03.webp',
    './consegna/img/04.webp',
    './consegna/img/05.webp'

];

console.log('immagini',listImg,typeof listImg);

//CICLO FOR PER FAR CICLARE LE IMMAGINI

for (let i = 0; i < listImg.length; i++) {

    //CREO GLI ELEMENTI PRINCIPALI

    const slide = document.createElement('div');

    const img = document.createElement('img');

    // AGGIUNGO UNA CLASSE

    slide.classList.add('slide');

    if(i != 0){

        slide.classList.add('d-none');

    }


    // FACCIO GLI APPEND

    img.src = listImg[i];

    slide.appendChild(img);

    document.getElementById('container').appendChild(slide);

};

// EVENTO COL CLICK INDIETRO

let backed = document.getElementById('indietro');

backed.addEventListener('click',

    function () {
        




    }




)


// EVENTO COL CLICK AVANTI

let forewared = document.getElementById('avanti');

forewared.addEventListener('click',

    function () {
        
        if (posizioneClick < listImg.length -1){

            ++posizioneClick;

        } else {

            posizioneClick = 0;

        }

        

    }




)