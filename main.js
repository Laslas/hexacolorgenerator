const headerDiv = document.querySelector('.main');
const hexa = document.querySelector('#colsDiv');
const generateColors = () => {

    let str = '0123456789ABCDEF';

    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length);

        hexColor += str[index];
        
    }

    return `${hexColor}`;
}



setInterval(function () {

            
    let newCol = generateColors(); 

    headerDiv.style.background =  newCol;
    console.log(newCol)





}, 6000); 

const clearDivs = () => {
    const dems = document.querySelectorAll('.dem')

    dems.forEach((div) => {
        hexa.removeChild(div);
    });
}



function mainFunc (n) {

    for (let i = 0; i < n; i++) {
        const colors = document.createElement('h1');
        const div = document.createElement('div');
        const btn = document.createElement('button');
        const copyColor = document.createElement('textarea');
        const generBtn = document.querySelector('#gener');
        let stopBtn = document.querySelector('#stop');
        
        
        

        generBtn.addEventListener('click', function () {
            hexa.appendChild(div);
            hexa.removeChild(div);
        })

        colors.setAttribute('class', 'dis')
        btn.setAttribute('class', 'btn-copy');

        btn.textContent = 'copy';
        btn.style.color = 'black';
        btn.style.padding = '5px'
        btn.style.height = ('40%') 
        btn.style.width = ('6%')
        btn.style.borderRadius = '6px'

        let bgColor = generateColors(); 
        

       

        

        div.appendChild(btn)
        div.appendChild(colors);    
        hexa.appendChild(div);
        div.style.background = colors.textContent =  bgColor;

        let generColors = setInterval(function () {            
        
            let bgColor = generateColors(); 
        

            div.style.background = colors.textContent =  bgColor;



        
        
        }, 4000); 

        copyColor.textContent = bgColor;

        btn.addEventListener('click', function () {

              document.body.appendChild(copyColor);
              copyColor.select();
              document.execCommand('copy');

              document.body.removeChild(copyColor);

        })


        stopBtn.addEventListener('click', function () {
            clearInterval(generColors);

        });




        div.addEventListener('mouseover', function () {

            clearInterval(generColors);
        });

        div.addEventListener('mouseout', function (){

           clearDivs();
           mainFunc(n);



        });


        

        colors.style.fontSize = '24px'
        colors.style.padding = '40px'
        colors.style.color = 'white';
        div.setAttribute('class', 'dem');
        div.setAttribute('id', 'dem-' +i);
        div.style.border = '1px solid transparent';   
        div.style.height = '80px';
        copyColor.style.color = 'transparent';
        copyColor.style.display = 'hidden';


    



    }

}   
mainFunc(5);

   

const generBtn = document.querySelector('#gener');
const colorInput = document.querySelector('#input');

let stopBtn = document.querySelector('#stop');

let colorAmt = colorInput.value;



    
generBtn.addEventListener('click', function () {
    
    let colorAmt = colorInput.value; 


    if (colorAmt > 5 ){
        for (let i = 0; i < colorAmt; i++) {
        
            const colors = document.createElement('h1');
            const div = document.createElement('div');
            const btn = document.createElement('button');
            const copyColor = document.createElement('textarea');
            let bgColor = generateColors(); 

            div.appendChild(btn)
            div.appendChild(colors);    
            hexa.appendChild(div); 
            div.style.background = colors.textContent =  bgColor;


            let generColors = setInterval(function () {
                let bgColor = generateColors(); 

                div.style.background = colors.textContent =  bgColor;            
            }, 2000); 


            copyColor.textContent = bgColor;
            btn.addEventListener('click', function () {
                document.body.appendChild(copyColor);
                copyColor.select();
                document.execCommand('copy');
                document.body.removeChild(copyColor);

            });

            stopBtn.addEventListener('click', function () {
                clearInterval(generColors);
            });

            div.addEventListener('mouseover', function () {
            
                clearInterval(generColors);
            });

            div.addEventListener('mouseout', function (){
                clearDivs(colorAmt);
                mainFunc(colorAmt);

            });
        
            generBtn.addEventListener('click', function () {
                hexa.appendChild(div);
                hexa.removeChild(div);
            })
            colors.setAttribute('class', 'dis')
            btn.setAttribute('class', 'btn-copy');
            btn.textContent = 'copy';
            btn.style.color = 'black';
            btn.style.padding = '5px'
            btn.style.height = ('40%') 
            btn.style.width = ('6%')
            btn.style.borderRadius = '6px'
            colors.style.fontSize = '24px'
            colors.style.padding = '40px'
            div.setAttribute('class', 'dem');
            div.setAttribute('id', 'dem-' +i);
            div.style.border = '1px solid transparent';
            div.style.height = '80px';


            const para = document.querySelector('#hint');
            para.textContent = '';
        }

    } else {
        const para = document.querySelector('#hint');
        para.textContent = 'Give a number greater than 5!!';

    } 

})
    
