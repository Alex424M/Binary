const button = document.querySelector('.form__input__btn');
const inputs = document.querySelectorAll('.form__input');

button.addEventListener('click', function(){
    try{
        for(let i=0; i<inputs.length;i++){
            if(inputs[i].value==''){
                throw "Ошибка" 
            }
        }
    }
    catch(e){
        console.error(e);
    }  
});