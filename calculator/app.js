let expression = "";
let buttons = document.querySelectorAll('button');
let input = document.querySelector('input');

// Array.form() makes duplicate array or iterable 
// object 
// .forEach() calls functions for each elements of the array

Array.from(buttons).forEach(function(button){
    button.addEventListener('click',function(e){
        console.log(this.innerHTML);
        let opr=this.innerHTML;
        switch(opr){
            case 'AC':
                expression="";
                break;

            case '+/-':
                if(parseFloat(expression)<0){
                    if(expression[0]=='-' ){
                        expression=expression.slice(1);
                    }
                }

                else {
                    expression=('-').concat(expression);
                }

                break;

            case '=':
                expression=eval(expression);
                break;
                
            case 'C':
                expression=expression.slice(0,-1);
                break;

            case 'x':
                if(flag==false){
                    expression=expression.concat('*');
                    flag=true;
                }
                break;
                
            
            case '+':
            case '-':
            case '/':
            case '.':
            case '%':
            case 'x':
                if(flag==false){
                    expression=expression.concat(opr);
                    flag=true;
                }
                break;

            default:
                expression=expression.concat(opr);
                flag=false;
                break;
        }
        expression=expression.toString();
        input.value=expression;

    });
});