

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
    
    let slide = document.createElement('div');
    
    const img = document.createElement('img');
    
    // AGGIUNGO UNA CLASSE  
    
    slide.classList.add('slide');
    
    slide.id = `helo-${[i]}`; 
    
    if(i != 0){
    
        slide.classList.add('d-none');
    
    }

    // FACCIO GLI APPEND

    img.src = listImg[i];

    slide.appendChild(img);

    document.getElementById('container').appendChild(slide);

    // EVENTO COL CLICK AVANTI
    
    let counter = 0;
    
    let nextButton = document.getElementById('avanti');
    
    nextButton.addEventListener('click',
    
        function(){
            
            let currentCounter = 'helo-' + counter;

            let items = document.getElementById(currentCounter);

            console.log('items',items,typeof items);

            slide.classList.add('d-none');
    
            counter++

            console.log('counter', counter , typeof counter);

            let nextCounter = 'helo-' + counter;

            console.log('items+1',nextCounter, typeof nextCounter);

            items = document.getElementById(nextCounter);

            slide.classList.remove('d-none');
            
        }
    
    )
};


// EVENTO COL CLICK INDIETRO

let backButton = document.getElementById('indietro');