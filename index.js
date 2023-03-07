var button = document.querySelector('button');
var box = document.getElementById('box');
var buttonArr = document.querySelectorAll('button');

var hasOperation;
var operationVal = "";
var x = "";
var y ="";

button.onclick = function ChangeMe(){
    console.log('clicked');
    box.style.backgroundColor = 'green';
}
buttonArr.forEach(btn => {
    var val = btn.innerHTML;
    btn.onclick = function Change(){
        
        if(!hasOperation && val !== "=")
        {
            x += val.toString();
            console.log(x);
            btn.style.backgroundColor = "yellow";

        }else if(hasOperation && val !== "=")
        {
            y += val.toString();
            console.log(y);
            btn.style.backgroundColor = "red";

        }else if(val === "+"||val === "-"||val === "*"||val === "/")
        {
            hasOperation = true;
            operationVal = val;
        }else if(hasOperation && val =="=")
        {
            switch(operationVal)
            {
                case "+":
                    x+=y;
                    break;
                case "-":
                    x-=y;
                    break;
                case "*":
                    x*=y;
                    break;
                case "/":
                    x/=y;
                    break;

            }
            console.log(x);
        }
    }
    
});







// ANOTHER WAY OF DOING THIS USING FOR LOOP
// for(let i =0;i<buttonArr.length;i++)
// {
//     buttonArr[i].onclick = function Calc(){
//     console.log(buttonArr[i].innerHTML);
// }
// }