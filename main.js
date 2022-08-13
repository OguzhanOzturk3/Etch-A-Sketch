const container = document.querySelector('.container');
const buttonsContainer = document.querySelector('.buttons');

const btnGray = document.createElement('button');
const btnBlack = document.createElement('button');
const btnRgb = document.createElement('button');
const btnReset = document.createElement('button');
const btnSize = document.createElement('button');
const btInput = document.createElement('input');
 
function grid(size){


    for(let i=0; i<size*size;i++){


    const div = document.createElement('div');
    
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    div.style.border ="1px solid red";
    container.appendChild(div).classList.add('box');

        }

}

grid(16);

function grayColor(){

    const boxs = document.querySelectorAll('.box');

    btnGray.textContent = 'Gray';
    btnGray.addEventListener('click',()=>{

        boxs.forEach(box=>box.addEventListener('mouseover',()=>{

            let RNum = Math.floor(Math.random()*255);
            box.style.background= `rgb(${RNum},${RNum},${RNum})`;
        }));


        
    });

    buttonsContainer.appendChild(btnGray).classList.add('btn');
    
}

grayColor()

function blackColor(){

    const boxs = document.querySelectorAll('.box');

    btnBlack.textContent = 'Black';
    btnBlack.addEventListener('click',()=>{

        boxs.forEach(box=>box.addEventListener('mouseover',()=>{

            
            box.style.background= "black";
        }));


        
    });

    buttonsContainer.appendChild(btnBlack).classList.add('btn');
    
}


blackColor();

function rgbColor(){

    const boxs = document.querySelectorAll('.box');

    btnRgb.textContent = 'RGB';
    btnRgb.addEventListener('click',()=>{

        boxs.forEach(box=>box.addEventListener('mouseover',()=>{

            let RNum1 = Math.floor(Math.random()*255);
            let RNum2 = Math.floor(Math.random()*255);
            let RNum3 = Math.floor(Math.random()*255);
            box.style.background= `rgb(${RNum1},${RNum2},${RNum3})`;
        }));


        
    });

    buttonsContainer.appendChild(btnRgb).classList.add('btn');
    
}

rgbColor();


function reset(){

    const boxs = document.querySelectorAll('.box');

    btnReset.textContent = 'Reset';
    btnReset.addEventListener('click',()=>{

        boxs.forEach(box=>{box.style.background= "white";});


        
    });

    buttonsContainer.appendChild(btnReset).classList.add('btn');
    
}

reset();


function changeSize(input){


    btnSize.textContent = 'Size';
    
    btInput.placeholder="Size of Boxes";

    btnSize.addEventListener('click',()=>{

        if(btInput.value>=2 && btInput.value<=100){
        const boxs = document.querySelectorAll('.box');

        boxs.forEach(box=> container.removeChild(box));
        
       
        grid(btInput.value);
        grayColor();
        blackColor();
        rgbColor();
        reset();
        changeSize();
        

    }
    
        
    });
   
    buttonsContainer.appendChild(btnSize).classList.add('btn');
    buttonsContainer.appendChild(btInput).classList.add('btn');
    
}

changeSize();
