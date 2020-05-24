function calcular(type, value) {
    
    if(type === 'action'){
        if(value === 'c'){
            //clear
            document.querySelector('#result').value = '';
        }
        if(value === '+'|| value === '-' || value === '/' || value === '*' || value === '.'){
            document.querySelector('#result').value +=value;
        }
        if(value === '='){

         var value_camp = eval(document.querySelector("#result").value);
            document.querySelector('#result').value = value_camp;
            
        }
    }else if(type === 'value'){
        document.querySelector('#result').value += value;
    }
}