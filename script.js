let display = document.getElementById('display');
let buttons = Array.from (document.getElementsByClassName('buttons'));
buttons.map(button => {
    button.addEventListener('click',(e)=>{
        switch(e.target.innerText){
            case 'clear':{
                display.innerText = '';
                break;
            }
            case '=':{
                    try{
                        display.innerText = eval(display.innerText);
                    }
                    catch{
                        display.innerText = 'Syntax Error' ;
                        setTimeout(function(){
                            display.innerText = '' ;
                        },4000)
                    }
                    break;
            }
            case 'del':{
                display.innerText = display.innerText.slice(0,- 1);
                break;
            }
            default:{
                display.innerText += e.target.innerText;
            }
        }
    })
})